import conexion, {ProductoModelo} from '../api/database';
import mongoose, {mongo, Schema} from 'mongoose';
import express from 'express';
const app = express ();
app.get ('/', async (req, res) => {
  const db = await mongoose
    .connect (process.env.MONGODB_URI)
    .then (() => console.log ('conectado a mongo'))
    .catch (e => console.log (e));
  const productos = await ProductoModelo.find ();

  res.send (productos);
});

module.exports = app;