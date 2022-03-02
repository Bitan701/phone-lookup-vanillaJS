const btnSearch = document.getElementById('btnSearch')
const inputSearch = document.getElementById('inputSearch')
const cardGroup = document.getElementById('cardGroup')
const cardDetailsGroup = document.getElementById('cardDetailsGroup')
const fetchLink = 'https://openapi.programming-hero.com/api/phones?search='
const fetchDetails = 'https://openapi.programming-hero.com/api/phone/'
const btnCollapse = document.getElementById('btnCollapse')

const funSearch = () => {
  fetch(fetchLink + inputSearch.value)
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((e) => {
        cardGroup.innerHTML += `
        <div class="col">
        <div onClick="cardDetails(\'${e.slug}\')" class="card mx-auto" style="width: 10rem">
            <img style="img-fluid" src="${e.image}" class="card-img-top" alt="${e.phone_name}" />
            <div class="card-body">
                <h5 class="card-title">${e.phone_name}</h5>
                <p class="card-text">
                    Brand: ${e.brand}
                </p>
            </div>
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
    .then((data) => {
        console.log(data)
        cardDetailsGroup.innerHTML = `
        <div class="" style="width: 15rem">
            <img src="${data.data.image}" class="card-img-top" alt="${data.data.name}" />
            <div class="card-body">
                <h5 class="card-title">${data.data.name}</h5>
                  <table class="table text-wrap">
                  <tbody>
                    <tr>
                      <th scope="row">Brand:</th>
                      <td>${data.data.brand}</td>
                    </tr>
                    <tr>
                      <th scope="row">Release Date:</th>
                      <td>${data.data.releaseDate}</td>
                    </tr>
                    <tr>
                      <th scope="row">Chipset:</th>
                      <td colspan="2">${data.data.mainFeatures.chipSet}</td>
                    </tr>
                    <tr>
                      <th scope="row">Display Size:</th>
                      <td colspan="2">${data.data.mainFeatures.displaySize}</td>
                    </tr>
                    <tr>
                      <th scope="row">Memory:</th>
                      <td colspan="2">${data.data.mainFeatures.memory}</td>
                    </tr>
                    <tr>
                      <th scope="row">Sensors:</th>
                      <td colspan="2">${data.data.mainFeatures.sensors}</td>
                    </tr>
                  </tbody>
                  </table>
            </div>
        </div>
        `
    })
}

