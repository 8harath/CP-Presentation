# KairosCV - Capstone Project Presentation

A web-based presentation application for the KairosCV AI-Powered Resume Optimization Platform capstone project.

## Overview

This is an interactive presentation built with Next.js that showcases the KairosCV capstone project across 10 comprehensive slides.

## Features

- 📊 10 detailed slides covering all aspects of the project
- ⌨️ Keyboard navigation (Arrow keys, Space, Home/End, 1-9)
- 🎨 Modern, responsive design with Tailwind CSS
- 🔄 Smooth transitions and animations
- 📱 Mobile-friendly layout

## Technology Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CP-Presentation
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Keyboard Controls

- **→ / Space:** Next slide
- **←:** Previous slide
- **Home:** Go to first slide
- **End:** Go to last slide
- **1-9:** Jump to specific slide (1-9)

## Slides Overview

1. **Title Slide** - Project introduction and team details
2. **Problem Definition** - Market need and problem statement
3. **Solution Overview** - KairosCV platform and objectives
4. **System Architecture** - Technical architecture and design decisions
5. **Data Flow** - Processing pipeline and workflow
6. **Implementation** - Code quality and key features
7. **Prototype Demo** - Live demonstration and comparisons
8. **Technical Challenges** - Challenges faced and solutions
9. **Testing & QA** - Test coverage and quality metrics
10. **Conclusions** - Future work and next steps

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
CP-Presentation/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Presentation.tsx
│   ├── Slide.tsx
│   └── slides/
│       ├── Slide1.tsx
│       ├── Slide2.tsx
│       └── ... (Slide3-10)
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Customization

To customize the presentation content, edit the individual slide components in the `components/slides/` directory.

## License

This project is created for academic purposes as part of a capstone project at Jain University.

## Team

- **Bharath** (Lead Developer)
- [Add other team members]

## Acknowledgments

- Jain University
- Faculty Guide: [Guide Name]
- Project: KairosCV - AI-Powered Resume Optimization Platform
