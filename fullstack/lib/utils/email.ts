import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export const sendResetPin = async (email: string, pin: string): Promise<boolean> => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Pin - Colossus.AI',
      html: `
        <h2>Password Reset Request</h2>
        <p>Your password reset pin is: <strong>${pin}</strong></p>
        <p>This pin will expire in 15 minutes.</p>
      `,
    });
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
};
