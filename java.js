// Module 4 
// oppgave 1 

// Make a call to the following endpoint:

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Whitecap Margarita";

const resultsContainer = document.querySelector(".results");

// we need the code in an async function as we are using the await keyword
async function callApiDrinks() {
    try {
    const response = await fetch(url);
    const drinkData = await response.json();

    console.log(drinkData);   

    resultsContainer.innerHTML = "";
    

    const results = drinkData.drinks;
    
    results.forEach(function (results) {
        resultsContainer.innerHTML = `<h2>${results.strDrink}</h2>
                                    <p>${("Ingredient 1: ") + results.strIngredient1}</h2>
                                    <p>${("Ingredient 2: ") +results.strIngredient2}</h2>
                               `;
    });
 
     } catch(error) {
        console.log(error);
    }
}


callApiDrinks();
         
      
        
