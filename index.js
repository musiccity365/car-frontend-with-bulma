const endPoint = "http://localhost:3000/api/v1/cars"
document.addEventListener('DOMContentLoaded', () => {
    fetch(endPoint)
        .then(response => response.json())
        .then(cars => {
            console.log(cars);
        })
})