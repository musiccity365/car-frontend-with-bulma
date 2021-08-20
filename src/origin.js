class Origin {
    static findById(id) {
        return this.all.find(origin => origin.id === id);
    }
}