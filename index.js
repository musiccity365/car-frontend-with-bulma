const endPoint = "http://localhost:3000/api/v1/cars"
document.addEventListener('DOMContentLoaded', () => {
    getCars()
})

function getCars() {
    fetch(endPoint)
        .then(response => response.json())
        .then(cars => {
            cars.data.forEach(car => {
                const carMarkup = `
                <div data-id=${car.id}>
                    <img src=${car.attributes.image_url}
                    height="200" width="200">
                    <h3>${car.attributes.year}</h3>
                    <h3>${car.attributes.make}</h3>
                    <h3>${car.attributes.model}</h3>
                    <p>${car.attributes.origin.name}</p>
                    <button data-id=${car.id}>edit</button>
                </div>
                <br><br />`;
                // use data-id instead of id to enable the functionality of the button to be altered at a later time if necessary.
                document.querySelector('#car-container').innerHTML += carMarkup;
            })
        })
}