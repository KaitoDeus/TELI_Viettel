# TELI Viettel – Digital Learning Platform

TELI is a digital learning platform developed as part of the "Ánh sáng số vùng cao" project. It serves as an AI-powered teaching assistant designed to support IT education and digital skills for students in remote and mountainous regions.

The name **TELI** is a combination of:

- **TEL**: Representing Viettel and Telecommunication, reflecting infrastructure strength and the mission to connect knowledge.
- **I (Intelligence)**: Signifying Artificial Intelligence and knowledge integration in education.

---

## 🚀 Key Features

- **AI Teaching Assistant**: Helps students and teachers by answering questions and generating lesson plans based on verified curriculum data.
- **Digital IT Lecture Library**: A comprehensive repository of video lectures, slides, and exercises aligned with the Ministry of Education & Training standards.
- **Interactive Lessons**: Combines theory and practice to enhance learning engagement.
- **Smart Lesson Planner**: Integrated editor workspace for teachers to draft, format, and export lesson plans directly to Word files with professional formatting (Table-based activities, clear list structures).
- **Professional Assessment Tool**: Generates quizzes and exercises with standard layouts, including automatic line breaks for multiple-choice options and bullet points for lists.
- **Technical Support Corner**: Assists users in resolving technical issues on the platform.

## ✨ Recent UX/UI Refinements

- **Glassmorphism Chat Input**: The chat input field features a transparent frosted glass background (`backdrop-filter`) with an optimized scroll behavior and hidden text cursor over the scrollbar.
- **Smart Responsive Sidebar**:
  - **Desktop**: Collapses into a sleek 68px mini-sidebar showing only essential icons to maximize workspace while retaining quick access.
  - **Mobile**: Features smooth slide-out mechanics. The hamburger menu smartly hides to prevent UI overlapping, and the chat history list is independently scrollable with a slim, customized scrollbar.
- **Pill-shaped AI Action Buttons**: Standardized aesthetic utilizing specific HEX colors: Viettel Red (`#EA2A32F2`) for default prompts and Deep Blue (`#0B1E7BF5`) for active selection, both with high-contrast white text.
- **Perfectly Aligned Chat Column**: All chat elements—header title, messages, and input bar—are now precisely centered within a consistent **800px** content width, eliminating horizontal drift.
- **Natural Conversation Bubbles**: User messages are redesigned into right-aligned bubbles with a subtle "tail" effect, mimicking modern mobile messaging experiences.
- **High-Fidelity AI Mascot**: Enhanced the AI mascot avatar with a larger 36px size and `crisp-edges` rendering for superior visual clarity and brand recognition.
- **Smart Mobile Editor Experience**: The Word-style editor now transitions to a full-screen fixed overlay on mobile with a high z-index (3000), preventing menu clipping and improving focus.
- **Responsive Interaction Polish**: Home page suggestion chips now intelligently stack vertically on small screens, preventing horizontal overflow while maintaining 100% readability.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Router**: [React Router DOM 7](https://reactrouter.com/)
- **AI Integration**: [Google Gemini AI API](https://ai.google.dev/) (using `@google/generative-ai`)
- **Document Generation**: [docx](https://docx.js.org/) & [file-saver](https://github.com/eligrey/FileSaver.js/)
- **HTTP Client**: [Axios](https://axios-http.com/)

---

## 📂 Directory Structure

```text
TELI_Viettel/
├── docs/                 # Project documentation and instructions
│   ├── instructions/     # User guide screenshots
│   ├── description.md    # Project overview
│   └── design.md         # UI/UX design specifications
└── teli_viettel/         # Main React application (Vite + TS)
    ├── public/           # Static assets for the web
    ├── src/              # Application source code
    │   ├── assets/       # Global styles and static files
    │   ├── components/   # Reusable UI components (Sidebar, Chat, Editor)
    │   ├── data/         # Static data and constant definitions
    │   ├── models/       # TypeScript types and interfaces
    │   ├── pages/        # Main route components (Home, Chat, Library)
    │   ├── services/     # API logic and Gemini AI integration
    │   ├── App.tsx       # Root component and routing
    │   └── main.tsx      # Application bootstrap entry point
    ├── .env              # Environment configuration (API Keys)
    ├── vite.config.ts    # Build tool configuration
    └── package.json      # Project dependencies and script defines
```

---

## ⚙️ Installation & Usage

### Prerequisites

- [Node.js](https://nodejs.org/) (Recommended version: 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the project

```bash
git clone <repository-url>
cd TELI_Viettel/teli_viettel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `teli_viettel` directory and add your Google Gemini API key:

```env
VITE_GEMINI_API_KEY=your_api_key_here
VITE_GEMINI_MODEL=gemini-2.5-flash || gemini-3-flash-preview
```

### 4. Run Development Server

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### 5. Build for Production

```bash
npm run build
```

---

## 📖 Usage Guide Highlights

1. **Home Page**: Search for any IT topic or select from suggestion chips to start a new lesson plan.
2. **Chat Interface**: Interact with TELI mascot to refine the lesson content. AI reflects its process with a "Thinking" state.
3. **Editor Workspace**: Click on "Nội dung giáo án" (Lesson Content) to open a side panel. You can edit content using the rich text editor (powered by Microsoft Word-like formatting) and export it directly as a `.docx` file.
4. **History & Library**: Access previously generated content and saved lessons from the sidebar.

_(For detailed visual guides (Vietnamese), please refer to [docs/instructions-using.md](docs/instructions-using.md))_
