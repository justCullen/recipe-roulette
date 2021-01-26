const DOMAIN = 'https://api.edamam.com/search?';
const APP_ID = '52f197ec';
const APP_KEY = 'ab07ec683eee2c0e4a1bf835c068fd6b';
const BASE_URL = `${DOMAIN}?app_id=${APP_ID}&app_key=${APP_KEY}`;

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
    let searchPhrase = `$q=${searchTerm}`
    console.log(searchPhrase)
    let response = await axios.get(BASE_URL + searchPhrase)
    console.log(response)
    // renderRecipes(response)
  } catch (err) {
    console.log(err)
  }
}

// Event listener on submit button
// invokes getCriteria
const formInput = document.querySelector('form');
formInput.addEventListener('submit', getCriteria);