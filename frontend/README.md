Leaderboard Application
A full-stack leaderboard system built with Node.js (Express) and React.js, using MongoDB for data storage and Tailwind CSS for styling.
Features

User Selection: Select from a list of users or add new users.
Claim Points: Award random points (1–10) to a selected user.
Leaderboard: Display real-time rankings based on total points.
Claim History: Log and display all point claim events.
Responsive UI: Clean, modern, and mobile-friendly design using Tailwind CSS.

Setup Instructions
Prerequisites

Node.js (v16 or higher)
MongoDB (local or cloud instance)
Git

Backend Setup

Navigate to the backend directory:cd backend


Install dependencies:npm install


Create a .env file in the backend directory with:MONGO_URI=mongodb://localhost:27017/leaderboard


Start the backend server:npm start

The server runs on http://localhost:5000.

Frontend Setup

Navigate to the frontend directory:cd frontend


Install dependencies:npm install


Start the development server:npm run dev

The frontend runs on http://localhost:5173 (or another port if specified by Vite).
Ensure the backend is running, as the frontend makes API calls to http://localhost:5000.

API Endpoints

GET /api/users: Fetch all users.
POST /api/users: Add a new user (body: { name: String }).
POST /api/claim: Claim points for a user (body: { userId: String }).
GET /api/leaderboard: Fetch the sorted leaderboard.
GET /api/claim-history: Fetch claim history (limited to 50 records).

Notes

The backend initializes 10 default users (Rahul, Kamal, etc.) on first run.
The frontend polls the leaderboard every 5 seconds for real-time updates.
The UI is styled with Tailwind CSS and is responsive for mobile and desktop.
Error handling is implemented for invalid inputs and server errors.
The backend uses a Model-Controller-Routes architecture for modularity.

Bonus Points Addressed

Clean and Modern UI: Uses Tailwind CSS for a sleek, professional look.
Responsive Layout: Flexbox and media queries ensure compatibility across devices.
Well-Structured Code: Modular backend with Model-Controller-Routes and reusable React components.
Code Comments: Inline comments explain key logic.
Best Practices: RESTful APIs, error handling, and input validation.
