# Note Project — MERN Stack

A small note/post sharing application with a React frontend and an Express backend. Users can create a post with an image and caption, while the feed displays saved posts. MongoDB stores post records and ImageKit is used to upload images.

## Features
- Create a post with an image and caption
- View the posts feed
- Store post metadata in MongoDB
- Upload image files through ImageKit
- React single-page frontend with routes for creating posts and viewing the feed

## Tech Stack
- **Frontend:** React, Vite, React Router, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Image storage:** ImageKit
- **File upload:** Multer

## Project Structure
```text
small-mern-project/
├── backend/
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── db/db.js
│       ├── models/post.model.js
│       └── services/storage.service.js
└── frontend/
    └── note-project/
        └── src/
            ├── App.jsx
            └── pages/
                ├── CreatePost.jsx
                └── Feed.jsx
```

## Requirements
- Node.js and npm
- MongoDB connection string
- ImageKit private API key

## Environment Variables
Create a `.env` file in `backend/` and configure:

```env
MongodbURI=your_mongodb_connection_string
IMAGEKITPRIVATEKEY=your_imagekit_private_key
```

Keep secrets private. Do not commit your real keys or connection string.

## Run Locally
Open two terminals from the repository root.

### 1. Start the backend
```bash
cd backend
npm install
npm start
``
The API listens on port `3000`.

### 2. Start the frontend
```bash
cd frontend/note-project
npm install
npm run dev
``
Open the local URL printed by Vite. The frontend needs to send requests to the backend at `http://localhost:3000`; check the API URLs in the frontend code if requests fail.

## API Routes
| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/` | API welcome message |
| GET | `/posts` | Retrieve posts |
| POST | `/create-post` | Create a post using multipart form data with an `image` file and `caption` |

## Development Notes
- The backend uses Mongoose to connect to MongoDB.
- Post records currently contain an image URL and caption.
- Configure CORS and environment variables appropriately before deployment.
- Add validation and error handling for missing files, failed uploads, and database errors before production use.

## License
No explicit project license is currently documented. Add a license file if you intend to define reuse permissions.
