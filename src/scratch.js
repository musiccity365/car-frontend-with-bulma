fetch(endPoint)
    .then(
        response => response.json()
    )
    .then(cars => {
        cars.data.forEach(car => { // use cars.data to access the car serializer
            const newCar = new Car(car.id, car.attributes); //car is a top level object, car.attributes is another object
            document.querySelector('#car-container').innerHTML += newCar.renderCarListing();
            // debugger
        });
    });