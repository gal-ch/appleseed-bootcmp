class Dog {
    constructor(name, type, age, isCuddle) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.isCuddle = isCuddle;
    }
    printit() {
    console.log(`this is ${this.name} a ${this.type} He is ${this.age} years old and he ${this.isCuddle}`);
}
}





let zoei = new Dog('zoei', 'German Shepherd', 'two', 'love to cuddle');
let gochi = new Dog('gochi', 'Pekingese', 'ten', 'is dead');
let tiptip = new Dog('tiptip', 'German Shepherd', 'ten', 'dont love to cuddle');
console.log(zoei);

zoei.printit();

