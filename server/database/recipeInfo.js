var mysql = require('mysql');

dbConnection = mysql.createConnection({
    user: 'root',
    password: 'rootPriya1211',
    database: 'MVP'
});

dbConnection.connect(function (err) {
    if (err) {
        return console.error('Error in connecting Database FEC :' + err);
    }
    console.log("Connected to MySQL server MVC Database")
});

const recipeData = {};
recipeData.getAllRecipe = function (cb) {
    let sql = `select RecipeTitle, RecipeImageURL, Count(r.RecipeId) NoOfReview, AVG(ReviewNumber) Review 
          from recipe r inner join review rv on r.RecipeId = rv.RecipeId
          group by r.RecipeId `
    dbConnection.query(sql, (err, results) => {
        if (err) {
            console.log("GetBuyerInfo", err)
        }
        cb(results);
    });
}


module.exports.recipeData = recipeData;
