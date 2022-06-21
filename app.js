const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const tasks = require('./routes/task');
require('dotenv').config()
const notFound = require('./middleware/not-found')
// middleware 
app.use(express.static('./public'))
app.use(express.json());


// routes

app.use('/api/v1/tasks', tasks)

// connectDB
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        // if the connection is successful run server
        app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
    } catch(err){
        console.log(err)
    }
} 


start()
