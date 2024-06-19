import nodemailer from "nodemailer";

export async function sendEmail(mailInformations) {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE_PROVIDER,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_KEY,
    },
  });

  const mailOptions = {
    from: process.env.BREVO_USER,
    to: mailInformations.to,
    subject: mailInformations.subject,
    html: `
    <div>
    <h1>Hello ${mailInformations.userName}👋, Use this otp to verify your identity.</h1>
    <h2>OTP : ${mailInformations.otp}</h2>
    </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
