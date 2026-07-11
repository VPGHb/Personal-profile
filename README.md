<div align="center">

[![Header](https://capsule-render.vercel.app/api?type=waving&color=0:050505,45:2B2B2B,100:C2CABB&height=220&text=Vraj%20Patel%20Portfolio&desc=Developer%20Portfolio%20%7C%20Web%20%7C%20Mobile%20%7C%20Data%20%7C%20AI&fontColor=ffffff&animation=fadeIn&descSize=18&descAlignY=70&textAlignY=38)](https://vpghb.github.io/Personal-profile/)

[![Live Site](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-C2CABB?style=for-the-badge&logo=githubpages&logoColor=111111)](https://vpghb.github.io/Personal-profile/)
[![Portfolio](https://img.shields.io/badge/Portfolio-2026-111111?style=for-the-badge&logo=aboutdotme&logoColor=white)](https://vpghb.github.io/Personal-profile/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Anime.js](https://img.shields.io/badge/Anime.js-FF4B8B?style=for-the-badge&logoColor=white)](https://animejs.com/)

</div>

# Vraj Patel Portfolio

Dark, minimal personal portfolio website for presenting my work across web development, mobile apps, data systems, and AI-powered projects.

The site is a static frontend built with HTML, CSS, and JavaScript. It includes a continuously animated Three.js starfield background, scroll-triggered section motion, a project detail dialog, a dynamic Hicksville / Long Island contact map, and data-driven portfolio content.

## Live Website

The portfolio is live on GitHub Pages:

```text
https://vpghb.github.io/Personal-profile/
```

## Local Preview

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
| Static hosting | Published with GitHub Pages from the `/docs` folder. |

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

This is a static website currently deployed with GitHub Pages.

Current GitHub Pages settings:

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

The live site URL is:

```text
https://vpghb.github.io/Personal-profile/
```

Because the site uses ES modules and CDN imports, serve it over `http://` or `https://`.

When updating the live site, make sure the published files in `docs/` are kept in sync with the root source files.

## Contact

**Vraj Patel**

GitHub: [VPGHb](https://github.com/VPGHb)

LinkedIn: [P-Vraj](https://www.linkedin.com/in/P-Vraj)

## License

This project is intended as a personal portfolio website. Personal branding, resume content, and profile imagery belong to Vraj Patel.
