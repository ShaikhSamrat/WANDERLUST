# Wanderlust 🏕️

An Airbnb-inspired full-stack web application where users can create, browse, and review travel listings.

---

## Features

- Browse listings by category (Rooms, Mountains, Camping, Castle, etc.)
- Search listings by title, location, country, or description
- Create, edit, and delete your own listings with image upload
- Leave star ratings and reviews on listings
- User authentication — signup, login, logout
- Interactive map showing listing location (OpenStreetMap)
- Mobile responsive design
- Flash messages for success and error feedback
- Tax toggle to display price with 18% GST

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript, EJS, Bootstrap 5 |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | Passport.js (Local Strategy) |
| Image Upload | Cloudinary, Multer |
| Session Store | connect-mongo |
| Validation | Joi |
| Map | Leaflet.js + OpenStreetMap |

---

## Getting Started

**1. Clone the repository**
```
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
```

**2. Install dependencies**
```
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root directory:
```
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

**4. Seed the database**
```
node init/index.js
```

**5. Start the server**
```
node app.js
```

**6. Open in browser**
```
http://localhost:8080
```

---

## Demo Account

After seeding, you can log in with:
- **Username:** Khabib Nurmagomedov
- **Password:** khabib29

---

## Folder Structure

```
wanderlust/
├── controllers/      # Route logic
├── init/             # Database seeder
├── models/           # Mongoose schemas
├── public/           # Static assets (CSS, JS)
├── routes/           # Express routers
├── utils/            # Error handling helpers
├── views/            # EJS templates
├── app.js            # Entry point
├── middleware.js      # Custom middleware
├── schema.js         # Joi validation schemas
└── cloudConfig.js    # Cloudinary config
```

---

## Author

**Sk Samrat** — 786samraj@gmail.com
