# Installation & Setup Guide

## Prerequisites

- Node.js v14+ and npm/yarn
- MongoDB (local or cloud via MongoDB Atlas)
- Git

## Step-by-Step Setup

### 1. Clone or Navigate to Project

```bash
cd ho-tribe-website
```

### 2. Backend Setup

#### 2.1 Install Backend Dependencies

```bash
cd backend
npm install
```

#### 2.2 Configure Environment

Create `.env` file:

```bash
cp .env.example .env
```

Edit `.env`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ho-tribe
JWT_SECRET=your_very_secure_secret_key_here_change_this
NODE_ENV=development
```

**For MongoDB Atlas:**

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ho-tribe?retryWrites=true&w=majority
```

#### 2.3 Seed Database (Optional)

```bash
node seedDatabase.js
```

#### 2.4 Start Backend Server

```bash
npm run dev
```

Server runs on `http://localhost:5000`

### 3. Frontend Setup

#### 3.1 In a new terminal, navigate to frontend

```bash
cd frontend
```

#### 3.2 Install Frontend Dependencies

```bash
npm install
```

#### 3.3 Start Frontend Development Server

```bash
npm start
```

Frontend runs on `http://localhost:3000`

## Verification

1. **Backend API Health Check:**

   ```bash
   curl http://localhost:5000/api/health
   ```

   Should return: `{"message":"Server is running","status":"healthy"}`

2. **Frontend Loading:**
   Open `http://localhost:3000` in browser
   You should see the DR. LAKO BADARA YOUTH CLUB homepage

## Database Setup

### MongoDB Local Setup

1. Install MongoDB Community Edition
2. Start MongoDB service
3. Update MONGODB_URI to: `mongodb://localhost:27017/ho-tribe`

### MongoDB Atlas Setup

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Replace MONGODB_URI with your connection string

## Admin Account Creation

1. Register a new user through the UI
2. In MongoDB, update the user to admin:
   ```javascript
   db.users.updateOne(
     { email: "admin@example.com" },
     { $set: { role: "admin" } },
   );
   ```

## Available Scripts

### Backend

- `npm run dev` - Start with nodemon (auto-restart)
- `npm start` - Start production server

### Frontend

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from create-react-app

## Project Features

✅ **Responsive Design** - Mobile, tablet, desktop
✅ **GSAP Animations** - Smooth, interactive UI
✅ **JWT Authentication** - Secure user login
✅ **Admin Panel** - Content management
✅ **MongoDB** - Data persistence
✅ **RESTful API** - Clean API design
✅ **Traditional Design** - HO tribe-inspired UI

## Troubleshooting

### "Cannot connect to MongoDB"

- Ensure MongoDB is running
- Check connection string in .env
- Verify MongoDB credentials if using Atlas

### "Port already in use"

- Change PORT in .env (backend)
- React auto-selects next available port (frontend)

### "Module not found"

- Run `npm install` in both frontend and backend
- Clear node_modules and reinstall if issues persist

### CORS Errors

- Frontend proxy is set to http://localhost:5000
- Ensure backend is running
- Check CORS settings in backend

## Production Deployment

### Backend

1. Set NODE_ENV=production
2. Use a process manager (PM2, Forever, etc.)
3. Deploy to Heroku, Railway, or similar
4. Update MongoDB URI for production

### Frontend

1. Build: `npm run build`
2. Deploy build folder to Vercel, Netlify, or similar
3. Update API URL to production backend

## Support

For issues or questions, refer to:

- Backend: `/backend/README.md`
- Frontend: `/frontend/README.md`
- Main: `/README.md`
