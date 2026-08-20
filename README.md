# USV Surveying Hub — GitHub Pages

Website static untuk informasi CHCNAV Apache USV.

## Struktur
- `index.html` — halaman utama
- `styles.css` — desain/responsive layout
- `script.js` — interaksi menu mobile
- `assets/` — tempat PDF, gambar, brochure, dan aset lain

## Menambahkan Manual Book
Masukkan file PDF ke:
`assets/manual-apache.pdf`

Jika nama file berbeda, ubah link pada `index.html`.

## Menambahkan gambar produk
Kamu dapat menambahkan JPG/PNG ke folder `assets/`, lalu mengganti bagian `.product-visual` di `index.html`.

## GitHub Pages
1. Buat repository bernama `usv-surveying-hub`.
2. Upload semua file/folder ini.
3. GitHub → Settings → Pages.
4. Pilih source dari branch `main` dan folder `/ (root)` jika tersedia.
5. Buka URL:
`https://USERNAME.github.io/usv-surveying-hub/`

Website ini sengaja dibuat tanpa backend/database sehingga dapat dijalankan sebagai static site.
