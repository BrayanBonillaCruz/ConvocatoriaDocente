// Importando biblioteca de validacion
import * as Yup from 'yup';

// Creando un esquema de validación para el proyecto
const registerSchema = Yup.object().shape({
  name: Yup.string()
    .max(10, 'No escribir mas de 10 caracteres')
    .required('Se requiere nombre'),
  apellidos: Yup.string()
    .max(10, 'No escribir mas de 10 caracteres')
    .required('Se requiere apellidos'),
  mail: Yup.string()
    .max(15, 'No escribir mas de 15 caracteres')
    .required('Se requiere email'),
  password: Yup.string()
    .max(15, 'No escribir mas de 15 caracteres')
    .required('Se requiere contraseña'),
  confirmPassword: Yup.string()
    .max(15, 'No escribir mas de 15 caracteres')
    .required('Se requiere confirmar'),
  phone: Yup.string()
    .max(15, 'No escribir mas de 15 caracteres')
    .required('Se requiere telefono'),
  rfc: Yup.string()
    .max(15, 'No escribir mas de 15 caracteres')
    .required('Se requiere RFC'),
  curp: Yup.string()
    .max(15, 'No escribir mas de 15 caracteres')
    .required('Se requiere CURP'),
  entidad: Yup.string()
    .max(15, 'No escribir mas de 15 caracteres')
    .required('Se requiere email'),
  fechaNacimiento: Yup.string()
    .max(15, 'No escribir mas de 15 caracteres')
    .required('Se requiere fecha de nacimiento'),
});
// Creando el extractor de datos de la petición
const getRegister = (req) => {
  // Extrayendo datos de la petición
  const {
    name,
    apellidos,
    mail,
    password,
    confirmPassword,
    phone,
    rfc,
    curp,
    entidad,
    fechaNacimiento,
  } = req.body;
  // Regresando el objeto proyecto
  return {
    name,
    apellidos,
    mail,
    password,
    confirmPassword,
    phone,
    rfc,
    curp,
    entidad,
    fechaNacimiento,
  };
};
export default {
  registerSchema,
  getRegister,
};
