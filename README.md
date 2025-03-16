# 🚀 Round-Robin Coupon Distribution App

## 📌 Overview

This is a **MERN stack** application for distributing coupons to guest users in a **round-robin manner**, while providing an **admin panel** for coupon management and abuse prevention.

## 📌 Live Project Link - https://round-robin-coupon-distribution-app.onrender.com

---

## 📌 Features

### 🟢 User Side (Guest)

✅ Claim a coupon without logging in.  
✅ Receive a **unique coupon** based on availability.  
✅ IP and session tracking to prevent multiple claims.  
✅ User-friendly UI with real-time feedback.

### 🔐 Admin Panel

✅ Secure login for admins.  
✅ View, add, enable/disable coupons.  
✅ View claim history (IP & session tracking).  
✅ Live coupon availability toggling.

---

## 📂 Project Structure

```
📂 backend/
│── 📂 config/          # Database configuration
│── 📂 models/          # Mongoose schemas (Coupon, Claim, Admin)
│── 📂 routes/          # API routes (Coupons, Claims, Auth)
│── 📂 controllers/     # Business logic for routes
│── server.js          # Main Express server file
│── package.json       # Backend dependencies
│── .env               # Environment variables

📂 frontend/
│── 📂 src/
│   │── 📂 components/  # React components (Guest, Admin Dashboard)
│   │── App.jsx        # Main app entry
│   │── main.jsx       # Renders app
│── package.json       # Frontend dependencies
│── tailwind.config.js # Tailwind CSS config
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ManikanthDaru/Round-Robin-Coupon-Distribution-
cd round-robin-coupon-distribution
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

- **Create a `.env` file** inside `backend/` and add:

  ```
  MONGO_URI=your_mongodb_connection_url
  JWT_SECRET=your_secret_key
  ```

- **Run the backend server**

```bash
node server.js
```

Server runs on **`http://localhost:5000`**

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

- **Run the frontend**

```bash
npm run dev
```

App runs on **`http://localhost:5173`**

---

## 🛠️ API Endpoints

### 🟢 Guest User APIs

| Method | Endpoint             | Description     |
| ------ | -------------------- | --------------- |
| `GET`  | `/api/coupons`       | Get all coupons |
| `POST` | `/api/coupons/claim` | Claim a coupon  |

### 🔐 Admin APIs

| Method  | Endpoint                  | Description                   |
| ------- | ------------------------- | ----------------------------- |
| `POST`  | `/api/auth/login`         | Admin login                   |
| `GET`   | `/api/coupons/`           | Get all coupons from database |
| `POST`  | `/api/coupons/add`        | Add new coupon                |
| `PATCH` | `/api/coupons/toggle/:id` | Enable/Disable coupon         |
| `GET`   | `/api/claims`             | Get all user claim history    |

---

## 📌 Admin Credentials (For Testing)

```
Email: admin@example.com
Password: 123456
```

---

## 🎯 Deployment

### Deploy Backend (Render)

1. Push backend to **GitHub**
2. Deployed on Render
3. Set environment variables (`MONGO_URI`, `JWT_SECRET`)
4. Copy the deployed backend URL

### Deploy Frontend (Render)

1. Push frontend to **GitHub**
2. Deploy on **Vercel**
3. Set **backend URL** in frontend (`axios.defaults.baseURL`)
4. Get the **live site link**

---

## ✅ Usage

1️⃣ Open the **Guest Page** (`/guest`) → Click "Claim Coupon"  
2️⃣ Visit **Admin Panel** (`/admin`) → Manage coupons  
3️⃣ Toggle availability, delete claims, and monitor users

---

## 📞 Support

For any issues, contact **your_email@example.com** or create a **GitHub Issue**.

---

**🚀 Built with ❤️ using MERN Stack.**
