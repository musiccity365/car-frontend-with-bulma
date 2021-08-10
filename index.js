const endPoint = "http://localhost:3000/api/v1/cars";

document.addEventListener('DOMContentLoaded', () => {
    getCars();
    const createCarForm = document.querySelector("#create-car-form");
    createCarForm.addEventListener("submit", (e) => createFormHandler(e));

});

// GET request for cars
function getCars() {
    fetch(endPoint)
        .then(response => response.json())
        .then(cars => {
            cars.data.forEach(car => {
                render(car);
            });
        });
}

// POST request for cars
function postFetch(year, make, model, image_url, originId) {
    //build body outside of fetch request
    const bodyData = {
        year,
        make,
        model,
        image_url,
        originId
    }
    fetch(endPoint, {
            // POST request
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        // .catch(err => console.log(err))
        .then(car => {
            console.log(car);
            const carData = car.data;
            //render JSON response
            render(carData)
        })
}

function render(car) {
    const carMarkup = `
    <div data-id=${car.id}>
        <img src=${car.attributes.image_url}
        height="200" width="200">
        <h3>${car.attributes.year} ${car.attributes.make} ${car.attributes.model}</h3>
        <img src=${car.attributes.image_url} height="200" width="250">
        <p>${car.attributes.origin.name}</p>
        <button data-id=${car.id}>edit</button>
    </div>
    <br><br>`;
    // use data-id instead of id to enable the functionality of the button to be altered at a later time if necessary.
    document.querySelector('#car-container').innerHTML += carMarkup;
}

function createFormHandler(e) {
    e.preventDefault();
    const yearInput = document.querySelector('#input-year').value;
    const makeInput = document.querySelector('#input-make').value;
    const modelInput = document.querySelector('#input-model').value;
    const imageInput = document.querySelector('#input-url').value;
    const originId = parseInt(document.querySelector('#origins').value);
    postFetch(yearInput, makeInput, modelInput, imageInput, originId);
}