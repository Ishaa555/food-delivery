🍅 Full Stack Food Ordering Website
.A complete Full Stack Food Delivery Web Application built using MongoDB, Express.js, React.js, Node.js, and Stripe.
This project allows users to browse food items, add them to cart, place orders with online payment, and track their orders. It also includes an Admin Panel to manage food items and orders.

📌 Small Introduction
This is a MERN Stack based food ordering platform where users can:
1.Create account & login
2.Add food items to cart
3.Place orders with Stripe online payment
4.View order history
5.Track order status
6.An Admin Panel is included to:
7.Add / Delete food items
8.View all orders
9.Update order status

🚀 Live Demo
Render:https://food-delivery-frontend-52of.onrender.com

✨ Features
👤 User Features
1.User Authentication (Register / Login)
2.JWT Token based authentication
3.Add to Cart functionality
4.Dynamic cart total calculation
5.Place Order with Delivery Address
6.Stripe Payment Gateway Integration
7.View My Orders
8.Order Status Tracking

🛠 Admin Features
1.Admin Login
2.Add Food Items with Image Upload
3.Delete Food Items
4.View All Orders
5.Update Order Status

🛠 Tech Stack Used
1.Frontend
2.React
3.Context API
4.Axios
5.CSS
6.React Router DOM

Backend
1.Express
2.Node.js
3.JWT Authentication
4.Multer (Image Upload)

Database
1.MongoDB
2.MongoDB Atlas

Payment Gateway
 Stripe

Deployment
Render / Railway (Frontend-Backend)

📁 Folder Structure
food-delivery-app/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.js
│   │   └── main.jsx
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
└── admin/
    ├── src/
    └── App.jsx

    🔐 Environment Variables
Create a .env file inside the backend folder and add:

PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173

💻 Run Locally
1️⃣ Clone the Repository
git clone https://github.com/Ishaa555/food-delivery.git
cd food-delivery-app

2️⃣ Backend Setup
cd backend
npm install
npm run server

Server runs on:
http://localhost:4000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Runs on:
http://localhost:5173

4️⃣ Admin Panel Setup
cd admin
npm install
npm run dev

📜 Project Purpose
This project was built for:
1.Learning Full Stack Development
2.Understanding MERN Architecture
3.Integrating Payment Gateway
4.Building Real-world E-commerce System

👩‍💻 Author
INDERANEELA SARKAR
GitHub: https://github.com/Ishaa555
project:Food-Delivery-App




























































































