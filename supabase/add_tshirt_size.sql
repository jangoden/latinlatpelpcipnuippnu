-- ============================================
-- SQL MIGRATION: Menambahkan Field Ukuran Kaos
-- ============================================
-- Run this SQL in your Supabase SQL Editor

-- 1. Tambahkan kolom tshirt_size ke tabel registrants
ALTER TABLE public.registrants
ADD COLUMN tshirt_size character varying NULL;

-- 2. (Opsional) Tambahkan constraint untuk memastikan nilai yang valid
-- ALTER TABLE public.registrants
-- ADD CONSTRAINT registrants_tshirt_size_check 
-- CHECK (tshirt_size IN ('M', 'L', 'XL') OR tshirt_size IS NULL);

-- ============================================
-- VERIFIKASI: Jalankan query ini untuk memastikan kolom sudah ditambahkan
-- ============================================
-- SELECT column_name, data_type, is_nullable 
-- FROM information_schema.columns 
-- WHERE table_name = 'registrants' AND column_name = 'tshirt_size';

