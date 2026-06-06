<div align="center">

<br/>

# onedesk

**academic · placement · productivity**

*a dual-mode student operating system — built to manage academics, placements, planning, and productivity through a single unified workspace.*

<br/>

![react](https://img.shields.io/badge/React-20232a?style=flat-square&logo=react&logoColor=61dafb)
![mongodb](https://img.shields.io/badge/MongoDB-47a248?style=flat-square&logo=mongodb&logoColor=white)
![vite](https://img.shields.io/badge/Vite-646cff?style=flat-square&logo=vite&logoColor=white)
![tailwindcss](https://img.shields.io/badge/TailwindCSS-0f172a?style=flat-square&logo=tailwindcss&logoColor=38bdf8)
![nodejs](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![jwt](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

<br/>

**[live demo](https://onedeskbysneh.vercel.app)** · **[backend api](https://onedeskapi.onrender.com)**

</div>

---

## overview

**onedesk** is a full-stack student productivity platform designed to replace the fragmented collection of tools students rely on throughout their academic and placement journey. instead of juggling separate calendars, spreadsheets, placement trackers, academic portals, and productivity apps — everything lives in one personalized workspace.

the platform operates in two independent modes:

- **college mode** — for academic management
- **placement mode** — for job application and preparation tracking

each mode provides specialized widgets, workflows, and alerts tailored to where a student is in their journey.

---

## features

### authentication
- signup and login with jwt-based session management
- protected routes with session persistence
- logout, delete account, and mode switching

### college mode

| module | description |
|---|---|
| **attendance** | track per-subject attendance, auto percentage calculation, danger zone alerts, semester reset |
| **subjects** | add/delete subjects, manage credits, attendance integration |
| **assignments** | create, complete, delete assignments with priority flagging and overview integration |
| **exams** | create/delete exams, countdown timers with urgency tracking |
| **cgpa tracker** | semester-wise gpa entry, cgpa calculation, 10-point and 4-point scale + percentage conversion |
| **calendar** | create/delete events, date-based event retrieval for schedule planning |
| **overview dashboard** | surfaces alerts from attendance, assignments, and exams — categorized as high, medium, or low priority |

### placement mode

| module | description |
|---|---|
| **application tracker** | track companies across full pipeline — applied, oa, interview, rejected, offer — with mongodb persistence |
| **oa tracker** | track online assessment deadlines, countdown monitoring with deadline alerts |
| **resource manager** | save and organize prep resources by category — dsa, aptitude, cs fundamentals, projects, interview prep, other |
| **placement overview** | auto-generates alerts from oa deadlines, interview stages, active pipeline, and offers received |

---

## tech stack

```
react + vite ────────────── frontend framework and build tool
tailwind css ────────────── utility-first styling
lucide react ────────────── icon library
node.js + express ───────── backend runtime and api framework
mongodb atlas + mongoose ─── database and odm
jsonwebtoken + bcryptjs ──── auth and password hashing
```

---

## architecture

```
landing → authentication → dashboard → college mode / placement mode
```

---

## project structure

```
onedesk/
├── client/
│   └── src/
│       ├── components, context, modules, pages, services, styles, utils
├── server/
│   ├── config, controllers, middleware, models, routes, services, utils
└── readme.md
```

---

## database collections

`users` `subjects` `assignments` `attendances` `exams` `progresses` `calendarevents` `applications` `oadeadlines` `resources`

---

## api reference

### authentication
`post /auth/signup` · `post /auth/login` · `get /auth/me` · `delete /auth/delete` · `patch /auth/mode`

### college mode
`get/post/delete /subjects` · `get/post/patch/delete /assignments` · `get/post/delete /exams` · `get/put /progress` · `get/post/delete /calendar`

### placement mode
`get/post/patch/delete /applications` · `get/post/patch/delete /oadeadlines` · `get/post/delete /resources`

---

## local setup

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

## deployment

| layer | platform |
|---|---|
| **frontend** | vercel |
| **backend** | render / railway |
| **database** | mongodb atlas |

---

## future scope

- analytics and insights dashboard
- enhanced academic reporting
- interview preparation workflows
- collaborative study features
- advanced placement analytics
- notification systems
- cross-device synchronization enhancements

---

## made by

> **smhsneh** — designed, developed, and maintained as a full-stack student productivity platform focused on simplifying academic management and placement preparation.
