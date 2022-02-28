const btnSearch = document.getElementById('btnSearch')
const inputSearch = document.getElementById('inputSearch')
const cardGroup = document.getElementById('cardGroup')
const cardDetailsGroup = document.getElementById('cardDetailsGroup')
const fetchLink = 'https://openapi.programming-hero.com/api/phones?search='
const fetchDetails = 'https://openapi.programming-hero.com/api/phone/'

const funSearch = () => {
  fetch(fetchLink + inputSearch.value)
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((e) => {
        cardGroup.innerHTML += `
        <div onClick="cardDetails(\'${e.slug}\')" class="card" style="width: 18rem">
            <img src="${e.image}" class="card-img-top" alt="${e.phone_name}" />
            <div class="card-body">
                <h5 class="card-title">${e.phone_name}</h5>
                <p class="card-text">
                    Brand: ${e.brand}
                </p>
            </div>
        </div>
        `
      })
    })
}

btnSearch.addEventListener('click', funSearch)

const cardDetails = (link) => {
  fetch(fetchDetails + link)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

