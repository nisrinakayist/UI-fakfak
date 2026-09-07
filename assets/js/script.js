/* ==========================================================================
   PORTAL DESA KABUPATEN FAKFAK — script.js
   Data 17 Distrik & Kampung + logika Grid Card / Panel Kampung + pencarian
   ========================================================================== */

// ---- 1. DATA 17 DISTRIK & KAMPUNG -----------------------------------------
const DATA_DISTRIK = [
  { distrik: "Fakfak", ikon: "fa-mountain-sun", gambar: "assets/img/distrik/fakfak.png", 
    kampung: [
      { nama: "Fak Fak Selatan", kode: "9203011001", jenis: "kelurahan"},
      { nama: "Fak Fak Utara", kode: "9203011002", jenis: "kelurahan"},
      { nama: "Gewerpe", kode: "9203012007", jenis: "kampung"},
      { nama: "Lusi Peri", kode: "9203012011", jenis: "kampung"},
      { nama: "Wrikapal", kode: "9203012012", jenis: "kampung"}   
    ] 
  },
  { distrik: "Fakfak Barat", ikon: "fa-mountain", gambar: "assets/img/distrik/fakfak-barat.png", 
    kampung: [
      { nama: "Werba", kode: "9203022001", jenis: "kampung"},
      { nama: "Kiat", kode: "9203022002", jenis: "kampung"},
      { nama: "Purwasak", kode: "9203022003", jenis: "kampung"},
      { nama: "Wurkendik", kode: "9203022008", jenis: "kampung"},
      { nama: "Kwuhkendak", kode: "9203022010", jenis: "kampung"},
      { nama: "Purwahab Tonggo", kode: "9203022011", jenis: "kampung"},
      { nama: "Pahger Nkindik", kode: "9203022012", jenis: "kampung"},
      { nama: "Werba Utara", kode: "9203022013", jenis: "kampung"},
      { nama: "Porum", kode: "9203022014", jenis: "kampung"}     
    ] 
  },
  { distrik: "Fakfak Timur", ikon: "fa-sun", gambar: "assets/img/distrik/fakfak-timur.png", 
    kampung: [
      { nama: "Tunas Gain", kode: "9203032001", jenis: "kampung"},
      { nama: "Urat", kode: "9203032003", jenis: "kampung"},
      { nama: "Sanggram", kode: "9203032004", jenis: "kampung"},
      { nama: "Weri", kode: "9203032010", jenis: "kampung"},
      { nama: "Kiria Bisa", kode: "9203032012", jenis: "kampung"},
      { nama: "Saharei", kode: "9203032013", jenis: "kampung"}     
    ] 
  },
  { distrik: "Kokas", ikon: "fa-anchor", gambar: "assets/img/distrik/kokas.png", 
    kampung: [
      { nama:"Kokas Kota", kode: "9203041001", jenis: "kelurahan"},
      { nama: "Mandoni", kode: "9203042003", jenis: "kampung"},
      { nama: "Sekar", kode: "9203042008", jenis: "kampung"},
      { nama: "Ugar", kode: "9203042009", jenis: "kampung"},
      { nama: "Sisir", kode: "9203042010", jenis: "kampung"},
      { nama: "Kampung Baru", kode: "9203042011", jenis: "kampung"},
      { nama: "Patimburak", kode: "9203042012", jenis: "kampung"},
      { nama: "Batufiafas", kode: "9203042013", jenis: "kampung"},
      { nama: "Kinam", kode: "9203042014", jenis: "kampung"},
      { nama: "Mambunibuni", kode: "9203042021", jenis: "kampung"},
      { nama: "Kriawaswas", kode: "9203042024", jenis: "kampung"},
      { nama: "Sosar", kode: "9203042028", jenis: "kampung"},
      { nama: "Pang Wadar", kode: "9203042029", jenis: "kampung"},
      { nama: "Masina", kode: "9203042030", jenis: "kampung"},
      { nama: "Kimina Kra", kode: "9203042031", jenis: "kampung"}              
    ] 
  },
  { distrik: "Fakfak Tengah", ikon: "fa-tree", gambar: "assets/img/distrik/fakfak-tengah.png", 
    kampung: [
      { nama: "Danaweria", kode: "9203051001", jenis: "kelurahan"},
      { nama: "Kayu Merah", kode: "9203052002", jenis: "kampung"},
      { nama: "Katemba", kode: "9203052003", jenis: "kampung"},
      { nama: "Nemewikarya", kode: "9203052004", jenis: "kampung"},
      { nama: "Raduria", kode: "9203052005", jenis: "kampung"},   
      { nama: "Brongkendik", kode: "9203052006", jenis: "kampung"},   
      { nama: "Air Besar", kode: "9203052007", jenis: "kampung"},   
      { nama: "Mandopma", kode: "9203052008", jenis: "kampung"},   
      { nama: "Kanantare", kode: "9203052009", jenis: "kampung"},   
      { nama: "Pasir Putih", kode: "9203052010", jenis: "kampung"},   
      { nama: "Pirma", kode: "9203052011", jenis: "kampung"},   
      { nama: "Sakartemin", kode: "9203052012", jenis: "kampung"},   
      { nama: "Hambrangkendik", kode: "9203052013", jenis: "kampung"},   
      { nama: "Unipokpok", kode: "9203052014", jenis: "kampung"}
    ] 
  },
  { distrik: "Karas", ikon: "fa-umbrella-beach", gambar: "assets/img/distrik/karas.png", 
    kampung: [
      { nama: "Malakuli", kode: "9203062001", jenis: "kampung"},
      { nama: "Faur", kode: "9203062002", jenis: "kampung"},
      { nama: "Kiaba", kode: "9203062003", jenis: "kampung"},
      { nama: "Antalisa", kode: "9203062004", jenis: "kampung"},
      { nama: "Tarak", kode: "9203062005", jenis: "kampung"},
      { nama: "Tuberwasak", kode: "9203062006", jenis: "kampung"},
      { nama: "Mas", kode: "9203062007", jenis: "kampung"}
    ] 
  },
  { distrik: "Bomberay", ikon: "fa-seedling", gambar: "assets/img/distrik/bomberay.png", 
    kampung: [
      { nama: "Onimsari", kode: "9203072007", jenis: "kampung"},
      { nama: "Mekarsari", kode: "9203072008", jenis: "kampung"},
      { nama: "Pinang Agung", kode: "9203072009", jenis: "kampung"},
      { nama: "Bumi Moroh Indah", kode: "9203072010", jenis: "kampung"},
      { nama: "Tesha", kode: "9203072012", jenis: "kampung"},
      { nama: "Onim Jaya", kode: "9203072014", jenis: "kampung"},
      { nama: "Wono Rejo", kode: "9203072015", jenis: "kampung"},
    ] 
  },
  { distrik: "Kramongmongga", ikon: "fa-water", gambar: "assets/img/distrik/kramongmongga.png", 
    kampung: [
      { nama: "Kramongmongga", kode: "9203082001", jenis: "kampung"},
      { nama: "Wargep", kode: "9203082007", jenis: "kampung"},
      { nama: "Mamur", kode: "9203082008", jenis: "kampung"},
      { nama: "Nembukteb", kode: "9203082009", jenis: "kampung"},
      { nama: "Pikpik", kode: "9203082010", jenis: "kampung"},
      { nama: "Kwamkwamur", kode: "9203082011", jenis: "kampung"},
      { nama: "Bahbadan", kode: "9203082012", jenis: "kampung"},
      { nama: "Gewab", kode: "9203082016", jenis: "kampung"},
      { nama: "Tentreda", kode: "9203082017", jenis: "kampung"},
      { nama: "Mbaham Ma Youn", kode: "9203082018", jenis: "kampung"},
    ] 
  },
  { distrik: "Teluk Patipi", ikon: "fa-water", gambar: "assets/img/distrik/teluk-patipi.png", 
    kampung: [
      { nama: "Puar", kode: "9203092001", jenis: "kampung"},
      { nama: "Degen", kode: "9203092002", jenis: "kampung"},
      { nama: "Tetar", kode: "9203092003", jenis: "kampung"},
      { nama: "Sum", kode: "9203092005", jenis: "kampung"},
      { nama: "Adora", kode: "9203092011", jenis: "kampung"},
      { nama: "Us", kode: "9203092012", jenis: "kampung"},
      { nama: "Patipi Pasir", kode: "9203092014", jenis: "kampung"},
      { nama: "Patipi Pulau", kode: "9203092015", jenis: "kampung"},
      { nama: "Mawar", kode: "9203092017", jenis: "kampung"},
      { nama: "Tibatibananam", kode: "9203092018", jenis: "kampung"},
      { nama: "Offie", kode: "9203092020", jenis: "kampung"},
      { nama: "Muhri", kode: "9203092021", jenis: "kampung"},
      { nama: "Bisa", kode: "9203092022", jenis: "kampung"},
    ] 
  },
  { distrik: "Pariwari", ikon: "fa-water", gambar: "assets/img/distrik/pariwari.png", 
    kampung: [
      { nama: "Wagom", kode: "9203101001", jenis: "kelurahan"},
      { nama: "Wagom Utara", kode: "9203101002", jenis: "kelurahan"},
      { nama: "Dulanpokpok", kode: "9203101003", jenis: "kelurahan"},
      { nama: "Tanama", kode: "9203102004", jenis: "kampung"},
      { nama: "Kapaurtutin", kode: "9203102005", jenis: "kampung"},
      { nama: "Sekban", kode: "9203102006", jenis: "kampung"},
      { nama: "Torea", kode: "9203102007", jenis: "kampung"},
      { nama: "Sekru", kode: "9203102008", jenis: "kampung"},
      { nama: "Sukuru Tuare", kode: "9203102009", jenis: "kampung"},
    ] 
  },
  { distrik: "Wartutin", ikon: "fa-mountain-sun", gambar: "assets/img/distrik/wartutin.png", 
    kampung: [
      { nama: "Werpigan", kode: "9203112001", jenis: "kampung"},
      { nama: "Werabuan", kode: "9203112002", jenis: "kampung"},
      { nama: "Wartutin", kode: "9203112003", jenis: "kampung"},
      { nama: "Siboru", kode: "9203112004", jenis: "kampung"},
      { nama: "Sipatnanam", kode: "9203112005", jenis: "kampung"},
      { nama: "Kamandur Tetar", kode: "9203112006", jenis: "kampung"},
    ] 
  },
  { distrik: "Fakfak Timur Tengah", ikon: "fa-leaf", gambar: "assets/img/distrik/fakfak-timurtengah.png", 
    kampung: [
      { nama: "Waserat", kode: "9203122001", jenis: "kampung"},
      { nama: "Wambar", kode: "9203122002" , jenis: "kampung"},
      { nama: "Kotam", kode: "9203122003", jenis: "kampung"},
      { nama: "Kwama", kode: "9203122004", jenis: "kampung"},
      { nama: "Kalamanuk", kode: "9203122005", jenis: "kampung"},
      { nama: "Wayati Timur", kode: "9203122006", jenis: "kampung"},
      { nama: "Wayati", kode: "9203122007", jenis: "kampung"},
      { nama: "Wayati Barat", kode: "9203122008", jenis: "kampung"},
      { nama: "Krabelang", kode: "9203122009", jenis: "kampung"},
      { nama: "Wambar Timur", kode: "9203122010", jenis: "kampung"},
    ] 
  },
  { distrik: "Arguni", ikon: "fa-water", gambar: "assets/img/distrik/arguni.png", 
    kampung: [
      { nama: "Andamata", kode: "9203132001", jenis: "kampung"},
      { nama: "Taver", kode: "9203132002", jenis: "kampung"},
      { nama: "Arguni", kode: "9203132003", jenis: "kampung"},
      { nama: "Fior", kode: "9203132004", jenis: "kampung"},
      { nama: "Furir", kode: "9203132005", jenis: "kampung"},
    ] 
  },
  { distrik: "Mbahamdandara", ikon: "fa-mountain", gambar: "assets/img/distrik/mbahamdandara.png", 
    kampung: [
      { nama: "Darembang", kode: "9203142001", jenis: "kampung"},
      { nama: "Goras", kode: "9203142002", jenis: "kampung"},
      { nama: "Mitimber", kode: "9203142003", jenis: "kampung"},
      { nama: "Waremu", kode: "9203142004", jenis: "kampung"},
      { nama: "Wos", kode: "9203142005", jenis: "kampung"},
      { nama: "Mbahamdandara", kode: "9203142006", jenis: "kampung"},
      { nama: "Goras Selatan", kode: "9203142007", jenis: "kampung"},
    ] 
  },
  { distrik: "Kayauni", ikon: "fa-leaf", gambar: "assets/img/distrik/kayauni.png", 
    kampung: [
      { nama: "Kaburbur", kode: "9203152001", jenis: "kampung"},
      { nama: "Ubadari", kode: "9203152002", jenis: "kampung"},
      { nama: "Homorkokma", kode: "9203152004", jenis: "kampung"},
      { nama: "Pattukar", kode: "9203152005", jenis: "kampung"},
      { nama: "Kayuni", kode: "9203152006", jenis: "kampung"},
      { nama: "Kuagas", kode: "9203152007", jenis: "kampung"},
      { nama: "Rangkendak", kode: "9203152008", jenis: "kampung"},
      { nama: "Mananmur", kode: "9203152009", jenis: "kampung"},
      { nama: "Warpa", kode: "9203152010", jenis: "kampung"},
    ] 
  },
  { distrik: "Furwagi", ikon: "fa-umbrella-beach", gambar: "assets/img/distrik/furwagi.png", 
    kampung: [
      { nama: "Salakiti", kode: "9203162001", jenis: "kampung"},
      { nama: "Tawar", kode: "9203162002", jenis: "kampung"},
      { nama: "Gar", kode: "9203162003", jenis: "kampung"},
      { nama: "Rumbati", kode: "9203162004", jenis: "kampung"},
      { nama: "Werfra", kode: "9203162005", jenis: "kampung"},
      { nama: "Tanehamur", kode: "9203162006", jenis: "kampung"},
      { nama: "Sengkiti", kode: "9203162007", jenis: "kampung"},
      { nama: "Twootkindik", kode: "9203162008", jenis: "kampung"},
    ] 
  },
  { distrik: "Tomage", ikon: "fa-tree", gambar: "assets/img/distrik/tomage.png", 
    kampung: [
      { nama: "Mbima Jaya", kode: "9203172001", jenis: "kampung"},
      { nama: "Warisa Mulya", kode: "9203172002", jenis: "kampung"},
      { nama: "Wonodadi Mulya", kode: "9203172003", jenis: "kampung"},
      { nama: "Tomage", kode: "9203172004", jenis: "kampung"},
      { nama: "Otoweri", kode: "9203172005", jenis: "kampung"},
      { nama: "Wamosan", kode: "9203172006", jenis: "kampung"},
      { nama: "Salawier", kode: "9203172007", jenis: "kampung"},
      { nama: "Wasa Mulya", kode: "9203172008", jenis: "kampung"},
      { nama: "Wammar", kode: "9203172009", jenis: "kampung"},
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

  const semuaEntri = DATA_DISTRIK.flatMap(d => d.kampung);
  const totalKampung = semuaEntri.filter(k => k.jenis === "kampung").length;
  const totalKelurahan = semuaEntri.filter(k => k.jenis === "kelurahan").length;
  const elAngka = document.getElementById("angkaPartisipasi");

  const elAngkaKelurahan = document.getElementById("angkaKelurahan");
  if (elAngkaKelurahan) {
    animasiAngka(elAngkaKelurahan, totalKelurahan);
  }
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
