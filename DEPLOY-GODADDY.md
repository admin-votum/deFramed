# deFramed on GoDaddy

This is a static site. It needs no build step, database, or Node runtime.

## Files to upload

Upload these items into the website root (`public_html` for a primary cPanel domain, or the addon-domain root):

- `index.html`
- `privacy.html`
- `content.json`
- `.htaccess`
- `media/` (create this folder for local MP4/WebM files)

The header and two footer lines are editable in `content.json` under `settings`. The first window with `"pinned": true` stays as the introduction; all other windows sort by `publishedAt` with newest first. The browser preview editor exposes the same footer fields locally; public changes still require uploading the updated `content.json`.

GoDaddy's cPanel File Manager can upload individual files or a ZIP archive; FTP is better once there are several videos. The official cPanel guide says the primary domain's web root is typically `public_html`.

## Publishing a local video

1. Upload the video to `media/`, for example `media/room-light.mp4`.
2. Add a window to `content.json` with `"video": "media/room-light.mp4"`.
3. Upload the updated `content.json`.
4. Hard-refresh the site if an older JSON response is still cached.

## Publishing a profile picture

Upload the image to `media/` and add `\"profileImage\": \"media/profile.jpg\"` to the window in `content.json`. The editor also accepts a profile-image URL or a local image for browser-only preview.

The browser editor at `?admin=1` is intentionally a local preview tool. Its edits are stored only in that browser; it does not provide public authentication or server-side uploads.

## Video hosting note

GoDaddy shared hosting can serve video files, but each video consumes storage, transfer bandwidth, and visitor playback bandwidth. For a public feed with many large videos, keep the GoDaddy site as the interface and use a dedicated video host or object storage/CDN for the media URLs.

## Quick check after upload

- `https://your-domain.example/` loads the feed.
- `https://your-domain.example/content.json` returns JSON rather than an HTML error page.
- `https://your-domain.example/media/filename.mp4` plays or downloads the video.
- `https://your-domain.example/privacy.html` opens.
