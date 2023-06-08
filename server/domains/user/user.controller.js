import log from '../../config/winston';
// Actions methods
// GET "/user/login"
const login = (req, res) => {
  res.render('user/login');
};

// GET "/user/logout"
const logout = (req, res) => {
  res.send('🪓 Under construction: get user/logout 🪓');
};

// GET "/user/register"
const register = (req, res) => {
  res.render('user/register');
};

// POST "/user/register"
const addPost = (req, res) => {
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
  // se le informa al cliente
  if (validationError) {
    log.info('Se entrega al cliente error de validación de add User');
    // Se desestructuran los datos de validación
    const { value: user } = validationError;
    // Se extraen los campos que fallaron en la validación
    const errorModel = validationError.inner.reduce((prev, curr) => {
      // Creando una variable temporal para
      // evitar el error "no-param-reassing"
      const workingPrev = prev;
      workingPrev[`${curr.path}`] = curr.message;
      return workingPrev;
    }, {});
    return res.status(422).render('user/register', { user, errorModel });
  }
  // En caso de que pase la validación
  // Se desestructura la información
  // de la peticion
  const { validData: project } = req;
  // Se contesta la información
  // del proyecto al cliente
  log.info('Se entrega al cliente información del usuario cargado');
  return res.status(200).json(project);
};
// Controlador Home
export default {
  // Action Methods
  login,
  logout,
  register,
  addPost,
};
