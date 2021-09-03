document.addEventListener("DOMContentLoaded", () => {
    CarApi.getCars()
    OriginApi.getOrigins()
// debugger

    // Car.createCarForm = document.querySelector("car-form")
    // createCarForm.addEventListener("submit", (e) => {Car.createFormHandler(e)})
        // listen for "click" event on car container
    fleet = document.querySelector("car-fleet")
    yearInput = document.getElementById("car-year")
    makeInput = document.getElementById("car-make")
    modelInput = document.getElementById("car-model")
    imageInput = document.getElementById("car-image_url")
    dropdown = document.querySelector("#origin-dropdown")
    originNameInput = document.getElementById("origin_id")
    // let originId = parseInt(originNameInput)

    let addBtn = document.getElementById("add-btn")
    addBtn.addEventListener("click", (e) => {
        e.preventDefault()
        CarApi.createCar()
    })
    // yearInput.addEventListener("change", (e) => {Car.setYearInput(e)})
    // makeInput.addEventListener("change", (e) => {Car.setMakeInput(e)})
    // modelInput.addEventListener("change", (e) => {Car.setModelInput(e)})
    // imageInput.addEventListener("change", (e) => {Car.setImageInput(e)})
    // originNameInput.addEventListener("change", (e) => {Car.setOriginInput(e)})

    // const formData = document.getElementById("car-form")
    // formData.addEventListener("submit", (e) => {Car.createFormHandler(e)})
})

// function handleFormSubmit(e) {
//     e.preventDefault()
    
//     CarApi.createCar()
//     form.reset()
// }

const endPoint = "http://localhost:3000"
const carsURL = endPoint + "/api/v1/cars"

let fleet = document.getElementById("car-fleet")


// let yearInput = document.querySelector("#car-year")
// let makeInput = document.querySelector("#car-make")
// let modelInput = document.querySelector("#car-model")
// let imageInput = document.querySelector("#car-image_url")
// let dropdown = document.querySelector("#origin-dropdown")
// let originNameInput = document.querySelector("#origins")
// let originId = parseInt(originNameInput)
// CarApi.createCar()


// document.addEventListener("DOMContentLoaded", () => {
//     // fetch and load cars
//     getCars();
//     // listen for "submit" event on form and handle data
//     const createCarForm = document.querySelector("#create-car-form")
//     createCarForm.addEventListener("submit", (e) => createFormHandler(e))
//         // listen for "click" event on car container
//     const carContainer = document.querySelector("#car-container")


// })

// GET request for cars
// function getCars() {
//     fetch(endPoint)
//         .then(
//             response => response.json()
//         )
//         .then(cars => {
//             cars.data.forEach(car => { // use cars.data to access the car serializer
//                 const newCar = new Car(car.id, car.attributes); //car is a top level object, car.attributes is another object
//                 document.querySelector("#car-container").innerHTML += newCar.renderCarListing();
//                 // debugger
//             });
//         });
// }

/*  CREATE - Create a new car
    1. Create a car form
    2. Add an Event Listener
    3. Submit form, and fetch post to backend
    4. Do something with the returned object
 */

// function createCarForm() {
//     let carForm = document.getElementById("create-car-form");

//     carForm.innerHTML += `
//     <form id="create-car-form">

//     </form>`

//     createCarForm.addEventListener("submit", (e) => createFormHandler(e)); //this is a callback function that will be invoked automatically, therefore it does not require ()
// }

// function createFormHandler(e) {
//     // debugger
//     e.preventDefault()
//     // const yearInput = document.querySelector("#car-year").value
//     // const makeInput = document.querySelector("#car-make").value
//     // const modelInput = document.querySelector("#car-model").value
//     // const imageInput = document.querySelector("#car-image_url").value
//     // const originNameInput = document.querySelector("#origins").value
//     // // const originId = parseInt(originNameInput)
//     createCar(yearInput, makeInput, modelInput, imageInput, originNameInput)
// }

// // POST request for cars
// function postFetch(year, make, model, image_url, origin_id) {
//     //build body outside of fetch request
//     const bodyData = {
//         year,
//         make,
//         model,
//         image_url,
//         origin_id
//     }
//     fetch(endPoint, {
//             // POST request
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(bodyData)
//         })
//         .then(
//             response => response.json()
//         )
//         // .catch(err => console.log(err))
//         .then(car => {
//             console.log(car);

//             let carData = car;
//             let newCar = new Car(carData.id, carData);
//             //render JSON response
//             document.querySelector("#car-container").innerHTML += newCar.renderCarListing();
//         })
// }

// document.addEventListener("DOMContentLoaded", () => {
//     Car.listenDelete()
// })