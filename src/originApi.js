class OriginApi {
    static endPoint = 'http://localhost:3000/api/v1/origins'

    static getOrigins() {
        fetch(this.endPoint)
            .then(r => r.json())
            .then(json => {
                json["data"].forEach(element => {
                    let o = new Origin({
                            id: element.id,
                            ...element.attributes
                        })
                        // o.addToDom()
                    o.addToDropDown()
                })
            })
    }
}