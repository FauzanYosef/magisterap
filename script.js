// ===== Navbar scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('glass', 'shadow-soft');
  } else {
    navbar.classList.remove('glass', 'shadow-soft');
  }
});

// ===== Mobile menu =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Partners marquee =====
const partners = ['Kementerian PAN-RB','LAN RI','BAPPENAS','KPK','BKN','KemenkoPMK','LIPI','BPS'];
const marquee = document.querySelector('.marquee-track');
marquee.innerHTML = [...partners, ...partners].map(p =>
  `<div class="text-2xl font-display text-muted/60 whitespace-nowrap">${p}</div>`
).join('');

// ===== Features =====
const features = [
  { icon: '🎓', title: 'Dosen Profesional', desc: 'Pakar bergelar doktor & praktisi senior dari kementerian dan lembaga negara.' },
  { icon: '🔬', title: 'Pembelajaran Berbasis Riset', desc: 'Setiap mata kuliah terhubung pada riset terapan dengan dampak nyata.' },
  { icon: '⚖️', title: 'Fokus Kebijakan Publik', desc: 'Kurikulum spesifik analisis dan perumusan kebijakan kontemporer.' },
  { icon: '🕒', title: 'Pembelajaran Fleksibel', desc: 'Kelas reguler, eksekutif, dan blended learning sesuai profesi Anda.' },
  { icon: '🤝', title: 'Kolaborasi Pemerintah', desc: 'Magang dan proyek nyata dengan lembaga pemerintah pusat & daerah.' },
  { icon: '💎', title: 'Peluang Beasiswa', desc: 'LPDP, Beasiswa Unggulan, dan beasiswa kemitraan tersedia setiap tahun.' },
];
document.getElementById('features-grid').innerHTML = features.map(f => `
  <div class="feature-card glass rounded-2xl p-7 reveal border border-primary/10">
    <div class="w-14 h-14 rounded-2xl bg-gold-gradient grid place-items-center text-2xl shadow-glow">${f.icon}</div>
    <h3 class="font-display text-xl mt-5 text-ink">${f.title}</h3>
    <p class="text-sm text-muted mt-3 leading-relaxed">${f.desc}</p>
    <div class="mt-5 inline-flex items-center gap-2 text-sm text-secondary font-semibold">
      Pelajari lebih lanjut
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    </div>
  </div>`).join('');
document.querySelectorAll('#features-grid .reveal').forEach(el => io.observe(el));

// ===== Curriculum timeline =====
const semesters = [
  { sem: 'Semester 1', title: 'Fondasi Administrasi Publik', courses: ['Teori Administrasi Publik', 'Metodologi Penelitian', 'Statistika Sosial'] },
  { sem: 'Semester 2', title: 'Kebijakan & Tata Kelola', courses: ['Analisis Kebijakan Publik', 'Inovasi Tata Kelola', 'Manajemen Strategis Sektor Publik'] },
  { sem: 'Semester 3', title: 'Spesialisasi & Praktik', courses: ['Pelayanan Publik Digital', 'Kepemimpinan Strategis', 'Mata Kuliah Pilihan'] },
  { sem: 'Semester 4', title: 'Tesis & Publikasi', courses: ['Seminar Proposal', 'Penelitian Tesis', 'Publikasi Ilmiah'] },
];
document.getElementById('timeline').innerHTML = semesters.map((s,i) => `
  <div class="lg:grid lg:grid-cols-2 gap-12 items-center reveal">
    <div class="${i%2 ? 'lg:order-2' : ''}">
      <div class="glass rounded-3xl p-8 feature-card border border-primary/10">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-full bg-gold-gradient text-white text-xs font-semibold">${s.sem}</span>
          <span class="text-xs text-muted">12 SKS</span>
        </div>
        <h3 class="font-display text-2xl mt-4 text-ink">${s.title}</h3>
        <ul class="mt-5 space-y-2.5">
          ${s.courses.map(c => `<li class="flex items-center gap-3 text-sm text-muted"><span class="w-1.5 h-1.5 rounded-full bg-primary"></span>${c}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="hidden lg:flex justify-center">
      <div class="relative">
        <div class="w-16 h-16 rounded-full bg-gold-gradient grid place-items-center font-display text-white text-2xl shadow-glow">${i+1}</div>
        <div class="absolute -inset-2 rounded-full border border-primary/30 animate-pulse"></div>
      </div>
    </div>
  </div>`).join('');
document.querySelectorAll('#timeline .reveal').forEach(el => io.observe(el));

// ===== Lecturers =====
const lecturers = [
  { name: 'Prof. Dr. H. Sahya, M.Si. ', role: 'Guru Besar', img: 'img/prof_sahya.png', interests: 'Reformasi Birokrasi, Tata Kelola' },
  { name: 'Dr. H. Fadjar Tri Sakti, M.Si. ', role: 'Lektor Kepala', img: 'img/dr_fadjar.png', interests: 'Smart Government, Inovasi Layanan' },
  { name: 'Dr. H. Abdal, M.Si. ', role: 'Lektor Kepala', img: 'img/dr_abdal.png', interests: 'Manajemen Strategis, Etika Publik' },
  { name: 'Dr. H. Jamaluddin, SH., M.Si. ', role: 'Lektor', img: 'img/dr.jamaludin.png', interests: 'Manajemen Strategis, Etika Publik' },
  { name: 'Dr. Ai Siti Farida, M.Si.  ', role: 'Asisten Ahli', img: 'img/dr_farida.png', interests: 'Manajemen Strategis, Etika Publik' },
];
document.getElementById('lecturers-grid').innerHTML = lecturers.map(l => `
  <div class="feature-card group relative rounded-3xl overflow-hidden bg-white shadow-soft reveal">
    <div class="aspect-[4/5] overflow-hidden">
      <img src="${l.img}" alt="${l.name}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
    </div>
    <div class="p-6">
      <h3 class="font-display text-xl text-ink">${l.name}</h3>
      <p class="text-sm text-primary font-medium mt-1">${l.role}</p>
      <p class="text-xs text-muted mt-3">${l.interests}</p>
      <div class="flex gap-2 mt-4">
        <a href="#" class="w-9 h-9 rounded-lg bg-cream grid place-items-center hover:bg-gold-gradient hover:text-white transition"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V8h3v11ZM6.5 6.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19Z"/></svg></a>
        <a href="#" class="w-9 h-9 rounded-lg bg-cream grid place-items-center hover:bg-gold-gradient hover:text-white transition"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg></a>
      </div>
    </div>
  </div>`).join('');
document.querySelectorAll('#lecturers-grid .reveal').forEach(el => io.observe(el));

// ===== Publications =====
const pubs = [
  { tag: 'Jurnal', title: 'Reformasi Birokrasi Era Digital di Indonesia', year: '2025' },
  { tag: 'Riset', title: 'Indeks Pelayanan Publik Daerah Pasca Pandemi', year: '2024' },
  { tag: 'Konferensi', title: 'Public Innovation Lab — ASEAN Forum', year: '2025' },
];
document.getElementById('publications').innerHTML = pubs.map(p => `
  <div class="feature-card glass rounded-2xl p-7 reveal border border-primary/10">
    <div class="flex items-center justify-between">
      <span class="text-xs px-3 py-1 rounded-full bg-cream text-secondary font-semibold">${p.tag}</span>
      <span class="text-xs text-muted">${p.year}</span>
    </div>
    <h3 class="font-display text-lg mt-4 text-ink leading-snug">${p.title}</h3>
    <a href="#" class="mt-5 inline-flex items-center gap-2 text-sm text-primary font-semibold">Baca selengkapnya →</a>
  </div>`).join('');
document.querySelectorAll('#publications .reveal').forEach(el => io.observe(el));

// ===== Admission steps =====
const steps = [
  { n:'01', t:'Registrasi Online', d:'Isi formulir di portal admisi.' },
  { n:'02', t:'Unggah Dokumen', d:'Lengkapi seluruh syarat administrasi.' },
  { n:'03', t:'Tes & Wawancara', d:'Tes potensi akademik & wawancara.' },
  { n:'04', t:'Pengumuman & Daftar Ulang', d:'Konfirmasi & mulai perjalanan.' },
];
document.getElementById('steps').innerHTML = steps.map(s => `
  <div class="feature-card glass rounded-2xl p-7 reveal border border-primary/10">
    <p class="font-display text-4xl text-gold">${s.n}</p>
    <h3 class="font-display text-lg mt-3 text-ink">${s.t}</h3>
    <p class="text-sm text-muted mt-2">${s.d}</p>
  </div>`).join('');
document.querySelectorAll('#steps .reveal').forEach(el => io.observe(el));

// ===== Testimonials =====
const testi = [
  { name:'Ratna Dewi', role:'Alumni 2023 — Analis Kebijakan BAPPENAS', text:'Program ini benar-benar mengubah cara saya berpikir tentang kebijakan publik. Dosennya luar biasa.' },
  { name:'Hendra Pratama', role:'Alumni 2022 — Kepala Bagian Pemda', text:'Pembelajarannya sangat aplikatif. Saya langsung menerapkan metode analisis di pekerjaan saya.' },
  { name:'Maya Anggraini', role:'Mahasiswa Aktif Semester 3', text:'Lingkungan akademik yang inklusif dan jaringan alumni yang sangat membantu pengembangan karir.' },
  { name:'Dr. Yusuf', role:'Alumni 2020 — Direktur Lembaga Riset', text:'Riset di sini berstandar tinggi. Publikasi internasional bukan sekadar angan-angan.' },
];
const track = document.getElementById('testimonialTrack');
track.innerHTML = testi.map(t => `
  <article class="snap-center shrink-0 w-[85%] sm:w-[420px] glass rounded-3xl p-8 border border-primary/10">
    <div class="flex gap-1 text-primary">${'★'.repeat(5)}</div>
    <p class="mt-5 text-ink leading-relaxed">"${t.text}"</p>
    <div class="mt-6 flex items-center gap-3">
      <div class="w-12 h-12 rounded-full bg-gold-gradient grid place-items-center text-white font-display">${t.name[0]}</div>
      <div>
        <p class="font-semibold text-ink">${t.name}</p>
        <p class="text-xs text-muted">${t.role}</p>
      </div>
    </div>
  </article>`).join('');
document.getElementById('prevT').onclick = () => track.scrollBy({ left: -440, behavior: 'smooth' });
document.getElementById('nextT').onclick = () => track.scrollBy({ left:  440, behavior: 'smooth' });

// ===== FAQ =====
const faqs = [
  { q:'Bagaimana proses pendaftaran S2 Administrasi Publik?', a:'Pendaftaran dilakukan secara online melalui portal admisi, kemudian unggah dokumen, mengikuti tes potensi akademik & wawancara.' },
  { q:'Apakah tersedia kelas eksekutif untuk pekerja?', a:'Ya. Kami menyediakan kelas reguler, kelas eksekutif (akhir pekan), dan blended learning.' },
  { q:'Beasiswa apa saja yang tersedia?', a:'LPDP, Beasiswa Unggulan Kemdikbud, beasiswa kemitraan pemerintah daerah, serta beasiswa internal program.' },
  { q:'Berapa lama masa studi?', a:'Masa studi normal 4 semester (2 tahun) dan dapat ditempuh maksimal 8 semester.' },
  { q:'Apakah tesis wajib dipublikasikan?', a:'Ya. Hasil tesis wajib dipublikasikan minimal pada jurnal nasional terakreditasi SINTA.' },
];
document.getElementById('faq-list').innerHTML = faqs.map(f => `
  <details class="acc-item group glass rounded-2xl p-6 border border-primary/10">
    <summary class="flex items-center justify-between cursor-pointer list-none">
      <span class="font-medium text-ink pr-4">${f.q}</span>
      <span class="acc-icon w-8 h-8 rounded-full bg-gold-gradient text-white grid place-items-center text-lg font-light">+</span>
    </summary>
    <p class="mt-4 text-sm text-muted leading-relaxed">${f.a}</p>
  </details>`).join('');
