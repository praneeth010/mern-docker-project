"# mern-docker-project" 
# 🚀 MERN Docker Project

A full-stack **MERN (MongoDB, Express, React, Node.js)** application containerized using **Docker** and orchestrated with **Docker Compose**.

---

## 📌 Tech Stack

* ⚛️ Frontend: React (with Nginx for production)
* 🟢 Backend: Node.js + Express
* 🛢️ Database: MongoDB
* 🐳 Containerization: Docker & Docker Compose

---

## 📂 Project Structure

```
mern-docker-project/
│
├── frontend/         # React app
│   ├── Dockerfile
│   └── src/
│
├── backend/          # Node.js API
│   ├── Dockerfile
│   └── server.js
│
└── docker-compose.yml
```

---

## ⚙️ Prerequisites

Make sure you have installed:

* Docker
* Docker Compose

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/mern-docker-project.git
cd mern-docker-project
```

---

### 2️⃣ Run Application

```bash
docker-compose up --build
```

---

## 🌐 Access Application

* Frontend → http://localhost
* Backend API → http://localhost:5000/api

---

## 🧪 API Endpoints

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /api       | Test backend  |
| GET    | /users     | Get all users |
| POST   | /users     | Create user   |
| DELETE | /users/:id | Delete user   |

---

## 🛢️ Environment Variables

Backend `.env` file:

```
MONGO_URI=mongodb://mongo:27017/mydb
PORT=5000
```

---

## 🐳 Docker Details

### Backend

* Node.js (Alpine image)
* Runs Express server

### Frontend

* Multi-stage build
* React build served via Nginx

### MongoDB

* Official MongoDB image
* Persistent volume storage

---

## 🔥 Features

* Full MERN stack setup
* Dockerized frontend & backend
* MongoDB container integration
* Production-ready multi-stage build
* Environment variable support

---

## ⚠️ Notes

* Do not use `localhost` for MongoDB inside Docker
* Use service name: `mongo`

---

## 🚀 Future Improvements

* ✏️ Update (PUT API)
* 🔐 Authentication (JWT)
* 📦 Pagination & search
* ☁️ Deployment (AWS / Kubernetes)
* 🔄 CI/CD pipeline (GitHub Actions / Jenkins)

---

## 👨‍💻 Author

Developed by **Praneeth**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
