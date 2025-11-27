# codeXtreme Winners Gallery 🏆

A modern, neobrutalist showcase platform celebrating Africa's brightest student innovators from codeXtreme hackathons.

![Progress](https://img.shields.io/badge/Progress-95%25-success)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan)

## 🎯 Features

### Homepage
- ✅ **Hero Split** - 60/40 layout with live winner ticker
- ✅ **Stats Dashboard** - Animated counters with scroll reveal
- ✅ **Bento Grid** - Asymmetric showcase of top 3 winners
- ✅ **Timeline View** - Chronological competition history
- ✅ **Winners Grid** - Masonry layout with advanced filtering
- ✅ **CTA Banner** - Registration call-to-action

### Interactive Features
- ✅ **Global Search** - Search projects by name, team, tech stack, year
- ✅ **Advanced Filters** - Year, category, winners-only filtering
- ✅ **Sort Options** - Most recent, highest ranked, most innovative
- ✅ **Project Comparison** - Compare up to 3 projects side-by-side
- ✅ **View Modes** - Grid/list toggle with localStorage persistence

### Project Details
- ✅ **Image Carousel** - Multiple project screenshots with navigation
- ✅ **Team Profiles** - Member cards with social links
- ✅ **Score Breakdown** - Innovation, technical, impact, presentation scores
- ✅ **Judge Comments** - Feedback and evaluation notes
- ✅ **Social Sharing** - Native share API with clipboard fallback
- ✅ **Keyboard Navigation** - Full accessibility with Esc, arrow keys

### Participants Directory
- ✅ **Search & Filter** - Find participants by name, university, skills
- ✅ **Profile Cards** - Projects, awards, years participated
- ✅ **Profile Modals** - Full participant details with project history
- ✅ **Stats Grid** - Projects count, awards won, years active

### Design & UX
- ✅ **Neobrutalist Design** - Bold borders, brutal shadows, high contrast
- ✅ **Fully Responsive** - Mobile-first design, works on all devices
- ✅ **Accessibility** - WCAG AA compliant, keyboard navigation, ARIA labels
- ✅ **Animations** - Scroll reveals, hover effects, loading skeletons
- ✅ **Toast Notifications** - Success/error/info messages
- ✅ **Performance** - Optimized bundle, lazy loading, code splitting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
winners.codextreme.io/
├── app/                      # Next.js 15 App Router
│   ├── layout.tsx           # Root layout with ToastProvider
│   ├── page.tsx             # Homepage
│   ├── participants/        # Participants page
│   ├── about/               # About page
│   └── project/[id]/        # Dynamic project pages
├── components/
│   ├── home/                # Homepage components
│   ├── participants/        # Participants components
│   ├── project/             # Project components
│   ├── shared/              # Shared components
│   ├── ui/                  # UI components
│   └── layout/              # Layout components
├── data/                    # JSON data files
│   ├── competitions.json
│   ├── projects.json
│   └── participants.json
├── lib/                     # Utilities
│   ├── data.ts             # Data fetching functions
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Helper functions
├── hooks/                   # Custom React hooks
│   └── useScrollReveal.ts
└── docs/                    # Documentation
    └── remaining-tasks.md
```

## 🎨 Design System

### Colors
- **Red** - `#C41E3A` - Primary brand color (subtle ruby red)
- **Gray** - `#7F7F7F` - Secondary/neutral
- **Yellow** - `#FBD34D` - 3rd place gold
- **Blue** - `#3B82F6` - LinkedIn, info actions
- **Green** - `#22C55E` - Success states

### Typography
- **Font Family** - Inter (Google Fonts)
- **Weights** - 400 (normal), 500 (medium), 700 (bold), 900 (black)

### Neobrutalist Elements
- **Borders** - 3px solid black
- **Shadows** - 4px 4px 0px 0px #000
- **Hover Effects** - Translate + shadow increase
- **Active States** - Shadow removal

## 📊 Data Structure

All data is stored in JSON files in the `data/` directory. This makes it easy to update content without touching code.

### Adding a Competition
Edit `data/competitions.json`:
```json
{
  "id": "codextreme-2026",
  "name": "CodeXtreme 2026",
  "year": 2026,
  "theme": "AI for Good",
  "participantCount": 250,
  "projectsSubmitted": 60
}
```

### Adding a Project
Edit `data/projects.json`:
```json
{
  "id": "my-project-2026",
  "competitionId": "codextreme-2026",
  "name": "My Amazing Project",
  "rank": 1,
  "teamName": "Team Name",
  "category": "AI & ML",
  "techStack": ["Python", "TensorFlow"]
}
```

### Adding a Participant
Edit `data/participants.json`:
```json
{
  "id": "john-doe",
  "name": "John Doe",
  "university": "University of Rwanda",
  "bio": "AI enthusiast...",
  "achievements": ["Python", "ML", "AI"]
}
```

## 🚢 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"
7. Done! Your site is live at `your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to deploy
```

### Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `winners.codextreme.io`
4. Update DNS records as instructed
5. SSL automatically configured

## 🔧 Tech Stack

- **Framework** - Next.js 15 (App Router)
- **Language** - TypeScript 5
- **Styling** - Tailwind CSS 4
- **Icons** - Lucide React
- **Font** - Inter (Google Fonts)
- **Deployment** - Vercel

## ♿ Accessibility

- WCAG AA compliant
- Full keyboard navigation
- Screen reader friendly
- ARIA labels on all interactive elements
- High contrast design
- Focus indicators

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

Built for codeXtreme. All rights reserved.

## 🤝 Contributing

To add new features or fix bugs:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📧 Support

For questions or issues, contact the codeXtreme team.

---

**Built with ❤️ for Africa's innovators** 🚀
