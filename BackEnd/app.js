const express = require('express');
require('dotenv').config();
require('./models/db')
const userRouter = require('./routes/user')

const User = require('./models/user')
const app = express();

// app.use((req, res, next)=>{
//   req.on('data', chunk =>{
//     const data = JSON.parse(chunk);
//     req.body = data;
//   });
//   next();
// })

app.use(express.json());
app.use(userRouter);

app.get('/',(req,res) => {
    res.send('Hello World');
})
app.listen(8000, () =>{
    console.log('Server is running on port 8000');
});
