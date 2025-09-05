const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring

const book = getBook(2);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

//The Rest operator(...)

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

//Spread operator(...)

const newGenres1 = [...genres, "epic fantasy"];
newGenres1;

const newGenres2 = ["epic fantasy", ...genres];
newGenres2;

const updatedBook = {
  ...book,
  //Adding a new property
  moviePublicationDate: "2001-12-19",

  //Overwriting an existing property
  pages: 1210,
};
updatedBook;

//Arrow functions

// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages} - page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie. `;
summary;

//Ternary operator

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//Short Circuiting using && and ||

//Short circuiting using && operator refers to the evaluation of the right side of the operator if the left side is truthy

console.log(true && "Some string");
console.log(false && "Some string");

console.log(hasMovieAdaptation && "This book has a movie");
console.log(!hasMovieAdaptation && "This book has no movie");

//falsy values: false, 0, "", null, undefined, NaN
//truthy values: any value that is not falsy

console.log("Jonas" && "Some string");
console.log(0 && "Some string");

//Short circuiting using || operator refers to the evaluation of the right side of the operator if the left side is falsy

console.log(true || "Some string");
console.log(false || "Some string");

console.log(hasMovieAdaptation || "This book has a movie");
console.log(!hasMovieAdaptation || "This book has no movie");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "Not Translated";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);

const countWrong = book.reviews.librarything.reviewsCount || "no rating";
countWrong;

//Nullish Coalescing Operator (??) refers to the evaluation of the right side of the operator if the left side is null or undefined
const count = book.reviews.librarything.reviewsCount ?? "no rating";
count;

//Optional Chaining (?.) refers to the evaluation of the right side of the operator if the left side is not null or undefined
function getTotalReviewCount(book) {
  const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const libraryThing = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + libraryThing;
}

console.log(getTotalReviewCount(book));

//Array Methods

//Array Map Method

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const books = getBooks();
books;

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
console.log(essentialData);

const essData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essData);

//Array Filter Method

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//Array Reduce Method

//accumulator refers to the value of the previous iteration. In the below example sum represents the accumulator
//current refers to the value of the current iteration. In the below example book refers to the current iteration

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

//Array Sort Method

const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => b - a); // (b - a) is used for sorting in descending order
sorted;
arr;

const sortedArr = arr.slice().sort((a, b) => a - b); // (a - b) is used for sorting in ascending order and slice() method is used to create a copy of the array so that the original array is not modified
sortedArr;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// Working with Immutable Arrays

// 1) Add a book object to the existing array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

//Adding new book object at the end
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

/*//Adding new book object at the beginning
const booksAfterAdd2 = [newBook, ...books];
booksAfterAdd2;*/

// 2) Delete a book object from the existing array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update a book object in the existing array

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;

//Asynchronous JavaScript: Promises

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("Jonas");

//Asynchronous JavaScript: async/await

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  //  return data;
}

getTodos();
//const todos = getTodos();
//console.log(todos);

console.log("Jonas");
