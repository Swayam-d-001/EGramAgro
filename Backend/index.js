const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// Health Check
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Signup Route
app.post("/api/signup", async (req, res) => {
  const { phoneNumber, password, confirmPassword, farmType } = req.body;

  try {
    // Validate inputs
    if (!phoneNumber || !password || !confirmPassword || !farmType) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match!" });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { phoneNumber },
    });
    if (existingUser) {
      return res.status(400).json({ error: "Phone number already registered!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to the database
    const newUser = await prisma.user.create({
      data: {
        phoneNumber,
        password: hashedPassword,
        farmType,
      },
    });

    res.status(201).json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "An error occurred while creating the user." });
  }
});

// Signin Route
app.post("/api/signin", async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    // Validate inputs
    if (!phoneNumber || !password) {
      return res.status(400).json({ error: "Phone number and password are required!" });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { phoneNumber },
    });
    if (!user) {
      return res.status(400).json({ error: "User does not exist!" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials!" });
    }

    res.status(200).json({ message: "Sign-in successful!", user });
  } catch (error) {
    console.error("Error during sign-in:", error);
    res.status(500).json({ error: "An error occurred during sign-in." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
