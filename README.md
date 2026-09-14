# Portfolio Organic

A beautiful, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features an organic design aesthetic with warm, earthy colors and smooth interactions.

## Features

- ✨ Responsive design that works on all devices
- 🎨 Organic design system with custom color palette
- ⚡ Fast performance with Next.js
- 🔤 Custom typography with Fraunces and Inter fonts
- 📱 Mobile-first approach
- ♿ Accessible components
- 🎭 Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: React Type Animation
- **Fonts**: Google Fonts (Fraunces, Inter)

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-organic/
├── app/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Color Palette

- **Cream**: `#F9F6F1` - Main background
- **Moss**: `#5D6B5E` - Text and accents
- **Terracotta**: `#C86F3A` - Primary accent
- **Sage**: `#A8B6A6` - Secondary accent
- **Charcoal**: `#2B2B2B` - Dark text

## Building

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Add Your Content

Edit the components in `app/components/` to add your own content:
- Update HeroSection with your intro text
- Add projects in ProjectsSection
- Update skills in SkillsSection
- Customize contact information

### Modify Colors

Edit `tailwind.config.js` to customize the organic color palette:

```javascript
colors: {
  organic: {
    cream: '#F9F6F1',
    moss: '#5D6B5E',
    terracotta: '#C86F3A',
    sage: '#A8B6A6',
    charcoal: '#2B2B2B',
  }
}
```

### Fonts

Fonts are imported from Google Fonts in `app/globals.css`. You can change them there and update the font families in `tailwind.config.js`.

## License

This project is open source and available under the MIT License.
