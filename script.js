// Part 1: For Loops

//Problem 1: Count to 10
for(let i = 1; i <=10; i++) {
    console.log(i);
}

// Problem 2: Even Numbers

for ( let i = 2; i <=20; i +=2) {
    console.log(i);
}

// Problem 3: Loop through any Array

let animals = ["dog", "cat", "rabbit", "parrot"];

for (let i = 0; i < animals.length; i++) {
    console.log(`I like ${animals[i]}s.`);
}

// Problem 4: Reverse Array Output

let colors = ["red", "green", "blue", "yellow"];

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}

// Part 2: Objects

// Problem 5: Simple Object

let person = {
    name: "Amarii",
    age: "6",
    favoriteColor: "red"
};

console.log(`My favorite niece is ${person.name}. She is ${person.age} years old an her favorite color is ${person.favoriteColor}.`)

// Problem 6: Modify an Object

person.hobby = "painting";

console.log(person);

// Problem 7: 

let books = [
    {title: "A Child Called It", author: "Dave Pelzer", pages: "184"},
    {title: "God Don't Like Ugly", author: "Mary Monroe", pages: "432"},
    {title: "Big Girls Do Cry", author: "Carl Weber", pages: "330"}  
]
 for(let i = 0; i < books.length; i++) {
    let book= books[i];
    console.log(`${book.title} by ${book.author} - ${book.pages} pages`);
 }

 // Problem 8: Favorite Book Finder

 let book = [
    { title: "A Child Called It", author: "Dave Pelzer", pages: "184", isFavorite: "true" },
    { title: "God Don't Like Ugly", author: "Mary Monroe", pages: "432" },
    { title: "Big Girls Do Cry", author: "Carl Weber", pages: "330" }
];

for (let i = 0; i < book.length; i++) {
    if (book[i].isFavorite) {
        console.log(`${book[i].title} by ${book[i].author} - ${book[i].pages} pages (Favorite)`);
    }
}
