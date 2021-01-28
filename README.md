# Project Overview

## Project Name

Recipe Roulette

## Project Description

This site takes a search term and uses the Edamam Recipe API to return 3(?) random recipes and their details. (Recipe Title, Image, Diet labels, Health Labels, ingredientLines, Source, and link to full recipe)

There is also a button to clear the results and re-run the search criteria to get a new random set of 3 recipes.

## API and Data Sample

Edamam Recipe API

```
"q": "chicken",
    "from": 0,
    "to": 3,
    "more": true,
    "count": 10248,
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3da1169eb633a5e4607890ebf7dee89f",
                "label": "Grilled Butterflied Chicken Recipe",
                "image": "https://www.edamam.com/web-img/7a2/7a2f41a7891e8a8f8a087a96930c6463.jpg",
                "source": "Serious Eats",
                "url": "http://www.seriouseats.com/recipes/2012/08/grilled-butterflied-chicken-recipe.html",
                "shareAs": "http://www.edamam.com/recipe/grilled-butterflied-chicken-recipe-3da1169eb633a5e4607890ebf7dee89f/chicken/alcohol-free/591-722-cal",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Alcohol-Free",
                    "Immuno-Supportive"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 whole chicken, 3 1/2 to 4 pounds",
                    "Kosher salt and freshly ground black pepper"
                ],
                "ingredients": [
                    {
                        "text": "1 whole chicken, 3 1/2 to 4 pounds",
                        "weight": 1700.9713875,
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "Kosher salt and freshly ground black pepper",
                        "weight": 10.205828325,
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Kosher salt and freshly ground black pepper",
                        "weight": 5.1029141625,
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],

```

## Wireframes

![imgur](https://i.imgur.com/0bvsQUd.png)

### MVP/PostMVP

#### MVP 

- A search term box and submit button
- Space for results (3?) with details to populate
- A refresh button that clears the results and populates the results space with 3(?) more results
- Randomizer built into the search to “guarantee” different results every time

#### PostMVP  

- Hide ingredients at first, with a button per result to reveal them
- Additional sorting based on dietary restriction

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval | Complete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Complete
|Jan 28| Initial Clickable Model  | Complete
|Jan 29| MVP | Incomplete
|Jan 30| Basic CSS/Layout | Incomplete
|Jan 31| Animations/Colors/Make it pretty | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

![Imgur](https://i.imgur.com/kbXVJ1E.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML | H | 3h | 1h | ~ |
| JS - Call API | H | 3h | 2h | ~ |
| JS - Append API Results | H | 3h | 2.5h | ~ |
| JS - Search Randomizer/Incrementer | H | 3h | 4h | ~ |
| JS - Shuffle Button | H | 4h | N/A | ~ |
| JS - Show/Hide Ingr. | L | 3h | ~ | ~ |
| CSS - Basic Layout | H | 6h | 8h | ~ |
| CSS - Colorways | M | 4h | 1h | ~ |
| CSS - Animations | L | 8h | ~ | ~ |
| Debugging/Refactoring | H | 6h | ~ | ~ |
| Total | H | 40h | 18.5h | ~ |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 

