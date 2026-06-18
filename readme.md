# Shop Blog Application

A full-stack web application built with **React**, **Node.js**, **Express**, and **MySQL**. The project includes a product listing page using a public API and a complete Blog Management system with CRUD operations and image upload.

---

## 🚀 Tech Stack
Developed using React, Express, MySQL, and Bootstrap.

### Frontend

* React
* React Router DOM
* React Hook Form
* Bootstrap (i am familer with this css framework)
* Axios

### Backend

* Node.js
* Express.js
* MySQL
* Sequelize ORM

### Backend Libraries

* Express
* Cors
* Multer
* Morgan
* Sequelize
* MySQL2

---

# Features

## Frontend

### Product Module

* Fetch products from a Public API
* Product Listing
* Search Products
* Category-wise Routing
* Product Details Page
* Responsive UI using Bootstrap

### Blog Module

* Add Blog
* View Blogs
* Update Blog
* Delete Blog
* Image Upload
* Responsive Card Layout

---

## Backend

### REST APIs

* Create Blog
* Get All Blogs
* Get Blog By ID
* Update Blog
* Delete Blog

### Image Upload

* Single Image Upload using Multer
* Images stored inside `uploads/`
* Image path saved in MySQL

### Database

* MySQL Database
* Sequelize ORM
* Blog CRUD Operations

---

# Project Structure

```
project
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:4200
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:4000
```

---

# Environment Variables

Create a `.env` file inside the backend.

```env
PORT=4000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
```

---

# API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/blogs     | Get All Blogs |
| GET    | /api/blogs/:id | Get Blog      |
| POST   | /api/blogs     | Create Blog   |
| PUT    | /api/blogs/:id | Update Blog   |
| DELETE | /api/blogs/:id | Delete Blog   |

---


