//Instantiate required Documents




const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('../server/routes/userRoutes');
const noteRoutes = require('../server/routes/noteRoutes');
//reference env variables
dotenv.config();

//Initialize express app
const app = express();

app.use(express.json());
app.use(cors());
//Middleware to parse JSON bodies
app.use(bodyParser.json());

//Routes used
app.use('/api', userRoutes);
app.use('/api', noteRoutes);
//Connect to SQL database
//const sequelize = new sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_NAME}`, {
//    dialect: 'postgres',
//    logging: false,
//});
//Authenticate User Info
//sequelize.authenticate().then(() =>{
//    console.log('PostgreSQL connected!');
//}).catch((err) =>{
//    console.error('Unable to connect to PostgreSQL:', err);
//});

//set PORT
const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server on localhost: ${port}`));