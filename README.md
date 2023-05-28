# FAMNITHackathon2.0



## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Starting](#starting)

## Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/WideVader/FAMNITHackathon2.0.git
   ```
  
2. CD into the local repository
   ```bash
    cd FAMNITHackathon2.0
   ```
   
3. Back/Front end packages installation
   ```bash
    cd backend
    npm install
    cd..
    cd frontend
    npm install
   ```

## Setup

You need to creat a .env file in backend folder with your data for the databse. 

```env
PORT=5000
DATABSE=mongodb+srv://<DATABASE_NAME>:<PASSWORD>@<USERNAME>.<SUB_DOMAIN>.mongodb.net/<DATABASE_NAME>
DATABSE_PASSWORD=YOUR_MONGODB_PASSWORD
```

## Starting

1. Start the server/frontend
   ```bash
   # in both the backend and front end folders
    npm start
   ```
   
2. In case the frontend doesnt open the website immedietly you can just enter the following url: http://localhost:<YOUR_SELECTED_PORT>

## API Endpoints

    GET /api/users/ - Get all users.
    GET /api/users/:id - Get a user by ID.
    PUT /api/users/:id - Update a user by ID.
    PATCH /api/users/:id - Partially update a user by ID.
    POST /api/login - User login endpoint.
    POST /api/recommend - Recommendation endpoint.
    DELETE /api/users/new - Delete a user by ID.
    POST /api/users/new - Dont use, unstable, untested and nonoperational.
    POST /api/listings/ - Get listings and perform related actions.
