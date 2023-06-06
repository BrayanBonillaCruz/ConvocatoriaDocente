// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  res.render('index', { title: 'DWPCII-2023A' });
};

// Get "/index"
const about = (req, res) => {
  res.send('🪓 Under construction: get /about 🪓');
};

// Controlador Home
export default {
  home,
  about,
};
