# Digital Encouragement & Secret Capsule

Next.js (App Router) + Tailwind CSS v4. Mobile-first.

## Jalankan
```bash
npm install
npm run dev
```

## Yang wajib diganti sebelum deploy
Semua teks ada di `src/data/keepsake.ts`:
1. `recipient.name` dan `sender.name`
2. `capsule.clue` dan `capsule.accepted` (kata kunci)
3. Isi `capsule.letter` supaya sesuai cerita kalian

## Deploy
Push ke GitHub, lalu import repo di Vercel. Tidak perlu konfigurasi tambahan.

Catatan: kata kunci ikut terkirim ke browser (web statis). Cukup untuk kenang-kenangan,
bukan untuk rahasia yang benar-benar terkunci.
