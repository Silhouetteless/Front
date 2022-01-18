// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  let updatedBookList = [...bookList];

  updatedBookList.push(bookName);
  return updatedBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let updatedBookList = [...bookList];

  const book_index = updatedBookList.indexOf(bookName);
  if (book_index >= 0) {

    updatedBookList.splice(book_index, 1);
    return updatedBookList;

    // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
