# 🎓 Campus Lost & Found - Modern UI

A beautiful, modern Lost & Found system for university campuses with a professional interface inspired by the best design practices.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![MySQL](https://img.shields.io/badge/mysql-%3E%3D8.0-orange)

---

## ✨ Features

### 🏠 **Beautiful Home Page**
- Stunning blue gradient hero section
- Real-time statistics dashboard
- Recently lost and found items showcase

### 🔍 **Smart Search & Filter**
- Search by item name, description, or location
- Filter by categories (Electronics, Bags, Books, etc.)
- Instant results

### 📦 **Item Management**
- Browse lost items with detailed information
- Browse found items ready to claim
- Contact owners/finders with one click

### ➕ **Easy Reporting**
- Simple forms to report lost items
- Simple forms to report found items
- Phone number validation (10 digits)
- Email validation

### 📊 **Statistics Dashboard**
- Active Lost Items counter (Orange card)
- Items Found counter (Green card)
- Success Rate tracker (Purple card)

### 🎨 **Modern Design**
- Gradient backgrounds
- Smooth animations
- Card-based layouts
- Responsive design (works on all devices)
- Professional color scheme

---

## 🖼️ Screenshots

### Home Page
Beautiful gradient hero section with call-to-action buttons and statistics cards.

### Lost Items Page
Browse and search through reported lost items with category filters.

### Found Items Page
Check if your lost item has been found by someone.

### Report Forms
Easy-to-use forms with validation for reporting lost or found items.

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6+)** - Dynamic functionality
- **Font Awesome** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL** - Relational database
- **mysql2** - MySQL client for Node.js

### Features
- RESTful API architecture
- Form validation (client & server-side)
- Real-time data updates
- Search and filter functionality
- Modal dialogs for contact information

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v8 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/nishikaJain/campus-lost-found-modern.git
cd campus-lost-found-modern
```

2. **Setup Database**
```sql
CREATE DATABASE university_lost_found;
USE university_lost_found;
-- Run the SQL from backend/database/schema.sql
```

3. **Configure Backend**
```bash
cd backend
cp .env.example .env
# Edit .env with your MySQL credentials
npm install
npm start
```

4. **Open Frontend**
- Open `frontend/index.html` in your browser
- Or use Live Server in VS Code

📚 **For detailed setup instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md)**

---

## 📁 Project Structure

```
campus-lost-found-modern/
├── frontend/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Modern CSS with gradients
│   └── script.js           # JavaScript functionality
├── backend/
│   ├── server.js           # Express server
│   ├── config/
│   │   └── database.js     # MySQL connection
│   ├── database/
│   │   └── schema.sql      # Database schema
│   ├── package.json        # Dependencies
│   └── .env.example        # Environment variables template
├── README.md               # This file
├── SETUP_GUIDE.md          # Detailed setup instructions
└── QUICKSTART.md           # Quick start guide
```

---

## 🎯 API Endpoints

### Items
- `GET /api/items` - Get all items
- `GET /api/items/:status` - Get items by status (lost/found)
- `GET /api/item/:id` - Get single item by ID
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `PATCH /api/items/:id/claim` - Mark item as claimed
- `DELETE /api/items/:id` - Delete item

### Search
- `GET /api/search?q=query` - Search items

### Health
- `GET /health` - Server health check

---

## 🎨 Color Scheme

```css
Primary Blue:   #4169E1  /* Hero section, buttons */
Orange:         #FF6B35  /* Active Lost Items card */
Green:          #51CF66  /* Items Found card */
Purple:         #9B59B6  /* Success Rate card */
Gray Scale:     #F9FAFB to #111827  /* Text and backgrounds */
```

---

## 📱 Responsive Design

The application is fully responsive and works perfectly on:
- 💻 Desktop (1920px and above)
- 💻 Laptop (1024px - 1919px)
- 📱 Tablet (768px - 1023px)
- 📱 Mobile (320px - 767px)

---

## ✅ Features Checklist

- [x] Beautiful modern UI with gradients
- [x] Sidebar navigation
- [x] Home page with hero section
- [x] Statistics dashboard
- [x] Lost items browser
- [x] Found items browser
- [x] Search functionality
- [x] Category filters
- [x] Report lost item form
- [x] Report found item form
- [x] Phone validation (10 digits)
- [x] Email validation
- [x] Contact modal
- [x] Responsive design
- [x] Smooth animations
- [x] REST API backend
- [x] MySQL database
- [x] Form validation (client & server)

---

## 🔧 Customization

### Change University Name
Edit `frontend/index.html` line 15:
```html
<p>JKLU Campus</p>  <!-- Change to your university -->
```

### Change Colors
Edit `frontend/styles.css` CSS variables:
```css
:root {
    --primary-blue: #4169E1;  /* Your color */
    --orange: #FF6B35;
    --green: #51CF66;
    --purple: #9B59B6;
}
```

### Add Categories
1. Add option in `frontend/index.html` select dropdowns
2. Add category badge style in `frontend/styles.css`

---

## 🐛 Troubleshooting

### Backend won't start
- Check if MySQL is running
- Verify `.env` credentials
- Make sure port 3000 is available

### Can't see items
- Ensure backend server is running
- Check browser console (F12) for errors
- Verify API_URL in `frontend/script.js`

### Phone validation error
- Phone must be exactly 10 digits
- No spaces, dashes, or special characters
- Example: `9876543210` ✅

For more help, see [SETUP_GUIDE.md](SETUP_GUIDE.md)

---

## 🚀 Deployment

### Backend
- [Heroku](https://www.heroku.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)

### Frontend
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

### Database
- [PlanetScale](https://planetscale.com/)
- [AWS RDS](https://aws.amazon.com/rds/)
- [Railway MySQL](https://railway.app/)

---

## 📄 License

MIT License - feel free to use this project for your university!

---

## 👥 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

---

## 🎓 Perfect for

- University projects
- Campus management systems
- Lost and found services
- Community platforms
- Learning web development

---

## 📞 Support

Need help? Check out:
- [Setup Guide](SETUP_GUIDE.md) - Detailed instructions
- [Quick Start](QUICKSTART.md) - Get running in 5 minutes
- [Issues](https://github.com/nishikaJain/campus-lost-found-modern/issues) - Report bugs

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

**Made with ❤️ for JKLU Campus**

---

## 📸 Preview

Visit the repository to see the beautiful modern interface:
https://github.com/nishikaJain/campus-lost-found-modern

---

**Ready to get started? Follow the [SETUP_GUIDE.md](SETUP_GUIDE.md)!** 🚀
