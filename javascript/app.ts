// 타입스크립트

type Centimeter = number;
type RainbowColor =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet';

// let age = 10;
let weight: number = 80;
let height: Centimeter = 176;
let color: RainbowColor = 'orange';

// 값(Value)
enum Color {
  Red,
  Blue,
  Green,
}

Color.Red;

// 타입
function addAge(age: number): number {
  return age + 1;
}

let age: number = addAge(30);

console.log(age);
