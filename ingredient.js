
$( document ).ready(function() {
  

var pantryEl = document.getElementById("pantry");
var blenderEl = document.getElementById("blender");
var drinkRecipesEl = document.getElementById("drink-recipes");
var groceriesEl = document.getElementById("groceries");
var ingredientsEl = document.getElementById("ingredients");
var inputEl = document.getElementById("food-input");

$("#pantrySubmitBtn").click(function(){
  addFood()
  storePantry()
  ingredientsEl.value = ''
  
});

var foodItems = [];


function addFood() {
  var foodInput = $("#ingredients").val();
  foodItems.push(foodInput);
  document.getElementById("pantry").innerHTML = foodItems;
  
}

$("#generate-food").click(function() {
  pantryEl.textContent = ''
  var foodIngredients = foodItems;
  var queryFoodURL =
    "https://api.edamam.com/search?q=" +
    foodIngredients +
    "&app_id=4706df62&app_key=85b9a750ec733a4ab16ba62ec5d80e59";

  $.ajax({
    url: queryFoodURL,
    method: "GET"
  })
  .then(function(response) {
    console.log(response.hits);

    var numberOfRecipesToLoop;

  if (response.hits.length >= 5) {
    numberOfRecipesToLoop = 5;
  } else {
    numberOfRecipesToLoop = response.hits.length;
  };


    for (i = 0; i < numberOfRecipesToLoop; i++) {
      console.log(response.hits[i].recipe.label);
      var newtableRowEl = $("<tr>");
      newtableRowEl.append("<td>" + "<a href=" + "'"+ response.hits[i].recipe.url + "'" + "target ="+ "'" + "_blank_" + "'" + "</a>" + response.hits[i].recipe.label + "<td>")
        $("#recipeLists").append(newtableRowEl);   
    };

  });

  
});   

var barItems = [];

$("#blenderSubmitBtn").click(function(){
  addBar()
  storeBlender()
  ingredientsEl.value = ''

});

function addBar() {
  var barInput = $("#ingredients").val();
  barItems.push(barInput);
  document.getElementById("blender").innerHTML = barItems;
}


$("#generate-drink").click(function() {
  blenderEl.textContent = ''
  var drinkIngredients = barItems;
  var queryDrinkURL =
    "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" +
    drinkIngredients;

  $.ajax({
    url: queryDrinkURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

  var numberOfDrinksToLoop;

  if (response.drinks.length >= 5) {
    numberOfDrinksToLoop = 5;
  } else {
    numberOfDrinksToLoop = response.drinks.length;
  };


 
    for (i = 0; i < numberOfDrinksToLoop; i++) {
      console.log(response.drinks[i].strDrink);
      var recipeURL = "https://www.thecocktaildb.com/drink.php?c=" + response.drinks[i].idDrink
      var newtableRowEl = $("<tr>");
      newtableRowEl.append("<td>" + "<a href=" + "'" + recipeURL + "'" + "target ="+ "'" + "_blank_" + "'" + "</a>" + response.drinks[i].strDrink + "<td>")
      // newtableRowEl.append("<td>" + response.drinks[i].strDrink + "<td>")
      $("#drinkLists").append(newtableRowEl);   
    };

    // var recipeURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + response.drinks[i].idDrink
    console.log(recipeURL)
   
  
  });
  
  
});


var storedPantry = localStorage.getItem("pantryItems");
var storedBlender = localStorage.getItem("blenderItems");


function storePantry (){
localStorage.setItem("pantryItems",JSON.stringify([foodItems]));

};

function storeBlender (){
localStorage.setItem("blenderItems",JSON.stringify([barItems]));

};
 

});
