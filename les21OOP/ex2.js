class Dog {
    constructor(name, type, age, isCuddle) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.isCuddle = isCuddle;
    }
}
function getDogsOfType(dogs, typedog) {
    let arrdoglist = [];
    for (var i = 0; i < dogs.length; i++) {
        console.log(dogs);
        console.log(dogs[i].type);
        if (dogs[i].type === typedog) {
            arrdoglist.push(dogs[i].name);
            console.log(arrdoglist);

        }

    }

    const getDogsOfType = (dogs, typedog) =>{

    }

    const myFunction = (array, type) => {
        array.filter(item => {
          return item.type === type;
        });
      };

//  list = [{ name: "lisa", type: "a" }, { name: "gal", type: "a" }]
// getDogsOfType('a', list)
function test_equal(actual, expected, msg) {
    if (Array.isArray(expected)) {
        for (var i = 0; i < expected.length; i++) {
            test_equal(actual[i], expected[i], "item in index " + i);
        }
    } else {
        if (actual !== expected) {
            console.log(`Error testing ${msg || ''}. expected: ${expected}, got ${actual}`)
        }
    }
}
var dog1 = new Dog("blacky", "Pudel", 3, true);
var dog2 = new Dog("koko", "Boxer", 1, true);
var dog3 = new Dog("silver", "Labrador", 5, false);
var dog4 = new Dog("nana", "Labrador", 2, false);
var dog5 = new Dog("biko", "Labrador", 6, true);
var dogs = [dog1, dog2, dog3, dog4, dog5];
test_equal(getDogsOfType([dog1, dog2, dog3, dog4, dog5], "Labrador"), ["silver", "nana", "biko"]);
test_equal(getDogsOfType([dog1, dog2, dog4], "Labrador"), ["nana"]);
test_equal(getDogsOfType([dog1, dog2], "Labrador"), []);