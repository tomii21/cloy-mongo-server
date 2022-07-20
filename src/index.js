import express from 'express';
import mongoose, {mongo, Schema} from 'mongoose';
import cors from "cors"
const app = express ();
app.use(cors())
const url =
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



app.get("/",async (req,res)=>{
    conexion ();
    const productos = await ProductoModelo.find ();
    
    res.send(productos)
})
app.listen (3001);
console.log ('escuchando', 3001);
