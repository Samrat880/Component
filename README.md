# Customs Broker Portal UI

A responsive web UI for a Customs Broker Portal built with **React.js** and **Tailwind CSS**. This project demonstrates a professional dashboard layout with routing, dummy data integration, and clean component-based design.

---

## 🚀 Features

* **Login Page** (Demo only, no actual authentication)

  * Email + Password fields with basic validation
  * Gradient background and centered login card

* **Dashboard Layout**

  * Sidebar with navigation links (Dashboard, Filings, Clients, Reports, Settings)
  * Header with a responsive Dashboard and logout button
  * Summary cards (Pending, Awaiting Approval, Completed Today, Total Filings)
  * Recent filings list using dummy static data

* **Routing** via React Router DOM (`/login`, `/dashboard`, `/filings`, etc.)

* **Component Structure**: Clean separation of Sidebar, Header, Dashboard content

* **Fully Responsive**: Optimized for both desktop and mobile screens

* **Error & Loading UI**: Placeholders for better user experience

---

## 🛠 Tech Stack

* **Frontend**: React.js
* **Styling**: Tailwind CSS
* **Routing**: React Router DOM

---

## 📂 Folder Structure

```
/src
  /components
    Sidebar.jsx
    Header.jsx
  /pages
    Login.jsx
    Dashboard.jsx
    Filings.jsx
    Settings.jsx
    Clients.jsx
    ...
  /data
    dummyFilings.js
  App.jsx
  index.js
```

---

## 📸 Screenshots

### 🔐 Login Page

![Login Page](https://github.com/user-attachments/assets/e54ca872-5420-414d-ac71-d46af828bcaf)


### 📊 Dashboard View

![Dashboard](https://github.com/user-attachments/assets/67e2894b-e026-47de-86af-16e7d142cd1f)


### 🚧 Filings Under Construction

![Filings Page](https://github.com/user-attachments/assets/478301fe-61ea-4ad1-ae0f-386bd513828e)


---

## 🧠 Thought Process

* Designed with a professional layout in mind using Tailwind’s utility classes.
* Created reusable components (Sidebar, Header, Cards).
* Built the `/dashboard` first and integrated routing.
* Ensured responsiveness early by testing mobile-first design.
* Used dummy data and maps to dynamically generate filings.
* Added hover effects, gradients, and shadows to enhance UI.

---

## ✅ Acceptance Criteria Checklist

* [x] Fully responsive layout ✅
* [x] Clean component structure ✅
* [x] Dummy data file used ✅
* [x] Professional UI with gradients and layout ✅

---

## 📁 How to Run

```bash
git clone https://github.com/your-username/customs-portal
cd customs-portal
npm install
npm run dev
```

Open your browser at `http://localhost:5173` (or appropriate port).

---

## 🔗 Live Demo

[https://component-psi.vercel.app](https://github.com/Samrat880/Customs_Broker_Portal)

---

## 🙋‍♂️ Author

**Samrat** — @Licensed Broker UI Designer ✨
