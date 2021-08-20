class Origin {
    constructor({ id, name, origin_id }) {
        this.id = id;
        this.name = name;
        this.origin_id = origin_id;
        Origin.all.push(this);
    }
}