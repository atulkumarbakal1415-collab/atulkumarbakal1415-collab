# AGROBOT 🌱
### IoT-Based Soil Moisture Monitoring & Weekly Analytics System

AGROBOT is an IoT-based smart agriculture system designed to monitor soil moisture in real time using Arduino and ESP8266 Wi-Fi technology. The system collects moisture data from soil sensors, stores it in a database, and displays both live readings and weekly moisture trends on a web dashboard. The project also includes a buzzer alert system that notifies users when the soil becomes too dry or too wet.

---

# 📌 Features

- 🌱 Real-time soil moisture monitoring
- 📡 ESP8266 Wi-Fi data transmission
- 💾 MongoDB data storage
- 📊 Weekly moisture trend reports
- 🚨 Buzzer alert for unsafe moisture levels
- 🌐 REST API backend using Node.js & Express
- 📱 Web dashboard integration
- 📈 Chart visualization for last 7 days data

---

# 🛠️ Tech Stack

## Hardware
- Arduino Uno
- Soil Moisture Sensor
- ESP8266 Wi-Fi Module
- Piezoelectric Buzzer

## Software
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API
- JavaScript

---

# ⚙️ System Architecture

```text
Soil Moisture Sensor
        ↓
Arduino Uno
        ↓
ESP8266 Wi-Fi Module
        ↓
Node.js Backend Server
        ↓
MongoDB Database
        ↓
Web Dashboard & Weekly Reports
```

The ESP8266 module sends moisture readings to the backend server using HTTP POST requests. The backend stores the data in MongoDB and provides APIs for live monitoring and weekly analytics.

---

# 📂 Project Structure

```text
AGROBOT-BACKEND/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/agrobot-backend.git
cd agrobot-backend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 4️⃣ Run Server

```bash
npm start
```

OR

```bash
node server.js
```

---

# 📡 API Endpoints

## Store Moisture Data

```http
POST /api/moisture
```

### Sample Request

```json
{
  "moisture": 72
}
```

---

## Get Latest Moisture Reading

```http
GET /api/moisture/latest
```

---

## Get Weekly Moisture Report

```http
GET /api/moisture/weekly
```

Returns last 7 days moisture trend data for chart visualization.

---

# 📊 Weekly Report Feature

The backend stores timestamped moisture readings and generates a weekly report by:

- Fetching last 7 days records
- Grouping readings by date
- Calculating daily trends
- Sending formatted data to frontend charts

This module was implemented as part of the project contribution by **Bakal Atul Subhash**.

---

# 🔔 Alert System

The Arduino continuously checks moisture thresholds:

- If soil becomes too dry → buzzer turns ON
- If soil becomes too wet → buzzer turns ON
- Safe range → buzzer turns OFF

This provides instant local alerts even without internet connectivity.

---

# 👨‍💻 Team Members

| Name | Contribution |
|------|--------------|
| **Bakal Atul Subhash** | Weekly Report & Data Storage |
| **Kanishk Ashish Dubey** | Hardware Design & Arduino Programming |
| **Kumar Ashish** | Website Frontend Development |
| **Chaudhary Ashish Vipul** | Physical Model Design |
| **Ashraf Khan** | Authentication & Backend Support |

---

# 🔮 Future Enhancements

- Automated irrigation/drainage system
- Mobile app integration
- Cloud deployment
- Real farm deployment testing
- AI-based irrigation prediction

Future work also includes relay-controlled automatic drainage to prevent waterlogging.

---

# 📸 Project Overview

The AGROBOT device integrates all hardware components into a compact system capable of monitoring soil conditions and transmitting live data to the internet. The project focuses on affordable smart irrigation solutions for agriculture.

---

# 📖 References

1. Arduino Official Documentation
2. Components101 – Soil Moisture Sensor Module
3. IJERT – IoT Based Soil Moisture Monitoring System for Smart Irrigation

---

# 📜 License

This project is developed as a Capstone-I project under the Hybrid UG Program in Computer Science & Data Analytics at IIT Patna.

---

# ⭐ Acknowledgement

Special thanks to IIT Patna and all project team members for their support and collaboration throughout the development of AGROBOT.
