********************Leaderboard Application********************

A full-stack leaderboard system built with Node.js (Express) for the backend, React.js for the frontend, MongoDB for data storage, and Tailwind CSS for styling. The application allows users to select or add users, claim random points (1–10), view a real-time leaderboard, and track claim history.



*******************Features***************************

User Selection: Select a user from a dropdown list or add a new user via an input field.
Claim Points: Award random points (1–10) to a selected user by clicking a "Claim Points" button.
Leaderboard: Display real-time rankings based on total points, with ties handled appropriately.
Claim History: Log and display all point claim events, including user, points, and timestamp.
Responsive UI: Clean, modern, and mobile-friendly design using Tailwind CSS.





*****************Technologies Used*******************

Node.js (v16)
MongoDB (MongoDB Atlas)
Git
PostMan (For Testing Purpose)
React.js (UI)
TailwindCSS (For Styling)





************Backend Setup*****************

Navigate to the backend directory:cd backend
Install dependencies:npm install
Create a .env file in the backend directory with the MongoDB connection string:MONGO_URL=mongodb://localhost:27017/leaderboard
and FRONTEND_URL = http://localhost:5173

Start the backend server:npm run dev

The server runs on http://localhost:4000.






*******************Frontend Setup*******************

Navigate to the frontend directory:cd frontend


Install dependencies:npm install


Start the development server:npm run dev

The frontend runs on http://localhost:5173.
Ensure the backend is running, as the frontend makes API calls to http://localhost:4000.

Running the Application

Start MongoDB locally or ensure your cloud instance is accessible.
Run the backend server (npm run dev in the backend directory).
Run the frontend development server (npm run dev in the frontend directory).
Open http://localhost:5173 in a browser to use the application.







*******************Testing***********************

Select a user from the dropdown and click "Claim Points" to award random points.
Add a new user using the input field and "Add User" button.
Verify the leaderboard updates in real-time (polls every 5 seconds).
Check the claim history table for recent point claims.







********************API Endpoints************************
The backend provides the following RESTful API endpoints:

GET /api/users: Fetch all users.
Response: Array of users ([{ _id, name, totalPoints }, ...])


POST /api/users: Add a new user.
Body: { name: String }
Response: Created user object or error message


POST /api/claim: Claim random points (1–10) for a user.
Body: { userId: String }
Response: { userId, name, pointsAwarded, totalPoints }
or error message



GET /api/leaderboard: Fetch the sorted leaderboard.
Response: Array of ranked users ([{ rank, name, totalPoints }, ...])



GET /api/claim-history: Fetch claim history (limited to 50 records).
Response: Array of history records ([{ userName, points, timestamp }, ...])











**********************Technical Details*******************

<<<<<*****************Backend************>>>>>>>


Framework: Express.js for RESTful APIs.
Database: MongoDB with Mongoose for schema-based data modeling.
Architecture: Model-Controller-Routes for modularity and maintainability.
Models: User (name, totalPoints) and ClaimHistory (userId, points, timestamp).
Controllers: Handle business logic for user management, point claims, leaderboard, and history.
Routes: Map endpoints to controller functions.
Initialization: Populates 10 default users (Rahul, Kamal, etc.) on first run if the Users collection is empty.
Error Handling: Validates inputs and handles database/server errors with appropriate HTTP status codes.

<<<<<*******************Frontend**********************>>>>>


Framework: React.js with Vite for fast development and build.
Styling: Tailwind CSS for a clean, responsive, and modern UI.
Components: Reusable components (UserSelector, ClaimButton, Leaderboard, ClaimHistory) for modularity.
State Management: Uses React hooks (useState, useEffect) for simplicity.
API Calls: Uses axios for HTTP requests to the backend.
Real-Time Updates: Polls the leaderboard every 5 seconds for updates.


Users: Stores user data (name, total points).
ClaimHistory: Logs point claims (userId, points, timestamp).
Schema: Uses Mongoose for validation and relational integrity (e.g., userId references Users).





*******************Bonus Points Addressed************************


Clean and Modern UI: Tailwind CSS provides a sleek, professional look with consistent styling.
Responsive Layout: Flexbox and Tailwind’s responsive utilities ensure compatibility across mobile and desktop devices.
Well-Structured Code: Modular backend (Model-Controller-Routes) and frontend (React components) for reusability and maintainability.
Code Comments: Inline comments in backend and frontend code explain key logic.
Best Practices: RESTful APIs, input validation, error handling, and clean code principles.







**************************Notes***************************


The backend initializes 10 default users on first run.
The frontend polls the leaderboard every 5 seconds for real-time updates. WebSockets could be added for better performance.
Claim history is limited to 50 records; pagination could be implemented with query parameters (e.g., page, limit).
The application is optimized for the 2-day time limit, balancing functionality and code quality.
For production, consider adding authentication, rate limiting, and WebSockets for real-time updates.






**************************Troubleshooting**************************


MongoDB Connection: Ensure MongoDB is running and MONGO_URI is correct in backend/.env.
CORS Issues: The backend includes CORS middleware to allow requests from http://localhost:5173.
API Errors: Check the browser console or backend logs for error details.
Port Conflicts: If port 5000 or 5173 is in use, Vite/Node will prompt for alternative ports.
For further assistance, refer to the inline code comments or contact the developer.

Portfolio Of Developer is:  https://ashutoshmaurya-navy.vercel.app/


