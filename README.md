# ZetaX-Website

> Modern enterprise SaaS solutions website built with React + Vite + TypeScript.

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Styling**: Tailwind CSS (via CDN)

## 📦 Getting Started

### Prerequisites
- Node.js 18+

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```

App will be available at **http://localhost:3000**

### Build for production
```bash
npm run build
```

## 📁 Project Structure

```
ZetaX-main/
├── components/       # Navbar, Footer
├── pages/
│   ├── services/     # WebsiteDevelopment, AiIntegration, LeadAutomation
│   ├── product/      # ZetaxLeadGenerator
│   ├── Home.tsx
│   ├── HowWeWork.tsx
│   ├── Enterprise.tsx
│   ├── Careers.tsx
│   └── Contact.tsx
├── App.tsx           # Main router
├── index.tsx         # Entry point
├── vite.config.ts
└── index.html
```

## 🌐 Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services/website-development` | Website Development |
| `/services/ai-integration` | AI Integration |
| `/services/lead-automation` | Lead Automation |
| `/product/zetax-lead-generator` | ZetaX Lead Generator |
| `/how-we-work` | How We Work |
| `/enterprise` | Enterprise |
| `/careers` | Careers |
| `/contact` | Contact |

## 📄 License

© 2024 ZetaX. All rights reserved.