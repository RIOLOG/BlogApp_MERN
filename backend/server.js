const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');



//rest object
const app = express();

//env congif
dotenv.config();

//APIS ROUTES
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoute');


//DataBase Connection:
connectDB();


//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);

//listen
const PORT = process.env.PORT || 8081;


app.listen(PORT  ,()=> {
    console.log("Running Server".bgCyan.white);
});