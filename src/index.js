const endPoint = "http://localhost:3000/api/v1/cars";

document.addEventListener('DOMContentLoaded', () => {
    // fetch and load cars
    getCars();
    // listen for 'submit' event on form and handle data
    const createCarForm = document.querySelector("#create-car-form")
    createCarForm.addEventListener("submit", (e) => createFormHandler(e))
        // listen for 'click' event on car container
    const carContainer = document.querySelector("#car-container")

    // render edit form once button is clicked
    // carContainer.addEventListener('click', (e) => {
    //     const id = parseInt(e.target.dataset.id)
    //     const car = Car.findById(id)
    //     document.querySelector('#update-car').innerHTML = car.renderUpdateForm()
    // });
    // // listen for the submit event of the edit form and handle the data
    // document.querySelector('#update-car').addEventListener('submit', e => updateFormHandler(e))

})

// GET request for cars
function getCars() {
    fetch(endPoint)
        .then(
            response => response.json()
        )
        .then(cars => {
            cars.data.forEach(car => { // use cars.data to access the car serializer
                const newCar = new Car(car.id, car.attributes); //car is a top level object, car.attributes is another object
                document.querySelector('#car-container').innerHTML += newCar.renderCarListing();
                // debugger
            });
        });
}

/*  CREATE - Create a new car
    1. Create a car form
    2. Add an Event Listener
    3. Submit form, and fetch post to backend
    4. Do something with the returned object
 */

function createCarForm() {
    let carForm = document.getElementById("create-car-form");

    carForm.innerHTML += `
    <form id="create-car-form">

    </form>`

    createCarForm.addEventListener("submit", (e) => createFormHandler(e)); //this is a callback function that will be invoked automatically, therefore it does not require ()
}

function createFormHandler(e) {
    e.preventDefault()
    const yearInput = document.querySelector('#car-year').value
    const makeInput = document.querySelector('#car-make').value
    const modelInput = document.querySelector('#car-model').value
    const imageInput = document.querySelector('#car-image_url').value
    const originInput = document.querySelector('#origins').value
    const originId = parseInt(originInput)
    postFetch(yearInput, makeInput, modelInput, imageInput, originInput)
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
        .then(
            response => response.json()
        )
        // .catch(err => console.log(err))
        .then(car => {
            console.log(car);

            let carData = car;
            let newCar = new Car(carData.id, carData);
            //render JSON response
            document.querySelector('#car-container').innerHTML += newCar.renderCarListing();
        })
}

document.addEventListener('DOMContentLoaded', () => {
    Car.listenDelete()
})

// Handle the Data from the Event
/*
function updateFormHandler(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const car = Car.findById(id);
    const year = e.target.querySelector('#car-year').value;
    const make = e.target.querySelector('#car-make').value;
    const model = e.target.querySelector('#car-model').value;
    const image_url = e.target.querySelector('#car-image_url').value;
    const origin_id = parseInt(e.target.querySelector('#origins').value);
    patchCar(car, year, make, model, image_url, origin_id);
}

// Send the PATCH Request to the Backend

function patchCar(car, year, make, model, image_url, origin_id) {
    const bodyJSON = { year, make, model, image_url, origin_id }
    fetch(`http://localhost:3000/api/v1/cars/${car.id}/origin_id`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(bodyJSON),
        })
        .then(res => res.json())
        // our backend responds with the updated car instance represented as JSON
        .then(updatedNote => console.log(updatedNote));
};*/