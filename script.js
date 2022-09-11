



// Making a call to the API:

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=1#";

const resultsContainer = document.querySelector(".results");

// async function to fetch the data
async function callApiDrinks() {
    try {
    const response = await fetch(url);
    const drinkDetails = await response.json();

    //console.log(drinkDetails);   

    // empty the string 
    resultsContainer.innerHTML = "";
    

    const results = drinkDetails.drinks;

    for (let i = 0; i < results.length; i++) {
        console.log(i);
        
        resultsContainer.innerHTML += `<a href="details.html?i=${results.idDrink}" class="card">
                                        <h2>${results[i].strDrink}</h2>
                                        <p>${("Ingredient 1: ") + results[i].strIngredient1}</p>
                                        <p>${("Ingredient 2: ") + results[i].strIngredient2}</p>
                                     </a> `;
    };
 
     } catch(error) {
        console.log(error);
        //resultsContainer.innerHTML = message("error", error);
    }
}

// calling the function 
callApiDrinks();









