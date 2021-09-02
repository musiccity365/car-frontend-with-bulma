class Car {

    static all = []

    static container = document.getElementById('car-fleet')

    constructor({ id, year, make, model, image_url, origin }) {
        this.id = id
        this.year = year
        this.make = make
        this.model = model
        this.image_url = image_url
        this.origin = origin

        // this.element = document.createElement('car-listing')
        // this.element.id = `car-${id}`
        // this.element.dataset.id = id

        // this.element.addEventListener('click', this.deleteCar) //callback function

        Car.all.push(this)
            // console.log(this);
            // debugger
    }

    renderCarListing() {
        // debugger
        let carElement = document.getElementById("fleet-container")
        let eachCar = document.createElement("div")
        eachCar.id = `${this.id}`
        eachCar.className = "car-listing"

        eachCar.innerHTML += `
        <div data-id=${eachCar.id}>
            <h3>${this.year} ${this.make} ${this.model}</h3>
            <p>${this.origin.name}</p>
            <img src=${this.image_url} height="200" width="250">
        </div>
            <button data-id=${eachCar.id} data-action="delete">Delete</button>
        <br><br>`
        carElement.appendChild(eachCar)

    }

    static setYearInput(){
        yearInput = document.getElementById("car-year").value;
        this.year = carYear;
    }

    deleteCar = (e) => {
        this.element.remove()
        CarApi.deleteCar(this.id)
    }

    static filterByOrigin(filteredOrigin) {
        if (filteredOrigin) {
            for (const car of Car.all) {
                if (car.originId === parseInt(filteredOrigin.id)) {
                    origin.style.display = ""
                } else {
                    origin.style.display = "none"
                }
            }
        } else {
            for (const car of Car.all) {
                origin.style.display = ""
            }
        }
    }
}