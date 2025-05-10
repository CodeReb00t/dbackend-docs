"use client"

import React, {useState} from 'react';
import {examples} from "@/data/SidebarData";
import Sidebar from "@/components/Sidebar";

const Reference = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
            {/* Sidebar */}
            <Sidebar sections={examples} toggleSidebar={toggleSidebar} isOpen={isSidebarOpen}/>
            {/* Content */}
            <div className="flex-1 w-full overflow-x-auto">
                <main className="flex-1 px-4 sm:px-10 py-12 space-y-16 transition-all duration-300 w-full break-words">
                <section id="auth-api">
                    <h2 className="text-2xl font-semibold mb-2">🔐 Auth API</h2>
                    <p>
                        The <strong>Auth API</strong> handles user authentication, including signup, signin, email
                        verification, password reset, and middleware for protecting routes.
                    </p>
                    <br/>
                    <h3 className="text-xl font-semibold">Example Usage</h3>
                    <br/>
                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`const backend = require("dbackend"); // THE Backend

const auth = backend.auth({
  jwtSecret: "your_jwt_secret", // Your JWT secret key
  UserModel: User, // Your user model for authentication
  mailer: mailer, // Optional: Mailer for email verification and password reset
});

// Signup Example
await auth.signup({
    email: "user@example.com",
    password: "yourpassword",
    name: "Your Name",
});

// Signin Example
const result = await auth.signin({
    email: "user@example.com",
    password: "yourpassword",
});

// Verify Email Example
await auth.verifyEmail(verificationToken);

// Forgot Password Example
await auth.forgotPassword("user@example.com");

// Reset Password Example
await auth.resetPassword(resetToken, "newPassword123");`}
                    </pre>
                </section>

                <section id="mailer-api">
                    <h2 className="text-2xl font-semibold mb-2">📧 Mailer API</h2>
                    <p>
                        The <strong>Mailer API</strong> allows you to send emails for user verification, password reset,
                        and other notifications.
                    </p>
                    <br/>
                    <h3 className="text-xl font-semibold">Example Usage</h3>
                    <br/>
                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`const backend = require("dbackend"); // THE Backend

const mailer = backend.mailer({
  service: "gmail", // Your email service (e.g., "gmail")
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Send Email Example
await mailer.sendMail({
    to: "user@example.com",
    subject: "Welcome to dbackend!",
    html: "<h1>Welcome to dbackend!</h1>",
});`}
                    </pre>
                </section>

                <section id="middleware-api">
                    <h2 className="text-2xl font-semibold mb-2">⚙️ Middleware API</h2>
                    <p>
                        The <strong>Middleware API</strong> allows you to use built-in middleware for tasks like JSON
                        parsing, URL encoding, and enabling CORS.
                    </p>
                    <br/>
                    <h3 className="text-xl font-semibold">Example Usage</h3>
                    <br/>
                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`const backend = require("dbackend"); // THE Backend

const app = require("express")();

// Middleware Example
backend.middlewares(app, ["json", "urlencoded", "cors"]);

// Custom Middleware Example
backend.middlewares(app, [
  (req, res, next) => {
    console.log("Custom Middleware Triggered");
    next();
  },
]);`}
                    </pre>
                </section>

                <section id="mongodb-api">
                    <h2 className="text-2xl font-semibold mb-2">📊 MongoDB API</h2>
                    <p>
                        The <strong>MongoDB API</strong> connects your app to a MongoDB database using Mongoose.
                    </p>
                    <br/>
                    <h3 className="text-xl font-semibold">Example Usage</h3>
                    <br/>
                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`const backend = require("dbackend"); // THE Backend

// MongoDB Connection Example
backend.mongodb({
  url: "mongodb://localhost:27017/mydb",
});`}
                    </pre>
                </section>

                <section id="full-example">
                    <h2 className="text-2xl font-semibold mb-2">📄 Full Example</h2>
                    <p>
                        Here's a complete example that demonstrates how to use all the services in a simple app.
                    </p>
                    <br/>
                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`const backend = require("dbackend"); // THE Backend
const express = require("express");
const app = express();

// Setup Authentication
const auth = backend.auth({
  jwtSecret: "your_jwt_secret",
  UserModel: User,
  mailer: mailer,
});

// Setup Mailer
const mailer = backend.mailer({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Setup Middleware
backend.middlewares(app, ["json", "urlencoded", "cors"]);

// Setup MongoDB
backend.mongodb({ url: "mongodb://localhost:27017/mydb" });

// Sample Route: Signup
app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    await auth.signup({ email, password, name });
    res.status(200).send("Signup successful");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

// Sample Route: Send Email
app.post("/send-email", async (req, res) => {
  const { to, subject, html } = req.body;
  try {
    await mailer.sendMail({ to, subject, html });
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
                    </pre>
                </section>
            </main>
            </div>
        </div>
    );
};

export default Reference;
