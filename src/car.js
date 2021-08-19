class Car {
    constructor(car, carAttributes) {
        this.id = car
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
            <div class="btn-group">
                <button type="button" class="edit">Edit</button>
                <button type="button" class="delete">Delete</button>
            </div>
        </div>
        <br><br>`;
    }
}
Car.all = [];