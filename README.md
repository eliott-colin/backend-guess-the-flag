# Guess The Flag - Backend API

A Node.js Express backend API for the Guess The Flag game with authentication and user management using MongoDB.

## Project Structure

```
src/
├── controllers/
│   ├── authController.js     # Authentication logic (register, login)
│   └── user.js               # User-related endpoints
├── models/
│   └── User.js               # MongoDB User schema with Mongoose
├── services/
│   └── authService.js        # Auth business logic
├── middlewares/
│   └── auth.js               # JWT authentication middleware
├── v1/
│   └── routes/
│       ├── authRoutes.js     # /api/v1/auth routes
│       └── userRoutes.js     # /api/v1/users routes
├── index.js                  # Express app setup
└── server.js                 # Server entry point
```

## Features

- **User Authentication**: Register and login with email/password
- **JWT Tokens**: Secure token-based authentication
- **MongoDB Integration**: Using Mongoose ODM
- **Password Hashing**: Using bcrypt for security

## Setup

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/guess-the-flag
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

3. Start the server:
```bash
npm run dev    # Development with nodemon
npm start      # Production mode
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login user

### Users
- `POST /api/v1/users/signup` - Alternative signup endpoint
- `POST /api/v1/users/login` - Alternative login endpoint

## Technologies

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication
- **nodemon** - Development server auto-reload

## Notes

- Removed: Logements (housing) functionality
- Removed: Prisma (using Mongoose instead)
- Removed: Universities, Teams, Events routes
- Removed: Multer (file uploads)
- Removed: Swagger documentation
