class User {
    #name: string;
    constructor(name: string) {
        this.#name = name;
    }

    greet() {
        console.log(`User: ${this.#name}!`);
    }
}

const theo = new User("Theo");
// theo.#name; //cannot access private memeber