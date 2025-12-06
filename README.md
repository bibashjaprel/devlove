# ✨ DevLove Generator - Frontend ✨

A beautiful, cute Next.js frontend for the DevLove API - Automated developer-style pickup lines for people who code as hard as they love 💕

## 🌸 Features

- 🎯 **Category-Based Pickup Lines** - Choose from 6 categories (Golang, Docker, Git, Kubernetes, Romantic, Random)
- 🔊 **Sound Effects** - Cute kawaii sound effects (toggleable)
- 📋 **Copy to Clipboard** - One-click copying with toast notifications
- 💕 **Floating Hearts Animation** - Beautiful background animation
- 🎨 **Responsive Design** - Works perfectly on mobile and desktop
- ⚡ **Fast & Lightweight** - Built with Next.js 16 and Tailwind CSS 4
- 🎵 **Web Audio API** - Custom-generated sound effects

## 📂 Project Structure

```
app/
├── components/           # Reusable React components
│   ├── AnimationStyles.tsx      # Global animations
│   ├── CategoryButtons.tsx       # Category selector
│   ├── FloatingHearts.tsx        # Background animation
│   ├── QuoteCard.tsx             # Main quote display
│   ├── SoundToggle.tsx           # Sound control
│   └── Toast.tsx                 # Notification toast
├── hooks/               # Custom React hooks
│   └── useQuoteManager.ts        # Quote state management
├── lib/                 # Utility functions
│   ├── api.ts           # API calls
│   ├── constants.ts     # Configuration & constants
│   └── sound.ts         # Sound effects
├── types/               # TypeScript interfaces
│   └── index.ts         # Type definitions
├── styles/              # Style files
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx             # Main page
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or compatible runtime
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd devlove
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Update .env.local if needed
```

4. Start development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.7
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Font**: Poppins (Google Fonts)
- **Audio**: Web Audio API

## 💻 Commands

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 📡 API Integration

The frontend integrates with the DevLove API. Configure the API URL in `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://devlove-api.onrender.com
```

### Supported Endpoints

- `/api/random` - Random pickup line
- `/api/romantic` - Romantic love quotes
- `/api/git` - Git-based pickup lines
- `/api/docker` - Docker-themed lines
- `/api/kubernetes` - Kubernetes pickup lines
- `/api/golang` - Go/Golang themed lines

## 🎨 Customization

### Colors
Edit colors in `globals.css` and Tailwind configuration. Main colors:
- Primary: `pink-600` (#ec4899)
- Secondary: `purple-300` (#d8b4fe)
- Accent: `rose-600` (#e11d48)

### Fonts
Font is managed in `app/layout.tsx`. Currently using Poppins from Google Fonts.

### Animations
Animation keyframes are in `AnimationStyles.tsx`:
- `floatHeart` - Floating heart animation
- `shimmer` - Button shimmer effect

## 🎵 Sound Effects

Sound types defined in `app/lib/constants.ts`:
- `pop` - 440Hz sine wave
- `chime` - Two-note triangle wave
- `sparkle` - High-frequency square wave
- `hover` - Smooth sine wave

Disable/enable in app with the sound toggle button.

## 📱 Browser Support

Works on all modern browsers that support:
- ES2017+ JavaScript
- CSS Grid & Flexbox
- Web Audio API
- Fetch API

## 🐛 Troubleshooting

### API not loading quotes
- Check NEXT_PUBLIC_API_URL in .env.local
- Verify backend API is running
- Check browser console for errors

### Sound not working
- Check browser permissions for audio
- Ensure sound is not muted in browser
- Try toggling sound on/off

### Styling issues
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `pnpm build`

## 📝 Component Documentation

### `useQuoteManager` Hook
Custom hook managing quote state and logic:
```typescript
const {
  category,           // Current category
  quote,             // Current quote text
  count,             // Total quotes generated
  loading,           // Loading state
  soundOn,           // Sound enabled
  fetchQuote,        // Fetch new quote
  handleCategoryChange, // Change category
  handleCopy,        // Copy to clipboard
  handleSoundToggle, // Toggle sound
} = useQuoteManager('random');
```

## 💝 Contributing

Feel free to submit PRs to add more categories, customize animations, or improve the UI!

## 🎯 Future Enhancements

- [ ] Save favorite quotes
- [ ] Share to social media
- [ ] Dark mode toggle
- [ ] Multiple languages
- [ ] Offline mode
- [ ] PWA support

## 📄 License

This project is created for love ❤️

---

**Made with ❤️ for developers who love as hard as they code**
