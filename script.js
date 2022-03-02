const btnSearch = document.getElementById('btnSearch')
const inputSearch = document.getElementById('inputSearch')
const cardGroup = document.getElementById('cardGroup')
const cardDetailsGroup = document.getElementById('cardDetailsGroup')
const fetchLink = 'https://openapi.programming-hero.com/api/phones?search='
const fetchDetails = 'https://openapi.programming-hero.com/api/phone/'
const btnCollapse = document.getElementById('btnCollapse')
let count = 0

// Loading all the search results data.data.forEach((e) =>
const funSearch = () => {
  cardGroup.textContent = ""
  fetch(fetchLink + inputSearch.value)
    .then((response) => response.json())
    .then((data) => {
      for(e of data.data) {
        count++
        if (count == 21) {
          count = 0
          break
        }
        cardGroup.innerHTML += `
          <div class="col my-3">
            <div onClick="cardDetails(\'${e.slug}\')" class=" mx-auto " style="width: 10rem; cursor: pointer">
              <img style="img-fluid" src="${e.image}" class="card-img-top" alt="${e.phone_name}" />
              <div class="card card-body mt-3 p-2 rounded-3">
                <h5 class="card-title">${e.phone_name}</h5>
                <p class="card-text">
                    Brand: ${e.brand}
                </p>
              </div>
            </div>
          </div>
        `
      }
      count = 0
    })
}

btnSearch.addEventListener('click', funSearch)

// Showing Details of selected card
const cardDetails = (link) => {
  fetch(fetchDetails + link)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      scroll(0, 0)
      btnCollapse.classList.remove('d-none')
      cardDetailsGroup.classList.remove('d-none')
      cardDetailsGroup.innerHTML = `
          <div class="d-lg-flex justify-content-lg-around align-items-lg-center" style="width: 15rem">
            <img src="${
              data.data.image
            }" width= "5000" class="card-img-top border border-primary" alt="${
        data.data.name
      }" />
            
            <div class="card-body">
              <h5 class="card-title">${data.data.name}</h5>
              <table class="table">
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
                    <td colspan="2">${data.data.mainFeatures.sensors.join(
                      ' '
                    )}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
    })
}

// Collapse details
const hideDetails = () => {
  cardDetailsGroup.classList.add("d-none")
  btnCollapse.classList.add("d-none")
}

btnCollapse.addEventListener('click', hideDetails)