class Car {
    constructor(id, carAttributes) {
        this.id = id
        this.year = carAttributes.year
        this.make = carAttributes.make
        this.model = carAttributes.model
        this.image_url = carAttributes.image_url
        this.origin = carAttributes.origin
        Car.all.push(this)
        console.log(this);
        // debugger
    }

    renderCarListing(car) {
        // debugger

        return `
        <div data-id=${this.id}>
            <h3>${this.year} ${this.make} ${this.model}</h3>
            <p>${this.origin.name}</p>
            <img src=${this.image_url} height="200" width="250">
            <br><br>
            <button data-id=${this.id} class="delete" data-action="delete">Delete</button>
        </div>
        <br><br>`;
    }

    static listenDelete() {
        const carContainer = document.querySelector('#car-container')
        carContainer.addEventListener("click", (e) => {
            e.preventDefault()
            Car.handleDelete(e)
        })
    }

    static handleDelete(e) {
        // const id = e.target.dataset.id
        const parent = e.target.parentNode
        console.log(parent)

        const carId = e.target.id
        console.log(carId)

        if (e.target.dataset.action === "delete") {

            fetch(endPoint)
            params.delete(carId)
                .then(
                    response => response.json()
                )   
                .then(car => {
                    car.data.forEach(car => { // use cars.data to access the car serializer
                        const newCar = new Car(car.id, car.attributes); //car is a top level object, car.attributes is another object
                        document.querySelector('#car-container').innerHTML += newCar.renderCarListing();
                        // debugger
                    });
                });


        }

    }

    /*
    renderUpdateForm(car) {
        return `
        <form id='data-id=${this.id}'>
        <h3>Edit Listing</h3>

        <label for="car-year">Year</label>
            <input id="car-year" type="text" name="year" value="${this.year}" class="input-text">
        <br><br>

        <label for="car-make">Make</label>
            <input id="car-make" type="text" name="make" value="${this.make}" class="input-text">
        <br><br>

        <label for="car-model">Model</label>
            <input id="car-model" type="text" name="model" value="${this.model}" class="input-text">
        <br><br>

        <label for="car-image_url">Select an image</label>
            <input id="car-image_url" type="text" name="image" value="${this.image_url}" class="input-text">
        <br><br>

        <label for="origin-dropdown">Select a manufacturer origin:</label>
            <select id="origins" name="origins" value="${this.origin.name}">
                <option value="1">Domestic</option>
                <option value="2">Import</option>
            </select>
        <br><br>
                <input id="edit-button" type="submit" name="submit" value="Edit Car" class="submit">
            <br><br>
        </form>
        `;
    }
    */
}
Car.all = [];