# 🗺️ Profile Mapper Web Application

An intuitive, responsive React web application that displays a list of user profiles and allows users to explore their geographic addresses on an interactive map using **Google Maps**.

---

## 📦 Features

- ✅ Profile display with image, description, and contact info
- 🗺️ Interactive map with address markers (via Google Maps API)
- 🔍 Search and filter profiles by name or location
- ➕ Admin dashboard to add, edit, or delete profiles
- 🧾 Profile detail view with extended information
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚦 Loading indicators and robust error handling

---

## 🧰 Tech Stack

- React (with Hooks)
- React Router
- Tailwind CSS
- Google Maps JavaScript API
- Context API for state
- Formik & Yup (admin form validation)

---

## 🚀 Getting Started



getting_started:
  steps:
    - step: Clone the repository
      commands:
        - git clone https://github.com/your-username/profile-mapper.git
        - cd profile-mapper

    - step: Install dependencies
      commands:
        - npm install

    - step: Add environment variables
      file: .env
      variables:
        REACT_APP_GOOGLE_MAPS_API_KEY: your_google_maps_api_key_here
      notes:
        - "Get your API key from https://console.cloud.google.com/apis/credentials"

    - step: Run the application
      commands:
        - npm start
      browser_url: http://localhost:3000

admin_panel:
  access_path: /admin
  features:
    - Add profiles
    - Edit profiles
    - Delete profiles
  interface: "Clean dashboard interface"

folder_structure:
  root:
    - /public
    - /src
      - /components
      - /pages
      - /utils
      - App.js
      - index.js
    - .env

security_notes:
  - "Do not expose your API key in public repositories."
  - "Use environment variables and deployment secrets on platforms like Vercel."

optional_future_enhancements:
  - Admin authentication
  - Reverse geocoding from address input
  - Smart suggestions based on user location
  - Multi-language support

