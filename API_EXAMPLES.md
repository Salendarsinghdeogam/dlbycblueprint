# 📝 API Usage Examples

## Authentication Examples

### 1. Register a New User

**Endpoint:** `POST /api/auth/register`

**Request:**

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Response:**

```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### 2. Login

**Endpoint:** `POST /api/auth/login`

**Request:**

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Response:**

```json
{
  "message": "Logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

## Music Management

### 3. Create Music (Admin Only)

**Endpoint:** `POST /api/music`

**Headers:**

```
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

**Request:**

```bash
curl -X POST http://localhost:5000/api/music \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Traditional HO Song",
    "artist": "Ho Community",
    "description": "A beautiful traditional song from HO tribe",
    "category": "Traditional",
    "audioUrl": "https://example.com/music.mp3",
    "thumbnailUrl": "https://example.com/thumb.jpg",
    "festival": "Mage Parab"
  }'
```

### 4. Get All Music

**Endpoint:** `GET /api/music`

**Request:**

```bash
curl http://localhost:5000/api/music
```

**Request with Filters:**

```bash
curl "http://localhost:5000/api/music?category=Traditional&festival=Mage%20Parab"
```

**Response:**

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Traditional HO Song",
    "artist": "Ho Community",
    "description": "A beautiful traditional song",
    "category": "Traditional",
    "audioUrl": "https://example.com/music.mp3",
    "festival": "Mage Parab",
    "downloads": 15,
    "approved": true,
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

### 5. Download Music (Protected)

**Endpoint:** `POST /api/music/:id/download`

**Headers:**

```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Request:**

```bash
curl -X POST http://localhost:5000/api/music/507f1f77bcf86cd799439011/download \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Response:**

```json
{
  "message": "Download recorded",
  "music": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Traditional HO Song",
    "downloads": 16
  }
}
```

## Art Management

### 6. Create Art (Admin Only)

**Endpoint:** `POST /api/art`

**Request:**

```bash
curl -X POST http://localhost:5000/api/art \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "HO Traditional Painting",
    "artist": "Local Artist",
    "description": "An intricate traditional HO tribal painting",
    "category": "Paintings",
    "imageUrl": "https://example.com/art.jpg",
    "festival": "Mage Parab"
  }'
```

### 7. Get All Art

**Endpoint:** `GET /api/art`

**Request:**

```bash
curl "http://localhost:5000/api/art?category=Paintings"
```

## Script Management

### 8. Create Script (Admin Only)

**Endpoint:** `POST /api/scripts`

**Request:**

```bash
curl -X POST http://localhost:5000/api/scripts \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Ho Language Grammar",
    "language": "Ho",
    "description": "Complete guide to Ho language grammar",
    "content": "Introduction to Ho language...",
    "category": "Grammar",
    "documentUrl": "https://example.com/grammar.pdf"
  }'
```

### 9. Get Scripts

**Endpoint:** `GET /api/scripts`

**Request:**

```bash
curl "http://localhost:5000/api/scripts?language=Ho"
```

## Festival Management

### 10. Get All Festivals

**Endpoint:** `GET /api/festivals`

**Request:**

```bash
curl http://localhost:5000/api/festivals
```

**Response:**

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Mage Parab",
    "month": "February-March",
    "description": "Spring festival celebrating new year...",
    "significence": "Marks beginning of sowing season...",
    "danceTypes": ["Spring Dance", "Festival Dance"],
    "activities": ["Traditional singing", "Feasting"],
    "foods": ["Rice cakes", "Traditional bread"],
    "traditions": ["Lighting lamps", "Blessings"]
  }
]
```

### 11. Get Festival by Name

**Endpoint:** `GET /api/festivals/name/:name`

**Request:**

```bash
curl http://localhost:5000/api/festivals/name/Mage%20Parab
```

## Admin Functions

### 12. Get Pending Approvals

**Endpoint:** `GET /api/admin/pending/items`

**Headers:**

```
Authorization: Bearer ADMIN_JWT_TOKEN
```

**Request:**

```bash
curl http://localhost:5000/api/admin/pending/items \
  -H "Authorization: Bearer ADMIN_JWT_TOKEN"
```

**Response:**

```json
{
  "music": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "title": "New Song",
      "artist": "Artist Name",
      "category": "Traditional",
      "approved": false
    }
  ],
  "art": [],
  "scripts": []
}
```

### 13. Approve Music

**Endpoint:** `PUT /api/admin/music/:id/approve`

**Request:**

```bash
curl -X PUT http://localhost:5000/api/admin/music/507f1f77bcf86cd799439012/approve \
  -H "Authorization: Bearer ADMIN_JWT_TOKEN"
```

**Response:**

```json
{
  "message": "Music approved",
  "music": {
    "_id": "507f1f77bcf86cd799439012",
    "title": "New Song",
    "approved": true
  }
}
```

### 14. Delete Music (Reject)

**Endpoint:** `DELETE /api/admin/music/:id`

**Request:**

```bash
curl -X DELETE http://localhost:5000/api/admin/music/507f1f77bcf86cd799439012 \
  -H "Authorization: Bearer ADMIN_JWT_TOKEN"
```

**Response:**

```json
{
  "message": "Music deleted"
}
```

### 15. Create Festival (Admin Only)

**Endpoint:** `POST /api/admin/festival`

**Request:**

```bash
curl -X POST http://localhost:5000/api/admin/festival \
  -H "Authorization: Bearer ADMIN_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Mage Parab",
    "month": "February-March",
    "description": "Spring festival of HO tribe...",
    "significence": "Marks new year and sowing season...",
    "danceTypes": ["Spring Dance", "Festival Dance"],
    "activities": ["Singing", "Dancing", "Feasting"],
    "foods": ["Rice cakes", "Traditional bread"],
    "traditions": ["Lighting lamps", "Blessings from elders"],
    "imageUrl": "https://example.com/festival.jpg"
  }'
```

## JavaScript/Frontend Examples

### Using Axios in React

```javascript
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Register
const registerUser = async (name, email, password) => {
  try {
    const response = await API.post("/auth/register", {
      name,
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
  }
};

// Get Music
const getMusic = async (category = "") => {
  try {
    const response = await API.get("/music", {
      params: { category },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching music:", error);
  }
};

// Download Music (Protected)
const downloadMusic = async (musicId, token) => {
  try {
    const response = await API.post(
      `/music/${musicId}/download`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Download error:", error);
  }
};

// Approve Music (Admin)
const approveMusicItem = async (musicId, token) => {
  try {
    const response = await API.put(
      `/admin/music/${musicId}/approve`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Approval error:", error);
  }
};
```

## cURL Command Examples for Testing

### Test Backend Health

```bash
curl http://localhost:5000/api/health
```

### Register and Get Token

```bash
RESPONSE=$(curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "testpass123"
  }')

TOKEN=$(echo $RESPONSE | grep -o '"token":"[^"]*' | grep -o '[^"]*$')
echo $TOKEN
```

### Use Token in Subsequent Requests

```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer $TOKEN"
```

## Postman Collection Template

### Create a new Postman Collection

1. Create Environment Variables:
   - `baseUrl`: http://localhost:5000/api
   - `token`: (set after login)

2. Create Requests:
   - POST `/auth/register`
   - POST `/auth/login`
   - GET `/music`
   - POST `/music` (Admin)
   - GET `/festivals`
   - And more...

## Rate Limiting (Future Implementation)

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use("/api/", limiter);
```

## Error Handling Examples

### Common Error Responses

**401 Unauthorized:**

```json
{
  "message": "No token, authorization denied"
}
```

**403 Forbidden:**

```json
{
  "message": "Admin access required"
}
```

**404 Not Found:**

```json
{
  "message": "Music not found"
}
```

**400 Bad Request:**

```json
{
  "message": "Please provide all required fields"
}
```

---

For more information, refer to the main documentation or individual API route files.
