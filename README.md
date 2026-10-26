# Aldren Ross — Personal CV

A responsive personal CV for Aldren Ross, a fourth-year Information Technology student at Davao del Norte State College. Based on the supplied Figma references, with navy surfaces and amber accents.

## Technologies
Vue 3, Vue Router, Vite, HTML, CSS.

## Development
Requires Node.js 20.19+ or 22+.

```sh
npm install
npm run dev
npm run build
npm run preview
```

On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

## Structure
- `src/App.vue`: shared profile header, navigation, footer.
- `src/main.js`: five routes, page titles, scroll reset.
- `src/pages/`: About, Education, Skills, Projects, Contact.
- `src/style.css`: responsive layout, animations, reduced motion.
- `public/image/download.jpg`: original CV photo.
- Root `style.css`, `script.js`, and `image/`: previous static implementation retained for reference, not loaded by Vue.

## Features
Separate page URLs; mobile navigation; keyboard focus styles; reduced-motion support; project filters and 3D rotating cards with detailed backs (hover on desktop, tap on touch screens, Enter/Space with a keyboard); email, telephone and GitHub links; copy-email button; validated contact form that opens an email draft for the visitor to send.

Project illustrations are decorative graphics, not application screenshots. Repositories are private, so public repository and demo buttons are omitted. No certifications, awards, or unverified performance metrics are included.

## Deployment
Student: **Aldren Ross**

GitHub repository: https://github.com/drennndrenn/About-me

Preferred Vercel URL: https://aldren-ross.vercel.app

**Deployment pending. The preferred URL is not verified. Replace this notice after deploying.**

1. Review and commit meaningful changes as development happens. Preserve existing history.
2. Push the repository to GitHub.
3. Import it in Vercel with the Vite preset.
4. Build command: `npm run build`. Output: `dist`.
5. Deploy and select `aldren-ross.vercel.app` if available.
6. Verify all routes including directly refreshing `/projects`. Check desktop and mobile navigation, filters, project details, image loading, copy-email, phone, GitHub, and email-draft actions.

`vercel.json` supports direct route links with Vue Router history mode.

Submit the verified public Vercel URL and accessible GitHub repository URL to the LMS.
