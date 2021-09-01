class CarApi {
    static endPoint = "http://localhost:3000/api/v1/cars";

    static getCars() {
        fetch(this.endPoint)
            .then(resp => resp.json())
            .then(data => {
                data["data"].forEach(car => {
                    const c = new Car({ id: car.id, ...car.attributes })
                    c.renderCarListing()
                })
            })
    }

    static createCar() {
        const formData = {
            year: yearInput.value,
            make: makeInput.value,
            model: modelInput.value,
            image: imageInput.value,
            origin: dropdown.value
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(this.endPoint, configObj)
            .then(r => r.json())
            .then(data => {
                const car = data.data
                const c = new Car({ id: car.id, ...car.attributes })
                c.attachToDom()
            })
    }

    static deleteCar(id) {
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        fetch(`${this.endPoint}/${id}`, configObj)
            .then(r => r.json())
            .then(json => alert(json.message))
    }
}