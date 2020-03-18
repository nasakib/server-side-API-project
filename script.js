var pantryEl = document.getElementById("pantry");
var blenderEl = document.getElementById("blender");
var drinkRecipesEl = document.getElementById("drink-recipes");
var groceriesEl = document.getElementById("groceries");
var ingredientsEl = document.getElementById("ingredients");
var inputEl =  document.getElementById("food-input");

// $("#city-search").click(function(event) {
//     event.preventDefault()
//     var city = $("#city-input").val().trim();
//     var tRow = $("<tr>")
//     console.log(city);
//     tRow.append(city);
//     $("tbody").append(tRow)
//     currentDayEl.innerHTML = moment().format('dddd, MMM Do');
  

 
var drinkIngredients = "vodka,orange_juice"
var queryDrinkURL = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + drinkIngredients;
    
  $.ajax({
    url: queryDrinkURL,
    method: "GET"
  }) 
  .then(function(response) {
        console.log(response)

  });
  
  var foodIngredients = "chicken"
  var queryFoodURL = "https://api.edamam.com/search?q=" + foodIngredients + "&app_id=4706df62&app_key=85b9a750ec733a4ab16ba62ec5d80e59"

  $.ajax({
    url: queryFoodURL,
    method: "GET"
  })
  
  .then(function(response) {
        console.log(response.hits)

  });

