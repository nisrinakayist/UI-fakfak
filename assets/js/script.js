/* ==========================================================================
   PORTAL DESA KABUPATEN FAKFAK — script.js
   Data 17 Distrik & Kampung + logika Grid Card / Panel Kampung + pencarian
   ========================================================================== */

// ---- 1. DATA 17 DISTRIK & KAMPUNG -----------------------------------------
const DATA_DISTRIK = [
  { distrik: "Fakfak", ikon: "fa-mountain-sun", gambar: "assets/img/distrik/fakfak.png", 
    kampung: [
      { nama: "Fak Fak Selatan", kode: "9203011001"},
      { nama: "Fak Fak Utara", kode: "9203011002"},
      { nama: "Gewerpe", kode: "9203012007"},
      { nama: "Lusi Peri", kode: "9203012011"},
      { nama: "Wrikapal", kode: "9203012012"}   
    ] 
  },
  { distrik: "Fakfak Barat", ikon: "fa-mountain", gambar: "assets/img/distrik/fakfak-barat.png", 
    kampung: [
      { nama: "Werba", kode: "9203022001"},
      { nama: "Kiat", kode: "9203022002"},
      { nama: "Purwasak", kode: "9203022003"},
      { nama: "Wurkendik", kode: "9203022008"},
      { nama: "Kwuhkendak", kode: "9203022010"},
      { nama: "Purwahab Tonggo", kode: "9203022011"},
      { nama: "Pahger Nkindik", kode: "9203022012"},
      { nama: "Werba Utara", kode: "9203022013"},
      { nama: "Porum", kode: "9203022014"}     
    ] 
  },
  { distrik: "Fakfak Timur", ikon: "fa-sun", gambar: "assets/img/distrik/fakfak-timur.png", 
    kampung: [
      { nama: "Tunas Gain", kode: "9203032001"},
      { nama: "Urat", kode: "9203032003"},
      { nama: "Sanggram", kode: "9203032004"},
      { nama: "Weri", kode: "9203032010"},
      { nama: "Kiria Bisa", kode: "9203032012"},
      { nama: "Saharei", kode: "9203032013"}     
    ] 
  },
  { distrik: "Kokas", ikon: "fa-anchor", gambar: "assets/img/distrik/kokas.png", 
    kampung: [
      { nama:"Kokas Kota", kode: "9203041001"},
      { nama: "Mandoni", kode: "9203042003"},
      { nama: "Sekar", kode: "9203042008"},
      { nama: "Ugar", kode: "9203042009"},
      { nama: "Sisir", kode: "9203042010"},
      { nama: "Kampung Baru", kode: "9203042011"},
      { nama: "Patimburak", kode: "9203042012"},
      { nama: "Batufiafas", kode: "9203042013"},
      { nama: "Kinam", kode: "9203042014"},
      { nama: "Mambunibuni", kode: "9203042021"},
      { nama: "Kriawaswas", kode: "9203042024"},
      { nama: "Sosar", kode: "9203042028"},
      { nama: "Pang Wadar", kode: "9203042029"},
      { nama: "Masina", kode: "9203042030"},
      { nama: "Kimina Kra", kode: "9203042031"}              
    ] 
  },
  { distrik: "Fakfak Tengah", ikon: "fa-tree", gambar: "assets/img/distrik/fakfak-tengah.png", 
    kampung: [
      { nama: "Danaweria", kode: "9203051001"},
      { nama: "Kayu Merah", kode: "9203052002"},
      { nama: "Katemba", kode: "9203052003"},
      { nama: "Nemewikarya", kode: "9203052004"},
      { nama: "Raduria", kode: "9203052005"},   
      { nama: "Brongkendik", kode: "9203052006"},   
      { nama: "Air Besar", kode: "9203052007"},   
      { nama: "Mandopma", kode: "9203052008"},   
      { nama: "Kanantare", kode: "9203052009"},   
      { nama: "Pasir Putih", kode: "9203052010"},   
      { nama: "Pirma", kode: "9203052011"},   
      { nama: "Sakartemin", kode: "9203052012"},   
      { nama: "Hambrangkendik", kode: "9203052013"},   
      { nama: "Unipokpok", kode: "9203052014"}
    ] 
  },
  { distrik: "Karas", ikon: "fa-umbrella-beach", gambar: "assets/img/distrik/karas.png", 
    kampung: [
      { nama: "Malakuli", kode: "9203062001"},
      { nama: "Faur", kode: "9203062002"},
      { nama: "Kiaba", kode: "9203062003"},
      { nama: "Antalisa", kode: "9203062004"},
      { nama: "Tarak", kode: "9203062005"},
      { nama: "Tuberwasak", kode: "9203062006"},
      { nama: "Mas", kode: "9203062007"}
    ] 
  },
  { distrik: "Bomberay", ikon: "fa-seedling", gambar: "assets/img/distrik/bomberay.png", 
    kampung: [
      { nama: "Onimsari", kode: "9203072007"},
      { nama: "Mekarsari", kode: "9203072008"},
      { nama: "Pinang Agung", kode: "9203072009"},
      { nama: "Bumi Moroh Indah", kode: "9203072010"},
      { nama: "Tesha", kode: "9203072012"},
      { nama: "Onim Jaya", kode: "9203072014"},
      { nama: "Wono Rejo", kode: "9203072015"},
    ] 
  },
  { distrik: "Kramongmongga", ikon: "fa-water", gambar: "assets/img/distrik/kramongmongga.png", 
    kampung: [
      { nama: "Kramongmongga", kode: "9203082001"},
      { nama: "Wargep", kode: "9203082007"},
      { nama: "Mamur", kode: "9203082008"},
      { nama: "Nembukteb", kode: "9203082009"},
      { nama: "Pikpik", kode: "9203082010"},
      { nama: "Kwamkwamur", kode: "9203082011"},
      { nama: "Bahbadan", kode: "9203082012"},
      { nama: "Gewab", kode: "9203082016"},
      { nama: "Tentreda", kode: "9203082017"},
      { nama: "Mbaham Ma Youn", kode: "9203082018"},
    ] 
  },
  { distrik: "Teluk Patipi", ikon: "fa-water", gambar: "assets/img/distrik/teluk-patipi.png", 
    kampung: [
      { nama: "Puar", kode: "9203092001"},
      { nama: "Degen", kode: "9203092002"},
      { nama: "Tetar", kode: "9203092003"},
      { nama: "Sum", kode: "9203092005"},
      { nama: "Adora", kode: "9203092011"},
      { nama: "Us", kode: "9203092012"},
      { nama: "Patipi Pasir", kode: "9203092014"},
      { nama: "Patipi Pulau", kode: "9203092015"},
      { nama: "Mawar", kode: "9203092017"},
      { nama: "Tibatibananam", kode: "9203092018"},
      { nama: "Offie", kode: "9203092020"},
      { nama: "Muhri", kode: "9203092021"},
      { nama: "Bisa", kode: "9203092022"},
    ] 
  },
  { distrik: "Pariwari", ikon: "fa-water", gambar: "assets/img/distrik/pariwari.png", 
    kampung: [
      { nama: "Wagom", kode: "9203101001"},
      { nama: "Wagom Utara", kode: "9203101002"},
      { nama: "Dulanpokpok", kode: "9203101003"},
      { nama: "Tanama", kode: "9203102004"},
      { nama: "Kapaurtutin", kode: "9203102005"},
      { nama: "Sekban", kode: "9203102006"},
      { nama: "Torea", kode: "9203102007"},
      { nama: "Sekru", kode: "9203102008"},
      { nama: "Sukuru Tuare", kode: "9203102009"},
    ] 
  },
  { distrik: "Wartutin", ikon: "fa-mountain-sun", gambar: "assets/img/distrik/wartutin.png", 
    kampung: [
      { nama: "Werpigan", kode: "9203112001"},
      { nama: "Werabuan", kode: "9203112002"},
      { nama: "Wartutin", kode: "9203112003"},
      { nama: "Siboru", kode: "9203112004"},
      { nama: "Sipatnanam", kode: "9203112005"},
      { nama: "Kamandur Tetar", kode: "9203112006"},
    ] 
  },
  { distrik: "Fakfak Timur Tengah", ikon: "fa-leaf", gambar: "assets/img/distrik/fakfak-timurtengah.png", 
    kampung: [
      { nama: "Waserat", kode: "9203122001"},
      { nama: "Wambar", kode: "9203122002"},
      { nama: "Kotam", kode: "9203122003"},
      { nama: "Kwama", kode: "9203122004"},
      { nama: "Kalamanuk", kode: "9203122005"},
      { nama: "Wayati Timur", kode: "9203122006"},
      { nama: "Wayati", kode: "9203122007"},
      { nama: "Wayati Barat", kode: "9203122008"},
      { nama: "Krabelang", kode: "9203122009"},
      { nama: "Wambar Timur", kode: "9203122010"},
    ] 
  },
  { distrik: "Arguni", ikon: "fa-water", gambar: "assets/img/distrik/arguni.png", 
    kampung: [
      { nama: "Andamata", kode: "9203132001"},
      { nama: "Taver", kode: "9203132002"},
      { nama: "Arguni", kode: "9203132003"},
      { nama: "Fior", kode: "9203132004"},
      { nama: "Furir", kode: "9203132005"},
    ] 
  },
  { distrik: "Mbahamdandara", ikon: "fa-mountain", gambar: "assets/img/distrik/mbahamdandara.png", 
    kampung: [
      { nama: "Darembang", kode: "9203142001"},
      { nama: "Goras", kode: "9203142002"},
      { nama: "Mitimber", kode: "9203142003"},
      { nama: "Waremu", kode: "9203142004"},
      { nama: "Wos", kode: "9203142005"},
      { nama: "Mbahamdandara", kode: "9203142006"},
      { nama: "Goras Selatan", kode: "9203142007"},
    ] 
  },
  { distrik: "Kayauni", ikon: "fa-leaf", gambar: "assets/img/distrik/kayauni.png", 
    kampung: [
      { nama: "Kaburbur", kode: "9203152001"},
      { nama: "Ubadari", kode: "9203152002"},
      { nama: "Homorkokma", kode: "9203152004"},
      { nama: "Pattukar", kode: "9203152005"},
      { nama: "Kayuni", kode: "9203152006"},
      { nama: "Kuagas", kode: "9203152007"},
      { nama: "Rangkendak", kode: "9203152008"},
      { nama: "Mananmur", kode: "9203152009"},
      { nama: "Warpa", kode: "9203152010"},
    ] 
  },
  { distrik: "Furwagi", ikon: "fa-umbrella-beach", gambar: "assets/img/distrik/furwagi.png", 
    kampung: [
      { nama: "Salakiti", kode: "9203162001"},
      { nama: "Tawar", kode: "9203162002"},
      { nama: "Gar", kode: "9203162003"},
      { nama: "Rumbati", kode: "9203162004"},
      { nama: "Werfra", kode: "9203162005"},
      { nama: "Tanehamur", kode: "9203162006"},
      { nama: "Sengkiti", kode: "9203162007"},
      { nama: "Twootkindik", kode: "9203162008"},
    ] 
  },
  { distrik: "Tomage", ikon: "fa-tree", gambar: "assets/img/distrik/tomage.png", 
    kampung: [
      { nama: "Mbima Jaya", kode: "9203172001"},
      { nama: "Warisa Mulya", kode: "9203172002"},
      { nama: "Wonodadi Mulya", kode: "9203172003"},
      { nama: "Tomage", kode: "9203172004"},
      { nama: "Otoweri", kode: "9203172005"},
      { nama: "Wamosan", kode: "9203172006"},
      { nama: "Salawier", kode: "9203172007"},
      { nama: "Wasa Mulya", kode: "9203172008"},
      { nama: "Wammar", kode: "9203172009"},
    ] 
  },
];

// ---- 2. UTIL ---------------------------------------------------------------

function buatSlug(nama) {
  return nama
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Tautan resmi web kampung. Ganti KONFIGURASI_TAUTAN.mode ke "klipaa" bila perlu.
function buatTautanKampung(kodeKampung) {
  return `https://webdesa.klipaa.id/village/${kodeKampung}`;
}

function highlightTeks(teks, kataKunci) {
  if (!kataKunci) return teks;
  const re = new RegExp(`(${kataKunci.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
  return teks.replace(re, "<mark>$1</mark>");
}

function nomorDua(n) {
  return String(n).padStart(2, "0");
}

// ---- 3. ELEMEN DOM -----------------------------------------------------------

const grid = document.getElementById("gridDistrik");
const inputCari = document.getElementById("inputCari");
const infoHasil = document.getElementById("infoHasil");
const tombolResetCari = document.getElementById("tombolResetCari");
const panelKampung = document.getElementById("panelKampung");
const panelKampungJudulTeks = document.getElementById("panelKampungJudulTeks");
const daftarKampungEl = document.getElementById("daftarKampung");
const tombolKembali = document.getElementById("tombolKembali");

let indexAktif = null;
let kataKunciAktif = "";

// ---- 4. RENDER GRID DISTRIK ---------------------------------------------------

function buatKartuDistrik(item, indexAsli, kataKunci) {
  const kartu = document.createElement("button");
  kartu.type = "button";
  kartu.className = "kartu-distrik";
  kartu.dataset.index = indexAsli;
  if (indexAsli === indexAktif) kartu.classList.add("kartu-distrik--aktif");

  kartu.innerHTML = `
    <img src="${item.gambar}" alt="Ilustrasi Distrik ${item.distrik}" class="kartu-distrik__ikon" loading="lazy" />
    <span class="kartu-distrik__nomor">${nomorDua(indexAsli + 1)}</span>
    <span class="kartu-distrik__label">Distrik</span>
    <span class="kartu-distrik__nama">${highlightTeks(item.distrik, kataKunci)}</span>
    <span class="kartu-distrik__jumlah">${item.kampung.length} Kampung</span>
  `;

  kartu.addEventListener("click", () => bukaPanelKampung(indexAsli));

  return kartu;
}

function renderGrid(daftar, kataKunci = "") {
  grid.innerHTML = "";
  const frag = document.createDocumentFragment();
  daftar.forEach(({ item, index }) => {
    frag.appendChild(buatKartuDistrik(item, index, kataKunci));
  });
  grid.appendChild(frag);
}

// ---- 5. PANEL KAMPUNG ----------------------------------------------------------

function bukaPanelKampung(indexAsli) {
  indexAktif = indexAsli;
  const item = DATA_DISTRIK[indexAsli];

  panelKampungJudulTeks.textContent = `Kampung di Distrik ${item.distrik}`;
  daftarKampungEl.innerHTML = item.kampung.map((k, i) => `
    <li>
      <a class="tautan-kampung" href="${buatTautanKampung(k.kode)}" target="_blank" rel="noopener">
        <span class="tautan-kampung__nomor">${nomorDua(i + 1)}</span>
        <span class="tautan-kampung__nama">Kampung ${k.nama}</span>
        <i class="fa-solid fa-arrow-up-right-from-square tautan-kampung__ikon" aria-hidden="true"></i>
      </a>
    </li>
  `).join("");

  panelKampung.hidden = false;
  document.querySelectorAll(".kartu-distrik").forEach((el) => {
    el.classList.toggle("kartu-distrik--aktif", Number(el.dataset.index) === indexAsli);
  });

  panelKampung.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function tutupPanelKampung() {
  indexAktif = null;
  panelKampung.hidden = true;
  document.querySelectorAll(".kartu-distrik").forEach((el) => el.classList.remove("kartu-distrik--aktif"));
}

tombolKembali.addEventListener("click", tutupPanelKampung);

// ---- 6. PENCARIAN REAL-TIME -------------------------------------------------

function cariDanFilter(kataKunciMentah) {
  const kataKunci = kataKunciMentah.trim().toLowerCase();
  kataKunciAktif = kataKunci;
  tombolResetCari.classList.toggle("tampil", kataKunci.length > 0);

  if (!kataKunci) {
    infoHasil.textContent = `Menampilkan seluruh ${DATA_DISTRIK.length} distrik.`;
    renderGrid(DATA_DISTRIK.map((item, index) => ({ item, index })));
    return;
  }

  const hasil = [];
  DATA_DISTRIK.forEach((item, index) => {
    const namaCocok = item.distrik.toLowerCase().includes(kataKunci);
    const kampungCocok = item.kampung.some(k => k.nama.toLowerCase().includes(kataKunci));

    if (namaCocok || kampungCocok) {
      hasil.push({ item, index });
    }
  });

  infoHasil.textContent = hasil.length
    ? `Ditemukan ${hasil.length} distrik cocok dengan "${kataKunciMentah}".`
    : `Tidak ada distrik atau kampung yang cocok dengan "${kataKunciMentah}".`;

  renderGrid(hasil, kataKunci);

  // Jika hanya ada 1 hasil distrik yang cocok langsung namanya, buka panelnya otomatis
  if (hasil.length === 1) {
    bukaPanelKampung(hasil[0].index);
  } else {
    tutupPanelKampung();
  }
}

inputCari.addEventListener("input", (e) => cariDanFilter(e.target.value));
tombolResetCari.addEventListener("click", () => {
  inputCari.value = "";
  cariDanFilter("");
  inputCari.focus();
});



// ---- 6b. TOMBOL GESER GRID DISTRIK ------------------------------------------

const tombolGeserKiri = document.getElementById("tombolGeserKiri");
const tombolGeserKanan = document.getElementById("tombolGeserKanan");

function perbaruiStatusTombolGeser() {
  const maksimalGeser = grid.scrollWidth - grid.clientWidth - 2;
  tombolGeserKiri.disabled = grid.scrollLeft <= 0;
  tombolGeserKanan.disabled = grid.scrollLeft >= maksimalGeser;
}

function geserGrid(arah) {
  const kartuContoh = grid.querySelector(".kartu-distrik");
  const jarak = kartuContoh ? kartuContoh.offsetWidth + 14 : 190; // lebar kartu + gap
  grid.scrollBy({ left: arah * jarak * 2, behavior: "smooth" }); // geser 2 kartu tiap klik
}

tombolGeserKiri.addEventListener("click", () => geserGrid(-1));
tombolGeserKanan.addEventListener("click", () => geserGrid(1));
grid.addEventListener("scroll", perbaruiStatusTombolGeser);
window.addEventListener("resize", perbaruiStatusTombolGeser);

// ---- 7. MENU MOBILE -------------------------------------------------------------
const tombolMenuHp = document.getElementById("tombolMenuHp");
const navHp = document.getElementById("navHp");

tombolMenuHp.addEventListener("click", () => {
  const terbuka = navHp.classList.toggle("terbuka");
  tombolMenuHp.setAttribute("aria-expanded", String(terbuka));
});

navHp.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navHp.classList.remove("terbuka");
    tombolMenuHp.setAttribute("aria-expanded", "false");
  });
});

// ---- 8. ANIMASI ANGKA PARTISIPASI -----------------------------------------------

function animasiAngka(el, target, durasiMs = 1200) {
  const mulai = performance.now();
  function tik(sekarang) {
    const progres = Math.min(1, (sekarang - mulai) / durasiMs);
    el.textContent = Math.round(progres * target);
    if (progres < 1) requestAnimationFrame(tik);
  }
  requestAnimationFrame(tik);
}

// ---- 9. INISIALISASI --------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  cariDanFilter("");
  document.getElementById("tahunFooter").textContent = new Date().getFullYear();

  const totalKampung = DATA_DISTRIK.reduce((total, d) => total + d.kampung.length, 0);
  const elAngka = document.getElementById("angkaPartisipasi");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animasiAngka(elAngka, totalKampung);
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(elAngka);
  perbaruiStatusTombolGeser();  
});
