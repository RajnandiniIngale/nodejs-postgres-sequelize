import pkg from 'express';
const express = pkg;

import 'dotenv/config';
import router from './src/Footballers/footballers.router.js';



const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// Configure routes
app.use("/api/footballers", router);



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
