const searchBar = document.querySelector('.search-bar input[type="text"]');
const cards = document.querySelectorAll('.card');

searchBar.addEventListener('input', () => {
  const searchText = searchBar.value.toLowerCase();
  const regex = new RegExp(searchText, 'g');

  // Remove previous search highlights
  cards.forEach(card => {