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
            cars.data.forEach(car => { // use cars.data to access the car serializer
                let newCar = new Car(car.id, car.attributes); //car is a top level object, car.attributes is another object
                document.querySelector('#car-container').innerHTML += newCar.renderCarListing();
                // debugger
            });
        });
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

// POST request for cars
function postFetch(year, make, model, image_url, origin_id) {
    //build body outside of fetch request
    const bodyData = {
        year,
        make,
        model,
        image_url,
        origin_id
    }
    fetch(endPoint, {
            // POST request
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        // .catch(err => console.log(err))
        .then(car => {
            console.log(car);
            const carData = car.data;
            let newCar = new Car(carData, carData.attributes);
            //render JSON response
            document.querySelector('#car-container').innerHTML += newCar.renderCarListing();
        })
}