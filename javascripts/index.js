// FETCH
/* 
  fetch is given to us by javascript
  it's a way for us to get information from an api

  api: application programming interface

  Overview of feature:
  When the page loads, we want to fetch the starwars characters and then we want to display them in the ul.

  1. At what time should i be able to trigger this event? (when) DOMContentLoaded X

  2. What triggers the event? (cause) DOMContentLoaded X

  3. What happens when the event is triggered. (effect) Fetch the swapi api, parse the data into Li's and put them into the ul.
*/

const baseUrl = "https://swapi.dev/api/";

const getList = () => document.getElementById('list');

// Event Handlers
// const loadCharacters = () => {
//   // Fetch the swapi api,
//   // parse the data into Li's
//   // put them into the ul.
//   console.log('a')
//   fetch(baseUrl + "people/")
//     .then(function(response){
//       if(response.status !== 200) {
//        throw new Error(response.statusText) 
//       }
//       console.log('b')
//       return response.json();
//     })
//     .then(data => {
//       console.log('c')
//       data.results.forEach(char => createCharacterLi(char))
//     })
//     .catch((error) => {
//       console.log('d')
//       console.log(error)
//     })

//   // a, d
//   // a, b
// }

const loadCharacters = async () => {
  console.log('b')
  const response = await fetch(baseUrl + 'people/')
  console.log('c')
  const data = await response.json()
  console.log('d')
  data.results.forEach(char => createCharacterLi(char));
  console.log('e')
}

const createCharacterLi = (character) => {
  const li = document.createElement('li');
  li.innerText = character.name
  getList().appendChild(li);
}

document.addEventListener('DOMContentLoaded', async () => {
  console.log('a')
  await loadCharacters();
  console.log('f')

})