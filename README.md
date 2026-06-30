# Vraj Patel Portfolio

![HTML5](https://img.shields.io/badge/HTML5-structure-E34F26)
![CSS3](https://img.shields.io/badge/CSS3-design-1572B6)
![JavaScript](https://img.shields.io/badge/JavaScript-interactions-F7DF1E)
![Three.js](https://img.shields.io/badge/Three.js-animated_background-000000)
![Anime.js](https://img.shields.io/badge/Anime.js-scroll_motion-FF4B8B)

A dark, minimal personal portfolio website built to introduce my work across web development, mobile apps, data systems, and AI-powered projects. The site uses a continuously animated Three.js starfield background, glass-inspired portfolio sections, project data driven from JavaScript, and tasteful scroll-based animation.

## Live Preview

Run locally with a static server:

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

Do not open `index.html` directly with `file://`. The site uses JavaScript modules, and browsers block module loading from local file URLs.

## Features

| Feature | Description |
| --- | --- |
| Animated Space Background | Three.js particle scene with moving stars, dust, twinkle, rare star colors, and a fixed canvas backdrop. |
| Portfolio Sections | Hero, about, experience, projects, skills, signals, and contact sections. |
| Project Cards | Data-driven project cards highlighting GitHub projects and production work. |
| Resume Access | Download link for the latest resume PDF. |
| Dynamic Contact Map | Hicksville / Long Island map with New York time, day/night styling, and availability window. |
| Scroll Animation | Lightweight Anime.js scroll reveals with IntersectionObserver fallback. |
| Responsive Layout | Desktop-first cinematic layout with mobile-friendly grid fallbacks. |

## Featured Projects

### Lumen Finance

Full-stack personal finance mobile app for expense tracking, budgets, savings goals, recurring transactions, analytics, and AI-powered financial insights.

**Tech:** React Native, Expo, Supabase, TypeScript, Groq API

### PolyDB Manager

JavaFX database manager for PostgreSQL, MySQL, and Oracle. Includes table browsing, schema viewing, row and column editing, search, filtering, and validation feedback through a unified JDBC interface.

**Tech:** Java, JavaFX, JDBC, PostgreSQL, MySQL, Oracle

### Avanti Jewels

Responsive production ecommerce website for a jewelry business with product categories, product detail pages, filtering, sorting, image galleries, lightbox viewing, theme persistence, GitHub Pages hosting, and custom domain setup.

**Tech:** HTML5, CSS3, JavaScript, GitHub Pages, Custom Domain

### Online Store Management System

Desktop store management application with customer, employee, and administrator access levels. Supports accounts, products, carts, coupons, orders, status updates, and order history.

**Tech:** Java, Swing, MySQL, JDBC

## Tech Stack

| Category | Tools |
| --- | --- |
| Structure | HTML5 |
| Styling | CSS3, responsive layout, glass UI |
| Interactions | JavaScript |
| 3D Background | Three.js |
| Motion | Anime.js, IntersectionObserver |
| Icons | Font Awesome |
| Fonts | Google Fonts |
| Map | OpenStreetMap embed |
| Hosting Target | GitHub Pages or any static hosting provider |

## File Structure

```text
Personal-profile/
|-- assets/
|   |-- vraj-profile.png
|   `-- Vraj_Patel_Resume_Updated_2026.pdf
|-- css/
|   `-- style.css
|-- js/
|   |-- animations.js
|   |-- main.js
|   |-- portfolio-data.js
|   `-- three-scene.js
|-- index.html
|-- script.js
|-- stylr.css
`-- README.md
```

## Local Development

1. Clone the repository.

```bash
git clone https://github.com/VPGHb/Personal-profile.git
```

2. Move into the project folder.

```bash
cd Personal-profile
```

3. Start a local static server.

```bash
python -m http.server 8000
```

4. Open the local site.

```text
http://127.0.0.1:8000/
```

## Customization

Most portfolio content lives in:

```text
js/portfolio-data.js
```

The starfield controls live near the top of:

```text
js/three-scene.js
```

Useful controls include:

```js
const starTravelSpeed = 1.8;
const starTwinkleAmount = 60;
const linearStarAmount = .3;
const starCount = 5200;
const dustCount = 9000;
```

## Deployment Notes

This is a static website, so it can be deployed with GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static file host.

Because the site uses ES modules and CDN imports, it should be served over `http://` or `https://`, not opened as a local `file://` document.

## Contact

**Vraj Patel**  
GitHub: [VPGHb](https://github.com/VPGHb)  
LinkedIn: [P-Vraj](https://www.linkedin.com/in/P-Vraj)

## License

This project is intended as a personal portfolio website. All personal branding, resume content, and profile imagery belong to Vraj Patel.
