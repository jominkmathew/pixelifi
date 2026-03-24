# LENS — Photography Portfolio

A stunning photography portfolio website combining **dark minimal**, **bright editorial**, and **experimental 3D** styles.

## Features

- **Cinematic Hero** — Full-screen parallax with layered backgrounds
- **Custom Cursor** — Interactive cursor with hover effects
- **Masonry Gallery** — Filterable grid with animated reveals
- **Photo Stories** — Click any photo to read its history and details
- **Horizontal Story Scroll** — Drag/swipe-enabled story cards
- **3D Virtual Gallery** — Interactive Three.js scene with orbiting photo frames
- **Bright Editorial About** — Contrasting light section for bio
- **Smooth Animations** — GSAP ScrollTrigger-powered scroll reveals
- **Fully Responsive** — Works on all devices
- **No Build Step** — Pure HTML/CSS/JS, ready for GitHub Pages

## Quick Start

1. Open `index.html` in a browser
2. Replace placeholder images in `index.html` and `js/app.js` with your own photos
3. Edit photo data in `js/app.js` (the `photoData` array) with your stories

## Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push this folder to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to **Settings → Pages**
4. Set source to **Deploy from a branch → main → / (root)**
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Customization

### Replace Photos
- Update image URLs in `index.html` (gallery grid + story cards)
- Update the `photoData` array in `js/app.js` with your photo details
- Update hero background images in `css/style.css` (`.layer-1` and `.layer-2`)

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --accent: #c8956c;     /* Main accent (warm gold) */
  --dark: #0a0a0a;       /* Background */
  --light: #f5f0eb;      /* About section bg */
}
```

## Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript
- [GSAP](https://greensock.com/gsap/) + ScrollTrigger (CDN)
- [Three.js](https://threejs.org/) (CDN)
- [Google Fonts](https://fonts.google.com/) — Playfair Display + Inter
