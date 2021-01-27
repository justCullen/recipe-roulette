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
// uses getRandomInt to generate random # based on result.data.count
// 
// invokes renderRecipes
const getRecipes = async (searchTerm) => {
  try {
    let searchPhrase = `&q=${searchTerm}`
    let response = await axios.get(BASE_URL + searchPhrase)
    // let upperLimit = response.data.count - 3
    // let randomGen = getRandomInt(0, upperLimit)
    // let maxGen = randomGen + 3
    // let recipeSet = []
    // console.log(response.data.hits)
    // for (let i = randomGen; i < maxGen; i++) {
    //   console.log(i)
    //   recipeSet.push(response.data.hits[i])
    // }
    renderRecipes(response.data.hits)
    // console.log(recipeSet)

  } catch (err) {
    console.log(err)
  }
}

// Randomizer from MDN
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
    recipeImage.src = recipeData[i].recipe.image
    recipeDiv.append(recipeImage)

    let recipeDiet = document.createElement('h5')
    recipeDiet.textContent = recipeData[i].recipe.dietLabels.join("\r\n")
    recipeDiv.append(recipeDiet)

    let recipeHealth = document.createElement('h5')
    recipeHealth.textContent = recipeData[i].recipe.healthLabels.join("\r\n")
    recipeDiv.append(recipeHealth)

    let recipeIngredients = document.createElement('h5');
    recipeIngredients.textContent = recipeData[i].recipe.ingredientLines.join("\r\n")
    recipeDiv.append(recipeIngredients);

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