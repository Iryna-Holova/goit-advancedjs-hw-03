/**
 * Generates HTML markup for cat information.
 * @param {Object} data - An object containing cat information.
 * @param {string} data.url - The URL of the cat image.
 * @param {Array} data.breeds - An array of cat breeds.
 * @param {string} data.breeds[0].name - The name of the cat breed.
 * @param {string} data.breeds[0].description - The description of the cat breed.
 * @param {string} data.breeds[0].temperament - The temperament of the cat breed.
 * @returns {string} HTML markup for the cat information.
 */
const catInfoMarkup = data => `
  <img class="cat-img" src="${data.url}" alt="" />
  <div class="cat-text">
    <h1 class="cat-title">${data.breeds[0].name}</h1>
    <p>${data.breeds[0].description}</p>
    <p><span class="cat-temp">Temperament:</span> ${data.breeds[0].temperament}</p>
  </div>`;

/**
 * Generates HTML markup for an error message when a cat breed is not found.
 * @param {string} breed - The name of the cat breed that was not found.
 * @returns {string} HTML markup for the error message.
 */
const catErrorMarkup = breed => `
  <p class="error">Oops! ${breed} not found :(<br>Try reloading the page!</p>`;

export { catInfoMarkup, catErrorMarkup };
