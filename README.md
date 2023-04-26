# Task management REST API with Javascript, Node.js, Express.js PostgreSQL

## Installing

## 1. Clone this repository
``
git clone https://github.com/ogawdev/Apartments-Backend.git
``
## 2. Install packages
Run
``
npm install
``
to install required packages

## 3. Create .env variable
Create .env in root folder.

Example was given in .env.example file.

## 4. Run
Run command
``
npm run dev
``
## Auth Features
1. Register a user
2. Verify user's email address
3. Send forgot password email
4. Reset password
5. Get current user
6. Login
7. Access token

## Task Features (Only with access token)
1. Create task
2. Edit task
3. Delete task
4. Get task by id
5. Get user's tasks
6. Search tasks by title (if belongs to this user)

## Used technologies?
- Express - Web server
- Joi - Validation
- Bcrypt - Password hashing
- Jsonwebtoken - Signing and verifying JSON web tokens
- Config - Managing configuration and env files

## Useful Links
[Postman Collection](https://documenter.getpostman.com)
