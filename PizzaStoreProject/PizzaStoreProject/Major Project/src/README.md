# Major Project: Express Application for CRUD Operations on Pizza Store Items with MongoDB and EJS Views

## Objective
Create an Express application to perform CRUD (Create, Read, Update, Delete) operations on items in a pizza store, connect the application to a MongoDB database, and create views using EJS templates.

## Instructions

### Setup Project Environment
1. Install Node.js and npm (Node Package Manager).
2. Create a new directory for your project and initialize a new Node.js project using `npm init`.

### Install Required Packages
1. Install the following npm packages:
    - `express`
    - `body-parser`
    - `mongoose`
    - `ejs`

### Set Up MongoDB
1. Create a MongoDB database for the project.
2. Use Mongoose to connect your Express application to the MongoDB database.

### Create Express Server
1. Set up a basic Express server.

### Define Routes for CRUD Operations
1. Implement the following routes:
    - `POST /items`: Add a new item to the pizza store.
    - `GET /items`: Retrieve all items from the pizza store.
    - `GET /items/:id`: Retrieve a specific item by its ID.
    - `PUT /items/:id`: Update an existing item by its ID.
    - `DELETE /items/:id`: Delete an item by its ID.

### Create Views Using EJS Templates
1. Set up EJS as the templating engine for the project.
2. Create EJS templates to render views for the following pages:
    - List all items
    - Add a new item
    - Edit an existing item

### Test Application Using Postman
1. Create and execute Postman requests for each of the CRUD operations.

### Document API Endpoints
1. Provide a brief documentation of each API endpoint, including request types and example payloads.

## Deliverables
- Source code of the project.
- API documentation.
- Postman collection for testing.
