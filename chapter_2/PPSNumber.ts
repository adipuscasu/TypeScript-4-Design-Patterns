type PPSNumber = {
    number: string
}

type NameOrPPSNumber< T extends string | number> = 
    T extends number ? PPSNumber: string;

// const loginInfo: NameOrPPSNumber<1> = {
//     number "123"
// };

interface Box<T> {
    value: T;
}

type UnpackBox<A> = A extends Box<infer E> ? E: A;

type instStash = UnpackBox<{value: 10}> // type is number
type stringStagh = UnpackBox<{value: "123"}>; // type is string
type booleanStash = UnpackBox<true>;