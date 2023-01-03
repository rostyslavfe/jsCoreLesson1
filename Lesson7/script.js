let person = {
    firstName: 'Ivan',
    secondName:'Ivanov',
    showData(){
        console.log(`Name: ${this.firstName}, Surname: ${this.secondName}`)
    },
};

person.showData();

let newPerson = Object.assign({}, person);
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

newPerson.showData();

let myMath = {
    a: 5,
    b: 2,
    sum(){
        console.log(`${this.a} + ${this.b} = ${this.a+this.b}`);
    },
    multiplication(){
        console.log(`${this.a} * ${this.b} = ${this.a*this.b}`);
    },
    division(){
        console.log(`${this.a} / ${this.b} = ${this.a/this.b}`);
    },
    subtraction(){
        console.log(`${this.a} - ${this.b} = ${this.a-this.b}`);
    }
};

myMath.sum();
myMath.multiplication();
myMath.division();
myMath.subtraction();
