import express from 'express';
const {Router} = express;
const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
  let iconSet = ["🥧", "🍉", "🥂"];
  let icon = iconSet[Math.floor(Math.random() * 3)];
  res.render('index', { title: 'Convocatoria Docente', icon});
});

router.get('/author', (req, res) => {
  //Creating a View-Model
  let author = {
      "name": "Brayan",
      "lasname": "Bonilla",
      "twitter": "@Brayan",
      "job": "CC"
  };
  //Sending the view-model
  res.render('author', author);
})

export default router;
