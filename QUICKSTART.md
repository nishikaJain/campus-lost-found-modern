# ⚡ Quick Start Guide

Get up and running in 5 minutes!

---

## 🎯 Super Quick Setup

### 1. Download & Extract
```bash
# Download from GitHub
https://github.com/nishikaJain/campus-lost-found-modern

# Or clone
git clone https://github.com/nishikaJain/campus-lost-found-modern.git
cd campus-lost-found-modern
```

### 2. Setup Database (2 minutes)
```sql
-- In MySQL Workbench:
CREATE DATABASE university_lost_found;
USE university_lost_found;

-- Then run the SQL from: backend/database/schema.sql
```

### 3. Configure Backend (1 minute)
```bash
cd backend
copy .env.example .env    # Windows
# OR
cp .env.example .env      # Mac/Linux

# Edit .env and add your MySQL password
```

### 4. Install & Start Backend (1 minute)
```bash
npm install
npm start
```

### 5. Open Frontend (30 seconds)
- Open `frontend/index.html` in your browser
- Or use Live Server in VS Code

---

## ✅ That's It!

You should now see:
- 🏠 Beautiful home page with blue gradient
- 📊 Statistics cards (Orange, Green, Purple)
- 📝 Lost and Found items
- ➕ Report forms

---

## 🎨 What You Get

![Home Page](https://via.placeholder.com/800x400/4169E1/ffffff?text=Beautiful+Modern+UI)

**Features:**
- ✨ Modern gradient design
- 📱 Fully responsive
- 🔍 Search & filter
- 📞 Contact modals
- ✅ Form validation
- 📊 Real-time statistics

---

## 🚨 Quick Troubleshooting

**Backend won't start?**
```bash
# Check if MySQL is running
# Update .env with correct password
```

**Can't see items?**
```bash
# Make sure backend is running
# Check browser console (F12)
```

**Phone validation error?**
```
Use exactly 10 digits: 9876543210
```

---

## 📚 Need More Help?

Read the full **[SETUP_GUIDE.md](SETUP_GUIDE.md)** for detailed instructions!

---

**Enjoy your beautiful Lost & Found app! 🎉**
