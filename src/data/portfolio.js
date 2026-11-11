// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Sheikh Sazzaduzzaman",
  shortName: "Sazzad",
  designation: "Software Engineer",
  roles: ["Software Engineer", "Full Stack Developer", "Android Developer"],
  intro:
    "I build reliable web and Android applications, with hands-on experience in machine learning and on-device AI.",
  location: "Dhaka, Bangladesh",
  photo: "/images/profile.jpg",
  resume: "/resume/Sheikh-Sazzaduzzaman-Resume.pdf",
  resumeFileName: "Sheikh-Sazzaduzzaman-Resume.pdf",
  email: "sheikhsazzaduzzaman@gmail.com",
  phone: "+880 1794-755206",
  phoneHref: "tel:+8801794755206",
  whatsapp: "+880 1794-755206",
  whatsappHref: "https://wa.me/8801794755206",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/ssheikhs", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sheikhsazzaduzzaman", icon: "linkedin" },
  { name: "WhatsApp", url: "https://wa.me/8801794755206", icon: "whatsapp" },
  { name: "Email", url: "mailto:sheikhsazzaduzzaman@gmail.com", icon: "mail" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I am a Software Engineer focused on building practical, user-oriented software across web, Android and AI/ML. I hold a B.Sc. in Computer Science and Engineering from East West University, with a major in Software Engineering.",
    "My programming journey began with C and C++ and grew into Android development with Java and Kotlin, web development with PHP and Laravel, and machine learning through my thesis, SignBangla, a real-time Bangla sign language recognition app. I am currently expanding into the MERN stack and Next.js.",
    "I enjoy turning ideas into reliable products that solve real-world problems, and I take ownership of the full process, from database design and APIs to clean, responsive interfaces.",
  ],
  facts: [
    { label: "Based in", value: "Dhaka, Bangladesh" },
    { label: "Currently", value: "Software Engineer at Lin Star Company Ltd." },
    { label: "Degree", value: "B.Sc. in CSE, East West University" },
    { label: "Languages", value: "Bengali (native), English (proficient)" },
  ],
  interests: ["Graphic design", "Networking & security", "Exploring new technology"],
};

// level: "daily" = use regularly, "learning" = currently learning
export const skillGroups = [
  {
    title: "Frontend",
    note: "Interfaces that work on every screen size",
    skills: [
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26", level: "daily" },
      { name: "CSS3", icon: "SiCss", color: "#1572B6", level: "daily" },
      { name: "JavaScript", icon: "SiJavascript", color: "#E8C21C", level: "daily" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4", level: "daily" },
      { name: "React", icon: "SiReact", color: "#149ECA", level: "learning" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#16213A", level: "learning" },
    ],
  },
  {
    title: "Android",
    note: "Native apps with clean architecture",
    skills: [
      { name: "Kotlin", icon: "SiKotlin", color: "#7F52FF", level: "daily" },
      { name: "Java", icon: "FaJava", color: "#E76F00", level: "daily" },
      { name: "Jetpack Compose", icon: "SiJetpackcompose", color: "#4285F4", level: "daily" },
      { name: "Android SDK", icon: "SiAndroid", color: "#34A853", level: "daily" },
      { name: "MVVM / Retrofit", icon: "SiAndroidstudio", color: "#3DDC84", level: "daily" },
    ],
  },
  {
    title: "Backend & Databases",
    note: "APIs, auth and data that stays consistent",
    skills: [
      { name: "PHP", icon: "SiPhp", color: "#777BB4", level: "daily" },
      { name: "Laravel", icon: "SiLaravel", color: "#FF2D20", level: "daily" },
      { name: "MySQL", icon: "SiMysql", color: "#00758F", level: "daily" },
      { name: "Firebase", icon: "SiFirebase", color: "#F5A623", level: "daily" },
      { name: "SQLite", icon: "SiSqlite", color: "#0F80CC", level: "daily" },
      { name: "Node.js", icon: "SiNodedotjs", color: "#5FA04E", level: "learning" },
      { name: "Express", icon: "SiExpress", color: "#16213A", level: "learning" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248", level: "learning" },
    ],
  },
  {
    title: "AI / ML",
    note: "Models that run on-device in real time",
    skills: [
      { name: "Python", icon: "SiPython", color: "#3776AB", level: "daily" },
      { name: "TensorFlow Lite", icon: "SiTensorflow", color: "#FF6F00", level: "daily" },
      { name: "MediaPipe", icon: "SiMediapipe", color: "#0097A7", level: "daily" },
      { name: "LSTM / CNN", icon: "SiPython", color: "#5A6478", level: "daily" },
    ],
  },
  {
    title: "Languages & Tools",
    note: "What I reach for every day",
    skills: [
      { name: "C", icon: "SiC", color: "#5C6BC0", level: "daily" },
      { name: "C++", icon: "SiCplusplus", color: "#00599C", level: "daily" },
      { name: "Git", icon: "SiGit", color: "#F05032", level: "daily" },
      { name: "GitHub", icon: "SiGithub", color: "#16213A", level: "daily" },
      { name: "VS Code", icon: "VscVscode", color: "#007ACC", level: "daily" },
      { name: "Android Studio", icon: "SiAndroidstudio", color: "#3DDC84", level: "daily" },
      { name: "Apache", icon: "SiApache", color: "#D22128", level: "daily" },
      { name: "Vercel", icon: "SiVercel", color: "#16213A", level: "daily" },
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    school: "East West University, Dhaka",
    period: "2021 – 2025",
    details: [
      { label: "Major", value: "Software Engineering" },
      { label: "Thesis", value: "SignBangla: Real-Time Bangla Sign Language Recognition System" },
      { label: "Key courses", value: "Web Programming (CSE479), Mobile Programming (CSE489)" },
    ],
    achievement: "First runner-up, Network War: National Telco Warfare 2024, organised by the EWU Telecommunications Club (50+ participants from 7+ universities)",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Lin Star Company Ltd.",
    period: "Jun 2026 – Present",
    type: "Full-time",
    points: [
      "Building and maintaining web and Android software for the company's products and clients.",
      "Working across the full stack, from database design and APIs to responsive user interfaces.",
    ],
    stack: ["PHP", "Laravel", "MySQL", "JavaScript", "Kotlin"],
  },
  {
    role: "Web Developer",
    company: "SwiftPlus",
    period: "Feb 2026 – May 2026",
    type: "Full-time",
    points: [
      "Built and maintained swiftplus.bd, a PHP and MySQL e-commerce store for CCTV and security equipment.",
      "Added Firebase sign-in with OTP email verification, an admin panel with product labels, site-wide search and SEO-friendly URLs.",
      "Found and fixed access-control bugs and removed leftover unauthenticated scripts during a security review.",
    ],
    stack: ["PHP", "MySQL", "Firebase", "JavaScript"],
  },
  {
    role: "Android Developer",
    company: "Project-based",
    period: "2023 – Present",
    type: "Freelance & academic",
    points: [
      "Developed Android apps with Kotlin, Java, the Android SDK, Firebase, REST APIs and SQLite.",
      "Applied MVVM architecture and integrated backend services, push notifications and offline storage.",
    ],
    stack: ["Kotlin", "Java", "Firebase", "Retrofit", "SQLite"],
  },
];

export const projects = [
  {
    slug: "hateyhat",
    name: "HateyHat",
    tagline: "A community platform where people in Bangladesh create, join and track social service events.",
    cover: "/images/projects/hateyhat-home.jpg",
    gallery: [
      "/images/projects/hateyhat-home.jpg",
      "/images/projects/hateyhat-events.jpg",
      "/images/projects/hateyhat-details.jpg",
      "/images/projects/hateyhat-dark.jpg",
    ],
    category: "Full-stack web app",
    stack: ["Next.js 16", "React 19", "Tailwind CSS", "DaisyUI", "BetterAuth", "Express", "MongoDB", "JWT", "Vercel"],
    cardStack: ["Next.js", "Express", "MongoDB"],
    description:
      "HateyHat (হাতে হাত, \"hand in hand\") helps volunteers find cleanups, blanket drives and tree-planting events near them. Anyone can browse upcoming events with search, a type filter and sorting. After logging in with email or Google, users can create events, join an event once, see everything they joined, and manage the events they organise. Organisers can update or delete only their own events, and the whole site supports light and dark themes.",
    live: { url: "https://hateyhat.vercel.app", label: "Live site" },
    github: "https://github.com/ssheikhs/HateyHat",
    server: "https://github.com/ssheikhs/HateyHat-server",
    challenges: [
      "Sharing one login between a Next.js app and a separate Express server. BetterAuth issues a JWT with the user's email, and the server verifies its signature with BetterAuth's public keys, so the two apps never share a password or secret.",
      "Cross-origin requests between two Vercel deployments. I routed all API calls through a Next.js proxy path so the browser only ever talks to one origin, which removed the CORS problems.",
      "Private pages sent logged-in users back to the login page on reload. Moving the session check into a server-side layout fixed it.",
      "Making ownership rules impossible to bypass. The server, not the UI, refuses edits and deletes from anyone but the organiser and blocks joining the same event twice.",
    ],
    improvements: [
      "Email reminders a day before an event starts.",
      "A map view to find events by area.",
      "Verified organiser profiles and event photos after the event.",
      "A full Bangla interface toggle.",
    ],
  },
  {
    slug: "messmanager",
    name: "MessManager",
    tagline: "An Android app for meals, shared expenses and monthly settlement in bachelor messes.",
    cover: "/images/projects/messmanager-cover.jpg",
    gallery: [
      "/images/projects/messmanager-cover.jpg",
      "/images/projects/mm-03-admin-dashboard.jpg",
      "/images/projects/mm-10-monthly-summary.jpg",
      "/images/projects/mm-05-add-expense.jpg",
    ],
    category: "Android app",
    stack: ["Java", "XML", "SQLite", "Cloud Firestore", "Firebase Auth", "Firebase Storage", "Cloud Messaging", "Cloud Functions", "WorkManager"],
    cardStack: ["Java", "SQLite", "Firebase"],
    description:
      "In bachelor messes, meals and shared costs are usually tracked on paper, which leads to wrong totals and arguments at the end of the month. MessManager gives every mess one role-based app: members record meals, expenses and payments, while the admin sets meal prices, approves members and settles accounts. Every figure is calculated automatically and visible to everyone. Built for CSE489 (Mobile Programming) at East West University.",
    live: {
      url: "https://github.com/ssheikhs/MessManager-Mess-Management-App/raw/master/MessManager.apk",
      label: "Download APK",
    },
    github: "https://github.com/ssheikhs/MessManager-Mess-Management-App",
    challenges: [
      "Keeping the app usable without internet. Every entry is saved to SQLite first, and WorkManager syncs pending records to Firestore when the phone is back online, without creating duplicates.",
      "Notifying every member when someone adds an expense or payment. Cloud Functions watch Firestore and send FCM messages, plus a daily reminder for missing meal entries.",
      "Getting the monthly settlement right. Meal cost, shared expenses, payments and dues are calculated per member so the summary matches what everyone expects to pay.",
      "Separating admin and member permissions so members can't change meal prices or approve themselves.",
    ],
    improvements: [
      "Online payments through bKash and Nagad.",
      "Charts and advanced reports.",
      "PDF and Excel export of monthly reports.",
      "Bangla language support and an iOS version.",
    ],
  },
  {
    slug: "quizhero",
    name: "QuizHero",
    tagline: "A quiz platform with timed tests, instant auto-grading and live leaderboards.",
    cover: "/images/projects/quizhero-cover.jpg",
    gallery: ["/images/projects/quizhero-cover.jpg"],
    category: "Full-stack web app",
    stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Apache"],
    cardStack: ["PHP", "MySQL", "JavaScript"],
    description:
      "Instructors build quizzes with multiple-choice and true/false questions, set a time limit and publish them with an access code. Students join with the code, answer against a countdown that auto-submits when time runs out, and see their score, the correct answers and their leaderboard position immediately. An analytics dashboard shows average scores, accuracy and trends. Built for CSE479 (Web Programming) at East West University.",
    live: null,
    github: "https://github.com/ssheikhs/Web-Based-Quiz-Platform",
    challenges: [
      "Grading on the server so correct answers are never sent to the browser before submission.",
      "Making the timer reliable. The quiz auto-submits on expiry, and the server checks the time too, so refreshing the page doesn't buy extra time.",
      "Ranking fairly. The leaderboard sorts by score first and completion time second, and updates after every submission.",
      "Security from the start: password hashing, session-based role checks, prepared statements against SQL injection and output escaping against XSS.",
    ],
    improvements: [
      "Image-based and open-ended questions.",
      "Email notifications for quiz results.",
      "PDF and CSV export of performance reports.",
      "Multi-class management for whole institutions, and a mobile app.",
    ],
  },
  {
    slug: "signbangla",
    name: "SignBangla",
    tagline: "Real-time Bangla sign language sentence recognition on an Android phone.",
    cover: "/images/projects/signbangla-cover.jpg",
    gallery: ["/images/projects/signbangla-cover.jpg"],
    category: "Android + machine learning",
    stack: ["Kotlin", "Android", "MediaPipe Holistic", "TensorFlow Lite", "LSTM", "CNN", "Python"],
    cardStack: ["Kotlin", "MediaPipe", "TF Lite"],
    description:
      "My undergraduate thesis. SignBangla reads the camera feed, extracts hand and body landmarks with MediaPipe, and feeds sequences of frames into a trained LSTM/CNN model that predicts Bangla signs. The predicted words are joined into sentences and shown as text, so a person who signs can be understood by someone who doesn't know Bangla Sign Language.",
    live: null,
    github: "https://github.com/ssheikhs/SignBangla-Real-Time-Bangla-Sign-Language-Sentence-Recognition-System-Communication-Support",
    challenges: [
      "Collecting and cleaning a dataset of Bangla signs, where each sample is a video sequence rather than a single image.",
      "Turning raw video into model input. MediaPipe Holistic gives keypoints for every frame, and sequences had to be normalised to a fixed length before training.",
      "Running in real time on a phone. The trained model was converted to TensorFlow Lite and the frame pipeline tuned so predictions keep up with the camera.",
      "Forming sentences from a stream of word predictions without repeating words or picking up the pauses between signs.",
    ],
    improvements: [
      "A larger vocabulary of signs and more signers in the dataset.",
      "Spoken output with Bangla text-to-speech.",
      "The reverse direction: text to animated signs.",
      "Publishing the app on the Play Store.",
    ],
  },
];
