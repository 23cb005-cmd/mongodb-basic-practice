# MongoDB Basic Practice Task

## Objective

Understand the basics of MongoDB, its commands, and apply that knowledge
through a short set of CRUD exercises plus a real-world use case.

## Core concepts

- **Database** — a container for collections. A single MongoDB server can
  host many databases (here: `studentDB`).
- **Collection** — a group of related documents, roughly equivalent to a
  table in a relational database, but schema-less (here: `students`).
- **Document** — a single JSON-like record (BSON under the hood) stored in
  a collection. Each document can have its own set of fields, which is
  what makes MongoDB "schema-flexible".
- **CRUD operations** — Create (`insertOne`/`insertMany`), Read
  (`find`/`findOne`), Update (`updateOne`/`updateMany`), and Delete
  (`deleteOne`/`deleteMany`) are the four fundamental operations used to
  work with documents.
- **Query operators** — special keys prefixed with `$` (e.g. `$gt`, `$lt`,
  `$in`, `$and`, `$or`, `$exists`) used inside query filters to express
  conditions beyond simple equality.

## Files

- `crud-operations.js` — mongosh commands covering database/collection
  setup, insert, read, update, delete, and query-operator examples using a
  `studentDB.students` collection.
- `library-system-use-case.js` — a second, self-contained example modeling
  a small Library System (`books` collection) that applies the same
  insert/update/search operations to a more realistic scenario: adding
  books, borrowing/returning them, and searching the catalog by genre or
  availability.

## How to run

Open `mongosh`, then either paste the commands from a file directly into
the shell, or load a file with:

```
mongosh --file crud-operations.js
mongosh --file library-system-use-case.js
```

## Outcome

After working through these files you should be comfortable performing
CRUD operations in MongoDB, using query operators to filter data, and
structuring a small real-world data set (a library catalog) for insert,
update, and search operations.
