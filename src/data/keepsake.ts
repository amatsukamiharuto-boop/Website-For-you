/**
 * ============================================================
 *  PUSAT DATA TEKS: edit di sini, tanpa menyentuh UI.
 *  Yang WAJIB diganti sebelum dikirim (cari tanda "GANTI"):
 *    1. recipient.name & sender.name
 *    2. capsule.clue & capsule.accepted (kata kunci)
 *    3. capsule.letter.memory  <- INI YANG PALING PENTING
 *    4. capsule.letter.ps
 *  Makin spesifik isinya (kejadian nyata, candaan kalian),
 *  makin susah dilupain. Kalimat umum cuma bikin "oh, manis".
 * ============================================================
 */

export type CardIconName =
  | "battery"
  | "cloud"
  | "mirror"
  | "pin"
  | "drop"
  | "moon"
  | "path"
  | "sun";

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
  name: "Dea", // GANTI: nama panggilan dia
} as const;

export const sender = {
  name: "Aqso teman sekaligus sahabat kamu", // GANTI: namamu atau panggilan yang biasa dia pakai
} as const;

/* ---------- 1. Pembuka ---------- */

export const opening = {
  eyebrow: "Halaman kecil",
  coverTitle: "Untuk kamu,",
  coverSubtitle: "yang akhir-akhir ini sering lupa istirahat.",
  buttonLabel: "Buka Halaman Ini",
  greetingTitle: `Hai, ${recipient.name}.`,
  /** Sapaan kecil sesuai jam saat dia membuka halaman. */
  timeLines: {
    lateNight: "Masih melek jam segini? Pelan-pelan aja, ya.",
    morning: "Selamat pagi. Semoga hari ini baik-baik sama kamu.",
    noon: "Udah makan siang belum? Aku nanya beneran.",
    evening: "Sore-sore gini, enaknya duduk sebentar dulu.",
    night: "Udah malam. Hari ini kamu udah ngelakuin cukup banyak.",
  },
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
      id: "sedih",
      label: "Lagi sedih",
      hint: "yang nggak tau kenapa, pokoknya sedih",
      icon: "drop",
      title: "Sedih nggak harus punya alasan",
      body: [
        "Kadang sedih datang gitu aja, kayak hujan. Nggak perlu dicari salah siapa, nggak perlu dibenerin sekarang juga.",
        "Kamu nggak lagi gagal jadi orang yang kuat. Kuat itu bukan berarti nggak pernah nangis.",
        "Kalau mau cerita, aku dengerin. Kalau belum mau, ya udah, aku tetep di sini dan nggak bakal nanya macam-macam.",
      ],
    },
    {
      id: "tidur",
      label: "Susah tidur",
      hint: "yang jam segini masih melek",
      icon: "moon",
      title: "Kepalamu boleh berhenti dulu",
      body: [
        "Taruh HP-nya agak jauh. Iya, termasuk halaman ini, nanti bisa dibuka lagi besok.",
        "Tarik napas empat hitungan, hembuskan pelan-pelan, lebih lama dari tarikannya. Ulangi beberapa kali.",
        "Masalah yang kamu pikirin malam ini kebanyakan masih ada besok pagi. Bedanya, kamu yang ngadepinnya udah tidur dulu. Selamat istirahat, ya.",
      ],
    },
    {
      id: "kecewa",
      label: "Lagi kecewa sama hasil",
      hint: "yang udah usaha tapi nggak sesuai",
      icon: "path",
      title: "Hasil yang jelek bukan vonis buat kamu",
      body: [
        "Kamu udah usaha, dan usahanya nyata walaupun hasilnya belum keliatan. Itu nggak hilang cuma karena hasilnya nggak sesuai.",
        "Boleh kesel dulu. Boleh bete sehari dua hari. Setelah itu, pelan-pelan kita lihat lagi mana yang bisa diubah.",
        "Dan orang yang cuma lihat hasil akhir tuh nggak lihat separuh perjalanan kamu. Aku lihat, kok.",
      ],
    },
    {
      id: "senang",
      label: "Lagi seneng banget",
      hint: "yang pengin ada yang tau",
      icon: "sun",
      title: "Rayain, sekecil apa pun",
      body: [
        "Jangan disimpen sendirian. Kabarin aja.",
        "Serius, aku pengin tau kamu lagi seneng gara-gara apa, sekecil apa pun itu. Dapet promo, lagunya pas, atau cuma cuacanya enak, semuanya boleh diceritain.",
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
        "Kalau lagi pengin ditemenin, chat aja. Nggak perlu ada topik. Kirim \"halo\" doang juga cukup.",
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
    "Udah makan belum? Aku nanya beneran.",
    "Jadi orang yang baik itu melelahkan, jadi wajar kalau kamu butuh istirahat.",
    "Ketawa kamu tuh bikin suasana ikut ringan, lho.",
    "Hari yang berantakan bukan berarti kamu yang berantakan.",
    "Kamu boleh bilang \"aku lagi nggak baik-baik aja\" tanpa harus jelasin panjang lebar.",
    "Pelan juga tetap jalan.",
    "Makasih ya udah bertahan sampai hari ini.",
    "Hal kecil yang kamu kerjain hari ini tuh tetap dihitung.",
    "Kalau dunia lagi berisik, kamu boleh mute sebentar.",
    "Kamu udah cukup. Bukan nanti kalau udah ini-itu, tapi sekarang.",
    "Tarik napas. Hembuskan pelan. Bahumu boleh turun dikit.",
    "Nggak apa-apa kalau rencananya berubah.",
    "Ada orang yang lega tiap kali dapat kabar dari kamu.",
    "Kamu boleh bangga sama dirimu, walaupun cuma karena hari ini berhasil bangun.",
    "Kamu boleh nggak bales chat sampai besok. Dunia nggak runtuh, kok.",
    "Kalau ada yang bilang kamu lebay, kamu nggak lebay. Kamu cuma lagi ngerasain sesuatu.",
    "Kamu nggak ngerepotin. Beneran.",
    "Nggak pengin ngapa-ngapain itu bukan malas. Itu baterai.",
    "Cari satu lagu yang pas buat hari ini, puter, nyanyi pelan-pelan.",
    "Keluar sebentar, lihat langit. Nggak usah difoto.",
    "Nggak semua hal harus kamu pikul sendirian.",
    "Salah itu bagian dari belajar, bukan bukti kamu nggak bisa.",
    "Kamu lucu banget kalau lagi serius. Kayaknya kamu nggak sadar.",
    "Kamu pantas diperlakukan dengan baik, termasuk sama dirimu sendiri.",
    "Capek jadi dewasa? Boleh kok sesekali jadi anak kecil. Es krim, misalnya.",
    "Boleh minta tolong. Orang yang sayang sama kamu justru seneng dimintain tolong.",
    "Hal yang kamu takutin minggu lalu, sekarang udah lewat kan?",
    "Kamu nggak harus jadi versi terbaik tiap hari. Versi yang cukup juga udah oke.",
    "Hari ini kamu udah ngelakuin lebih banyak dari yang keliatan.",
    "Gelas minummu masih ada isinya nggak? Kalau kosong, isi dulu.",
    "Besok dapet kesempatan baru, gratis, tanpa syarat.",
    "Simpan satu hal kecil yang bikin kamu senyum hari ini.",
    "Aku seneng kamu ada.",
  ],
} as const;

/* ---------- 4. Kapsul rahasia ---------- */

export const capsule = {
  eyebrow: "Kapsul rahasia",
  title: "Ada satu surat yang disimpan di sini",
  intro:
    "Bukan rahasia yang serem, kok. Cuma surat pendek yang baru bisa dibuka kalau kamu ingat kata kuncinya.",
  /** GANTI: petunjuk yang cuma kalian berdua yang ngerti. */
  clue: "Petunjuknya: orang yang setiap hari selalu mikirin kesehatan kamu, selalu siap menemani kamu, dan sentiasa mengobrol dengan kamu.",
  inputLabel: "Kata kunci",
  inputPlaceholder: "ketik di sini",
  submitLabel: "Buka Kapsul",
  /**
   * GANTI: daftar jawaban yang diterima (tidak peduli huruf besar/kecil
   * dan spasi berlebih). Boleh lebih dari satu variasi.
   */
  accepted: ["sahabatku Aqso", "Aqso", "aqso"],
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
      "Surat ini nggak minta apa-apa dari kamu. Nggak perlu dibalas, nggak perlu dipikirin berlebihan. Aku cuma pengin ngomong beberapa hal yang selama ini kesimpen di kepala dan dihatiku.",
      "Aku kagum sama kamu. Bukan yang gimana-gimana, tapi dari hal-hal kecil: cara kamu dengerin orang sampai selesai, cara kamu tetap baik walaupun lagi capek, dan cara kamu ketawa yang bikin suasana ikut ringan.",
      "Ada hari-hari waktu kepalaku lagi berantakan, terus ngobrol sebentar sama kamu, dan tiba-tiba semuanya terasa lebih ringan. Terima kasih ya Dea , Aku menyayangi kamu.",
    ],
    /**
     * GANTI: satu kejadian nyata antara kalian, sekecil apa pun.
     * Ini bagian yang bakal paling dia ingat. Tulis persis seperti
     * kamu ceritain ke orang lain.
     */
    memory:
      "Aku masih inget waktu kamu ketawa dulu di sekolah saat ada acara, dan kita waktu itu saling tatapan dan kamu imut banget . Mungkin kamu sudah lupa , tapi aku masih inget kenangan waktu itu, dan sejak itu aku mulai jatuh cinta kepada kamu.",
    paragraphsAfter: [
      "Aku nggak tau persisnya apa yang lagi kamu hadapin, dan aku nggak akan maksa kamu cerita. Aku cuma pengin kamu tau kamu nggak sendirian ngadepinnya, ada aku yang akan selalu menemani kamu kapanpun dan siap mendengarkan curhatan kamu",
      "Kamu nggak lemah, kamu itu kuat aku sampai kagum sama kamu, aku tau kamu punya sebuah rasa sakit, tapi jangan di pendam terlalu lama ya, kalau mau cerita cerita aja nggak papa kok, aku selalu siap mendengarkan kamu. Tetaplah semangat dan teruslah tersenyum karena senyumanmu itu membuat kamu sangat imut.",
    ],
    closing: [
      "Apa pun yang kamu rasain setelah baca ini, kamu boleh mengeskpresikannya, aku nggak minta kamu buat balas perasaanku, cukup kamu tau dan melihat isi perasaan aku itu sudah cukup dan melihatmu tersenyum itu juga udah cukup buat aku. Kita tetap seperti biasa, berteman dll, dan pintu ngobrol di sini tetap terbuka kapan pun kamu mau, aku akan selalu dan siap mendengarkan kamu Dea.",
      "Pelan-pelan aja. Nggak ada yang buru-buru di sini.",
    ],
    signoff: "Dari temanmu,",
    signature: sender.name,
    /** GANTI: catatan tambahan di ujung surat, ditulis tangan. */
    ps: [
      "P.S. Minum dulu. Aku masih serius soal itu.",
      "P.P.S. Nggak usah dibales. Tapi kirim stiker doang juga boleh.",
    ],
  },
} as const;

/* ---------- Footer ---------- */

export const footer = {
  note: "Halaman ini cuma buat kamu. Boleh dibuka lagi kapan aja.",
} as const;
