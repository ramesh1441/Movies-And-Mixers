let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let Sad = document.getElementById("Sad");
let Happy = document.getElementById("Happy");
let Serious = document.getElementById("Serious");
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

Sad.addEventListener('click', getSadDrink);

function getSadDrink() {
    let userInput = "Tequila";
	fetch(url + userInput)
		.then(res => res.json())
		.then(data => {
		//document.getElementById("Margarita").value = "";
        console.log(data);
       
       var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
       console.log(randomItem);
		});
}

Happy.addEventListener('click', getHappyDrink);

function getHappyDrink () {
	fetch(url + "Vodka")
		.then(res => res.json())
		.then(data => {
		//document.getElementById("user-inp").value = "";
        console.log(data);
       
        var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
        console.log(randomItem);
		});
}

Serious.addEventListener('click', getSeriousDrink);

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


