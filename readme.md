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

### For detailed API documentation, check: `Postman/Postman_collection File`

## ScreenShots
![Screenshot (605)](https://github.com/user-attachments/assets/ff255365-238d-42e9-baf5-ef77fa3b5844)
![Screenshot (606)](https://github.com/user-attachments/assets/15215fac-c889-4aa6-81b8-66bf841f27bb)
![Screenshot (607)](https://github.com/user-attachments/assets/575142a8-cf54-4f76-a546-01d9de19a103)
![Screenshot (608)](https://github.com/user-attachments/assets/b8875ef3-e36d-422a-bd16-ab5e54eb7a99)
![Screenshot (609)](https://github.com/user-attachments/assets/78dff4ac-dc05-4d2d-8ff1-6dad62abbdb7)
![Screenshot (610)](https://github.com/user-attachments/assets/e5529f4c-afd6-46aa-84f4-f7991e4b914d)
![Screenshot (611)](https://github.com/user-attachments/assets/6fb22540-95c6-4290-be10-e23d968b9b5a)
![Screenshot (612)](https://github.com/user-attachments/assets/759c9b8a-b36c-478c-a6cc-ac6b544eff34)
![Screenshot (613)](https://github.com/user-attachments/assets/e3d9b69f-2726-4537-9c4d-8c8eebbb994d)
![Screenshot (614)](https://github.com/user-attachments/assets/055132fd-578a-473a-927d-2320b0224cd5)
![Screenshot (615)](https://github.com/user-attachments/assets/6042b84f-299f-4734-b5f9-edbd18a68d22)
