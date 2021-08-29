class Origin {

    static all = []

    static originDropDown = document.getElementById('origin-dropdown')

    constructor({ id, name }) {
        this.id = id
        this.name = name
            // this.active = false
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

    addToDom() {
        Origin.originDropDown.append(this.render())
    }

    addToDropDown() {
        const option = document.createElement('option')
        option.value = this.id
        option.innerText = this.name
        dropdown.append(option)
    }
}