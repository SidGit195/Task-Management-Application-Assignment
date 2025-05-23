# Task Management Application

A RESTful API for managing tasks and users with authentication. This application allows users to create, manage, and assign tasks with proper authentication and authorization.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)

## Features
- User authentication (register/login)
- JWT-based authorization
- Task management (CRUD operations)
- User profile management
- Task filtering and pagination
- Secure password handling

## Technologies
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcrypt.js for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation
1. Clone the repository:
    ```
    git clone https://github.com/SidGit195/Task-Management-Application-Assignment.git
    cd Task-Management-Application-Assignment
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Create a `.env` file in the root directory with the following variables:
    ```
    PORT=8000
    DATABASE_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4. Start the server:
    ```
    npm run dev
    ```

## API Documentation

### Authentication Endpoints
- **Register User**: `POST /auth/register`
- **Login User**: `POST /auth/login`

### User Endpoints
- **Get User Profile**: `GET /users/:id`
- **Get All Users**: `GET /users/`

### Task Endpoints
- **Get All Tasks**: `GET /tasks/`
- **Get Task by ID**: `GET /tasks/:id`
- **Create Task**: `POST /tasks/`
- **Update Task**: `PUT /tasks/:id`
- **Delete Task**: `DELETE /tasks/:id`

For detailed API documentation and examples, check the [Postman Collection](./postman/postman_collection.json) file included in this repository.
