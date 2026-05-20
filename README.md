# DR. LAKO BADARA YOUTH CLUB - HO Tribe Cultural Website

A comprehensive MERN stack website dedicated to promoting and preserving the folk music, art, language, and scripts of the HO tribe community.

## 🎯 Project Overview

This website serves as a digital platform for:

- **Folk Music**: Share and preserve traditional HO tribal music
- **Traditional Art**: Showcase paintings, sculptures, and crafts
- **Language & Scripts**: Preserve and teach the HO language and ancient scripts
- **Festivals**: Document sacred festivals (Mage Parab, Baha Parab, Chuti Para)
- **Cultural Heritage**: Celebrate dance, traditions, and customs

## 🏗️ Project Structure

```
ho-tribe-website/
├── backend/                 # Node.js + Express API
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Authentication & middleware
│   ├── controllers/        # Business logic
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env.example        # Environment variables template
│
└── frontend/               # React + GSAP UI
    ├── public/            # Static files
    ├── src/
    │   ├── components/    # Reusable components (Header, Footer, Forms)
    │   ├── pages/         # Page components (Home, Music, Art, Scripts, Festivals)
    │   ├── styles/        # CSS files (Global, component-specific)
    │   ├── context/       # React Context (AuthContext)
    │   ├── utils/         # API calls and utilities
    │   ├── App.js         # Main App component
    │   └── index.js       # React entry point
    ├── package.json       # Frontend dependencies
    └── .gitignore         # Git ignore file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas connection string)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create .env file:**

   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables:**

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ho-tribe
   JWT_SECRET=your_secret_key_here
   NODE_ENV=development
   ```

5. **Start the server:**
   ```bash
   npm run dev
   ```
   Server will run on http://localhost:5000

### Frontend Setup

1. **Navigate to frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   Frontend will run on http://localhost:3000

## 📱 Features

### User Features

- **User Registration & Login**: Secure authentication with JWT
- **Download Content**: Access music, art, and scripts after login
- **Browse Categories**: Filter content by type and festival
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### Admin Features

- **Content Approval**: Review and approve submissions
- **Festival Management**: Create and manage festival information
- **Content Moderation**: Approve or reject music, art, and scripts
- **Dashboard**: View pending approvals and statistics

### Design Features

- **GSAP Animations**: Smooth, interactive animations
- **Traditional Aesthetic**: Design inspired by HO tribal art and culture
- **Responsive Layout**: Mobile-first design approach
- **Traditional Colors**: Brown, gold, and earth tones
- **Proper Spacing**: Clean, readable layouts
- **Interactive UI**: Hover effects and smooth transitions

## 🎨 Festival Categories

### Mage Parab (Spring Festival)

- **Month**: February-March
- **Significance**: New Year celebration, beginning of sowing season
- **Activities**: Traditional dances, community gatherings, feasts

### Baha Parab (Flower Festival)

- **Month**: March-April
- **Significance**: Celebration of blooming flowers and new growth
- **Activities**: Singing, dancing, traditional games

### Chuti Para (Harvest Festival)

- **Month**: September-October
- **Significance**: Harvest celebration, gratitude to nature
- **Activities**: Performances, family gatherings, feasts

## 🎵 Content Categories

### Music

- Traditional songs
- Dance music
- Festive music
- Devotional music

### Art

- Paintings
- Sculptures
- Crafts
- Traditional art

### Scripts

- HO language materials
- Grammar resources
- Dictionary entries
- Traditional texts

## 🔐 Authentication

The website uses JWT (JSON Web Tokens) for secure authentication:

- Users can register with email and password
- Login generates a token stored in localStorage
- Token is sent with each API request
- Admin role provides access to the admin panel

## 🎭 Traditional Design Elements

- **Ancient Drawing Inspirations**: Tribal patterns used in UI accents
- **Natural Colors**: Earth tones (brown, gold, cream)
- **Typography**: Serif fonts for an elegant, traditional feel
- **Spacing**: Generous spacing for better readability
- **Overlays**: Traditional design overlays on images
- **Animations**: Subtle GSAP animations for interactivity

## 📊 Database Models

### User

- Name, Email, Password, Role (user/admin)

### Music

- Title, Artist, Description, Category, Audio URL, Festival, Downloads

### Art

- Title, Artist, Description, Category, Image URL, Festival, Downloads

### Script

- Title, Language, Description, Content, Document URL, Category, Downloads

### Festival

- Name, Month, Description, Significance, Dance Types, Activities, Foods, Traditions

## 🛠️ API Endpoints

### Auth

- POST `/api/auth/register` - Register user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user

### Music

- GET `/api/music` - Get all music
- GET `/api/music/:id` - Get single music
- POST `/api/music/:id/download` - Download music

### Art

- GET `/api/art` - Get all art
- GET `/api/art/:id` - Get single art
- POST `/api/art/:id/download` - Download art

### Scripts

- GET `/api/scripts` - Get all scripts
- GET `/api/scripts/:id` - Get single script
- POST `/api/scripts/:id/download` - Download script

### Festivals

- GET `/api/festivals` - Get all festivals
- GET `/api/festivals/:id` - Get festival by ID
- GET `/api/festivals/name/:name` - Get festival by name

### Admin

- PUT `/api/admin/music/:id/approve` - Approve music
- DELETE `/api/admin/music/:id` - Delete music
- PUT `/api/admin/art/:id/approve` - Approve art
- DELETE `/api/admin/art/:id` - Delete art
- PUT `/api/admin/script/:id/approve` - Approve script
- DELETE `/api/admin/script/:id` - Delete script
- POST `/api/admin/festival` - Create festival
- GET `/api/admin/pending/items` - Get pending approvals

## 🎨 GSAP Animations

The website includes smooth animations using GSAP:

- Header slide-in animation
- Card fade-in animations on scroll
- Button hover effects
- Page transition animations
- Festival selector animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Backend Deployment (Heroku, Railway, etc.)

1. Set environment variables on platform
2. Deploy using git push or platform CLI
3. Update frontend API URL

### Frontend Deployment (Vercel, Netlify, etc.)

1. Build: `npm run build`
2. Deploy the build folder
3. Update proxy in package.json

## 📝 Environment Variables

### Backend (.env)

```
PORT=5000
MONGODB_URI=mongodb://user:password@cluster.mongodb.net/ho-tribe
JWT_SECRET=your_secure_secret_key
NODE_ENV=production
```

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is dedicated to preserving HO tribe cultural heritage.

## 👥 Team

DR. LAKO BADARA YOUTH CLUB is a community-driven initiative to preserve and promote HO tribal culture.

## 📞 Contact

For questions or suggestions, please contact the project maintainers.

---

**Preserving Heritage Through Art and Culture** 🎶
