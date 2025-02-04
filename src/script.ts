console.log("test ts!");
console.log("Sum: " + sum(1, 34));
console.log("isEven 39: " + isEven(39));
console.log("isEven 42: " + isEven(42));

const nums: number[] = [1,3,6];
console.log("evens: " + evens(nums));
nums.push(12);
console.log("evens: " + evens(nums));

const v: string | number = 32;
console.log(desc(v));

const p: Person = {
    name: "kurt",
    age: 22
};
console.log(p);
ppi(p);

enum weekday {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
};
const d1: weekday = weekday.friday;
const d2: weekday = weekday.saturday;
console.log(isWeekend(d1), isWeekend(d2));


function isWeekend(d: weekday): boolean {
    return d === weekday.saturday || d === weekday.sunday;
}

function ppi(p: Person) {
    console.log("Namn: " + p.name);
    console.log("Ålder: " + p.age);
}

function desc(a: string | number) {
    return "Värdet är: " + a;
}

function evens(arr: number[]): number[] {
    return arr.filter(n => n % 2 === 0);
}

function sum(a: number, b: number): number {
    return a + b;
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}

type Person = {
    name: string;
    age: number;
};

