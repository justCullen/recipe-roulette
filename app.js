const DOMAIN = 'https://api.edamam.com/search?';
const APP_ID = '52f197ec';
const APP_KEY = 'ab07ec683eee2c0e4a1bf835c068fd6b';
const BASE_URL = `${DOMAIN}app_id=${APP_ID}&app_key=${APP_KEY}`;

// Stores the text value of the input
// invokes getRecipes
const getCriteria = (e) => {
  e.preventDefault();
  let searchValue = document.querySelector('#recipe-search').value;
  getRecipes(searchValue);
}

// Make the API call with search criteria
// invokes renderRecipes
const getRecipes = async (searchTerm) => {
  try {
    let searchPhrase = `&from=0&to=3&q=${searchTerm}`
    let response = await axios.get(BASE_URL + searchPhrase)
    // console.log(response.data)
    renderRecipes(response.data.hits)
  } catch (err) {
    console.log(err)
  }
}

// Receive response.data.hits, iterate over it and render
// label, image, dietLabels[array], healthLabels[array],
// ingredientLines[array], source, url
const renderRecipes = (recipeData) => {
  let listAnchor = document.querySelector('#recipe-data')
  for (let i = 0; i < recipeData.length; i++) {
    let recipeDiv = document.createElement('div')
    recipeDiv.class = 'recipe-bucket'
    listAnchor.append(recipeDiv)

    let recipeLabel = document.createElement('h4')
    recipeLabel.textContent = recipeData[i].recipe.label
    recipeDiv.append(recipeLabel)

    let recipeImage = document.createElement('img')
    recipeImage.src = `${recipeData[i].recipe.image}`
    recipeDiv.append(recipeImage)

    let recipeURL = document.createElement('a')
    recipeURL.href = recipeData[i].recipe.url
    recipeURL.textContent = recipeData[i].recipe.source
    recipeDiv.append(recipeURL)
  }
}

// Event listener on submit button
// invokes getCriteria
const formInput = document.querySelector('form');
formInput.addEventListener('submit', getCriteria);