# Vraj Patel Portfolio

Dark, minimal personal portfolio website for presenting my work across web development, mobile apps, data systems, and AI-powered projects.

The site is a static frontend built with HTML, CSS, and JavaScript. It includes a continuously animated Three.js starfield background, scroll-triggered section motion, a project detail dialog, a dynamic Hicksville / Long Island contact map, and data-driven portfolio content.

## Preview

Run the site with a local static server:

```bash
python -m http.server 8000
```

Open:

```text
http://127.0.0.1:8000/
```

Do not open `index.html` directly with `file://`. The site uses JavaScript modules, and browsers block module loading from local file URLs.

## Features

| Feature | Description |
| --- | --- |
| Animated starfield | Fixed Three.js canvas with moving stars, dust, twinkle, and rare star colors. |
| Portfolio content | Hero, about, education, experience, projects, skills, and contact sections. |
| Project details | Clickable project cards open an accessible detail dialog with project images, points, tags, and links. |
| Motion controls | Motion toggle, scroll reveals, magnetic cursor states, and reduced-motion handling. |
| Dynamic map | Long Island map centered around Hicksville with New York time and day/night styling. |
| Static hosting | Works on GitHub Pages from the `/docs` folder or any static file host when served over `http://` or `https://`. |

## Featured Projects

### Lumen Finance

Full-stack mobile finance app with secure auth, transaction management, budget tracking, savings goals, and AI-powered spending insight.

**Tech:** React Native, Expo, Supabase, TypeScript

### Database Management System

JavaFX teaching tool for PostgreSQL, MySQL, and Oracle that makes CRUD operations approachable for non-expert users through a unified JDBC interface.

**Tech:** Java, JavaFX, JDBC, PostgreSQL, MySQL, OracleDB

### Avanti Jewels

Responsive production ecommerce website for a jewelry business with category pages, product detail pages, filtering, sorting, image galleries, lightbox viewing, theme persistence, GitHub Pages hosting, and custom domain setup.

**Tech:** HTML5, CSS3, JavaScript, GitHub Pages, Custom Domain

## Tech Stack

| Category | Tools |
| --- | --- |
| Structure | HTML5 |
| Styling | CSS3 |
| Interactions | JavaScript |
| Background | Three.js |
| Motion | Anime.js, IntersectionObserver |
| Icons | Font Awesome |
| Fonts | Google Fonts |
| Map | OpenStreetMap embed |

## File Structure

```text
Personal-profile/
|-- assets/
|   |-- avanti-jewels-logo.png
|   |-- lumen-finance-logo.jpeg
|   |-- vraj-profile.png
|   `-- Vraj_Patel_Resume_Updated_2026.pdf
|-- css/
|   `-- style.css
|-- docs/
|   |-- assets/
|   |-- css/
|   |-- js/
|   |-- .nojekyll
|   `-- index.html
|-- js/
|   |-- animations.js
|   |-- main.js
|   |-- portfolio-data.js
|   `-- three-scene.js
|-- index.html
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

Portfolio text, project details, links, and image paths live in:

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
const linearStarAmount = 0.3;
const starCount = 5200;
const dustCount = 9000;
```

## Deployment

This is a static website. Deploy it with GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host.

For GitHub Pages, use:

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

Because the site uses ES modules and CDN imports, serve it over `http://` or `https://`.

## Contact

**Vraj Patel**

GitHub: [VPGHb](https://github.com/VPGHb)

LinkedIn: [P-Vraj](https://www.linkedin.com/in/P-Vraj)

## License

This project is intended as a personal portfolio website. Personal branding, resume content, and profile imagery belong to Vraj Patel.
