# 🎨 Features & Customization Guide

## ✨ Current Features

### Frontend Features

#### 1. **Home Page**

- Hero section with animated title
- Welcome section with overview
- Features showcase (Music, Art, Scripts)
- Festival cards with details
- Dance showcase section
- Call-to-action section

#### 2. **Music Page**

- Browse all approved music
- Filter by category (Traditional, Dance, Festive, Devotional)
- Music cards with artist info
- Download counter
- Login-required download feature

#### 3. **Art Page**

- Browse traditional art gallery
- Filter by category (Paintings, Sculptures, Crafts, Traditional Art)
- High-resolution image viewing
- Artist information
- Download functionality

#### 4. **Scripts Page**

- Language resources and learning materials
- Filter by language (Ho, Santali, Mundari, Other)
- Script content preview
- Download documents
- Language learning support

#### 5. **Festivals Page**

- Detailed festival information
- Timeline view
- Dance types and activities
- Traditional foods listing
- Customs and traditions
- Interactive festival selector

#### 6. **Authentication**

- User registration
- Secure login with JWT
- Password hashing with bcrypt
- Token storage and management
- Automatic logout

#### 7. **Admin Panel**

- Content approval system
- Music, Art, and Script approvals
- Festival management
- Pending approvals dashboard
- Delete/reject functionality

### Backend Features

#### 1. **RESTful API**

- Authentication endpoints
- Music CRUD operations
- Art CRUD operations
- Script CRUD operations
- Festival management
- Admin functions

#### 2. **Security**

- JWT authentication
- Password hashing
- Protected routes
- Admin-only endpoints
- Input validation

#### 3. **Database Models**

- User model with roles
- Music model with metadata
- Art model with categorization
- Script model with language support
- Festival model with comprehensive details

### Design Features

#### 1. **GSAP Animations**

- Header slide-in
- Card fade-in on scroll
- Hover effects
- Page transitions
- Smooth scrolling effects

#### 2. **Responsive Design**

- Mobile-first approach
- Tablet optimization
- Desktop layout
- Touch-friendly buttons
- Flexible grids

#### 3. **Traditional Aesthetic**

- Earth tone color palette
- Serif typography
- Cultural motifs
- Decorative elements
- Traditional patterns

#### 4. **User Experience**

- Intuitive navigation
- Clear call-to-actions
- Loading states
- Error handling
- Smooth transitions

## 🎯 Customization Guide

### Color Scheme Customization

Edit `frontend/src/styles/globals.css`:

```css
:root {
  --primary-color: #8b4513; /* Change main color */
  --secondary-color: #d2691e; /* Change accent */
  --accent-color: #ffd700; /* Change highlight */
  --text-dark: #1a1a1a; /* Change text color */
  --text-light: #f5f5f5; /* Change light text */
  --background: #faf8f3; /* Change background */
  --card-bg: #fff9f0; /* Change card background */
  --border-color: #d4a574; /* Change border color */
}
```

### Add New Festival

1. **Update Database Schema** (if needed)
2. **Seed New Festival Data**:

```javascript
const newFestival = {
  name: "New Festival Name",
  month: "Month-Range",
  description: "Festival description...",
  significence: "Significance...",
  danceTypes: ["Dance 1", "Dance 2"],
  activities: ["Activity 1", "Activity 2"],
  foods: ["Food 1", "Food 2"],
  traditions: ["Tradition 1", "Tradition 2"],
};
```

### Add New Content Categories

#### Add Music Category

Edit `frontend/src/pages/Music.js`:

```javascript
const categories = [
  "Traditional",
  "Dance",
  "Festive",
  "Devotional",
  "NEW_CATEGORY",
];
```

Also update backend model validation in `backend/models/Music.js`:

```javascript
category: {
  type: String,
  enum: ['Traditional', 'Dance', 'Festive', 'Devotional', 'NEW_CATEGORY'],
}
```

### Customize Typography

Edit `frontend/src/styles/globals.css`:

```css
/* Change font family */
body {
  font-family: "Your Font Name", serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Your Font Name", serif;
}
```

### Add New Pages

1. **Create Component**:

```javascript
// frontend/src/pages/NewPage.js
import React from "react";
import "../styles/newpage.css";

const NewPage = () => {
  return <div className="new-page">{/* Content */}</div>;
};

export default NewPage;
```

2. **Add Route** in `frontend/src/App.js`:

```javascript
<Route path="/new-page" element={<NewPage />} />
```

3. **Add Navigation Link** in `frontend/src/components/Header.js`:

```javascript
<Link to="/new-page" className="nav-link">
  New Page
</Link>
```

### Customize Admin Panel

Edit `frontend/src/pages/Admin.js` to:

- Add new approval types
- Create custom dashboards
- Add statistics
- Implement advanced filters

### Add API Endpoints

1. **Create Route** in `backend/routes/`:

```javascript
router.get("/new-endpoint", async (req, res) => {
  // Your logic
});
```

2. **Export from Main Server** in `backend/server.js`:

```javascript
app.use("/api/new-route", require("./routes/new-route"));
```

3. **Add API Call** in `frontend/src/utils/api.js`:

```javascript
export const newAPICall = (params) => API.get("/new-route", { params });
```

## 🎨 Design Customization

### Add Background Images

1. Save image to `frontend/public/`
2. Add to CSS:

```css
.hero {
  background-image: url("/image-name.jpg");
  background-size: cover;
  background-position: center;
}
```

### Customize Animations

Edit `frontend/src/pages/[PageName].js`:

```javascript
// Change animation timing
gsap.from(".element", {
  duration: 2, // Change duration
  y: 100, // Change offset
  opacity: 0,
  stagger: 0.3, // Change stagger
  ease: "power3.out", // Change easing
});
```

### Add New Buttons

Add to `frontend/src/styles/globals.css`:

```css
.btn-custom {
  background: var(--primary-color);
  color: var(--text-light);
  padding: 12px 30px;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background: var(--secondary-color);
  transform: scale(1.05);
}
```

### Customize Card Styles

```css
.card {
  background: var(--card-bg);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}
```

## 📱 Layout Customization

### Adjust Grid Layout

Edit `frontend/src/styles/globals.css`:

```css
.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

/* Change for 4-column layout */
.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}
```

### Change Spacing

```css
.section {
  padding: 80px 20px; /* Adjust padding */
}

.container {
  max-width: 1200px; /* Adjust max-width */
  margin: 0 auto;
  padding: 0 20px;
}
```

## 🔌 Add Third-Party Services

### Google Analytics

Add to `frontend/public/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
</script>
```

### Email Notifications

Install package:

```bash
npm install nodemailer
```

Add to backend routes.

## 📊 Database Customization

### Add New Field to User

1. Edit `backend/models/User.js`
2. Add field to schema
3. Update registration/login logic

### Create New Collection

1. Create model file in `backend/models/`
2. Create route file in `backend/routes/`
3. Link in `backend/server.js`

## 🚀 Performance Optimization

### Image Optimization

- Use WebP format
- Add lazy loading
- Implement image compression

### Code Splitting

- Split large components
- Lazy load routes
- Use React.memo for optimization

### Caching

- Implement service workers
- Cache API responses
- Use localStorage for user data

## 📚 Documentation

### Add JSDoc Comments

```javascript
/**
 * Downloads music file
 * @param {string} musicId - The music ID
 * @returns {Promise} Download response
 */
const handleDownload = async (musicId) => {
  // Implementation
};
```

## 🎯 Next Steps

1. Customize colors to match your brand
2. Add real music/art files
3. Implement upload functionality
4. Add email notifications
5. Deploy to production
6. Monitor and optimize

---

For more help, check individual component files or contact the development team.
