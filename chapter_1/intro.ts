const one: string = "one";

const two: boolean = false;

const three: number = 3;

const four: null = null;

const five: unknown = 5;

const six: any = 6;

// const seven: unique symbol = Symbol("seven");

let eight: never; // note that const eight: never cannot happen as we cannot instantiate a never

enum Keys {
    Up,
    Down,
    Left,
    Right
}

let up: Keys = Keys.Up;

const enum Bool {
    True,
    False,
}

let truth: Bool = Bool.True;

const arr: number[] = [1, 2, 3]; // arary of numbers of any size
const tup: [number] = [1]; // tuple with one element of type number
class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const user = new User("Theo");
console.log(user.getName()); // prints "Theo"

interface Comparable<T> {
    compareTo(o: T): number
}

interface AppConfig {
    paths: {
        base: string;
    };
    maxRetryCount?: number;
}

const appConfig: AppConfig = {
    paths: {
        base: '/',
    }
}

type A = 'A'; // type is 'A'
type B = 'B'; // type is 'B'
type C = A & B; /* type is never as there is nothing in common between A and B */
type D = C | "E"; // type is "E" as C is never a type
type E = {
    name: string
}

type F = E & {
    age: number;
}

let e: F = {
    name: "Theo",
    age: 20
}

type Point2d = [number, number];
type Point3d = [number, number, number];

const point1: Point2d = [1, 2];
const point2: Point3d = [1, 2, 3];

type NamedType<T extends unknown[]> = [string, ...T];
type NamedPoint2d = NamedType<Point2d>;
const point3: NamedPoint2d = ["Point: (1,2)", 1, 2];

type Point2dL = [x: number, y: number];
type Point3dL = [x: number, y: number, z: number];

type Suit = `${"Spade" | "Heart" | "Diamond" | "Club" }`;
type Rank = `${"2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "Jack" | "Queen" | "King" | "Ace"}`;
type Deck = `${Rank} of ${Suit}`;

const deck: Deck = "Ace of Spade";