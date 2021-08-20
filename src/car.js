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

    // handleBtnClick = (e) => {
    //     switch (e.target.class) {
    //         case e.target.class === "Edit":

    //             break;
    //         case e.target.class === "Delete":

    //             break;
    //         case e.target.class === "Save":

    //             break;
    //         default:
    //             console.error("Invalid, entry!")
    //             break;
    //     }
    // }
    renderCarListing(car) {
        // debugger

        return `
        <div data-id=${this.id}>
            <h3>${this.year} ${this.make} ${this.model}</h3>
            <p>${this.origin.name}</p>
            <img src=${this.image_url} height="200" width="250">
            <br><br>
            <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }
    static findById(id) {
        return this.all.find(car => car.id === id);
    }

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
}

Car.all = [];