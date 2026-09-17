# deFramed Supabase setup

1. Create the Supabase project inside the `deFramed` organization.
2. Open **SQL Editor**, paste `schema.sql`, and run it.
3. Copy the project URL and the public `anon` key from **Project Settings → API** into the deFramed client configuration.
4. Sign in to the private publisher view with the site owner's Supabase account.

The `deframed-media` bucket is public for playback, but uploads, edits, and deletes require an authenticated Supabase user. Do not put the database password or service-role key in the site or GitHub repository.

The post composer accepts MP4/WebM URLs, YouTube links, and standard TikTok post links. TikTok posts are rendered through TikTok's official embedded player rather than downloaded or scraped.
