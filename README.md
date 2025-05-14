# Nigerian States API

This is a simple Node.js + Express + MongoDB project that seeds all Nigerian states (including their capital cities, geopolitical zones, and NYSC orientation camp details) into MongoDB and serves them via a RESTful API.

## Features

- List of all 36 Nigerian states + FCT
- Each state includes:
  - Capital city
  - Geopolitical zone
  - NYSC orientation camp location and address
- MongoDB for data storage
- REST API for accessing data

## Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Render (for deployment)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nigerian-states-api.git
cd nigerian-states-api
```

---

### 2. Install Dependencies 

```
npm install

```

---

### 3. Create environment variables

Create a .env file in the root directory with the following:

```env
MONGO_URI=your_connection_string_here
PORT=3000

```

---

### 4. Seed a database

```
node seed.js

```

This should *nigeriaStates.json* and populates your MongoDB collection.

---

### Start the server

```
node server.js

```

---

## API Endpoints

Base URL: https://naijaapi.onrender.com

1. method: GET
   /api/v1/states
   this gets all states

2. method: GET
   /api/v1/states/:stateName

---


