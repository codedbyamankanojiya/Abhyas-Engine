# 🤖 Abhyasa Engine - AI Interview Coach

> **A high-performance, unified AI-driven personal coach (Web & Android Mobile App) designed to bridge the gap between technical knowledge and communication excellence.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion)

## 🌟 Overview

Abhyasa Engine revolutionizes interview preparation by deconstructing user performance into three core pillars:
- **🧬 Biological** - Body language, posture, and non-verbal cues
- **🎤 Vocal** - Speech patterns, tone, and delivery analysis  
- **🧠 Logical** - Content quality, structure, and technical accuracy

Unlike traditional recording tools, Abhyasa Engine reconstructs this data into personalized, actionable roadmaps for success in Vivas and Interviews.

## ✨ Key Features

### 🎯 Interview Preparation
- **Role-Specific Mock Interviews** - Tailored questions for 50+ job roles
- **Real-Time AI Analysis** - Instant feedback on responses
- **Difficulty Progression** - Beginner to Expert level challenges
- **Industry-Specific Training** - Tech, Finance, Healthcare, and more

### 🎨 Premium UI/UX
- **Dark/Light Theme System** - Seamless theme switching
- **Lenis Smooth Scrolling** - Butter-smooth navigation
- **Glassmorphism Design** - Modern, elegant interface
- **Micro-interactions** - Delightful hover states and transitions
- **Responsive Design** - Perfect on mobile, tablet, and desktop

### 🚀 Advanced Features
- **Real-Time Vision System** - Local face tracking and emotion analysis using TensorFlow.js and face-api.
- **Cinematic UI/UX** - Engaging, dark-mode prioritized interface with glassmorphism, Framer Motion animations, and Lenis smooth scrolling.
- **Text-to-Speech** - Natural voice synthesis with ElevenLabs.
- **Camera & Audio Analysis** - Real-time performance tracking via an advanced Vision HUD.
- **Progress Analytics** - Detailed performance metrics.

## 🏗️ Architecture

### Frontend Stack (Unified Web & Mobile)
```text
React 18/19 + TypeScript + Capacitor
├── UI Framework: Tailwind CSS
├── Animations: Framer Motion + Lenis (Lenis disabled on Mobile touch screens)
├── ML/Vision: TensorFlow.js + face-api (Client-side edge computing)
├── State Management: React Context
├── Routing: React Router (HashRouter for WebView compatibility)
├── Mobile Wrapper: Ionic Capacitor (Packages web app into native Android app)
├── HTTP Client: Fetch API
└── Build Tool: Vite
```

### Backend & AI Processing Stack
```text
Python + FastAPI
├── ASGI Server: Uvicorn
├── Core AI Logic: LLM integration (for contextual answer evaluation via DeepSeek)
├── NLP: Semantic response analysis
├── Speech-to-Text: Deepgram Websocket proxy / Web Speech API
├── Text-to-Speech: ElevenLabs API (Ultra-realistic voice)
├── Data Validation: Pydantic
└── Environment: python-dotenv
```

## 🚀 Quick Start

> **⚠️ Important:** For detailed setup instructions, please refer to our [**Setup Guide**](./INSTRUCTIONS.md)

### Prerequisites
- **Node.js** 18+ and **npm** 8+
- **Python** 3.9+ and **pip**
- **ElevenLabs API Key** (for TTS functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/abhyasa-engine.git
   cd abhyasa-engine
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

3. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Environment Configuration**
   ```bash
   # Backend (.env)
   ELEVENLABS_API_KEY=your_api_key_here
   
   # Frontend (if needed)
   VITE_API_URL=http://localhost:8000
   ```

### Running the Application

1. **Start Backend**
   ```bash
   cd backend
   python main.py
   # Server runs on http://localhost:8000
   ```

2. **Start Frontend**
   ```bash
   cd frontend
   npm run dev
   # Application runs on http://localhost:5173
   ```

## 📁 Project Structure

```
abhyasa-engine/
├── frontend/               # React frontend application (Vite + Capacitor)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── config/         # Configs (e.g. centralized api endpoints)
│   │   ├── context/        # React context providers
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── utils/          # Utility functions
│   ├── android/            # Generated Capacitor Android Native project
│   ├── public/             # Static assets
│   ├── capacitor.config.ts # Capacitor configuration
│   └── package.json        # Frontend dependencies
├── backend/                # FastAPI backend
│   ├── main.py             # Main application entry
│   ├── requirements.txt    # Python dependencies
│   └── .env                # Environment variables
├── INSTRUCTIONS.md         # Detailed setup guide
└── README.md               # This file
```

## 🎮 Usage Guide

### Starting an Interview Session
1. **Browse Roles** - Select from 50+ interview categories
2. **Configure Settings** - Choose difficulty, language, and level
3. **Begin Session** - Start AI-powered mock interview
4. **Receive Feedback** - Get real-time performance analysis
5. **Track Progress** - Monitor improvement over time

### Key Features Navigation
- **📊 Dashboard** - Overview of progress and achievements
- **🎯 Practice** - Role selection, interview setup, and active sessions with Vision HUD
- **📚 Resources** - Interactive, responsive resource hub with cinematic categories
- **📈 Analytics** - Detailed performance metrics
- **⚙️ Settings** - Theme, audio, and accessibility options
- **👥 Community** - Connect with other learners

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:8000
```

### Feature Flags
```typescript
// In frontend/src/config/features.ts
export const FEATURES = {
  TTS_ENABLED: true,
  CAMERA_ANALYSIS: true,
  ADVANCED_ANALYTICS: true,
  GAMIFICATION: true
};
```

## 🎨 Customization

### Theme Configuration
```typescript
// Available themes
const themes = ['light', 'dark', 'auto'];

// Theme colors can be customized in CSS variables
:root {
  --primary-color: #7C3AED;
  --secondary-color: #6366F1;
  --accent-color: #EC4899;
}
```

### Animation Settings
```typescript
// Animation preferences
const animationConfig = {
  duration: 0.3,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  reducedMotion: false
};
```

## 🧪 Development

### Frontend Development
```bash
# Install dependencies
npm install

# Start development server (Web browser)
npm run dev

# Build web assets
npm run build

# Preview build
npm run preview
```

### Packaging as an Android App (APK compilation)
```bash
# 1. Compile the React code to assets
npm run build

# 2. Sync built files to the native Android folder
npx cap sync

# 3. Compile the APK
# Open Android Studio and load: "frontend/android"
# Select Menu: Build > Build Bundle(s) / APK(s) > Build APK(s)
# Your compiled APK will be at:
# frontend/android/app/build/outputs/apk/debug/app-debug.apk
```

### Backend Development
```bash
# Install dependencies
pip install -r requirements.txt

# Run development server
python main.py

# Run with auto-reload
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Code Quality
```bash
# Frontend linting
npm run lint

# Frontend type checking
npm run type-check

# Backend linting
flake8 backend/
```

## 📊 API Documentation

### Core Endpoints

#### Questions API
```http
GET /api/questions/{role_id}?level={level}
POST /api/questions/create
PUT /api/questions/{id}
```

#### TTS API
```http
POST /api/tts
Content-Type: application/json

{
  "text": "Your interview question here",
  "voice_id": "optional_voice_id"
}
```

#### Roles API
```http
GET /api/roles
POST /api/roles/create
```

### Response Format
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation completed successfully"
}
```

## 🐛 Troubleshooting

### Common Issues

#### Frontend Issues
- **Module not found**: Run `npm install` in frontend directory
- **Port already in use**: Change port in `vite.config.ts`
- **Build fails**: Check TypeScript types and imports

#### Backend Issues
- **API key errors**: Verify ElevenLabs API key in `.env`
- **CORS issues**: Ensure frontend URL is in CORS origins
- **Module import errors**: Install all requirements with `pip install -r requirements.txt`

#### Performance Issues
- **Slow animations**: Enable reduced motion in settings
- **High memory usage**: Close unused browser tabs
- **Audio not working**: Check browser permissions for microphone

### Debug Mode
```bash
# Frontend debug
VITE_DEBUG=true npm run dev

# Backend debug
DEBUG=true python main.py
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Code Standards
- **TypeScript** for all frontend code
- **Python 3.9+** for backend code
- **ESLint** and **Prettier** for code formatting
- **Conventional Commits** for commit messages


## 🗺️ Future Roadmap & Upcoming Features

1. **Dynamic Resume Parsing** - Auto-generating highly specific, technical interview questions based on PDF/Docx uploads.
2. **3D Animated "Robo-Companion"** - A fully animated digital avatar replacing the standard avatar to physically react to your answers in real-time.
3. **Global Multilingual Intelligence** - Expanding NLP and TTS to support diverse regional and native languages.
4. **Peer-to-Peer Mock Interviews** - Matching users applying for similar roles to interview each other while Aiva acts as a silent judge.

## 🙏 Acknowledgments

- **[Framer Motion](https://www.framer.com/motion)** - Smooth animations
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ElevenLabs](https://elevenlabs.io/)** - AI voice synthesis
- **[FastAPI](https://fastapi.tiangolo.com/)** - Modern Python web framework
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library

## 📞 Support

- **🐛 Issues**: [Report bugs](https://github.com/codedbyamankanojiya/aiva/issues)
- **📖 Documentation**: [DOCUMENTATION.md](./DOCUMENTATION.md)

---

> **🚀 Ready to transform your interview preparation?** 
> 
> **Check out our [Setup Guide](./INSTRUCTIONS.md) to get started in minutes!**
>

Made with ❤️ by Team Pythasauras:

- Vaishnav Kadav
- Aman Kanojiya
- Mahima Mourya
- Tanvi Bhageshwar