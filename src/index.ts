console.log("hello world");

//optional
//generic
//interface
//types
//class

const fruit: {
	name: string;
	color: string;
	ripe: boolean;
	qty: number;
} = {
	name: "mango",
	color: "green",
	ripe: true,
	qty: 17,
};

console.log(fruit);

//let typeScript to know that this is for anydatatypes
//let arr:any[] = ["apple", "orange", true, null]

let arr: (string | number | boolean | null)[] = [
	true,
	"osas",
	"samuel",
	"cynthia",
	null,
	90,
];

//WRITING FOR TUPLE

let arr2: [number, number, string] = [108, 0, "apple"];

// arr2.push(10, 19);

console.log(arr2);

// using the type can be for adding more than one data type

type myData = {
	name: string;
	qty: number;
	isReady: boolean;
	//this is for optional parameters
	price?: number;
	pagination: number | string;
};

const newOne: (string | string | number | boolean)[] = [
	"bolaji",
	"jamiu",
	7,
	true,
];

// type newData = {
// 	user: (string | number | boolean)[];
// };

interface newData extends myData {
	user: (string | number | boolean)[];
}

let stack: newData = {
	name: "pencil",
	qty: 10,
	isReady: true,
	pagination: 1,
	user: ["gideon"],
};

console.log(stack);

// let school: string = "codelab";

// let holder: string[] = school.split("");

// let reverse: string = holder.reverse().join("");
// console.log(reverse);

// const myFunc = (x : string)=>{

//     let xx: string[] = x.split("")
//     let newFile:string = xx.reverse().join("")
//     return newFile

// }

let newFunc = (x: string): number => {
	let mytext: string[] = x.split("");

	let newfile: string = mytext.reverse().join("");

	return parseInt(newfile);
};

console.log(newFunc("3346"));

const getData = (x: any[]) => {
	let index = Math.floor(Math.random() * x.length);
	let d = x[index];

	console.log(d);
};

getData(["2", 4, 6, 8, 10]);

// a function that sum up 5 peoples price

const userData = (x: number[]) => {
	let sum = x.reduce((a, b) => a + b);

	return sum;
};

console.log(userData([10, 12, 9, 50]));

const percentageSum = (total: number) => {
	let calculation = (total / 100) * 18;

	return calculation;
};

console.log(percentageSum(userData([10, 12, 9, 50])));

//WORKING ON GENERIC

const genericFunc = <Arr>(x: Arr[]): Arr => {
	const index = Math.floor(Math.random() * 10);

	const d = x[index];

	return d;
};

getData([1, 2, "e", 10, 6, "7"]);

class MainClass {
	name: string;
	color: string;
	ripe: boolean;
	private qty: number;
	//stactic extantiated values cannot have access to it only the main class has access to it
	static sold: string;
	constructor(name: string, color: string, ripe: boolean, qty: number) {
		this.name = name;
		this.color = color;
		this.ripe = ripe;
		this.qty = qty;
	}

	review() {
		console.log(`this fruit  ${this.name}`);
	}
}

const newBuild = new MainClass("Gideon", "black", true, 4);

console.log(newBuild);

//using enum for building game

enum Game {
	peter,
	james,
	samuel,
}

class Students {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	calculate_result(x: number[]) {
		return `my name is  ${this.name} and this is my result ${x.reduce(
			(a, b) => a + b,
		)}`;
	}

	calculate_average_result = (y: number[]) => {
		return y.reduce((total, acc) => total / acc);
	};
}

const total_cal = new Students("Gideon");
const total_cal2 = new Students("Samuel");
const total_cal3 = new Students("James");

const firstStudent = total_cal.calculate_result([10, 15, 30, 50]);
const secondStudent = total_cal2.calculate_result([5, 11, -30, 20]);
const thirdStudent = total_cal3.calculate_result([12, 17, 8, 189]);

console.log(firstStudent);
console.log(secondStudent);
console.log(thirdStudent);

const averageResult = new Students("Average result");

console.log(averageResult.calculate_average_result([10]));
