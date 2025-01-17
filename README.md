# Authentication System

An Authentication System built with **React Native** for the frontend, **Node.js** for the backend, and **MongoDB** for the database.

## Features

- User registration
- User login with JWT (JSON Web Tokens)
- Secure password hashing using bcrypt
- Token-based authentication
- MongoDB for database storage

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- React Native Expo

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/AbirGhrissi/Authentification-System-ReactNative-NodeJs-MongoDB.git
   ```

2. Install dependencies for the backend:

   ```bash
   cd BackEnd
   npm install
   ```

3. Create a `.env` file in the `BackEnd` directory with the following content:

   ```env
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

5. Install dependencies for the frontend:

   ```bash
   cd ../FrontEnd
   npm install
   ```

6. Start the React Native application:

   ```bash
   npm start
   ```

## Usage

- Register as a new user.
- Log in with your credentials to receive a JWT.
- Use the JWT to access protected routes.

## Technologies

- React Native
- Node.js
- Express.js
- MongoDB

## Made by
**Abir Ghrissi** ([GitHub Repository](https://github.com/AbirGhrissi/Authentification-System-ReactNative-NodeJs-MongoDB.git))
