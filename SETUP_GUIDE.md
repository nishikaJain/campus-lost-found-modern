# 🚀 Setup Guide - Campus Lost & Found

Complete step-by-step guide to set up and run the application.

---

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- ✅ **MySQL** (v8 or higher) - [Download](https://dev.mysql.com/downloads/)
- ✅ **Git** (optional) - [Download](https://git-scm.com/)
- ✅ A code editor like **VS Code** - [Download](https://code.visualstudio.com/)

---

## 📥 Step 1: Download the Project

### Option A: Using Git
```bash
git clone https://github.com/nishikaJain/campus-lost-found-modern.git
cd campus-lost-found-modern
```

### Option B: Download ZIP
1. Go to: https://github.com/nishikaJain/campus-lost-found-modern
2. Click **Code** → **Download ZIP**
3. Extract the ZIP file
4. Open the extracted folder

---

## 🗄️ Step 2: Setup Database

### 1. Open MySQL Workbench

### 2. Create the Database
Run this command:
```sql
CREATE DATABASE university_lost_found;
```

### 3. Import the Schema
- Open the file: `backend/database/schema.sql`
- Copy all the SQL code
- Paste and execute in MySQL Workbench

**OR** run this command in MySQL:
```sql
USE university_lost_found;
SOURCE /path/to/backend/database/schema.sql;
```

### 4. Verify Database
```sql
USE university_lost_found;
SHOW TABLES;
SELECT * FROM items;
```

You should see the `items` table with 3 sample records!

---

## ⚙️ Step 3: Configure Backend

### 1. Navigate to Backend Folder
```bash
cd backend
```

### 2. Create Environment File
Copy `.env.example` to `.env`:

**Windows (Command Prompt):**
```cmd
copy .env.example .env
```

**Mac/Linux:**
```bash
cp .env.example .env
```

### 3. Edit `.env` File
Open `backend/.env` and update with your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=university_lost_found
PORT=3000
```

**Important:** Replace `your_mysql_password` with your actual MySQL password!

### 4. Install Dependencies
```bash
npm install
```

This will install:
- express
- cors
- body-parser
- mysql2
- dotenv

### 5. Start the Backend Server
```bash
npm start
```

You should see:
```
✅ Database connected successfully
🚀 Server running on http://localhost:3000
```

**Keep this terminal window open!** The server needs to keep running.

---

## 🎨 Step 4: Open Frontend

### Method 1: Using Live Server (Recommended)

1. **Install Live Server Extension** in VS Code
2. Open the `frontend` folder in VS Code
3. Right-click on `index.html`
4. Click **"Open with Live Server"**
5. Your browser will open automatically!

### Method 2: Direct File Opening

1. Navigate to the `frontend` folder
2. Double-click `index.html`
3. It will open in your default browser

**Note:** If you use Method 2, you might need to update the API URL in `frontend/script.js` (line 2) if you encounter CORS issues.

---

## ✅ Step 5: Test the Application

### 1. Home Page
- You should see the beautiful blue gradient hero section
- Statistics cards showing: Active Lost Items, Items Found, Success Rate
- Recently Lost and Recently Found sections

### 2. Test Navigation
Click on the sidebar menu items:
- **Home** - Dashboard view
- **Lost Items** - Browse lost items
- **Found Items** - Browse found items
- **Report Lost** - Report a lost item
- **Report Found** - Report a found item

### 3. Test Reporting
1. Click **"Report Lost"** in the sidebar
2. Fill in the form:
   - Item Name: "Test Item"
   - Category: "Electronics"
   - Description: "Testing the app"
   - Location: "Library"
   - Your Name: "Your Name"
   - Phone: "9876543210" (exactly 10 digits)
3. Click **"Submit Report"**
4. You should see a success notification!
5. Go to **"Lost Items"** to see your item

### 4. Test Search & Filter
1. Go to **"Lost Items"** page
2. Try searching for "charger"
3. Try filtering by category "Electronics"

### 5. Test Contact Feature
1. Click **"Contact Owner"** on any lost item
2. A modal should pop up with contact information

---

## 🎯 Common Issues & Solutions

### Issue 1: "Cannot connect to database"

**Solution:**
- Check if MySQL is running
- Verify credentials in `backend/.env`
- Make sure database `university_lost_found` exists

### Issue 2: "Port 3000 is already in use"

**Solution:**
```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

Or change the port in `backend/.env`:
```env
PORT=3001
```

And update `frontend/script.js` line 2:
```javascript
const API_URL = 'http://localhost:3001/api';
```

### Issue 3: "npm: command not found"

**Solution:**
- Install Node.js from https://nodejs.org/
- Restart your terminal/command prompt
- Verify: `node --version` and `npm --version`

### Issue 4: Phone validation error

**Solution:**
- Phone number must be exactly 10 digits
- No spaces, dashes, or special characters
- Example: `9876543210` ✅
- Wrong: `98765-43210` ❌

### Issue 5: CORS error in browser console

**Solution:**
- Make sure backend server is running
- Check if API_URL in `frontend/script.js` is correct
- Try using Live Server instead of opening HTML directly

---

## 📱 Features Overview

### ✨ What You Can Do:

1. **View Dashboard**
   - See statistics (Active Lost, Items Found, Success Rate)
   - Browse recently lost and found items

2. **Browse Lost Items**
   - Search by name, description, or location
   - Filter by category
   - Contact item owners

3. **Browse Found Items**
   - Search and filter
   - Contact finders

4. **Report Lost Items**
   - Fill in item details
   - Provide contact information
   - 10-digit phone validation

5. **Report Found Items**
   - Same as lost items
   - Help reunite items with owners

---

## 🎨 Customization

### Change Colors
Edit `frontend/styles.css` - CSS variables at the top:
```css
:root {
    --primary-blue: #4169E1;  /* Change this */
    --orange: #FF6B35;
    --green: #51CF66;
    --purple: #9B59B6;
}
```

### Change University Name
Edit `frontend/index.html` - Line 15:
```html
<p>JKLU Campus</p>  <!-- Change this -->
```

### Add More Categories
Edit both:
1. `frontend/index.html` - Add option in select dropdowns
2. `frontend/styles.css` - Add category badge color

---

## 📊 Database Structure

```
items table:
├── id (Primary Key)
├── item_name
├── category
├── description
├── status (lost/found)
├── location
├── contact_name
├── contact_email
├── contact_phone
├── image_url
├── is_claimed
├── date_reported
└── claimed_date
```

---

## 🚀 Deployment (Optional)

### Deploy Backend:
- **Heroku**: https://www.heroku.com/
- **Railway**: https://railway.app/
- **Render**: https://render.com/

### Deploy Frontend:
- **Netlify**: https://www.netlify.com/
- **Vercel**: https://vercel.com/
- **GitHub Pages**: https://pages.github.com/

### Deploy Database:
- **PlanetScale**: https://planetscale.com/
- **AWS RDS**: https://aws.amazon.com/rds/
- **Railway MySQL**: https://railway.app/

---

## 📞 Need Help?

If you encounter any issues:

1. Check the **Common Issues** section above
2. Make sure all prerequisites are installed
3. Verify database connection
4. Check browser console for errors (F12)
5. Check terminal for backend errors

---

## 🎓 For Your Teacher

**Demo Flow:**

1. **Show Home Page**
   - "This is the dashboard with statistics"
   - "Shows active lost items, found items, and success rate"

2. **Browse Lost Items**
   - "Students can search and filter lost items"
   - "Click Contact Owner to get contact details"

3. **Report Lost Item**
   - "Easy form with validation"
   - "Phone number must be exactly 10 digits"
   - Submit and show success notification

4. **Show in Database**
   - Open MySQL Workbench
   - Run: `SELECT * FROM items;`
   - "Here's the data in the actual database"

5. **Technical Stack**
   - Frontend: HTML, CSS, JavaScript
   - Backend: Node.js + Express
   - Database: MySQL
   - Features: REST API, Form validation, Search & Filter

---

## ✅ Checklist

Before presenting:

- [ ] MySQL database created and schema imported
- [ ] Backend `.env` file configured
- [ ] Backend server running (`npm start`)
- [ ] Frontend opens in browser
- [ ] Can view home page with statistics
- [ ] Can browse lost and found items
- [ ] Can submit new items
- [ ] Phone validation works (10 digits)
- [ ] Search and filter work
- [ ] Contact modal works

---

**You're all set! Enjoy your beautiful Lost & Found app! 🎉**
