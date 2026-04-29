# Pizza Store Backend API

![Node.js](https://img.shields.io/badge/Node.js-Backend-success) ![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)

A robust RESTful API backend for a Pizza Store, built using Node.js, Express, and MongoDB. The project features full CRUD (Create, Read, Update, Delete) operations for managing pizza inventory.

## 🚀 Live Demo (API Endpoint)
**[View Live API (Items)](https://pizza-store-project.onrender.com/items)**

*Note: As this is a backend service, the primary interaction is through API requests (via Postman or Thunder Client).*

## 📌 API Endpoints
- `GET /items` - Retrieve all pizza items (Renders HTML view)
- `GET /items/:id` - Retrieve a specific pizza by ID (JSON)
- `POST /items` - Add a new pizza item (JSON)
- `PUT /items/:id` - Update an existing pizza item (JSON)
- `DELETE /items/:id` - Delete a pizza item (JSON)

## 🛠️ Tech Stack
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **EJS** (Template Engine)
- **Postman** (API Testing)

## 💻 Local Setup
1. Clone the repository.
2. Navigate to `PizzaStoreProject/PizzaStoreProject/Major Project/src`.
3. Run `npm install` to install dependencies.
4. Set your `MONGO_URI` in your environment variables.
5. Run `npm start` to start the server.