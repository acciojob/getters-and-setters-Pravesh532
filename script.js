//complete this code
class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	// Getter for name
	get name() {
		return this._name;
	}

	// Setter for name
	set name(newName) {
		if (typeof newName === "string" && newName.length > 0) {
			this._name = newName;
		} else {
			console.log("Invalid name");
		}
	}

	// Getter for age
	get age() {
		return this._age;
	}

	// Setter for age
	set age(newAge) {
		if (typeof newAge === "number" && newAge > 0) {
			this._age = newAge;
		} else {
			console.log("Age must be a positive number");
		}
	}
}

class Student extends Person {
	constructor(name, age) {
		super(name, age);
	}

	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name, age) {
		super(name, age);
	}

	teach() {
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
