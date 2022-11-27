// type is actionPayloadKeys = 'key' | 'value'

type NominalTyped<Type, Brand> = Type & {_type: Brand};

type Point2d_C2 = {x: number; y: number};

function distance1(first: Point2d_C2, second: Point2d_C2) {
    return Math.sqrt(
        Math.pow(first.x - second.x, 2) 
        + Math.pow(first.y - second.y, 2)
        );
}
const result = distance1({x: 1, y: 2}, {x: 3, y: 4});
console.log('result: ', result);