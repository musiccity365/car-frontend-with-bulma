class CarApi {
    static endPoint = "http://localhost:3000/api/v1/cars";
    // GET request for cars
    static getCars() {
            fetch(this.endPoint)
                .then(resp => resp.json())
                .then(data => {
                    data["data"].forEach(car => {
                        let c = new Car({ id: car.id, ...car.attributes })
                        c.renderCarListing()
                    })
                })
        }
        /*  CREATE - Create a new car
            1. Create a car form
            2. Add an Event Listener            
            3. Submit form, and fetch post to backend
            4. Do something with the returned object
         */

    // POST request for cars
    static createCar() {
        const formData = {
            year: yearInput.value,
            make: makeInput.value,
            model: modelInput.value,
            image_url: imageInput.value,
            origin_id: dropdown.value
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
                let car = data.data
                let c = new Car({ id: car.id, ...car.attributes })
                c.renderCarListing()
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