<div align="center">

<br/>

# onedesk

**academic · placement · productivity**

*a dual-mode student operating system : manage academics, placements, and productivity through one unified workspace.*

<br/>

![react](https://img.shields.io/badge/React-20232a?style=flat-square&logo=react&logoColor=61dafb)
![nodejs](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![tailwindcss](https://img.shields.io/badge/TailwindCSS-0f172a?style=flat-square&logo=tailwindcss&logoColor=38bdf8)
![mongodb](https://img.shields.io/badge/MongoDB-47a248?style=flat-square&logo=mongodb&logoColor=white)
![vite](https://img.shields.io/badge/Vite-646cff?style=flat-square&logo=vite&logoColor=white)
![jwt](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

<br/>

**[live](https://onedeskbysneh.vercel.app)** · **[backend api](https://onedeskapi.onrender.com)**

<br/>

</div>

---

## what is onedesk?

students juggle too many tools : separate calendars, spreadsheets, placement trackers, and academic portals that don't talk to each other. onedesk replaces all of them.

it operates in two independent modes:

- **college mode** — attendance, assignments, exams, cgpa, and a priority-aware overview dashboard
- **placement mode** — application pipeline tracking, oa deadlines, resource management, and placement alerts

each mode has its own widgets, workflows, and smart alerts tailored to where you are in your journey. everything persists to the cloud. nothing gets lost.

> 10+ modules, 30+ rest apis, 9 mongodb collections all behind a single jwt-authenticated workspace.

---

## how it works

### application flow
```
landing
    → signup / login → jwt issued → session persisted
    → dashboard → college mode or placement mode
    → modules load user-specific data from mongodb
    → overview dashboard aggregates alerts across all modules
```

### alert system
```
attendance below threshold     → high priority alert
assignment deadline approaching → medium priority alert
exam countdown under 48hrs     → high priority alert
oa deadline today              → critical alert
interview stage pending        → placement alert
```

the overview dashboard doesn't just display data — it reads across every module and surfaces what actually needs your attention, ranked by urgency.

### multi-tenant architecture
every api route is protected by jwt middleware. each user's data lives in isolated mongodb collections — no cross-user data leakage is possible by design.

---

## features

### college mode

| module | what it does |
|---|---|
| **attendance** | per-subject tracking, auto percentage calculation, danger zone alerts, semester reset |
| **subjects** | add/delete subjects, manage credits, attendance integration |
| **assignments** | create and complete assignments with priority flagging |
| **exams** | countdown timers with urgency tracking |
| **cgpa tracker** | semester-wise gpa entry, cgpa calculation, 10-point and 4-point scale + percentage conversion |
| **calendar** | create events, date-based retrieval for schedule planning |
| **overview** | surfaces high / medium / low priority alerts from attendance, assignments, and exams |

### placement mode

| module | what it does |
|---|---|
| **application tracker** | full pipeline — applied → oa → interview → rejected → offer |
| **oa tracker** | online assessment deadlines with countdown and alerts |
| **resource manager** | save prep resources by category — dsa, aptitude, cs fundamentals, projects, interview prep |
| **overview** | auto-generated alerts from oa deadlines, interview stages, and active pipeline |

---

## tech stack

| layer | tech |
|---|---|
| frontend | react, vite, tailwind css, lucide react |
| backend | node.js, express.js |
| database | mongodb atlas, mongoose |
| auth | jsonwebtoken, bcryptjs |
| deployment | vercel (client), render (server) |

---

## api reference

### auth
`post /auth/signup` · `post /auth/login` · `get /auth/me` · `delete /auth/delete` · `patch /auth/mode`

### college mode
`/subjects` · `/assignments` · `/exams` · `/progress` · `/calendar`

### placement mode
`/applications` · `/oadeadlines` · `/resources`

all routes support standard `get / post / patch / delete` methods with jwt bearer token authentication.

---

## database collections

`users` · `subjects` · `assignments` · `attendances` · `exams` · `progresses` · `calendarevents` · `applications` · `oadeadlines` · `resources`

---

## local setup

```bash
# 1. clone the repo
git clone <repository-url>
cd onedesk

# 2. install dependencies
cd client && npm install
cd ../server && npm install

# 3. configure environment variables

# server/.env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# client/.env
VITE_API_URL=http://localhost:5000/api

# 4. run locally
cd server && npm run dev       # backend
cd client && npm run dev       # frontend (new terminal)
```

---

## future scope

- **analytics dashboard** — visualize attendance trends, cgpa trajectory, and placement funnel
- **interview prep workflows** — structured preparation tracking per company
- **notifications** — deadline reminders via email or push
- **collaborative study** — shared resources and group calendars
- **cross-device sync** — real-time updates across sessions

---

## author

built by **smhsneh** designed to replace the fragmented mess of student tools with one workspace that actually understands what a cs student needs.
