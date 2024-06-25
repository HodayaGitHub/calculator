# Calculator 🧮
This project is a simple numeric calculator built with Node.js and TypeScript. The application is containerized using Docker and can be easily set up and run using Docker Compose. <br>
Calculator API is a simple service designed to perform arithmetic operations on two numbers. <br>
The API supports addition, subtraction, multiplication, and division. Additionally, it includes JWT-based authentication to secure the endpoints.

1. [Features](#features)
2. [Technologies](#technologies)
3. [Prerequisites](#prerequisites)
4. [Installation and running the project on your local machine](#installation-and-running-the-project-on-your-local-machine)
5. [API Documentation - Swagger](#api-documentation---swagger)
6. [Building and Running the Docker](#building-and-running-the-docker)
7. [Running and using the API](#running-and-using-the-api)
8. [Run the Project](#run-the-project)
   

# Features:
- Perform arithmetic operations (add, subtract, multiply, divide) on two numbers.
- JWT bearer authentication for secure access.
- Server stub using Swagger Codegen.
- Swagger documentation for API endpoints - API built and defined according to YAML.
- Extensive testing of multiple scenarios and edge cases for both API and token mechanisms. 


# Technologies:
- Node.js
- Express
- JWT (JSON Web Tokens)
- Swagger (OpenAPI)
- TypeScript
- Jest (for unit tests)

# Prerequisites:
- Node.js (version 14.x or later)
- npm (version 6.x or later)
- Docker desktop app.
- Postman.

# Installation and running the project on your local machine: 

### 1. Clone the repository:
   ```git clone https://github.com/HodayaGitHub/calculator.git```
   
### 2. Change to the project directory:
   ```cd calculator```

### 3. Install the dependencies
   ```npm i```
   
### 4. Create a .env file in the root directory and add the following environment variables: 
 ```env
   PORT=4040
   JWT_SECRET=your_jwt_secret_key
  ```
### 5. Running the Application - dev server:
```npm run dev```
   
The server will be running at ```http://127.0.0.1:4040```

# API Documentation - Swagger
The API documentation that is built using openapi - Swagger will be available at http://127.0.0.1:4040/api-docs once the server is running.

# Building and Running the Docker
Follow these steps to build and run the application using Docker and Docker Compose:

### 1. Build the Docker Image using Docker Compose
```docker-compose build```

### 2. Run the Docker Container:
```docker-compose up```

### 3. Stop the docker:
```docker-compose down``` or Ctrl + C 


# Running and using the API

### 1. Generate Token (can be done using Postman):
- **URL:** `/api/generate-token`
- **Method:** `GET`
- **Description:** Generates a JWT token for authentication.
- **Response:**
  ```json
  {
    "token": "your_jwt_token"
  }

### 2. Access the API and running calculation operations:
- **URL:**  /api/calculate
- **Method:** POST
- **Headers:**
- **Authorization:** Bearer <your_jwt_token>
- **Operation:** add | subtract | multiply | divide
- **Request Body:**
   ```json
  {
   "num1": 10,"num2": 5
  }

### 3. Optional Responses: 

- **200 OK**
```json
{
 "result": 15
}
```

- **400 Bad Request**
```json
{
"error": "Invalid parameters"
}
```

- **401 Unauthorized**
```json
{
"message": "No authorization header provided"
}
```

- **403 Forbidden**
```json
{
"message": "Failed to authenticate token"
}
```

# Testing
To run the tests, use the following command:
 ```npm run test```

