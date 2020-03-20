
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
