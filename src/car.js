class Car {

    static all = []

    static container = document.getElementById('car-list')

    constructor({ id, year, make, model, image_url, origin }) {
        this.id = id
        this.year = year
        this.make = make
        this.model = model
        this.image_url = image_url
        this.origin = origin

        this.element = document.createElement('li')
        this.element.id = `car-${id}`
        this.element.dataset.id = id

        this.element.addEventListener('click', this.handleBtnClick)

        Car.all.push(this)
        console.log(this);
        // debugger
    }

    handleBtnClick = (e) => {
        if (e.target.innerText === "delete") {
            this.deleteCar(e)
        }
    }

    renderLi() {
        // debugger
        this.element.innerHTML = `
        <div data-id=${this.id}>
            <h3>${this.year} ${this.make} ${this.model}</h3>
            <p>${this.origin.name}</p>
            <img src=${this.image_url} height="200" width="250">
        </div>
            <button data-id=${this.id} class="delete" data-action="delete">Delete</button>
        <br><br>`
        return this.element
    }

    attachToDom() {
        list.append(this.renderLi())
    }

    deleteCar = (e) => {
        this.element.remove()
        CarApi.deleteCar(this.id)
    }
}