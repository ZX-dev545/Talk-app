Toggle Demo Web-App

Files:
- `index.html` — main page
- `app.css` — styles
- `app.js` — toggle logic and persistence

Run locally:
- Open `index.html` directly in a browser, or serve with a simple HTTP server.

Quick serve (PowerShell):

```powershell
cd "c:\Users\hamis\OneDrive - Imperial College London\Documents\Coursework\Gizmo\Talk-app"
python -m http.server 8000; Start-Process "http://localhost:8000"
```

Notes:
- The toggle state is saved in `localStorage` and persists across reloads.
- To make an Android app: use a Trusted Web Activity (TWA) or a simple WebView wrapper (e.g., in Android Studio use a `WebView` activity). TWA is recommended for publishing modern PWAs to Google Play.

If you want, I can:
- Add a PWA manifest and service worker so it can be installed on Android homescreens.
- Create an Android wrapper project (WebView) or a TWA configuration.

PWA (Installable) support
-------------------------

This project now includes a minimal PWA manifest (`manifest.json`) and a simple `service-worker.js`.

- Install: serve the folder and open the site in Chrome on Android (or open on desktop at `http://localhost`). Chrome will allow "Install" from the menu when the PWA criteria are met.
- Local testing: serving with `python -m http.server 8000` works for testing on the same machine. For non-local testing use HTTPS (modern browsers require HTTPS for service workers and installability).
- Service worker behavior: the service worker caches `index.html`, `app.css`, and `app.js` so the app can load offline after first visit.

Files added:
- `manifest.json` — app metadata for installation
- `service-worker.js` — basic caching strategy

Next steps I can do for you:
- Improve the service worker to provide more robust offline behavior.
- Add proper icon files (192x192 and 512x512 PNGs) instead of embedded placeholders.
- Scaffold a Capacitor or TWA project to generate an `.apk`/`.aab` for Play Store publishing.

Want me to do any of those next? If you want the Play Store route, tell me which (Capacitor or TWA) and I'll scaffold the steps and commands.

GitHub Pages deploy (automatic)
--------------------------------

You can publish this site to GitHub Pages so it's served over HTTPS and the PWA/service-worker install will work from any device.

Steps (PowerShell):

```powershell
cd "c:\Users\hamis\OneDrive - Imperial College London\Documents\Coursework\Gizmo\Talk-app"
git init
git add .
git commit -m "Initial site"
# Create a remote repo on GitHub (use the web UI) and copy the HTTPS URL below
git remote add origin https://github.com/<your-username>/<repo>.git
git branch -M main
git push -u origin main
```

What I added for you:
- A GitHub Actions workflow at `.github/workflows/deploy-pages.yml` which will automatically deploy the repository root to GitHub Pages whenever you push to `main`.

After your first push:
- Open the repository on GitHub -> Settings -> Pages. If GitHub Pages does not show a published site immediately, give it a minute; the Actions workflow will create the Pages deployment.
- The published URL will be `https://<your-username>.github.io/<repo>/` (or organization URL if you push to an org repo).

Notes:
- The workflow uses the official `actions/configure-pages` + `actions/upload-pages-artifact` actions so no manual secrets or tokens are required.
- If you prefer the site to be published from a `gh-pages` branch or from a `docs/` subfolder, tell me and I can adjust the workflow.

Need me to create a small `deploy.ps1` script to automate the push steps above? I can add that too.