class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`My name is ${this.name}, my age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, registrationNumber) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.registrationNumber = registrationNumber;
  }

  owners = [];

  addOwner(person) {
    if (person instanceof Person && person.age >= 18) {
      this.owners.push(person);
    } else {
      console.log(`Your age is ${person.age}. You are too young`);
    }
  }

  showCarInfo() {
    console.log(
      `Car brand: ${this.brand}, model: ${this.model}, year: ${this.year}, registration number: ${this.registrationNumber}.`
    );
    if (this.owners.length > 0) {
      this.owners.forEach((owner) => {
        owner.showInfo();
      });
    } else {
      console.log("Car doesn`t have an owner.");
    }
  }
}

const person1 = new Person("Kate", 25);
const person2 = new Person("Max", 35);
const person3 = new Person("Mary", 32);

const car1 = new Car("Ford", "Kuga", "2019", "AE2856OE");
const car2 = new Car("Wolkswagen", "Golf V", "2015", "AE6234EP");
const car3 = new Car("BMW", "M", "2024", "AE7498PE");

car1.addOwner(person1);
car2.addOwner(person2);
car2.addOwner(person3);

car1.showCarInfo();
car2.showCarInfo();
car3.showCarInfo();
