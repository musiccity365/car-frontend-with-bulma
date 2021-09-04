document.addEventListener("DOMContentLoaded", () => {
    CarApi.getCars()
    OriginApi.getOrigins()

    fleet = document.querySelector("car-fleet")
    yearInput = document.getElementById("car-year")
    makeInput = document.getElementById("car-make")
    modelInput = document.getElementById("car-model")
    imageInput = document.getElementById("car-image_url")
    dropdown = document.querySelector("#origin-dropdown")
    originNameInput = document.getElementById("origin_id")

    let addBtn = document.getElementById("add-btn")
    addBtn.addEventListener("click", (e) => {
        e.preventDefault()
        CarApi.createCar()
    })
})

const endPoint = "http://localhost:3000"
const carsURL = endPoint + "/api/v1/cars"

let fleet = document.getElementById("car-fleet")