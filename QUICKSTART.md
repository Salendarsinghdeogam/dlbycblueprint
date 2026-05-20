# 🚀 Quick Start Guide

## One-Liner Quick Start

### Terminal 1 (Backend):

```bash
cd ho-tribe-website/backend && cp .env.example .env && npm install && npm run dev
```

### Terminal 2 (Frontend):

```bash
cd ho-tribe-website/frontend && npm install && npm start
```

## 5-Minute Setup

### Prerequisites Check

- [ ] Node.js installed (`node -v`)
- [ ] npm installed (`npm -v`)
- [ ] MongoDB running (local or Atlas connection string)

### Step 1: Backend (2 minutes)

```bash
cd backend
npm install
# Update .env file with your MongoDB URI
npm run dev
```

✅ Backend ready at: http://localhost:5000

### Step 2: Frontend (2 minutes)

```bash
cd frontend
npm install
npm start
```

✅ Frontend ready at: http://localhost:3000

### Step 3: Seed Database (1 minute) - Optional

```bash
cd backend
node seedDatabase.js
```

✅ Festivals data loaded!

## Default Credentials

### Create Test Account

1. Click "Register" on homepage
2. Fill in details:
   - Name: Test User
   - Email: test@example.com
   - Password: password123

### Create Admin Account

Register user, then in MongoDB:

```javascript
db.users.updateOne({ email: "test@example.com" }, { $set: { role: "admin" } });
```

## File Structure Overview

```
ho-tribe-website/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Authentication
│   ├── server.js        # Main server
│   ├── .env.example     # Config template
│   └── seedDatabase.js  # Sample data
│
├── frontend/
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Route pages
│   │   ├── styles/      # CSS files
│   │   ├── context/     # Auth context
│   │   └── utils/       # API calls
│   ├── App.js          # Main component
│   └── index.js        # Entry point
│
├── README.md           # Full documentation
└── SETUP.md           # Detailed setup
```

## Key Features

### 🎵 Music

- Browse traditional HO tribal music
- Download after login
- Filtered by category

### 🎨 Art

- View paintings, sculptures, crafts
- Download high-resolution images
- Filter by type

### 📜 Scripts

- Access HO language resources
- Learn grammar and vocabulary
- Multiple language options

### 🎉 Festivals

- Mage Parab (Spring Festival)
- Baha Parab (Flower Festival)
- Chuti Para (Harvest Festival)
- Full festival details and traditions

### 👨‍💼 Admin Panel

- Approve/reject submissions
- Manage festivals
- View statistics

## Common Tasks

### Add Music

1. Login as admin
2. Go to Admin Panel
3. Submit music (via API in production)
4. Approve submissions

### Register User

1. Click "Register"
2. Fill email, name, password
3. Auto-login on success
4. Access download features

### View Festivals

1. Click "Festivals"
2. Select festival from list
3. View details, dances, foods, traditions

## API Endpoints

```
GET  /api/music           - Get all music
GET  /api/music/:id       - Get single music
POST /api/music/:id/download  - Download music (protected)

GET  /api/art             - Get all art
GET  /api/art/:id         - Get single art
POST /api/art/:id/download    - Download art (protected)

GET  /api/scripts         - Get all scripts
GET  /api/scripts/:id     - Get single script
POST /api/scripts/:id/download - Download script (protected)

GET  /api/festivals       - Get all festivals
GET  /api/festivals/:id   - Get festival by ID

POST /api/auth/register   - Register user
POST /api/auth/login      - Login user
GET  /api/auth/me         - Get current user (protected)
```

## Troubleshooting

| Issue                     | Solution                                      |
| ------------------------- | --------------------------------------------- |
| Cannot connect to MongoDB | Check .env MONGODB_URI and MongoDB is running |
| Port 5000 in use          | Change PORT in .env                           |
| Port 3000 in use          | React auto-selects next port                  |
| Dependencies error        | Run `npm install` again                       |
| CORS error                | Ensure backend running at localhost:5000      |

## Environment Variables

### Backend .env

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ho-tribe
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### Frontend

No .env needed - uses proxy from package.json

## Next Steps

1. ✅ Start both servers
2. ✅ Register an account
3. ✅ Create admin account (MongoDB)
4. ✅ Seed festival data
5. ✅ Add sample music/art via API
6. ✅ Test all features
7. ✅ Deploy to production

## Additional Resources

- [Full README](./README.md)
- [Detailed Setup](./SETUP.md)
- [Backend](./backend/README.md)
- [Frontend](./frontend/README.md)

## Commands Reference

### Backend

```bash
npm install          # Install dependencies
npm run dev         # Start with auto-reload
npm start           # Start production
npm test            # Run tests
node seedDatabase.js # Seed database
```

### Frontend

```bash
npm install         # Install dependencies
npm start          # Start dev server
npm run build      # Build production
npm test           # Run tests
```

## Support

For detailed setup issues, see `SETUP.md`
For API documentation, check backend routes
For component details, check frontend components

---

**Happy exploring! 🎶 Preserving HO Tribe Heritage 🎶**
