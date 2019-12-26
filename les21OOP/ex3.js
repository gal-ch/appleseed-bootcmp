class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

const didYouRead = (library) => {
    let arr =[];
    for (let book of libary) {
        if(book.read === false)
        arr.push(book.title)
    }
    console.log(arr);
}
          
function printit(obj) {
  console.log(`the ${obj.title} by ${obj.author}`);
}

let lightBetweenTheOcean = new Book("light Between The Ocean", "ML stedman", false);
let bigLittelLies = new Book("big Littel Lies", "Liane Moriarty", true);

let libary = []
const logit = (array, book) => {
    array.push(book)

};

logit(libary, lightBetweenTheOcean);
logit(libary, bigLittelLies);
printit(bigLittelLies);
didYouRead(libary);
