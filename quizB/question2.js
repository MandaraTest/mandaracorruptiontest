// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      numb: 1,
      question: "1. Hari ini kantin sangat ramai sehingga bude kantin kesusahan untuk melayani semua siswa yang ingin membeli, temanmu saat itu mengambil 2 ultra milk tanpa membayar dan pada saat dikelas temanmu memberikan 1 susu. Apa yang kamu rasakan?",
      answer: "Sedikit kesal",
      answer5: "Biasa aja",
      options: ["Senang", "Sangat senang", "Biasa aja", "Sedikit kesal"],
    },
    {
      numb: 2,
      question: "Hari ini kantin sangat ramai sehingga bude kantin kesusahan untuk melayani semua siswa yang ingin membeli, temanmu saat itu mengambil 2 ultra milk tanpa membayar dan pada saat dikelas temanmu memberikan 1 susu. Apa yang kamu lakukan?",
      answer: "Kamu terima dan kamu kembalikan ke kantin",
      answer5: "Kamu menolak karena tidak suka susu tersebut",
      options: ["Kamu terima dengan senang hati", "Kamu terima dan merasa biasa saja", "Kamu menolak karena tidak suka susu tersebut", "Kamu terima dan kamu kembalikan ke kantin"],
    },
    {
      numb: 3,
      question: "Hari ini adalah deadline pengumpulan tugas rangkuman biologi, dan ternyata kamu lupa mengerjakannya. Temanmu menawarkan untuk menyalin punya temanmu, apa yang mungkin kamu lakukan?",
      answer: "Tidak mengumpulkan tugas",
      answer5: "Bolos",
      options: ["Menyalin seluruh tugas teman", "Bolos", "Tidak mengumpulkan tugas", "Menyalin setengah tugas teman"],
    },
    {
      numb: 4,
      question: "Osis akan mengadakan sebuah event, dan untuk melaksanakan event tersebut dibutuhkan dana. Salah satu cara mendapatkan dana adalah mengajukan proposal kesekolah. Dan Bendahara event membuat laporan anggaran dana melebihi yang dibutuhkan dengan alasan mengantisipasi kurangnya dana yang akan diberikan sekolah. Bagaimana pendapatmu?",
      answer5: "Kurang Wajar",
      answer: "Wajar",
      options: ["Sangat wajar", "Wajar", "Kurang wajar", "Tidak Wajar"],
    },
    {
      numb: 5,
      question: "Mana yang paling cocok dengan pemahamanmu mengenai korupsi dibawah ini?",
      answer: "Tidak wajar, karena teman akan menunggu",
      answer5: "Kurang Wajar, karena akan terlambat",
      options: ["Korupsi terjadi karena kesulitan ekonomi", "Korupsi hanya dilakukan karena ada hal yang darurat", "Korupsi terjadi karena terbiasa dari hal kecil yang tidak baik", "Korupsi karena ada uang berlebih"],
    },
    {
      numb: 6,
      question: "Gratifikasi adalah salah satu jenis korupsi,manakah dibawah ini yang termasuk gratifikasi? ",
  
      answer: "Pejabat yang memberikan mobil kepada orang yang telah melancarkan kecurangannya",
      options : ["Perusahaan yang memberikan sejumlah uang kepada pemerintah agar melancarkan proyeknya  ","Pejabat yang memalsukan catatan keuangannya","Pejabat yang memberikan mobil kepada orang yang telah melancarkan kecurangannya","Sekelompok orang yang meminta sejumlah uang dengan memberikan ancaman"],
    },
    {
      numb: 7,
      question: "Bupati dan kontraktor perbaikan jalan bekerja sama untuk melakukan kecurangan agar mendapatkan keuntungan bersama. Termasuk dalam korupsi jenis apakah hal tersebut?",
      
      answer: " C. Suap",
      options: [" Pemerasan", " Penggelapan dalam kekuasaan ","","Sangat tidak wajar, karena hak guru untuk menegur anak muridnya"]
    },
    {
      numb: 8,
      question: "Hari ini ada pelajaran matematika, tetapi karena sebuah alasan pribadi yaitu menjemput anaknya yang sekolah seorang guru tidak masuk ke kela",
      answer5: "Kurang wajar, karena bisa minta tolong ke orang lain untuk menjemput anaknya",
      answer: "Tidak wajar, karena guru tersebut mempunyai tanggung jawab mengajar",
      options: ["Sangat Wajar, karena adalah tugas orang tua menjaga anaknya","Wajar,karena sang anak akan menunggu di sekolahnya","Kurang wajar, karena bisa minta tolong ke orang lain untuk menjemput anaknya","Tidak wajar, karena guru tersebut mempunyai tanggung jawab mengajar",]
    },
    {
      numb: 9,
      question: "Hari ini ada upacara disekolah, kamu tidak memakai atribut lengkap dan harus masuk barisan khusus. kamu juga mengikuti bimbingan lomba sehingga boleh langsung ke tempat bimbingan apa yang akan kamu lakukan",
      answer: "Tetap ke lapangan dan masuk barisan khusus",
      answer5: "Mengambil punya teman",
      options:[" Mengambil punya teman","Izin ke toilet dan bersembunyi"," Langsung ke tempat bimbingan"," Tetap ke lapangan dan masuk barisan khusus"],
    }, 
    {
      numb: 10,
      question: "Pada jam terakhir sekolah hari ini, sekolah mengadakan bersih-bersih dan kelasmu ternyata sudah bersih, dan dikelas tidak ada absen yang dilakukan sehingga bisa pulang lebih dulu",
      answer: "Menunggu jam pulang sekolah",
      answer5: " Menunggu arahan dari guru",
      options: ["Pulang lebih dulu","Menunggu arahan dari guru","Tidur dikelas","Menunggu jam pulang sekolah "],
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  
    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   answer15: "goodAnswer(15) is here"
    //   answer10: "badAnswer(10) is here" 

    //   options: ["Option 1", "Option 2", "Option 3", "Option 4",], //
  ];