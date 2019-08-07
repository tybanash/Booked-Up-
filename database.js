import { Book } from './Book.js';

const firstBook = new Book ('Pride and Prejudice', 'Jane Austen', 342, 'Pride and Prejudice is a humorous story of love and life among English gentility during the Georgian era.');
const secondBook = new Book ('Oliver Twist', 'Charles Dickens', 300, 'Oliver Twist is about an orphan Oliver who spends most of his childhood at an orphanage with too many children and little food.');
const thirdBook = new Book ('Things Fall Apart', 'Chinua Achebe', 148, 'Story about Okonkwo in Umuofia village.');

const bookList = [firstBook, secondBook, thirdBook];

export { bookList };
