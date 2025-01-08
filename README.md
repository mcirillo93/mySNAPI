# Social Network API

A backend API for a social networking application, allowing users to interact by creating and managing thoughts and user profiles. This project demonstrates the use of a NoSQL database for handling complex relationships between data.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Description

This API serves as the backend for a social network application. Users can share thoughts, react to thoughts, and connect with other users by adding friends. Built with a focus on performance and scalability using MongoDB and Mongoose, this application is designed for developers to extend into a full-stack project.

## Features

- User profile creation and management
- CRUD operations for thoughts
- Reaction capabilities for thoughts
- Friend management system

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mcirillo93/social-network-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd social-network-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Use an API testing tool like Postman or Insomnia to interact with the endpoints.

### Available Endpoints

#### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user information
- `DELETE /api/users/:id` - Delete a user

#### Thoughts
- `GET /api/thoughts` - Get all thoughts
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:id` - Update a thought
- `DELETE /api/thoughts/:id` - Delete a thought

## Technologies

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

## License

This project is licensed under the MIT License. See the LICENSE file for details.
