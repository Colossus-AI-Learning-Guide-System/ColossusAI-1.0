import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@/lib/models/user.model';
import { ResetPasswordRequest } from '@/lib/type/auth.types';
import { sendResetPin } from '@/lib/utils/email';
import clientPromise from '@/lib/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await clientPromise;
    const { email }: ResetPasswordRequest = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No account found with this email'
      });
    }

    // Generate 6-digit pin
    const pin = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Save pin with expiry
    user.resetPin = pin;
    user.resetPinExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
    await user.save();

    // Send email
    const emailSent = await sendResetPin(email, pin);
    if (!emailSent) {
      return res.status(500).json({
        success: false,
        message: 'Failed to send reset pin'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Reset pin sent to your email'
    });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}
