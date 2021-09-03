class Origin {

    static all = []

    static originContainer = document.getElementById('origin-container')

    constructor({ id, name }) {
        this.id = id
        this.name = name
        this.active = false
        this.element = document.createElement('button')
        Origin.all.push(this)
    }

    cars() {
        return Car.all.filter((car) => car.originId === parseInt(this.id))
    }

    render() {
        this.element.innerText = this.name
        this.element.id = `origin-${this.id}`
        return this.element
    }

    // addToDom() {
    //     Origin.originDropDown.append(this.render())
    //     this.addListeners()
    // }

    addListeners() {
        this.element.addEventListener('click', this.setActiveOrigin)
    }

    setActiveOrigin = (e) => {
        let filteredOrigin
        Origin.all.forEach(o => {
            if (o.element === this.element && !this.active) {
                o.element.classList.add('activated')
                o.active = true
                filteredOrigin = o
            } else {
                o.element.classList.remove('activated')
                o.active = false
            }
        })
        Car.filterByOrigin(filteredOrigin)
    }

    addToDropDown() {
        const option = document.createElement('option')
        option.value = this.id
        option.innerText = this.name
        // dropdown.append(option)
    }
}