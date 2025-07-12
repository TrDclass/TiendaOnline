import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { join } from 'path';

import productoRouter from './src/routes/producto.js';
import usersRouter from './src/routes/users.js';
import loginRouter from './src/routes/login.js';
import carritoRouter from './src/routes/carrito.js';
import personaUsuariaRouter from './src/routes/personaUsuaria.js';
import ListaCategoriaRouter from  './src/routes/ListaCategoria.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Carpeta pública para imágenes
app.use('/uploads', express.static(join(process.cwd(), 'uploads')));

app.get('/', (req, res) => {
  return res.json({ message: "Hello world" });
});

app.use('/producto', productoRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/carrito', carritoRouter);
app.use('/personaUsuaria', personaUsuariaRouter); 
app.use('/ListaCategoria',ListaCategoriaRouter);


export default app;
