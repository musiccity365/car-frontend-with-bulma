class Car {
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
}
Car.all = [];