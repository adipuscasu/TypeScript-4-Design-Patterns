class Wizard implements HeroPrototype {
    private spells: string[];
    private health: number;
    constructor(private name: string) {
        this.spells = [];
        this.health = 100;
    }
}