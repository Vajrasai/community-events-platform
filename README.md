🌟 Community Events Platform

A React-based frontend application that allows users to explore, create, edit, delete, and join local community events.
Built as part of the Frontend Developer Intern Assignment for StarLabs.

🎯 Objective

To build a user-friendly platform where people can:

Discover nearby community events

Filter events by type, date, and location

View detailed event information

Join (RSVP) events

Create, edit, and delete events

Persist data using browser storage

🛠 Tech Stack

React (Vite)

React Router DOM

Context API – State management

Plain CSS

localStorage – Data persistence

✨ Features
✅ Core Features

Event listing (grid view)

Search & filter by:

Event type

Location

Date

Event details page

RSVP / Join event

⭐ Bonus Features

Create event with form validation

Edit existing events

Delete events with confirmation

Events persist after page refresh

Date validation (event date must be in the future)

Reusable components & clean UI

💾 Data Management

Initial event data is loaded from events.json

All created, edited, and deleted events are stored in localStorage

Ensures persistence across page reloads

🧪 Validations Implemented

Required field validation for forms

Event date must be greater than today

Confirmation dialog before deleting an event

Graceful handling of invalid event routes

📂 Project Structure
community-events-platform/
├── src/
│ ├── components/
│ │ ├── EventCard.jsx
│ │ ├── FilterBar.jsx
│ │ └── Navbar.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── EventDetails.jsx
│ │ ├── CreateEvent.jsx
│ │ ├── EditEvent.jsx
│ │ └── RSVPConfirmation.jsx
│ ├── context/
│ │ └── EventContext.jsx
│ ├── data/
│ │ └── events.json
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── Screenshots/
├── README.md
├── package.json
└── vite.config.js

Steps to Run/setup the project 

1️⃣ Clone the Repository

2️⃣Navigate to Project Folder
cd community-events-platform

3️⃣ Install Dependencies
npm install

4️⃣ Start the Development Server
npm run dev

5️⃣ Open in Browser

👤 Author

Name: Vajra Sai
Role: Frontend Developer Intern Applicant
GitHub: https://github.com/your-actual-username

📬 Submission

Submitted at:
👉 https://www.starlabs.co.in/assignment

🙌 Thank You

Thank you for reviewing my project.
I look forward to the opportunity to learn and grow with StarLabs.
