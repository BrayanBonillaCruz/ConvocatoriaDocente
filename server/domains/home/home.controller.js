// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  res.render('home/homeView', { title: 'DWPCII-2023A' });
};

// Get "/about"
const about = (req, res) => {
  res.render('home/aboutView');
};

// Controlador Home
export default {
  home,
  about,
};
