import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "colossus.ai.lk@gmail.com",
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export const sendFeedbackEmail = async (feedbackData: any) => {
  const mailOptions = {
    from: feedbackData.email,
    to: "colossus.ai.lk@gmail.com",
    replyTo: feedbackData.email,
    subject: "New Feedback Submission",
    html: `
      <h2>New Feedback Received</h2>
      <p><strong>Name:</strong> ${feedbackData.name}</p>
      <p><strong>Email:</strong> ${feedbackData.email}</p>
      <p><strong>First Time Visit:</strong> ${feedbackData.isFirstTime}</p>
      <p><strong>User Friendly:</strong> ${feedbackData.isUserFriendly}</p>
      <p><strong>Reason:</strong> ${
        feedbackData.reason || "No reason provided"
      }</p>
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};