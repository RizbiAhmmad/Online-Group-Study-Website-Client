
# 📚 Group Study - Collaborative Learning Platform  

Welcome to **Group Study**, a collaborative learning platform designed to bring students together for effective and engaging study sessions. Built with **React, MongoDB, Express.js, and Tailwind CSS**, this platform allows users to **create, join, and manage study groups, submit assignments, and receive real-time feedback**.  

---

## 🌐 **Live Website**  
[🔗 Group Study Platform](https://online-group-study-83565.web.app)  

---

## 🛠 **Technologies Used**  

### **Frontend:**  
- ⚛ **React.js** – Component-based UI development  
- 🎨 **Tailwind CSS & DaisyUI** – Responsive design & styling  
- 🔄 **React Router** – Routing management  
- 🎞 **Lottie React** – For animations  

### **Backend:**  
- 🚀 **Node.js with Express.js** – Server-side development  
- 🗄 **MongoDB** – NoSQL database for data management  
- 🔑 **JWT Authentication** – Secure login system  
- 🌍 **CORS** – Cross-origin request handling  

### **Other Tools:**  
- 🚀 **SweetAlert2** – Beautiful pop-up notifications  
- 🔥 **Firebase** – Authentication & hosting  
- 🔧 **dotenv** – Manage environment variables  

---

## 📌 **Features**  

✅ **User Authentication**  
- Secure **login & registration** for students  
- **JWT-based authentication** for secure access  

✅ **Private Routes**  
- Restricts certain pages to authenticated users only  

✅ **Assignment Management**  
- View, submit, and track assignments  
- Teachers can review & provide feedback  

✅ **Group Study Sessions**  
- **Create & join** study groups for collaborative learning  

✅ **Evaluation System**  
- Teachers can provide **grades & feedback** on assignments  

✅ **Pending Assignments Tracker**  
- View & manage **assignments that need submission or review**  

✅ **Light/Dark Mode**  
- **Toggle between light & dark themes** for better accessibility  

✅ **Responsive Design**  
- **Fully mobile-friendly** interface with Tailwind CSS  

---

## 📦 **Dependencies**  

### **Frontend (Client-Side)**  
```json
"dependencies": {
  "axios": "^1.7.9",
  "firebase": "^11.1.0",
  "framer-motion": "^11.15.0",
  "localforage": "^1.10.0",
  "react": "^18.3.1",
  "react-datepicker": "^7.5.0",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.1.0",
  "sweetalert2": "^11.15.3",
  "tailwindcss": "^3.4.17",
  "daisyui": "^4.12.22"
}
```

### **Backend (Server-Side)**  
```json
"dependencies": {
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "jsonwebtoken": "^9.0.2",
  "mongodb": "^6.12.0"
}
```

---

## 🚀 **Getting Started**  

### **Prerequisites**  
Before running the project, ensure you have the following installed:  
- **Node.js** (v16 or later)  
- **MongoDB** (local or cloud database)  
- **Git** (for cloning the repository)  

### **Installation Steps**  

#### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/group-study-platform.git
cd group-study-platform
```

#### **2️⃣ Install Dependencies**  

##### **Frontend**  
```sh
cd client
npm install
npm run dev
```

##### **Backend**  
```sh
cd server
npm install
npm start
```

#### **3️⃣ Set Up Environment Variables**  
Create a `.env` file in the **server directory** and add the following:  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### **4️⃣ Start the Development Server**  
- **Frontend:** Runs on `http://localhost:5173/`  
- **Backend:** Runs on `http://localhost:5000/`  

---

## 🔗 **Live Project & Resources**  
- **Live Website:** [Group Study Platform](https://online-group-study-83565.web.app)  
- **Backend Repository:** [Group Study Server](https://github.com/rizbiahmmad/group-study-server)  
- **Frontend Repository:** [Group Study Client](https://github.com/rizbiahmmad/group-study-client)  

---

## 🤝 **Contributing**  
We welcome contributions! To improve this project:  
1. **Fork** the repository  
2. **Create a new feature branch** (`feature-name`)  
3. **Commit your changes**  
4. **Open a pull request**  

---

## 📜 **License**  
This project is **open-source** under the **MIT License**.  

---
