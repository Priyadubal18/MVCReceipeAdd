const express = require('express');
const app = express();
const port = 4000;
const db = require("../server/database/recipeInfo.js");
const bodyParser = require("body-parser");

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// get all recipe
app.get('/getallRecipes', function (req, res) {
    db.recipeData.getAllRecipe(function (data) {
        res.send(data);
    });
});

// get the recipe info
app.get('/getRecipe', function (req, res) {
    db.recipeData.getRecipe(parseInt(req.query.ID), function (data) {
        res.send(data);
    });
});

app.get('/getReview', function (req, res) {
    db.recipeData.getReview(parseInt(req.query.ID), function (data) {
        res.send(data);
    });
});

app.post('/addRecipe', function (req, res) {
    console.log(req.body.addRecipe);
    db.recipeData.addRecipe(req.body.addRecipe, function (data) {
        res.send(data);
    });
});


app.listen(port, () => console.log(`Product Buyer is  running on port 127.0.0.1:${port}`));