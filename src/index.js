import express from 'express';
import mongoose, {mongo, Schema} from 'mongoose';
import cors from 'cors';
import conexion, {ProductoModelo} from './api/database';
const app = express ();
app.use (cors ());



app.get ('/', async (req, res) => {
  const db = await mongoose
    .connect (process.env.MONGODB_URI)
    .then (() => console.log ('conectado a mongo'))
    .catch (e => console.log (e));
  const productos = await ProductoModelo.find ();

  res.send (productos);
});
app.listen (3001);
console.log ('escuchando', 3001);

/* const url =
  'mongodb+srv://tomas:tomasto1998@cloyshop.8ibpf.mongodb.net/Productos?retryWrites=true&w=majority';

const conexion = async () => {
  const db = await mongoose
    .connect (url)
    .then (() => console.log ('conectado a mongo'))
    .catch (e => console.log (e));
};

const productoBuzoSchema = new Schema ({
  titulo: String,
  Talle: String,
  Color: String,
  Precio: Number,
  Imagenes: [String],
});

const ProductoModelo = mongoose.model ('buzos', productoBuzoSchema);
 */
