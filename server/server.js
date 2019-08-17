const express = require('express');
const app = express();
const port = 4000;
const db = require("../server/database/recipeInfo.js");
const bodyParser = require("body-parser");


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// get all recipe
app.get('/allRecipesList', function (req, res) {
    debugger;
    db.recipeData.getAllRecipe(function (data) {
        res.send(data);
    });
});

app.listen(port, () => console.log(`Product Buyer is  running on port 127.0.0.1:${port}`));