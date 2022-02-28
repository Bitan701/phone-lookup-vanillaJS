const btnSearch = document.getElementById('btnSearch')
const inputSearch = document.getElementById('inputSearch')
const cardGroup = document.getElementById('cardGroup')
const fetchLink = "https://openapi.programming-hero.com/api/phones?search="

const funSearch = () => {
  fetch(fetchLink+inputSearch.value)
    .then((response) => response.json())
    .then((data) => {

    })
}

btnSearch.addEventListener('click', funSearch)
