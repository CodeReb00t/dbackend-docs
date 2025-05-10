# dbackend Documentation Site

Welcome to the **dbackend** documentation site! This site provides a comprehensive guide to help you integrate and use the dbackend toolkit for building backend applications efficiently. The toolkit includes essential features like authentication, email services, middleware, and MongoDB integration.
## Visit the Documentation Site

To view the live documentation site, visit: [dbackend Documentation](http://your-site-link.com)

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Features](#features)

> * [Auth API](#auth-api)
> * [Mailer API](#mailer-api)
> * [Middleware API](#middleware-api)
> * [MongoDB API](#mongodb-api)

4. [Full Example](#full-example)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [Visit the Documentation Site](#visit-the-documentation-site)

## Overview

**dbackend** is a backend toolkit that simplifies the integration of essential backend services like authentication, email sending, middleware setup, and MongoDB connections. It is designed to save time and effort by providing out-of-the-box solutions for common backend tasks.

## Installation

To get started with **dbackend**, install it via npm:

```js
npm install dbackend
```

## Features

### Auth API

The **Auth API** handles user authentication, including signup, signin, email verification, and password reset.

#### Example Usage:

```js
const auth = backend.auth({
  jwtSecret: "your_jwt_secret",
  UserModel: User,
});

await auth.signup({
  email: "user@example.com",
  password: "yourpassword",
  name: "Your Name",
});

const result = await auth.signin({
  email: "user@example.com",
  password: "yourpassword",
});

await auth.verifyEmail(verificationToken);
await auth.forgotPassword("user@example.com");
await auth.resetPassword(resetToken, "newPassword123");
```

### Mailer API

The **Mailer API** allows you to send emails for user verification, password reset, and notifications.

#### Example Usage:

```js
const mailer = backend.mailer({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

await mailer.sendMail({
  to: "user@example.com",
  subject: "Welcome to dbackend!",
  html: "<h1>Welcome to dbackend!</h1>",
});
```

### Middleware API

The **Middleware API** simplifies the setup of essential middleware like JSON parsing, URL encoding, and enabling CORS.

#### Example Usage:

```js
const app = require("express")();

backend.middlewares(app, ["json", "urlencoded", "cors"]);

backend.middlewares(app, [
  (req, res, next) => {
    console.log("Custom Middleware Triggered");
    next();
  },
]);
```

### MongoDB API

The **MongoDB API** connects your app to a MongoDB database using Mongoose.

#### Example Usage:

```js
backend.mongodb({
  url: "mongodb://localhost:27017/mydb",
});
```

## Full Example

Here’s a complete example demonstrating how to use all services in a simple app:

```js
const backend = require('dbackend');
const express = require('express');
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

app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    await auth.signup({ email, password, name });
    res.status(200).send("Signup successful");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

app.post("/send-email", async (req, res) => {
  const { to, subject, html } = req.body;
  try {
    await mailer.sendMail({ to, subject, html });
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

## Usage

To use **dbackend** in your project, simply import the necessary features and configure them based on your app requirements. For detailed examples, refer to the sections above.

## Contributing

We welcome contributions to improve **dbackend**! If you'd like to contribute, please follow the steps below:

1. Fork this repository.
2. Clone your fork: `git clone https://github.com/CodeReb00t/dbackend-docs.git`
3. Make your changes.
4. Commit and push your changes.
5. Create a pull request.

