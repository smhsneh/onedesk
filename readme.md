# 👾 onedesk
a dual-mode student operating system ; built to manage academics, placements, planning, and productivity through a single unified workspace.

![react](https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logoColor=61dafb)
![vite](https://img.shields.io/badge/vite-646cff?style=for-the-badge&logo=vite&logoColor=white)
![tailwindcss](https://img.shields.io/badge/tailwindcss-0f172a?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8)
![nodejs](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![mongodb](https://img.shields.io/badge/mongodb-47a248?style=for-the-badge&logo=mongodb&logoColor=white)
![jwt](https://img.shields.io/badge/jwt-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

---

## live links
- **live demo** : [https://onedeskbysneh.vercel.app](https://onedeskbysneh.vercel.app)
- **backend api** : [https://onedeskapi.onrender.com](https://onedeskapi.onrender.com)

---

## 📑  overview
onedesk is a full-stack student productivity platform designed to replace the fragmented collection of tools students rely on throughout their academic and placement journey. instead of juggling separate calendars, spreadsheets, placement trackers, academic portals, and productivity apps ; everything lives in one personalized workspace.
the platform operates in two independent modes:
- **college mode** : for academic management
- **placement mode** : for job application and preparation tracking

each mode provides specialized widgets, workflows, and alerts tailored to where a student is in their journey.

---

## 🎯 features

### authentication
- signup and login with jwt-based session management
- protected routes with session persistence
- logout, delete account, and mode switching

### college mode
- **attendance management** : track attendance per subject, automatic percentage calculation, danger zone alerts, and reset support for new semesters.
- **subjects** : add and delete subjects, manage credits, and attendance integration.
- **assignments** : create, complete, and delete assignments, overview integration with priority flagging.
- **exams** : create and delete exams, countdown timers with urgency tracking.
- **cgpa tracker** : semester-wise gpa entry and cgpa calculation, 10-point scale support, 4-point scale and percentage conversion.
- **calendar** : create and delete events, date-based event retrieval for schedule planning.
- **overview dashboard** : automatically surfaces alerts from attendance, assignments, and exams — categorized as high, medium, or low priority.

### placement mode
- **application tracker** : track company applications across the full pipeline (applied, oa, interview, rejected, offer) with full persistence via mongodb.
- **oa tracker** : track online assessment deadlines, countdown monitoring with deadline alerts.
- **resource manager** : save and organize preparation resources by category (dsa, aptitude, cs fundamentals, projects, interview prep, other). open resource links directly from the dashboard.
- **placement overview** : automatically generates alerts from upcoming oa deadlines, interview stages, active pipeline, and offers received.

---

## tech stack
- **frontend** : react + vite, tailwind css, lucide react
- **backend** : node.js + express, mongodb atlas + mongoose, jsonwebtoken + bcryptjs

---

## 📂 architecture
```text
landing → authentication → dashboard → college mode / placement mode
```

---

## project structure
```text
onedesk/
├── client/
│   └── src/ (components, context, modules, pages, services, styles, utils)
├── server/
│   ├── config, controllers, middleware, models, routes, services, utils
└── readme.md
```

---

##  database collections
`users` `subjects` `assignments` `attendances` `exams` `progresses` `calendarevents` `applications` `oadeadlines` `resources`

---

## 👾 api reference

### authentication
`post /auth/signup` | `post /auth/login` | `get /auth/me` | `delete /auth/delete` | `patch /auth/mode`

### college mode
`get/post/delete /subjects` | `get/post/patch/delete /assignments` | `get/post/delete /exams` | `get/put /progress` | `get/post/delete /calendar`

### placement mode
`get/post/patch/delete /applications` | `get/post/patch/delete /oadeadlines` | `get/post/delete /resources`

---

## ⌛ local setup

### 1. clone the repository
```bash
git clone <repository-url>
cd onedesk
```

### 2. install dependencies
```bash
cd client && npm install
cd ../server && npm install
```

### 3. configure environment variables
**backend** (`server/.env`):
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
**frontend** (`client/.env`):
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. run locally
```bash
# backend
cd server && npm run dev

# frontend (new terminal)
cd client && npm run dev
```

---

## 🎯 deployment
| layer | platform |
|-------|----------|
| frontend | vercel |
| backend | render / railway |
| database | mongodb atlas |

---

## 🪻 future scope
- analytics and insights dashboard
- enhanced academic reporting
- interview preparation workflows
- collaborative study features
- advanced placement analytics
- notification systems
- cross-device synchronization enhancements

---

## 💻 made by
**smhsneh** : designed, developed, and maintained as a full-stack student productivity platform focused on simplifying academic management and placement preparation.