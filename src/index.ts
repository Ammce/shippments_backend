require('dotenv').config();

// Packages import
import express from 'express';
import mongoose from 'mongoose';

// App Imports
import { middleWaresConfig, headersConfig, routesConfig } from './config'

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://test:test@cluster0.jdbkj.mongodb.net/cards?retryWrites=true&w=majority';

// Configuration files and dependencies
middleWaresConfig(app);

headersConfig(app);

routesConfig(app);


mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Error with connecting to the database');
    }
    app.listen(PORT, () => {
        console.log(`Server is up and running on port ${PORT}`);
    });
}
)