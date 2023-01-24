
let result = document.getElementById("result");
var drinkTitle = document.getElementById("drinktitle");
var ingredientsList = document.getElementById("ingredients");
var instructionsDrink = document.getElementById("instructions")
let searchBtn = document.getElementById("search-btn");
let Sad = document.getElementById("Sad");
let Happy = document.getElementById("Happy");
let Combative = document.getElementById("Combative");
let Flirty = document.getElementById("Flirty");
let Mysterious = document.getElementById("Mysterious");
let Scary = document.getElementById("Scary");
let Action = document.getElementById("Action");
let Fantasy = document.getElementById("Fantasy");
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

Sad.addEventListener('click', getSadDrink);

function getSadDrink() {
    let userInput = "Tequila";
	fetch(url + userInput)
		.then(res => res.json())
		.then(data => {
      document.getElementById("Sad");
		//document.getElementById("Margarita").value = "";
       console.log(data);
       
       var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
       console.log("randomSadDrink",randomItem);
       drinkTitle.textContent=randomItem.strDrink;
       instructionsDrink.textContent=randomItem.strInstructions;

      //  let i = 1;
      //  let ingredient = `strIngredient${i}`;
      //  let currentIngredient =randomItem.ingredient
      //  console.log("current ingredient",currentIngredient)
      //  while(currentIngredient !== null){
      //     console.log(currentIngredient)
      //     ingredient = "strIngredient" + i;
      //     currentIngredient =randomItem.ingredient
      //     i++
      //  }
      if(randomItem.strIngredients !== null){
        let listEl1 = document.createElement('li')
        listEl1.textContent = randomItem.strIngredient1
        ingredientsList.appendChild(listEl1)
      } 

      if(randomItem.strIngredient2 !== null){      
        let listEl2 = document.createElement('li')
        listEl2.textContent = randomItem.strIngredient2
        ingredientsList.appendChild(listEl2)
      }    

      if(randomItem.strIngredient3 !== null){      
        let listEl3 = document.createElement('li')
        listEl3.textContent = randomItem.strIngredient3
        ingredientsList.appendChild(listEl3)
      }    

      if(randomItem.strIngredient4 !== null){      
        let listEl4 = document.createElement('li')
        listEl4.textContent = randomItem.strIngredient4
        ingredientsList.appendChild(listEl4)
      }    

      if(randomItem.strIngredient5 !== null){      
        let listEl5 = document.createElement('li')
        listEl5.textContent = randomItem.strIngredient5
        ingredientsList.appendChild(listEl5)
      }    

      if(randomItem.strIngredient6 !== null){      
        let listEl6 = document.createElement('li')
        listEl6.textContent = randomItem.strIngredient3
        ingredientsList.appendChild(listEl6)
      }    

		});
}

// Happy.addEventListener('click', getHappyDrink);

// function getHappyDrink () {
// 	fetch(url + "Vodka")
// 		.then(res => res.json())
// 		.then(data => {
// 		//document.getElementById("user-inp").value = "";
//         console.log(data);
       
//         var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
//         console.log(randomItem);
// 		});
// }

Serious.addEventListener('click', getCombativeDrink);

function getSeriousDrink () {
	fetch(url + "Gin")
		.then(res => res.json())
		.then(data => {
		//document.getElementById("user-inp").value = "";
        console.log(data);
        
        var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
        console.log(randomItem);
		});
}


let getInfo = () => {
  let userInp = document.getElementById("user-inp").value;
  if (userInp.length == 0) {
    result.innerHTML = `<h3 class="msg">The input field cannot be empty</h3>`;
  } else {
    fetch(url + userInp)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("user-inp").value = "";
        console.log(data);
        console.log(data.drinks[0]);
        let myDrink = data.drinks[0];
        console.log(myDrink.strDrink);
        console.log(myDrink.strDrinkThumb);
        console.log(myDrink.strInstructions);
        let count = 1;
        let ingredients = [];
        for (let i in myDrink) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("strIngredient") && myDrink[i]) {
            ingredient = myDrink[i];
            if (myDrink[`strMeasure` + count]) {
              measure = myDrink[`strMeasure` + count];
            } else {
              measure = "";
            }
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }
        console.log(ingredients);
        result.innerHTML = `
      <img src=${myDrink.strDrinkThumb}>
      <h2>${myDrink.strDrink}</h2>
      <h3>Ingredients:</h3>
      <ul class="ingredients"></ul>
      <h3>Instructions:</h3>
      <p>${myDrink.strInstructions}</p>
      `;
        let ingredientsCon = document.querySelector(".ingredients");
        ingredients.forEach((item) => {
          let listItem = document.createElement("li");
          listItem.innerText = item;
          ingredientsCon.appendChild(listItem);
        });
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Please enter a valid input</h3>`;
      });
  }
};



window.addEventListener("load", getInfo);
searchBtn.addEventListener("click", getInfo);


// var displayEL =$('#display');
//var showMoodBtnEl = $('#show-mood-btn');
//var buttonDisplayEl =$('#buttons');
// var clearEl = $('#clear');

// console.log(fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'))
//moodButtonEl.on('click', function() {
//add function here to return a cocktail based on the mood click button.  Not sure how to do this yet//
//console.log('return drink');


// Click on a button and return a result//
// Need to create a button//
// Identify the Button - Variable //
// Create a click on event listener for the button//
// Build a function that executes on click//
// Function calls and displays a cocktail name from third party API//


