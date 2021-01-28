const DOMAIN = 'https://api.edamam.com/search?';
const APP_ID = '52f197ec';
const APP_KEY = 'ab07ec683eee2c0e4a1bf835c068fd6b';
const BASE_URL = `${DOMAIN}app_id=${APP_ID}&app_key=${APP_KEY}`;
const recipeSpot = document.querySelector('#recipe-data')

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
  if (recipeSpot.lastChild) {
    fromValue = parseInt(recipeSpot.lastChild.querySelector('p').textContent, 10) + 1
    toValue = fromValue + 3
  } else {
    fromValue = 0
    toValue = 3
  }
  try {
    let searchPhrase = `&q=${searchTerm}`
    let searchRange = `&from=${fromValue}&to=${toValue}`
    let response = await axios.get(BASE_URL + searchPhrase + searchRange)
    // console.log(response.data.hits)
    renderRecipes(response.data.hits)
  } catch (err) {
    console.log(err)
  }
}

// Receive response.data.hits, iterate over it and render
// label, image, dietLabels[array], healthLabels[array],
// ingredientLines[array], source, url
// invokes removeRecipes
const renderRecipes = (recipeData) => {
  if (recipeSpot.lastChild) {
    j = parseInt(recipeSpot.lastChild.querySelector('p').textContent, 10) + 1
  } else {
    j = 0
  }
  removeRecipes()
  for (let i = 0; i < recipeData.length; i++) {
    let recipeDiv = document.createElement('div')
    recipeDiv.className = 'recipe-bucket'
    recipeSpot.append(recipeDiv)

    let recipeLabel = document.createElement('h4')
    recipeLabel.className = 'recipe-label'
    recipeLabel.textContent = recipeData[i].recipe.label
    recipeDiv.append(recipeLabel)

    let recipeImage = document.createElement('img')
    recipeImage.className = 'recipe-image'
    recipeImage.src = recipeData[i].recipe.image
    recipeDiv.append(recipeImage)

    let recipeDiet = document.createElement('h5')
    recipeDiet.textContent = recipeData[i].recipe.dietLabels.join("\r\n")
    recipeDiv.append(recipeDiet)

    let recipeHealth = document.createElement('h5')
    recipeHealth.textContent = recipeData[i].recipe.healthLabels.join("\r\n")
    recipeDiv.append(recipeHealth)

    let ingButton = document.createElement('button')
    ingButton.type = 'button'
    ingButton.name = 'button'
    ingButton.value = 'button'
    ingButton.innerText = 'Show/Hide'
    ingButton.className = `ing-button`
    recipeDiv.append(ingButton)

    let recipeIngredients = document.createElement('h5');
    recipeIngredients.textContent = recipeData[i].recipe.ingredientLines.join("\r\n")
    recipeIngredients.className = `recipe-ing`
    recipeDiv.append(recipeIngredients);

    let recipeURL = document.createElement('a')
    recipeURL.href = recipeData[i].recipe.url
    recipeURL.textContent = recipeData[i].recipe.source
    recipeDiv.append(recipeURL)

    let trackNum = document.createElement('p')
    trackNum.textContent = j
    recipeDiv.append(trackNum)
    j++

    const showHideIng = () => {
      // console.log('clicked!')
      ingListing = document.querySelector(`.recipe-ing`)
      ingListing.className = 'hide-it'
    }
    
    const ingButtonListener = document.querySelector(`.ing-button`);
    ingButtonListener.addEventListener('click', showHideIng);
  }
}

// Event listener on submit button
// invokes getCriteria
const formInput = document.querySelector('form');
formInput.addEventListener('submit', getCriteria);

// Clear recipes
const removeRecipes = () => {
  while (recipeSpot.lastChild) {
    recipeSpot.removeChild(recipeSpot.lastChild)
  }
}

// const showHideIng = () => {
//   console.log('clicked!')
//   ingListing = document.querySelector('.recipe-0')
//   ingListing.className = 'hide-it'
// }

// const ingButton = document.querySelector('.ing-button-0');
// ingButton.addEventListener('click', showHideIng);