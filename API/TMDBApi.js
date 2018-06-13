// API/TMDBApi.js
// dossier ou on defini les fonctions qui vont permettre d'echanger avec l'api
const API_TOKEN = "d474f24b444d730aa307390bbca2299f";

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

// API/TMDBApi.js

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}
