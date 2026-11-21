/**
 * ============================================================
 *  PUSAT DATA TEKS: edit di sini, tanpa menyentuh UI.
 *  Yang WAJIB diganti sebelum deploy:
 *    1. recipient.name & sender.name
 *    2. capsule.clue & capsule.accepted (kata kunci)
 *    3. isi capsule.letter supaya sesuai cerita kalian
 * ============================================================
 */

export type CardIconName = "battery" | "cloud" | "mirror" | "pin";

export interface OpenWhenCard {
  id: string;
  label: string;
  hint: string;
  icon: CardIconName;
  title: string;
  body: string[];
}

/* ---------- Identitas ---------- */

export const recipient = {
  name: "Ayu", // GANTI: nama panggilan dia
} as const;

export const sender = {
  name: "Temanmu", // GANTI: namamu atau panggilan yang biasa dia pakai
} as const;

/* ---------- 1. Pembuka ---------- */

export const opening = {
  eyebrow: "Halaman kecil",
  coverTitle: "Untuk kamu,",
  coverSubtitle: "yang akhir-akhir ini sering lupa istirahat.",
  buttonLabel: "Buka Halaman Ini",
  greetingTitle: `Hai, ${recipient.name}.`,
  greeting: [
    "Nggak ada maksud apa-apa kok. Aku cuma pengin bikin satu tempat kecil yang bisa kamu buka kapan pun lagi butuh teman ngobrol yang nggak banyak nanya.",
    "Nggak perlu dibaca urut, nggak perlu dibalas, nggak perlu diselesaikan hari ini. Buka aja yang kamu mau, tutup kapan pun kamu mau.",
  ],
  scrollHint: "Geser pelan-pelan ke bawah",
} as const;

/* ---------- 2. Kartu "Buka Saat..." ---------- */

export const openWhen = {
  eyebrow: "Buka saat...",
  title: "Pilih yang paling pas sama hari ini",
  helper: "Ketuk satu kartu. Boleh buka lebih dari satu.",
  closeLabel: "Tutup catatan",
  cards: [
    {
      id: "capek",
      label: "Lagi capek banget",
      hint: "yang badannya aja udah minta pulang",
      icon: "battery",
      title: "Capek itu bukan tanda kamu lemah",
      body: [
        "Itu tanda kamu udah jalan lumayan jauh, dan jalannya nggak selalu enak.",
        "Hari ini tugasmu cuma tiga: minum air putih, duduk sebentar, tarik napas yang dalam. Sisanya boleh nunggu besok.",
        "Kalau yang bisa kamu lakuin cuma rebahan, itu juga udah cukup, kok.",
      ],
    },
    {
      id: "rame",
      label: "Pikiran lagi rame",
      hint: "yang kepalanya kayak pasar malam",
      icon: "cloud",
      title: "Nggak semuanya harus dijawab sekarang",
      body: [
        "Coba tulis semua yang muncul di kepala ke kertas, satu-satu, nggak usah rapi. Biasanya pas udah pindah ke luar, kelihatannya jadi lebih kecil.",
        "Habis itu pilih satu hal paling kecil yang bisa kamu beresin hari ini. Cuma satu. Yang lain biar antre dulu.",
      ],
    },
    {
      id: "ragu",
      label: "Ragu sama diri sendiri",
      hint: "yang tiba-tiba ngerasa nggak cukup",
      icon: "mirror",
      title: "Ragu itu wajar, apalagi buat orang yang peduli",
      body: [
        "Orang yang nggak peduli biasanya santai-santai aja. Kamu ragu justru karena kamu mau hasilnya bagus.",
        "Dari yang aku lihat, kamu jauh lebih bisa diandalkan daripada yang kamu kira.",
        "Kamu nggak harus yakin dulu baru boleh mulai. Mulai aja pelan-pelan, yakinnya nyusul belakangan.",
      ],
    },
    {
      id: "pengingat",
      label: "Butuh pengingat kecil",
      hint: "yang cuma pengin diingetin sedikit",
      icon: "pin",
      title: "Pengingat kecil, buat disimpan",
      body: [
        "Kamu udah berhasil ngelewatin hari-hari yang dulu kamu kira nggak bakal kelar.",
        "Dan ada orang yang diam-diam senang kamu ada di dunia ini. Salah satunya aku.",
      ],
    },
  ] satisfies OpenWhenCard[],
} as const;

/* ---------- 3. Toples catatan kecil ---------- */

export const jar = {
  eyebrow: "Toples kecil",
  title: "Isinya catatan-catatan ringan",
  helper: "Ambil satu kalau lagi pengin. Nggak ada batasnya.",
  buttonLabel: "Ambil Satu Catatan",
  buttonAgainLabel: "Ambil Lagi",
  emptyHint: "Belum ada yang diambil. Toplesnya sabar kok nunggu.",
  notes: [
    "Kamu nggak harus produktif tiap hari buat tetap berharga.",
    "Minum dulu. Serius, sekarang.",
    "Jadi orang yang baik itu melelahkan, jadi wajar kalau kamu butuh istirahat.",
    "Ketawa kamu tuh bikin suasana ikut ringan, lho.",
    "Hari yang berantakan bukan berarti kamu yang berantakan.",
    "Kamu boleh bilang \"aku lagi nggak baik-baik aja\" tanpa harus jelasin panjang lebar.",
    "Pelan juga tetap jalan.",
    "Makasih ya udah bertahan sampai hari ini.",
    "Kamu lebih kuat dari yang kamu kira, tapi tetap boleh istirahat.",
    "Hal kecil yang kamu kerjain hari ini tuh tetap dihitung.",
    "Kalau dunia lagi berisik, kamu boleh mute sebentar.",
    "Kamu udah cukup. Bukan nanti kalau udah ini-itu, tapi sekarang.",
    "Tarik napas. Hembuskan pelan. Bahumu boleh turun dikit.",
    "Nggak apa-apa kalau rencananya berubah. Kamu tetap bisa diandalkan.",
    "Ada orang yang lega tiap kali dapat kabar dari kamu.",
    "Kamu boleh bangga sama dirimu, walaupun cuma karena hari ini berhasil bangun.",
  ],
} as const;

/* ---------- 4. Kapsul rahasia ---------- */

export const capsule = {
  eyebrow: "Kapsul rahasia",
  title: "Ada satu surat yang disimpan di sini",
  intro:
    "Bukan rahasia yang serem, kok. Cuma surat pendek yang baru bisa dibuka kalau kamu ingat kata kuncinya.",
  /** GANTI: petunjuk yang cuma kalian berdua yang ngerti. */
  clue: "Petunjuknya: minuman yang hampir selalu kamu pesan tiap kali kita nongkrong.",
  inputLabel: "Kata kunci",
  inputPlaceholder: "ketik di sini",
  submitLabel: "Buka Kapsul",
  /**
   * GANTI: daftar jawaban yang diterima (tidak peduli huruf besar/kecil
   * dan spasi berlebih). Boleh lebih dari satu variasi.
   */
  accepted: ["kopi susu", "es kopi susu"],
  emptyMessage: "Ketik dulu kata kuncinya, ya.",
  wrongMessages: [
    "Belum pas, coba ingat-ingat lagi pelan-pelan.",
    "Hampir, kayaknya. Santai aja, nggak ada batas waktunya.",
    "Belum ketemu. Coba tarik napas dulu, nanti juga inget.",
  ],
  successLabel: "Kapsulnya terbuka",
  letter: {
    greeting: `Hai, ${recipient.name}.`,
    paragraphs: [
      "Surat ini nggak minta apa-apa dari kamu. Nggak perlu dibalas, nggak perlu dibahas, nggak perlu dipikirin berlebihan. Aku cuma pengin ngomong satu hal yang selama ini kesimpen di kepala.",
      "Aku kagum sama kamu. Bukan yang gimana-gimana, tapi dari hal-hal kecil: cara kamu dengerin orang sampai selesai, cara kamu tetap baik walaupun lagi capek, dan cara kamu ketawa yang bikin suasana ikut ringan.",
      "Kamu mungkin nggak sadar, tapi ngobrol sama kamu itu salah satu bagian hari yang paling aku suka. Rasanya tenang, nggak perlu pura-pura jadi siapa-siapa.",
      "Makasih udah jadi orang yang kayak gitu. Itu aja sebenarnya.",
    ],
    closing: [
      "Apa pun yang kamu rasain setelah baca ini, semuanya boleh. Kita tetap kayak biasa, dan pintu ngobrol di sini tetap terbuka kapan pun kamu mau, tanpa harus ada jawaban apa-apa.",
      "Pelan-pelan aja. Nggak ada yang buru-buru di sini.",
    ],
    signoff: "Dari temanmu,",
    signature: sender.name,
  },
} as const;

/* ---------- Footer ---------- */

export const footer = {
  note: "Halaman ini cuma buat kamu. Boleh dibuka lagi kapan aja.",
} as const;
