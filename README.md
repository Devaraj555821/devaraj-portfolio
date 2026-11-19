# Bhukya Devaraj — Personal Portfolio

A responsive, first-person portfolio website built with plain HTML, CSS, and JavaScript. No build tools, package installation, or backend are required.

## Run locally in VS Code

1. Extract the portfolio ZIP file.
2. Open the `devaraj-portfolio` folder in Visual Studio Code.
3. Open `index.html` in a browser, or install the **Live Server** extension in VS Code.
4. With Live Server installed, right-click `index.html` and choose **Open with Live Server**.

The site is static, so you can also double-click `index.html` to open it directly in most browsers.

## Publish it so anyone can visit the link

### Option A — GitHub Pages

1. Sign in to GitHub and create a new repository, for example `devaraj-portfolio`.
2. Set the repository visibility to **Public**.
3. Upload the *contents* of this folder to the repository's root. Make sure `index.html` is at the root, alongside `styles.css`, `script.js`, `README.md`, and the `assets` folder.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. After GitHub Pages finishes publishing, it will show a public website URL in the Pages settings. Share that URL; visitors do not need to download the source code.

### Option B — Netlify Drop

1. Open Netlify and sign in or create an account.
2. Choose the option to add a new site by deploying manually (Netlify Drop).
3. Drag the extracted `devaraj-portfolio` folder onto the deployment area.
4. Netlify will publish the static site and provide a shareable public URL.

## Files

- `index.html` — portfolio content and page structure.
- `styles.css` — layout, responsive styling, animations, and project artwork.
- `script.js` — mobile navigation, scroll reveals, active navigation, and project detail dialogs.
- `assets/favicon.svg` — browser tab icon.

## Personalise later

- Update text and project content in `index.html` and the matching project data in `script.js`.
- Add project-specific GitHub or demo URLs only when you have the exact links.
- Replace the email or social URLs in `index.html` if they change.

The Google Fonts stylesheet is optional; system fallbacks are included. The website itself does not depend on any external JavaScript library or API.
