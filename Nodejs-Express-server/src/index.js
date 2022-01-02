const express = require('express');
const todoRouter = require('./routers/todoRouter');
require('./db/mongoose');

const app = express();
app.use(express.json());





app.all('/*',(req, res , next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Method','GET, PUT, POST, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers','Content-Type, Authorization, Content-Length, X-Requested');
    next();
}

)


app.use(todoRouter);


app.listen(3000, () => {
    console.log('app is running in port 3000!');
})