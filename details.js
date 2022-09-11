const detailContainer = document.querySelector(".drink-details");

const queryString = document.location.search;


const parameters = new URLSearchParams(queryString);

const id = parameters.get("idDrink");

console.log(id);


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=1#" + id;

console.log(url);



// async function to fetch the data
async function fetchDrinks() {
    try {
    const response = await fetch(url);
    const drinkDetails = await response.json();

    //console.log(drinkDetails);  
    

    // empty the string 
    detailContainer.innerHTML = "";

    
    const createHTML = drinkDetails.drinks;

    for (let i = 0; i < createHTML.length; i++) {
        
        detailContainer.innerHTML = `
                                        <h2>${createHTML[i].strDrink}</h2>
                                        <p>${("Ingredient 1: ") + createHTML[i].strIngredient1}</p>
                                        <p>${("Ingredient 2: ") + createHTML[i].strIngredient2}</p>
                                      `;
    };


 
     } catch(error) {
        console.log(error);
        //detailContainer.innerHTML = message("error", error);
    }
}

// calling the function 
fetchDrinks();

