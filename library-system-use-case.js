// MongoDB Basic Practice Task — Use Case: Library System
// Run with: mongosh --file library-system-use-case.js
//
// A small library catalog modeled as a "books" collection, demonstrating
// insert, update, and search operations together in one realistic scenario.

use("libraryDB");
db.createCollection("books");

// -----------------------------------------------------------------------
// Insert — add books to the catalog.
// -----------------------------------------------------------------------
db.books.insertMany([
  { title: "Clean Code", author: "Robert C. Martin", genre: "Technology", available: true, copies: 3 },
  { title: "The Pragmatic Programmer", author: "David Thomas", genre: "Technology", available: true, copies: 2 },
  { title: "Atomic Habits", author: "James Clear", genre: "Self-Help", available: true, copies: 4 },
  { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", available: false, copies: 0 },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", available: true, copies: 5 },
  { title: "Deep Work", author: "Cal Newport", genre: "Self-Help", available: true, copies: 1 },
]);

// -----------------------------------------------------------------------
// Update — borrow a book (decrement copies, flip availability when the
// last copy is taken).
// -----------------------------------------------------------------------
db.books.updateOne(
  { title: "Deep Work" },
  { $inc: { copies: -1 } }
);

// If copies reach zero, mark the book unavailable.
db.books.updateMany(
  { copies: { $lte: 0 } },
  { $set: { available: false } }
);

// Return a book (increment copies, mark available again).
db.books.updateOne(
  { title: "Sapiens" },
  { $inc: { copies: 1 }, $set: { available: true } }
);

// -----------------------------------------------------------------------
// Search — look things up in the catalog.
// -----------------------------------------------------------------------
// Find every book in a given genre.
db.books.find({ genre: "Self-Help" });

// Find only the books currently available to borrow.
db.books.find({ available: true });

// Find books with more than 2 copies in stock.
db.books.find({ copies: { $gt: 2 } });

// Find a book by title (case-sensitive exact match) or by partial title
// using a regex search.
db.books.find({ title: "Atomic Habits" });
db.books.find({ title: { $regex: "the", $options: "i" } });
