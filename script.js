
let result = document.getElementById("result");
var drinkTitle = document.getElementById("drinktitle");
var drinkImage = document.getElementById("image1");
var instructionsDrink = document.getElementById("instructions");
var moviename = document.getElementById("movieName");
var actorname = document.getElementById("actorName");
var rating = document.getElementById("parentalRating")
var moviedescription = document.getElementById("movieDescription")
var movieImage = document.getElementById("image2")
var trackurl = document.getElementById("trackUrl")
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
let comedymovieurl = "https://cors-anywhere.herokuapp.com/itunes.apple.com/search?term=comedy&entity=movie&attribute=genreTerm";
let westernmovieurl = "https://cors-anywhere.herokuapp.com/itunes.apple.com/search?term=western&entity=movie&attribute=genreTerm";
let sportsmovieurl = "https://cors-anywhere.herokuapp.com/itunes.apple.com/search?term=sports&entity=movie&attribute=genreTerm";
let romanticmovieurl = "https://cors-anywhere.herokuapp.com/itunes.apple.com/search?term=romance&entity=movie&attribute=genreTerm";
let thrillermovieurl = "https://cors-anywhere.herokuapp.com/itunes.apple.com/search?term=thriller&entity=movie&attribute=genreTerm";
let horrormovieurl = "https://cors-anywhere.herokuapp.com/itunes.apple.com/search?term=horror&entity=movie&attribute=genreTerm";
let actionmovieurl = "https://cors-anywhere.herokuapp.com/itunes.apple.com/search?term=action-adventure&entity=movie&attribute=genreTerm";
let scifimovieurl = "https://cors-anywhere.herokuapp.com/itunes.apple.com/search?term=sci-fi-fantasy&entity=movie&attribute=genreTerm";


Sad.addEventListener('click', getSadDrink);
Sad.addEventListener('click', getComedyMovies);

function getSadDrink() {
  localStorage.setItem("history", "Sad");
  var ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML="";

    let userInput = "Tequila";
	fetch(url + userInput)
		.then(res => res.json())
		.then(data => {
      console.log("DATA: ", data)
      document.getElementById("Sad");
		
       console.log(data);
       
       var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
       console.log("randomSadDrink",randomItem);
       drinkTitle.textContent=randomItem.strDrink;
       drinkImage.src = randomItem.strDrinkThumb;
       instructionsDrink.textContent=randomItem.strInstructions;

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
        listEl6.textContent = randomItem.strIngredient6
        ingredientsList.appendChild(listEl6)
      }    

		});
}
function getComedyMovies() {
  movieImage.innerHTML="";
  fetch(comedymovieurl)
    .then(res => res.json())
      .then(data => {
      //document.getElementById("Margarita").value = "";
          console.log(data);
         
        var randomMovie = data.results[Math.floor(Math.random()*data.results.length)];
         console.log(randomMovie);
       moviename.textContent=randomMovie.trackName;
       movieImage.src = randomMovie.artworkUrl100;
           
       actorname.textContent=randomMovie.artistName;
       rating.textContent=randomMovie.contentAdvisoryRating;
       moviedescription.textContent=randomMovie.longDescription;
       trackurl.textContent=randomMovie.trackViewUrl;
       
      });
}

Happy.addEventListener('click', getHappyDrink);
Happy.addEventListener('click', getWesternMovies);

function getHappyDrink() {
  localStorage.setItem("history", "Happy");

  var ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML="";

    let userInput = "Margarita";
	fetch(url + userInput)
		.then(res => res.json())
		.then(data => {
      document.getElementById("Happy");
		
       console.log(data);
       
       var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
       console.log("randomHappyDrink",randomItem);
       drinkTitle.textContent=randomItem.strDrink;
       drinkImage.src = randomItem.strDrinkThumb;
       instructionsDrink.textContent=randomItem.strInstructions;

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
        listEl6.textContent = randomItem.strIngredient6
        ingredientsList.appendChild(listEl6)
      }    

		});
}
function getWesternMovies() {
  movieImage.innerHTML="";
  fetch(westernmovieurl)
    .then(res => res.json())
      .then(data => {
      //document.getElementById("Margarita").value = "";
          console.log(data);
         
        var randomMovie = data.results[Math.floor(Math.random()*data.results.length)];
         console.log(randomMovie);
       moviename.textContent=randomMovie.trackName;
       movieImage.src = randomMovie.artworkUrl100; 
       actorname.textContent=randomMovie.artistName;
       rating.textContent=randomMovie.contentAdvisoryRating;
       moviedescription.textContent=randomMovie.longDescription;
       trackurl.textContent=randomMovie.trackViewUrl;
       
      });
}

Combative.addEventListener('click', getCombativeDrink);
Combative.addEventListener('click', getCombativeMovies);

function getCombativeDrink() {
  localStorage.setItem("history", "Combative");
  var ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML="";
    let userInput = "Gin";
	fetch(url + userInput)
		.then(res => res.json())
		.then(data => {
      document.getElementById("Combative");
		
       console.log(data);
       
       var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
       console.log("randomCombativeDrink",randomItem);
       drinkTitle.textContent=randomItem.strDrink;
       drinkImage.src = randomItem.strDrinkThumb;
       instructionsDrink.textContent=randomItem.strInstructions;

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
        listEl6.textContent = randomItem.strIngredient6
        ingredientsList.appendChild(listEl6)
      }    

		});
}
function getCombativeMovies() {
  fetch(sportsmovieurl)
    .then(res => res.json())
      .then(data => {
      //document.getElementById("Margarita").value = "";
          console.log(data);
         
        var randomMovie = data.results[Math.floor(Math.random()*data.results.length)];
         console.log(randomMovie);
       moviename.textContent=randomMovie.trackName;
       movieImage.src = randomMovie.artworkUrl100; 
       actorname.textContent=randomMovie.artistName;
       rating.textContent=randomMovie.contentAdvisoryRating;
       moviedescription.textContent=randomMovie.longDescription;
       trackurl.textContent=randomMovie.trackViewUrl;
       
      });
}

Flirty.addEventListener('click', getFlirtyDrink);
Flirty.addEventListener('click', getFlirtyMovies);

function getFlirtyDrink() {
  localStorage.setItem("history", "Flirty");
  var ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML="";
    let userInput = "Negroni";
	fetch(url + userInput)
		.then(res => res.json())
		.then(data => {
      document.getElementById("Flirty");
		
       console.log(data);
       
       var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
       console.log("randomFlirtyDrink",randomItem);
       drinkTitle.textContent=randomItem.strDrink;
       drinkImage.src = randomItem.strDrinkThumb;
       instructionsDrink.textContent=randomItem.strInstructions;

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
        listEl6.textContent = randomItem.strIngredient6
        ingredientsList.appendChild(listEl6)
      }    

		});
}
function getFlirtyMovies() {
  fetch(romanticmovieurl)
    .then(res => res.json())
      .then(data => {
      //document.getElementById("Margarita").value = "";
          console.log(data);
         
        var randomMovie = data.results[Math.floor(Math.random()*data.results.length)];
         console.log(randomMovie);
       moviename.textContent=randomMovie.trackName;
       movieImage.src = randomMovie.artworkUrl100;
       actorname.textContent=randomMovie.artistName;
       rating.textContent=randomMovie.contentAdvisoryRating;
       moviedescription.textContent=randomMovie.longDescription;
       trackurl.textContent=randomMovie.trackViewUrl;
       
      });
}

Mysterious.addEventListener('click', getMysteryDrink);
Mysterious.addEventListener('click', getMysteryMovies);

function getMysteryDrink() {
  localStorage.setItem("history", "Mysterious");
  var ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML="";
    let userInput = "Vodka";
	fetch(url + userInput)
		.then(res => res.json())
		.then(data => {
      document.getElementById("Mysterious");
		
       console.log(data);
       
       var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
       console.log("randomMysteryDrink",randomItem);
       drinkTitle.textContent=randomItem.strDrink;
       drinkImage.src = randomItem.strDrinkThumb;
       instructionsDrink.textContent=randomItem.strInstructions;

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
        listEl6.textContent = randomItem.strIngredient6
        ingredientsList.appendChild(listEl6)
      }    

		});
}
function getMysteryMovies() {
  fetch(thrillermovieurl)
    .then(res => res.json())
      .then(data => {
      //document.getElementById("Margarita").value = "";
          console.log(data);
         
        var randomMovie = data.results[Math.floor(Math.random()*data.results.length)];
         console.log(randomMovie);
       moviename.textContent=randomMovie.trackName;
       movieImage.src = randomMovie.artworkUrl100;
       actorname.textContent=randomMovie.artistName;
       rating.textContent=randomMovie.contentAdvisoryRating;
       moviedescription.textContent=randomMovie.longDescription;
       trackurl.textContent=randomMovie.trackViewUrl;
       
      });
}

Scary.addEventListener('click', getScaryDrink);
Scary.addEventListener('click', getScaryMovies);

function getScaryDrink() {
  localStorage.setItem("history", "Scary");
  var ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML="";
    let userInput = "Rum";
	fetch(url + userInput)
		.then(res => res.json())
		.then(data => {
      document.getElementById("Scary");
		
       console.log(data);
       
       var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
       console.log("randomScaryDrink",randomItem);
       drinkTitle.textContent=randomItem.strDrink;
       drinkImage.src = randomItem.strDrinkThumb;
       instructionsDrink.textContent=randomItem.strInstructions;

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
        listEl6.textContent = randomItem.strIngredient6
        ingredientsList.appendChild(listEl6)
      }    

		});
}
function getScaryMovies() {
  fetch(horrormovieurl)
    .then(res => res.json())
      .then(data => {
      //document.getElementById("Margarita").value = "";
          console.log(data);
         
        var randomMovie = data.results[Math.floor(Math.random()*data.results.length)];
         console.log(randomMovie);
       moviename.textContent=randomMovie.trackName;
       movieImage.src = randomMovie.artworkUrl100;
       actorname.textContent=randomMovie.artistName;
       rating.textContent=randomMovie.contentAdvisoryRating;
       moviedescription.textContent=randomMovie.longDescription;
       trackurl.textContent=randomMovie.trackViewUrl;
       
      });
}

Action.addEventListener('click', getActionDrink);
Action.addEventListener('click', getActionMovies);

function getActionDrink() {
  localStorage.setItem("history", "Action");
  var ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML="";
    let userInput = "Brandy";
	fetch(url + userInput)
		.then(res => res.json())
		.then(data => {
      document.getElementById("Action");
		
       console.log(data);
       
       var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
       console.log("randomActionDrink",randomItem);
       drinkTitle.textContent=randomItem.strDrink;
       drinkImage.src = randomItem.strDrinkThumb;
       instructionsDrink.textContent=randomItem.strInstructions;

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
        listEl6.textContent = randomItem.strIngredient6
        ingredientsList.appendChild(listEl6)
      }    

		});
}
function getActionMovies() {
  fetch(actionmovieurl)
    .then(res => res.json())
      .then(data => {
      //document.getElementById("Margarita").value = "";
          console.log(data);
         
        var randomMovie = data.results[Math.floor(Math.random()*data.results.length)];
         console.log(randomMovie);
       moviename.textContent=randomMovie.trackName;
       movieImage.src = randomMovie.artworkUrl100;
       actorname.textContent=randomMovie.artistName;
       rating.textContent=randomMovie.contentAdvisoryRating;
       moviedescription.textContent=randomMovie.longDescription;
       trackurl.textContent=randomMovie.trackViewUrl;
       
      });
}

Fantasy.addEventListener('click', getFantasyDrink);
Fantasy.addEventListener('click', getFantasyMovies);

function getFantasyDrink() {
  localStorage.setItem("history", "Fantasy");
  var ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML="";
    let userInput = "Mojito";
	fetch(url + userInput)
		.then(res => res.json())
		.then(data => {
      document.getElementById("Fantasy");
		
       console.log(data);
       
       var randomItem = data.drinks[Math.floor(Math.random()*data.drinks.length)];
       console.log("randomFantasyDrink",randomItem);
       drinkTitle.textContent=randomItem.strDrink;
       drinkImage.src = randomItem.strDrinkThumb;
       instructionsDrink.textContent=randomItem.strInstructions;

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
        listEl6.textContent = randomItem.strIngredient6
        ingredientsList.appendChild(listEl6)
      }    

		});
}
function getFantasyMovies() {
  fetch(scifimovieurl)
    .then(res => res.json())
      .then(data => {
      //document.getElementById("Margarita").value = "";
          console.log(data);
         
        var randomMovie = data.results[Math.floor(Math.random()*data.results.length)];
         console.log(randomMovie);
       moviename.textContent=randomMovie.trackName;
       movieImage.src = randomMovie.artworkUrl100;
       actorname.textContent=randomMovie.artistName;
       rating.textContent=randomMovie.contentAdvisoryRating;
       moviedescription.textContent=randomMovie.longDescription;
       trackurl.textContent=randomMovie.trackViewUrl;
       
      });
}

// let Sad = document.getElementById("Sad");
// let Happy = document.getElementById("Happy");
// let Combative = document.getElementById("Combative");
// let Flirty = document.getElementById("Flirty");
// let Mysterious = document.getElementById("Mysterious");
// let Scary = document.getElementById("Scary");
// let Action = document.getElementById("Action");
// let Fantasy = document.getElementById("Fantasy");

let history = localStorage.getItem("history") || "none";

if(history == "Sad") {
  Sad.click()
} else if(history == "Happy") {
  Happy.click();
}
else if(history == "Combative") {
  Combative.click();
}
else if(history == "Flirty") {
  Flirty.click();
}
else if(history == "Mysterious") {
  Mysterious.click();
}
else if(history == "Scary") {
  Scary.click();
}
else if(history == "Action") {
  Action.click();
}
else if(history == "Fantasy") {
  Fantasy.click();
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

/*Serious.addEventListener('click', getCombativeDrink);

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


*/