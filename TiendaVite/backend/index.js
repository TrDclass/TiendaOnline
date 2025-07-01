import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import productoRouter from './src/routes/producto.js'
import usersRouter from './src/routes/users.js'
import loginRouter from './src/routes/login.js'

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) =>  {
    return res.json({message: "hellow world"})
})

app.use('/producto', productoRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter)

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})