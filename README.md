# Food Delivery Website - Tomato

## Overview

This is a full-stack food delivery website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application provides a comprehensive solution for managing food orders, including user functionalities, an admin panel, and payment integration with Stripe.

## Features

### User Functionalities
- **Login:** Secure user authentication.
- **Explore Food Items:** Browse and filter food items.
- **Add to Cart:** Add selected items to the shopping cart.
- **My Orders:** View previous orders.
- **Place Order:** Complete orders by providing address and contact information.
- **Stripe Payment:** Integrated payment gateway for order transactions with confirmation.

### Admin Panel
- **Add Food Items:** Add new items to the menu.
- **List Food Items:** View and manage the list of available food items.
- **Remove Food Items:** Delete items from the menu.
- **Check Orders:** Monitor all orders and update their statuses (Processing, Out for Delivery, Delivered).

## APIs

### POST Methods
- `http://localhost:4000/api/food/add` - Add a new food item.
- `http://localhost:4000/api/food/remove` - Remove an existing food item.
- `http://localhost:4000/api/user/register` - Register a new user.
- `http://localhost:4000/api/user/login` - Authenticate a user.
- `http://localhost:4000/api/cart/add` - Add an item to the cart.
- `http://localhost:4000/api/cart/remove` - Remove an item from the cart.
- `http://localhost:4000/api/cart/get` - Retrieve cart items.
- `http://localhost:4000/api/order/userorders` - Retrieve orders for a user.
- `http://localhost:4000/api/order/status` - Update the status of an order.

### GET Methods
- `http://localhost:4000/api/order/list` - List all orders.
- `http://localhost:4000/api/food/list` - List all food items.


## Installation

### Backend

1. **Navigate to the Backend Directory:**
   ```bash
   cd Backend
   ```

2. **Install Backend Dependencies:**
   ```bash
   npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon
   ```

   - **express**: For building the server and handling routes.
   - **mongoose**: For managing MongoDB database.
   - **jsonwebtoken**: For secure user authentication.
   - **bcrypt**: For password hashing.
   - **cors**: For enabling CORS policy in the API.
   - **dotenv**: For managing environment variables.
   - **body-parser**: For handling JSON request bodies.
   - **multer**: For handling file uploads.
   - **stripe**: For payment gateway integration.
   - **validator**: For input validation.
   - **nodemon**: For automatic server restart on file changes during development.

3. **Set Up Environment Variables:**
   Create a `.env` file in the `backend` directory and add the following environment variables:
   ```plaintext
   JWT_SECRET,
   STRIPE_SECRET_KEY,
   MONGO_URI
   ```

4. **Start the Backend Server:**
   ```bash
   npm start
   ```

### Frontend

1. **Navigate to the Frontend Directory:**
   ```bash
   cd Frontend
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install axios react-toastify react-router-dom
   ```

   - **axios**: For making HTTP requests to the backend APIs.
   - **react-toastify**: For displaying notifications and alerts.
   - **react-router-dom**: For routing and navigation within the React app.

3. **Start the Frontend Application:**
   ```bash
   npm start
   ```
   
### Admin Panel

1. **Navigate to the Directory:**
   ```bash
   cd Admin
   ```

2. **Install Dependencies:**
   ```bash
   npm install axios react-toastify react-router-dom
   ```

   - **axios**: For making HTTP requests to the backend APIs.
   - **react-toastify**: For displaying notifications and alerts.
   - **react-router-dom**: For routing and navigation within the React app.

3. **Start the Frontend Application:**
   ```bash
   npm start
   ```

## Usage

1. **Access the Website:**
   Open your browser and go to `http://localhost:5174` to view the application.

2. **Admin Operations:**
      - Add, Remove and List food items to the menu.
      - Check the order statuses of users and update them.

3. **User Operations:**
     - Register or log in to the system.
     - Explore food items, add them to the cart, and place orders.
     - Complete payment through Stripe.

---
