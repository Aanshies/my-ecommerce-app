# 🛒 MERN E-commerce Store — A Full Stack Application

**MERN E-commerce Store** is a complete, full-stack e-commerce platform built from the ground up. This project demonstrates key functionalities of a modern web store, including product browsing, a shopping cart, user authentication, and a protected order placement system.

---

## ✨ Features

-   🛍️ **Product Browsing:** A responsive product grid on the homepage that fetches all products from the backend API.
-   🛒 **Shopping Cart:** A fully functional shopping cart using React's Context API to manage state across the application.
-   🔐 **Full User Authentication:** Secure user registration and login functionality using JSON Web Tokens (JWT) for session management and `bcryptjs` for password hashing.
-   📡 **RESTful API:** A robust backend built with Node.js and Express, connected to a MongoDB database with Mongoose.
---

### 🔗 Live Demo

**Frontend (Netlify):** `https://myecommerceappfrontend.netlify.app/`

**Backend API (Render):** `https://my-ecommerce-app-backend-4z69.onrender.com/`

---

## 🛠️ Tech Stack

| Part             | Tech Used                                            |
| ---------------- | ---------------------------------------------------- |
| **Frontend**     | React, Vite, Axios, React Router                     |
| **Backend**      | Node.js, Express.js                                  |
| **Database**     | MongoDB, Mongoose                                    |
| **Authentication** | JSON Web Tokens (JWT), bcryptjs                    |
| **Hosting**      | Netlify (Frontend), Render (Backend)                 |

---

## 🚀 Getting Started Locally

To run this project on your local machine, you'll need to start both the backend and the frontend in separate terminals.

### 📦 1. Clone the Repository

First, clone the project repository from GitHub:

```bash
git clone [https://github.com/Aanshies/my-ecommerce-app.git](https://github.com/Aanshies/my-ecommerce-app.git)
cd my-ecommerce-app
```

### ☕ 2. Run the Backend

Navigate to your backend directory and start the server:

```bash
cd my-ecommerce-app
npm install
npm start
```
The backend will be running at http://localhost:5000.

### ⚛️ 3. Run the Frontend

Navigate to your frontend directory. Before running, make sure you update the API URL in src/App.jsx to point to your local backend.

```bash
// In src/App.jsx
// Change this line back to the local URL
const response = await fetch('http://localhost:5000/api/products');
```

Now, install dependencies and run the frontend:

```bash
cd my-ecommerce-app
npm install
npm run dev
```

The frontend will be available at http://localhost:5173.

---

## 🌐 Upcoming Enhancements

✅ Implement real user authentication with a database (e.g., MongoDB).

✅ Add dynamic data entry for address and other user-specific data.

✅ Create an admin dashboard to manage customer accounts.

✅ Improve UI/UX with more interactive elements.

---

## 🤝 Contributing

Contributions, feature suggestions, and issue reports are welcome! Fork the repository, make your changes, and open a pull request.

---

## 🪪 License

MIT License © 2025
