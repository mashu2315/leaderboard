const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

const connectDB = require("./config/db")

dotenv.config();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors({
  origin: [`${process.env.FRONTEND_URL}`],
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));


app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Connect to MongoDB and start server
connectDB();




app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
