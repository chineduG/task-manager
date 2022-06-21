const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const tasks = require('./routes/task');

// middleware 
app.use(express.json());


// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager Live')
})

app.use('/api/v1/tasks', tasks)

 
app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));