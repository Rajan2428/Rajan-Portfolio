# RAJAN RAJA - Personal Portfolio Website

Modern, high-performance personal portfolio website for **RAJAN RAJA**, B.Tech CSE Student at JECRC University, Jaipur, Rajasthan.

## 🚀 Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (Dark glassmorphism theme)
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Deployment**: Vercel Ready

## 📁 Project Structure
```
├── index.html                # Main HTML entry with SEO & Google Fonts
├── package.json              # Project scripts & dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Custom dark tech theme & colors
├── vercel.json               # Zero-config deployment for Vercel
└── src/
    ├── App.jsx               # Main application component
    ├── main.jsx              # React DOM render entry
    ├── index.css             # Tailwind base & glassmorphism utilities
    ├── data/
    │   └── portfolioData.js  # All editable portfolio information
    └── components/
        ├── Navbar.jsx        # Responsive header with smooth scroll & mobile drawer
        ├── Hero.jsx          # Hero section with headline, badges & quick actions
        ├── About.jsx         # About Me section with student pillars & highlights
        ├── Education.jsx     # JECRC University degree & coursework timeline
        ├── Skills.jsx        # 8 skill cards with category filters & progress indicators
        ├── Projects.jsx      # Project showcase with filters & action buttons
        ├── ProjectModal.jsx  # Interactive deep-dive modal for project details
        ├── Achievements.jsx  # Categorized tabs for Certifications, Hackathons, etc.
        ├── Contact.jsx       # Email copy button, interactive form, social links
        └── Footer.jsx        # Footer with back-to-top button and quick links
```

## 🛠️ Local Development

To run this website locally:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

## 🌐 Deploy to Vercel
1. Push this project to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will automatically detect the Vite framework and deploy your website.
