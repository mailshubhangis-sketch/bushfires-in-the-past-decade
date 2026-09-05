# Bushfire Watch

A static, responsive website highlighting major bushfire events over the past decade across the world.

## Features

- Multi-tab information pages for Asia, Europe, North America, South America, Australia & NZ, and contribution
- Real SVG world map with animated hotspots
- Dark disaster-dashboard visual style
- Responsive layout for desktop and mobile
- Easy deployment to GitHub Pages

## Project structure

```text
bushfires-site/
├── index.html
├── README.md
├── assets/
│   └── world-map.svg
├── output/
│   ├── script.js
│   └── styles.css
└── .gitignore
```

## Run locally

Open the project folder in a browser and load `index.html` directly.

For a local static server, you can also run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Push the project files to the `main` branch.
3. In GitHub, go to `Settings` → `Pages`.
4. Set the source to `Deploy from a branch`.
5. Choose the `main` branch and the root folder `/`.
6. Save.

Your site will be published at:

```text
https://<your-username>.github.io/<your-repo-name>/
```

## Notes

This project is intentionally lightweight and static so it works well with GitHub Pages without build tools or package installs.
