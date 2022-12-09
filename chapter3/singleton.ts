export class Singleton {
    // Stores the singleton instance
    private static instance: Singleton;

    // Prevent creation of new instance
    private constructor() {}

    // Method to retrieve instance
    static getInstance() {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}