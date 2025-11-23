# codeXtreme Competition Board (Hall of Fame)

A showcase platform displaying past hackathon winners, projects, and rankings from codeXtreme events.

## 🚀 Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom neobrutalist design system
- **JSON-based data** (easily migrable to databases)
- **Responsive design** optimized for all devices
- **Accessibility focused** with semantic HTML and ARIA labels

## 🎨 Design System

This project uses a **neobrutalist design** adapted for the codeXtreme brand:

- **Bold borders**: 3px black borders on all cards and components
- **Solid shadows**: 4px/8px black offset shadows (no blur)
- **Strong typography**: Black weight (900) for headings, UPPERCASE
- **High contrast**: Pure black borders against colorful backgrounds
- **Brand colors**:
  - Purple: Primary brand color
  - Blue: Secondary accent
  - Green: Success/completed
  - Orange: Highlight/CTA
  - Yellow: Warning/upcoming

## 📁 Project Structure

```
winners.codextreme.io/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles & design system
├── components/
│   ├── ui/                      # Base components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Input.tsx
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   └── shared/                  # Shared components
│       ├── RankBadge.tsx
│       ├── StatusBadge.tsx
│       └── TechStackBadge.tsx
├── data/                        # JSON data files
│   ├── competitions.json
│   ├── projects.json
│   └── participants.json
├── lib/                         # Utilities
│   ├── data.ts                  # Data fetching functions
│   └── utils.ts                 # Helper functions
└── public/                      # Static assets
    └── images/
```

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/irachrist1/winners.codextreme.io.git
   cd winners.codextreme.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Data Structure

### Competitions
Located in `data/competitions.json`:
```json
{
  "id": "codextreme-2025",
  "name": "CodeXtreme 2025",
  "year": 2025,
  "status": "past",
  "theme": "Build Things People Need",
  "location": "Kigali, Rwanda",
  "participantCount": 250,
  "projectsSubmitted": 64,
  "prizePool": "$5,000"
}
```

### Projects
Located in `data/projects.json`:
```json
{
  "id": "l-guard-2025",
  "competitionId": "codextreme-2025",
  "name": "L-Guard",
  "rank": 1,
  "prize": "$2,000",
  "category": "Hardware & IoT",
  "techStack": ["Arduino", "React Native", "Firebase"]
}
```

## 🎯 Next Steps (Phase 2+)

**Phase 2**: Build Competition Detail Page
- Winners podium (top 3)
- Full leaderboard table
- Competition stats

**Phase 3**: Build Project Detail Page
- Detailed project information
- Team member profiles
- Demo links and resources

**Phase 4**: Additional pages
- About page
- Participants directory (optional)

**Phase 5**: Polish & Deploy
- SEO optimization
- Performance improvements
- Deploy to Vercel

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure custom domain: `winners.codextreme.io`
4. Deploy!

## 📄 License

Copyright © 2025 codeXtreme. All rights reserved.

## 🤝 Contributing

This is a showcase platform for codeXtreme competitions. For contributions or questions, please contact the codeXtreme team.

---

**Built with ❤️ for the codeXtreme community**
