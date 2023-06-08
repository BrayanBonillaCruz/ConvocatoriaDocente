// Importando Mongoose
import mongoose from 'mongoose';
// Desestructurando un generador de Schemas de mongoose
const { Schema } = mongoose;
// Creando el esquema
const RegisterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  rfc: {
    type: String,
    required: true,
  },
  curp: {
    type: String,
    required: true,
  },
  entidad: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
});

// Exportando la compilacon de ProjectSchema
// en un modelo de mongoose
export default mongoose.model('users', RegisterSchema);
