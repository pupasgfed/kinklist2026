# Mes Préférences Hypnotiques

A modern, minimalistic web application to help people discover and share their hypnosis preferences. Built with React, TypeScript, and Tailwind CSS.

## Features

- **0-5 Rating Scale**: Evaluate each hypnosis practice from "Pas du tout" to "Énormément"
- **NSFW Filter**: Toggle to show/hide adult content
- **Screenshot Function**: Export your preferences as an image
- **Shareable Links**: Generate a URL with your responses encoded
- **Restart Anytime**: Clear all responses and start fresh
- **50 Questions**: Comprehensive list of hypnosis practices and techniques

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- html2canvas (for screenshots)
- Lucide React (for icons)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

### Initial Setup

1. Create a new GitHub repository

2. Update the following files with your repository name:
   - `vite.config.ts`: Change `base: '/hypnotic-kinklist/'` to `base: '/your-repo-name/'`
   - `package.json`: Update `homepage` field to your GitHub Pages URL

3. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select `gh-pages` branch as the source
   - Save

Your app will be live at: `https://yourusername.github.io/your-repo-name/`

## Project Structure

```
src/
├── components/       # Reusable components (Header, Footer)
├── pages/           # Main page (Questionnaire)
├── types/           # TypeScript type definitions
├── data/            # Questions data (JSON)
├── App.tsx          # Main application component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Customization

### Colors

The brand colors are defined in `tailwind.config.js`:
- Background: `#323347`
- Mid-tone: `#4a4b65`
- Accent: `#aaa8f8`

### Questions

Edit `src/data/questions.json` to add, remove, or modify questions:

```json
{
  "id": "q001",
  "label": "Question text",
  "nsfw": false,
  "hidden": false
}
```

### Links

Update header and footer links in:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

## Features Explained

### Screenshot Function
Uses html2canvas to capture the questionnaire results as a PNG image that can be downloaded.

### Shareable Link
Encodes all responses in base64 and adds them to the URL query parameter. When someone opens the link, their responses are automatically filled in.

### NSFW Filter
Filters out questions marked with `"nsfw": true` when the toggle is off.

### URL State Persistence
Responses are stored in the URL, so you can bookmark or share your exact state.

## License

MIT

## Credits

Built with inspiration from the kinklist community.
