import mongoose, {mongo, Schema} from 'mongoose';


const url =
  'mongodb+srv://tomas:tomasto1998@cloyshop.8ibpf.mongodb.net/Productos?retryWrites=true&w=majority';

export const conexion = async () => {
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
  
export  const ProductoModelo = mongoose.model ('buzos', productoBuzoSchema);
  
