"use client"

import React, {useState} from 'react';
import Sidebar from "@/components/Sidebar";
import {sections} from "@/data/SidebarData";
const Learn = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
            {/* Sidebar */}
            <Sidebar sections={sections} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            {/* Content */}
            <div className="flex-1 w-full overflow-x-auto">


                <main className="flex-1 px-4 sm:px-10 py-12 space-y-16 transition-all duration-300 w-full break-words">

                <section id="intro">
                    <h2 className="text-3xl font-bold mb-4">🧠 dbackend (THE Backend)</h2>
                    <p>
                        dbackend is a modular backend toolkit that simplifies various backend functionalities, such as authentication, email handling, middleware management, and MongoDB integration. This guide provides detailed documentation for every service and how to use it.
                    </p>
                </section>

                <section id="install">
                    <h2 className="text-2xl font-semibold mb-2">🚀 Installation</h2>
                    <pre className="bg-gray-800 text-green-300 p-4 rounded-md overflow-x-auto">npm install dbackend</pre>
                </section>

                <section id="features">
                    <h2 className="text-2xl font-semibold mb-2">📦 Features</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>✅ MongoDB connection with Mongoose</li>
                        <li>✅ Authentication system (Signup, Signin, JWT, Email Verification, Password Reset)</li>
                        <li>✅ Built-in JWT middleware</li>
                        <li>✅ Mailer integration using Nodemailer</li>
                        <li>✅ Plug-and-play Express middlewares (CORS, JSON, URL Encoded)</li>
                    </ul>
                </section>

                <section id="auth-api">
                    <h2 className="text-2xl font-semibold mb-2">🔐 Auth API</h2>
                    <p>
                        The <strong>Auth API</strong> handles user authentication, including signup, signin, email verification, password reset, and middleware for protecting routes.
                    </p>
                    <br/>
                    <h3 className="text-xl font-semibold">Setup Authentication</h3>
                    <p>
                        To set up the authentication service, you need to configure it with a JWT secret, the user model, and optionally a mailer for email verification and password reset functionalities. Here's how you do it:
                    </p>
                    <br/>
                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`const backend = require("dbackend"); // THE Backend

const auth = backend.auth({
  jwtSecret: "your_jwt_secret", // Your JWT secret key
  UserModel: User, // Your user model for authentication
  mailer: mailer, // Optional: Mailer for email verification and password reset
});`}
                    </pre>
                    <br/>
                    <h3 className="text-xl font-semibold">Signup</h3>
                    <p>This function registers a new user. It takes the following parameters:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>email:</strong> The user's email (String)</li>
                        <li><strong>password:</strong> The user's password (String)</li>
                        <li><strong>name:</strong> The user's name (String)</li>
                    </ul>
                    <br/>
                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`await auth.signup({
    email: "user@example.com",
    password: "yourpassword",
    name: "Your Name",
});`}
                    </pre>
                    <br/>
                    <h3 className="text-xl font-semibold">Signin</h3>
                    <p>This function logs in an existing user. It requires the following parameters:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>email:</strong> The user's email (String)</li>
                        <li><strong>password:</strong> The user's password (String)</li>
                    </ul>
                    <br/>
                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`const result = await auth.signin({
    email: "user@example.com",
    password: "yourpassword",
});`}
                    </pre>
                    <br/>

                    <h3 className="text-xl font-semibold">Verify Email</h3>
                    <p>This function verifies a user's email by the token sent during signup.</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>token:</strong> The email verification token (String)</li>

                    </ul>
                    <br/>

                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`await auth.verifyEmail(verificationToken);`}
                    </pre>
                    <br/>

                    <h3 className="text-xl font-semibold">Forgot Password</h3>
                    <p>This function sends a password reset link to the user's email.</p>

                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>email:</strong> The user's email (String)</li>
                    </ul>
                    <br/>

                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`await auth.forgotPassword("user@example.com");`}
                    </pre>
                    <br/>

                    <h3 className="text-xl font-semibold">Reset Password</h3>
                    <p>This function resets the user's password using the token from the password reset email.</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>token:</strong> The reset password token (String)</li>
                        <li><strong>newPassword:</strong> The new password (String)</li>
                    </ul>
                    <br/>

                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`await auth.resetPassword(resetToken, "newPassword123");`}
                    </pre>
                </section>

                <section id="mailer-api">
                    <h2 className="text-2xl font-semibold mb-2">📧 Mailer API</h2>
                    <p>
                        The <strong>Mailer API</strong> allows you to send emails for user verification, password reset, and other notifications.
                    </p>
                    <br/>

                    <h3 className="text-xl font-semibold">sendMail</h3>
                    <p>This function sends an email. It requires the following parameters:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>to:</strong> The recipient's email address (String)</li>
                        <li><strong>subject:</strong> The email subject (String)</li>
                        <li><strong>text:</strong> The plain text version of the email (String)</li>
                        <li><strong>html:</strong> The HTML version of the email (String)</li>
                    </ul>
                    <br/>

                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`await mailer.sendMail({
    to: "user@example.com",
    subject: "Welcome!",
    html: "<h1>Welcome to dbackend!</h1>",
});`}
                    </pre>
                </section>

                <section id="middleware-api">
                    <h2 className="text-2xl font-semibold mb-2">⚙️ Middleware API</h2>
                    <p>
                        The <strong>Middleware API</strong> allows you to use built-in middleware for tasks like JSON parsing, URL encoding, and enabling CORS.
                    </p>
                    <br/>

                    <h3 className="text-xl font-semibold">middlewares</h3>
                    <p>This function applies middleware to your Express app. It accepts an array of middleware names or custom middleware functions.</p>
                    <br/>

                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`backend.middlewares(app, ["json", "urlencoded", "cors"]);`}
                    </pre>
                </section>

                <section id="mongodb-api">
                    <h2 className="text-2xl font-semibold mb-2">📊 MongoDB API</h2>
                    <p>
                        The <strong>MongoDB API</strong> connects your app to a MongoDB database. It accepts a configuration object with the connection URL.
                    </p>
                    <br/>

                    <h3 className="text-xl font-semibold">mongodb</h3>
                    <p>This function connects to MongoDB using Mongoose.</p>
                    <br/>

                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-md overflow-x-auto">
{`backend.mongodb({ url: "mongodb://localhost:27017/mydb" });`}
                    </pre>
                </section>

                <section id="reference">
                    <h2 className="text-2xl font-semibold mb-2">📄 Code Examples & References</h2>
                    <p>For detailed code examples and additional references, check out the <a href="/reference" className="text-purple-600">Reference Page</a>.</p>
                </section>

                <section id="credits">
                    <h2 className="text-2xl font-semibold mb-2">🙌 Credits</h2>
                    <p>
                        Special thanks to the contributors of <a href="https://github.com/CodeReb00t/dbackend" className="text-purple-600">dbackend</a> and the open-source community!
                    </p>
                </section>
            </main>
            </div>
        </div>
    );
};

export default Learn;
