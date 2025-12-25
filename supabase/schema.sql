-- Create table for registrants
create table public.registrants (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  
  -- Identity
  nik character varying not null,
  username character varying not null,
  email character varying not null,
  full_name character varying not null,
  
  -- Birth Info
  birth_place character varying not null,
  birth_date date not null,
  
  -- Address
  address text not null,
  province character varying not null,
  regency character varying not null,
  district character varying not null,
  village character varying not null,
  
  -- Contact & Profile
  phone_number character varying not null,
  hobby character varying not null,
  status character varying not null,
  nia character varying null, -- Optional
  
  -- Organization
  org_level character varying not null, -- PAC/PKPT/PR/PC
  org_name character varying not null,
  
  -- Digital Assets
  instagram_video_link text not null,
  file_urls jsonb null, -- Stores URLs for {kta, sertifikat, rekomendasi, foto, essay}
  
  constraint registrants_pkey primary key (id),
  constraint registrants_nik_key unique (nik),
  constraint registrants_username_key unique (username),
  constraint registrants_email_key unique (email)
);

-- Set Row Level Security (RLS)
alter table public.registrants enable row level security;

-- Policy: Allow anyone (anon) to INSERT data (Registration)
create policy "Enable insert for everyone" 
on public.registrants 
for insert 
to anon 
with check (true);

-- Policy: Allow users to view their own data (Optional, currently not used but good practice)
-- create policy "Enable read access for own data"
-- on public.registrants
-- for select
-- using (auth.uid() = id); 
-- Note: Since we don't have Auth users yet, we might want to keep read restricted to service_role (Admin) only.

-- STORAGE POLICIES
-- NOTE: Please Create a Bucket named 'registration-files' in the Storage Dashboard first.
-- Then run these policies to allow uploads.

-- Policy: Allow public uploads to 'registration-files' bucket
create policy "Allow public uploads"
on storage.objects
for insert
to anon
with check ( bucket_id = 'registration-files' );

-- Policy: Allow public read access to 'registration-files' bucket (so admins can start viewing easily)
create policy "Allow public read access"
on storage.objects
for select
to anon
using ( bucket_id = 'registration-files' );
