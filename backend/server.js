const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { log } = require("console");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Submit Feedback
app.post("/submit-feedback", async (req, res) => {
  const { name, email, description, captcha } = req.body;

  if (!captcha) {
    return res.status(400).json({ message: "Captcha verification failed!" });
  }

  // Verify hCaptcha
  try {
    const verifyResponse = await axios.post(
      "https://api.hcaptcha.com/siteverify",
      `response=${captcha}&secret=8cf896e2-1588-47ca-9d9c-ebcaa7c8814a`,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    if (!verifyResponse.data.success) {
      return res.status(400).json({ message: "Captcha verification failed!" });
    }
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: "Captcha verification error" });
  }

  // Save feedback
  const feedbackData = { name, email, description, submittedAt: new Date() };
  fs.appendFile("feedback.json", JSON.stringify(feedbackData, null, 2) + ",\n", (err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to save feedback" });
    }
    res.json({ message: "Feedback submitted successfully!" });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
