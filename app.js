const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const tasks = require('./routes/task');
require('dotenv').config()

// middleware 
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager Live')
})

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
