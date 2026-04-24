# Tayyab Ali — Portfolio (HTML / CSS / JS / Bootstrap)

A modern, responsive personal portfolio built using only **HTML, CSS, JavaScript and Bootstrap 5**.

## Files

```
tayyab-portfolio-html/
├── index.html      # Main page (all sections)
├── styles.css      # Custom styling (dark theme + accent)
├── script.js       # Navbar, animations, contact form, back-to-top
└── README.md
```

All third-party libraries (Bootstrap, Bootstrap Icons, Google Fonts, AOS animations) are loaded via CDN — no install needed.

## How to run

Just open `index.html` in any browser. Done.

For a local dev server (optional):
```bash
# any of these works
python3 -m http.server 5500
# or
npx serve .
```

## How to deploy (free)

- **Netlify** — drag and drop the folder onto https://app.netlify.com/drop
- **GitHub Pages** — push to a repo, enable Pages in settings
- **Vercel** — `vercel` CLI or import the repo

## What to edit

Open `index.html` and change:

- Your name / title in the **Hero** section
- About paragraphs and the info rows (email, phone, location)
- Project cards under **Projects** (image, title, tags, links)
- Social links (GitHub, LinkedIn, email, phone) in Hero, Contact, and Footer
- Page title and meta description in `<head>`

To change the accent color, open `styles.css` and edit these CSS variables at the top:

```css
--accent: #8b5cf6;
--accent-2: #6366f1;
```

## Credits

- Bootstrap 5 — https://getbootstrap.com
- Bootstrap Icons — https://icons.getbootstrap.com
- AOS — https://michalsnik.github.io/aos/
- Google Fonts (Outfit, Plus Jakarta Sans)
