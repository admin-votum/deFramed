-- deFramed: posts, site settings, and public media storage
-- Run this once in the Supabase SQL Editor after creating the project.

create extension if not exists pgcrypto;

create table if not exists public.site_settings (
  id text primary key default 'default',
  name text not null default 'deFramed',
  tag text not null default 'windows',
  status text not null default 'Live',
  tagline text not null default 'Small windows into what we notice. Synthesize — don''t consume.',
  footer_line_1 text not null default 'λ deFramed',
  footer_line_2 text not null default 'windows into what we notice',
  profile_image_url text,
  updated_at timestamptz not null default now()
);

insert into public.site_settings (id)
values ('default')
on conflict (id) do nothing;

create table if not exists public.windows (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  caption text not null default '',
  source text not null default 'you',
  profile_image_url text,
  video_url text,
  colors jsonb not null default '["#7189A7", "#D96B2B"]'::jsonb,
  date_label text not null default 'Now',
  published_at timestamptz not null default now(),
  pinned boolean not null default false,
  created_at timestamptz not null default now()
);

create unique index if not exists one_pinned_deframed_window
  on public.windows (pinned)
  where pinned = true;

alter table public.site_settings enable row level security;
alter table public.windows enable row level security;

drop policy if exists "Public can read deFramed settings" on public.site_settings;
create policy "Public can read deFramed settings"
  on public.site_settings for select
  to anon, authenticated
  using (true);

drop policy if exists "Authenticated users manage deFramed settings" on public.site_settings;
create policy "Authenticated users manage deFramed settings"
  on public.site_settings for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Public can read deFramed windows" on public.windows;
create policy "Public can read deFramed windows"
  on public.windows for select
  to anon, authenticated
  using (true);

drop policy if exists "Authenticated users manage deFramed windows" on public.windows;
create policy "Authenticated users manage deFramed windows"
  on public.windows for all
  to authenticated
  using (true)
  with check (true);

insert into storage.buckets (id, name, public)
values ('deframed-media', 'deframed-media', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Public can read deFramed media" on storage.objects;
create policy "Public can read deFramed media"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'deframed-media');

drop policy if exists "Authenticated users upload deFramed media" on storage.objects;
create policy "Authenticated users upload deFramed media"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'deframed-media');

drop policy if exists "Authenticated users update deFramed media" on storage.objects;
create policy "Authenticated users update deFramed media"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'deframed-media')
  with check (bucket_id = 'deframed-media');

drop policy if exists "Authenticated users delete deFramed media" on storage.objects;
create policy "Authenticated users delete deFramed media"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'deframed-media');
