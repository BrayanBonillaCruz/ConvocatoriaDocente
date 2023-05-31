//Importing Express library
import express from 'express';
//Creating a Router instance
const {Router} = express;
const router = Router();

//Creating the route
router.get('/author', (req, res)=>{
    res.json({
        "name": "Brayan",
        "lasname": "Bonilla",
        "twitter": "@Brayan Bonilla",
        "job": "CC"
    });
});  //function(req, res){}

//Exporting the router
export default router;