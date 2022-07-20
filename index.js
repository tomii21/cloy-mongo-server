import app from "./src/app"
import dotenv from 'dotenv';

import cors from 'cors';


dotenv.config()
app.use (cors ());




app.listen (process.env.PORT || 3001);


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
