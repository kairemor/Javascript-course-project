let person = {
    fname: 'kaire',
    lname: 'MOR',
    age: '14 ',
    printperson: function () {

        console.log(`La personne est : ${this.fname} ${this.lname} a ${this.age}`);
    },
    printage: () => {
        console.log(`Mon age est : ${this.age}`);
    }
}
console.log(`------This is the arrow functions and the this keyword------------`);
person.printperson()
person.printage()