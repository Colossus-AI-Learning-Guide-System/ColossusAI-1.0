// import { NextApiRequest, NextApiResponse } from 'next';
// import { OAuth2Client } from 'google-auth-library';
// import jwt from 'jsonwebtoken';
// import { User } from '@/lib/models/user.model';
// import { AuthResponse } from '@/lib/type/auth.types';
// import { clientPromise } from '@/lib/mongodb';

// const client = new OAuth2Client(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   'postmessage'
// );

// async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<AuthResponse>
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ success: false, message: 'Method not allowed' });
//   }

//   try {
//     await clientPromise;
//     const { code } = req.body;

//     // Verify Google token
//     const { tokens } = await client.getToken(code);
//     const ticket = await client.verifyIdToken({
//       idToken: tokens.id_token!,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     if (!payload) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid Google token',
//       });
//     }

//     // Find or create user
//     let user = await User.findOne({ email: payload.email });
    
//     if (!user) {
//       // Create new user if doesn't exist
//       user = await User.create({
//         email: payload.email,
//         username: payload.name || payload.email?.split('@')[0],
//         googleId: payload.sub,
//         password: Math.random().toString(36).slice(-8), // Random password for Google users
//       });
//     } else if (!user.googleId) {
//       // Link Google ID to existing user
//       user.googleId = payload.sub;
//       await user.save();
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { userId: user._id },
//       process.env.JWT_SECRET || 'fallback-secret',
//       { expiresIn: '24h' }
//     );

//     res.status(200).json({
//       success: true,
//       message: 'Google login successful',
//       token,
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     console.error('Google auth error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Internal server error during Google authentication',
//     });
//   }
// }

// export default handler;
