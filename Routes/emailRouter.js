import express from "express";
import transporter from "../utils/sendEmails.js";
import validation from "../utils/validation.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message, projectType, budgetRange } = req.body;

    // Validate
    const validate = validation(req.body);

    // Validation failed -> Send error to client
    if (!validate.isValid) {
      return res.status(401).json({
        sucess: false,
        error: "Please provide a valid credentials!",
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Portfolio Message from ${name}`,

      text: `
Name: ${name}
Email: ${email}

Project Type: ${projectType}

Budget Range: ${budgetRange}

Message:
${message}

      `,
    });

    res.status(200).json({
      sucess: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      sucess: false,
      error: error.message,
    });
  }
});

export default router;
