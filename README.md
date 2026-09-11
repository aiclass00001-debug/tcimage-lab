# TCIMAGE/LAB V4 Spatial Streaming

Cinematic streaming-style portfolio for TCIMAGE/LAB.

## V4 changes
- Replaced remote dark live-site screenshots with locally bundled cinematic project key art.
- Added spatial glass treatment, depth shadows and subtle 3D pointer tilt on desktop.
- Preserved full-page streaming rails, hero switching, project modal and the V3.1 search interaction fix.
- Touch devices automatically disable 3D tilt for stability and performance.

## Deploy
Static site. Upload the folder to Vercel/Netlify, or push to GitHub and deploy with no build command.

## Main files
- index.html
- styles.css
- app.js
- assets/*.png


## V4.1 Hover Preview
Desktop cards now wait ~0.85s on hover, then show a preview. If `assets/previews/<project-id>.mp4` exists it is used; otherwise the live project site is loaded lazily in a non-interactive preview frame. Mobile skips hover preview.
