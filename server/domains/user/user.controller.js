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

// Controlador Home
export default {
  // Action Methods
  login,
  logout,
  register,
};
