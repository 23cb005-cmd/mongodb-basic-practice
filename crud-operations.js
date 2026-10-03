// MongoDB Basic Practice Task — CRUD operations and query operators
// Run with: mongosh --file crud-operations.js
// (or paste sections individually into an interactive mongosh session)

// -----------------------------------------------------------------------
// 1. Database & Collection Setup
// -----------------------------------------------------------------------
// Switch to (and implicitly create) the studentDB database.
use("studentDB");

// Explicitly create the students collection.
db.createCollection("students");

// -----------------------------------------------------------------------
// 2. Insert Operations
// -----------------------------------------------------------------------
// Insert a single document.
db.students.insertOne({
  name: "Ananya Rao",
  age: 21,
  course: "MERN Stack",
  status: "ongoing",
});

// Insert multiple documents at once.
db.students.insertMany([
  { name: "Rahul Verma", age: 22, course: "MERN Stack", status: "ongoing" },
  { name: "Priya Nair", age: 20, course: "Data Science", status: "completed" },
  { name: "Karthik Subramani", age: 23, course: "MERN Stack", status: "completed" },
  { name: "Sneha Iyer", age: 19, course: "UI/UX Design", status: "ongoing" },
  { name: "Mohammed Faizal", age: 24, course: "MERN Stack", status: "ongoing" },
]);

// -----------------------------------------------------------------------
// 3. Read Operations
// -----------------------------------------------------------------------
// Fetch all documents in the collection.
db.students.find();

// Fetch only students enrolled in "MERN Stack".
db.students.find({ course: "MERN Stack" });

// -----------------------------------------------------------------------
// 4. Update Operations
// -----------------------------------------------------------------------
// Update a single document — mark one student's status as "completed".
db.students.updateOne(
  { name: "Ananya Rao" },
  { $set: { status: "completed" } }
);

// Update multiple documents at once — move every remaining "ongoing"
// MERN Stack student into a "in-review" state (bulk update example).
db.students.updateMany(
  { course: "MERN Stack", status: "ongoing" },
  { $set: { status: "in-review" } }
);

// -----------------------------------------------------------------------
// 5. Delete Operations
// -----------------------------------------------------------------------
// Delete a single document based on a condition.
db.students.deleteOne({ name: "Sneha Iyer" });

// Delete all documents in the collection — for practice purposes only,
// this wipes the whole collection and should not be run on real data.
db.students.deleteMany({});

// -----------------------------------------------------------------------
// 6. Query Operators
// -----------------------------------------------------------------------
// Re-seed a bit of data so the operator examples below have something to
// match against (uncomment if running this file after the deleteMany above).
// db.students.insertMany([
//   { name: "Ananya Rao", age: 21, course: "MERN Stack", status: "completed" },
//   { name: "Rahul Verma", age: 22, course: "MERN Stack", status: "in-review" },
//   { name: "Priya Nair", age: 20, course: "Data Science", status: "completed" },
//   { name: "Karthik Subramani", age: 23, course: "MERN Stack", status: "completed" },
// ]);

// $gt — age greater than 21.
db.students.find({ age: { $gt: 21 } });

// $lt — age less than 21.
db.students.find({ age: { $lt: 21 } });

// $in — course is one of a given list.
db.students.find({ course: { $in: ["MERN Stack", "Data Science"] } });

// $and — explicit AND of two conditions.
db.students.find({
  $and: [{ course: "MERN Stack" }, { status: "completed" }],
});

// $or — either condition can match.
db.students.find({
  $or: [{ status: "completed" }, { age: { $gt: 23 } }],
});

// $exists — only documents that have a "status" field at all.
db.students.find({ status: { $exists: true } });
