class Car {

    static all = [];
    constructor(car, carAttributes) {
        this.id = car.id;
        this.year = carAttributes.year;
        this.make = carAttributes.make;
        this.model = carAttributes.model;
        this.image_url = carAttributes.image_url;
        this.origin = carAttributes.origin;
        Car.all.push(this);
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
            <button class="edit" data-id=${this.id}>edit</button>
            <button class="delete" data-id=${this.id}>delete</button>
        </div>
        <br><br>`;
    }
}
Car.all = [];