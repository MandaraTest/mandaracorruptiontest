// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      numb: 1,
      question: "Hari ini kantin sangat ramai sehingga bude kantin kesusahan untuk melayani semua siswa yang ingin membeli, temanmu saat itu mengambil 2 ultra milk tanpa membayar dan pada saat dikelas temanmu memberikan 1 susu. Apa yang kamu rasakan?",
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
      options: ["Menyalin seluruh tugas teman", "Bolos", "Tidak mengumpulkan tugas", "Menyalin setengah tugas teman"],
    },
    {
      numb: 4,
      question: "Osis akan mengadakan sebuah event, dan untuk melaksanakan event tersebut dibutuhkan dana. Salah satu cara mendapatkan dana adalah mengajukan proposal ke sekolah. Dan Bendahara event membuat laporan anggaran dana melebihi yang dibutuhkan dengan alasan mengantisipasi kurangnya dana yang akan diberikan sekolah. Bagaimana pendapatmu?",
      answer5: "Kurang Wajar",
      answer: "Wajar",
      options: ["Sangat wajar", "Wajar", "Kurang wajar", "Tidak Wajar"],
    },
    {
      numb: 5,
      question: "Mana yang paling cocok dengan pemahamanmu mengenai korupsi di bawah ini?",
      answer: "Korupsi terjadi karena terbiasa dari hal kecil yang tidak baik",
      answer5: "Korupsi karena ada uang berlebih",
      options: ["Korupsi terjadi karena kesulitan ekonomi", "Korupsi hanya dilakukan karena ada hal yang darurat", "Korupsi terjadi karena terbiasa dari hal kecil yang tidak baik", "Korupsi karena ada uang berlebih"],
    },
    {
      numb: 6,
      question: "Gratifikasi adalah salah satu jenis korupsi, manakah dibawah ini yang termasuk gratifikasi? ",
      answer: "Pejabat yang memberikan mobil kepada orang yang telah melancarkan kecurangannya",
      answer5: "Perusahaan yang memberikan sejumlah uang kepada pemerintah agar melancarkan proyeknya",
      options: ["Perusahaan yang memberikan sejumlah uang kepada pemerintah agar melancarkan proyeknya","Pejabat yang memalsukan catatan keuangannya","Pejabat yang memberikan mobil kepada orang yang telah melancarkan kecurangannya","Sekelompok orang yang meminta sejumlah uang dengan memberikan ancaman"],
    },
    {
      numb: 7,
      question: "Bupati dan kontraktor perbaikan jalan bekerja sama untuk melakukan kecurangan agar mendapatkan keuntungan bersama. Termasuk dalam korupsi jenis apakah hal tersebut?",
      answer: "Benturan dalam kepentingan pengadaan",
      options: ["Pemerasan","Penggelapan dalam kekuasaan ","Suap","Benturan kepentingan dalam pengadaan"],
    },
    {
      numb: 8,
      question: "Bupati dan kontraktor perbaikan jalan bekerja sama untuk melakukan kecurangan agar mendapatkan keuntungan bersama. Disebut apakah kerja sama yang terjalin?",
      answer: "Korporasi",
      options: ["Duet","Gratifikasi","Korporasi","Kerja tim",],
    },
    {
      numb: 9,
      question: "Lembaga yang bertanggung jawab untuk memberantas korupsi di indonesia adalah?",
      answer: "Komisi Pemberantasan Korupsi",
      answer5: "Kejaksaan",
      options:[" Kepolisian RI","Kejaksaan","Komisi Pemberantasan Korupsi","Badan Pemeriksa Keuangan"],
    }, 
    {
      numb: 10,
      question: "Menurut kamu upaya yang bisa dilakukan oleh generasi muda dalam memberantas korupsi?",
      answer: "Menghindari perilaku- perilaku yang mengarah pada tindak pidana korupsi",
      answer5: "Belajar dengan rajin",
      options: ["Demo atas korupsi yang masih terjadi","Belajar dengan rajin","Menyuarakan Hukuman mati bagi Koruptor","Menghindari perilaku- perilaku yang mengarah pada tindak pidana korupsi"],
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