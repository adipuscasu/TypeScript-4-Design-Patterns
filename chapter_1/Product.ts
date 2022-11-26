interface Identifiable<T extends string | number>{
    id: T
}

class Product implements Identifiable<string> {
    id: string;
    constructor(id: string){
        this.id = id;
    }
}