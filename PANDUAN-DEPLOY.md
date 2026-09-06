# Panduan Lengkap: Dari Nol Sampai Online di Vercel
### Portal Desa Kabupaten Fakfak

Panduan ini dibuat untuk pemula — ikuti urut dari Tahap 1 sampai Tahap 4.

---

## TAHAP 1 — Persiapan Folder & Aset Gambar

1. Di komputer Anda, buat satu folder baru, misalnya beri nama `portal-desa-fakfak`.
2. Di dalam folder itu, taruh 7 file berikut (sudah disiapkan di paket ini):
   - `index.html`
   - `styles.css`
   - `script.js`
   - `logo-fakfak.png` (logo tanpa latar belakang / transparan)
   - `logo-hdmi.png`
   - `bupati.png` (foto Bupati tanpa latar belakang / transparan)
   - `wakil-bupati.png` (foto Wakil Bupati tanpa latar belakang / transparan)
   - `desa-bg.svg` (ilustrasi latar nuansa kampung, dipakai di header & footer)
3. Pastikan **nama file persis sama** (huruf kecil semua, tanpa spasi) dan **semua file berada di folder yang sama** — tidak di dalam subfolder. Kode HTML/CSS memanggil gambar dengan nama-nama tersebut secara langsung.
4. Jika nanti Anda punya foto/logo resolusi lebih baik, tinggal ganti (timpa) file dengan nama yang sama — tidak perlu mengubah kode.

---

## TAHAP 2 — Pengisian Kode

Tahap ini sebenarnya sudah selesai — ketiga file kode (`index.html`, `styles.css`, `script.js`) sudah lengkap berisi:

- `index.html` — struktur halaman: navbar transparan menyatu di hero, foto Bupati/Wakil Bupati tanpa latar berdiri di atas ilustrasi kampung, section kontribusi, penjelajah 17 distrik (grid card + panel kampung dinamis), statistik, dan footer.
- `styles.css` — seluruh warna, tata letak, navbar transparan mengambang, latar ilustrasi nuansa kampung (`desa-bg.svg`) di header & footer, dan tampilan responsif.
- `script.js` — data 17 distrik & kampung, logika buka/tutup panel kampung dari grid card, dan pencarian real-time.

Jika Anda ingin mengedit teks atau menambah/mengubah data kampung:
- Ganti alamat tujuan link kampung: buka `script.js`, cari `KONFIGURASI_TAUTAN`, ubah `mode: "fakfakkab"` menjadi `mode: "klipaa"` bila ingin semua link mengarah ke `klipaa.com/desa/...` alih-alih `[nama].fakfakkab.go.id`.
- Menambah/mengubah nama distrik atau kampung: edit array `DATA_DISTRIK` di bagian atas `script.js`, ikuti format yang sudah ada.
- Ingin ganti ilustrasi latar kampung: timpa file `desa-bg.svg` dengan file SVG lain bernama sama, atau ganti baris `background-image: url("desa-bg.svg")` di `styles.css` ke gambar lain (misal foto asli kampung Fakfak).

---

## TAHAP 3 — Pengujian Lokal

Sebelum di-deploy, pastikan tampilannya benar di komputer Anda sendiri:

1. Buka folder `portal-desa-fakfak`.
2. Klik dua kali file `index.html` — akan terbuka otomatis di browser (Chrome/Edge/Firefox).
3. Periksa:
   - Navbar transparan tampil menyatu di atas hero, logo Fakfak (tanpa latar) dan watermark HDMI tampil dengan baik.
   - Latar nuansa kampung (bukit, rumah panggung, pohon kelapa) tampil di header dan footer.
   - Foto Bupati dan Wakil Bupati tampil tanpa latar belakang, berdiri di atas ilustrasi kampung.
   - Tombol **"Jelajahi Kampung"** dan **"Buat Akun"** bisa diklik.
   - Kotak pencarian: ketik nama distrik (misalnya "Kokas") atau nama kampung (misalnya "Wera") — daftar harus otomatis tersaring dan kata kunci ter-highlight.
   - Klik salah satu kartu distrik — kartu menjadi aktif dan panel daftar kampung muncul di bawah grid, lengkap dengan tombol "Kembali ke Distrik".
   - Klik salah satu nama kampung — akan membuka tab baru menuju alamat web kampung tersebut.
4. Coba juga perkecil lebar jendela browser (atau buka lewat HP) untuk memastikan tampilan tetap rapi di layar kecil, termasuk menu navbar hamburger.

> **Catatan:** karena dibuka langsung dari file (`file://...`), semua fitur di atas sudah berfungsi penuh sebab proyek ini murni HTML/CSS/JS tanpa server backend.

---

## TAHAP 4 — Deploy ke Vercel

Ada dua cara. Pilih yang paling mudah bagi Anda.

### Cara A — Drag & Drop lewat Vercel Dashboard (paling cepat, tanpa GitHub)

1. Buka **https://vercel.com** di browser, lalu klik **Sign Up** (bisa daftar pakai akun Google/GitHub/email).
2. Setelah masuk ke Dashboard, klik tombol **Add New...** → pilih **Project**.
3. Cari opsi **"Deploy without Git" / drag-and-drop area** pada halaman impor proyek (biasanya ada kotak besar bertuliskan *"Drag and drop your project folder here"*).
4. Seret (drag) seluruh folder `portal-desa-fakfak` Anda ke kotak tersebut, atau klik kotaknya untuk memilih folder dari komputer.
5. Vercel akan otomatis mendeteksi ini sebagai proyek statis. Klik **Deploy**.
6. Tunggu beberapa detik hingga proses build selesai — akan muncul halaman "Congratulations" dengan tautan seperti `https://portal-desa-fakfak.vercel.app`.
7. Klik tautan tersebut — website Anda sudah **online** dan siap didemonstrasikan.

### Cara B — Lewat GitHub (lebih rapi untuk update jangka panjang)

1. Buat akun di **https://github.com** jika belum punya.
2. Klik **New repository**, beri nama `portal-desa-fakfak`, atur ke **Public** atau **Private**, lalu klik **Create repository**.
3. Upload 7 file dari folder Anda ke repository ini lewat tombol **Add file → Upload files** di halaman GitHub, lalu klik **Commit changes**.
4. Kembali ke **https://vercel.com** → **Add New...** → **Project**.
5. Pilih **Import Git Repository**, hubungkan akun GitHub Anda, lalu pilih repository `portal-desa-fakfak`.
6. Biarkan pengaturan default (Framework Preset: **Other**), klik **Deploy**.
7. Setelah selesai, Anda mendapat URL publik yang sama seperti Cara A. Kelebihannya: setiap kali Anda mengubah file di GitHub, Vercel otomatis mem-build ulang dan memperbarui website secara otomatis.

### Setelah online

- URL default dari Vercel biasanya berbentuk `https://nama-proyek.vercel.app`. Anda bisa mengubah nama proyek dari **Project Settings → General → Project Name** sebelum atau sesudah deploy.
- Jika suatu saat punya domain sendiri (misalnya `desa.fakfakkab.go.id`), domain itu bisa dihubungkan lewat **Project Settings → Domains**.

Selesai — Portal Desa Kabupaten Fakfak Anda sudah bisa diakses publik dan siap didemonstrasikan.
