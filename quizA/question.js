// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      numb: 1,
      question: "Seorang guru tidak masuk ke kelas yang diajarnya siang ini, ternyata guru tersebut sedang menghadiri pemakaman keluarga. Namun beliau tidak menginformasikan ketidakhadirannya pada muridnya. Apa pendapatmu mengenai hal ini?",
      answer: "kurang wajar",
      answer5: "wajar",
      options: ["sangat wajar", "wajar", "kurang wajar", "tidak wajar"],
    },
    {
      numb: 2,
      question: "Seorang Pria bekerja sebagai Pegawai Negri, ia sering bepergian keluar kota bersama keluarganya. Karena sangat menyayangi keluarganya dan tak mau keluarganya merasa tidak nyaman, terkadang ketika bepergian dengan tujuan pribadi, pria tersebut selalu menggunakan kendaraan dinasnya. Apa pendapatmu mengenai hal ini ?",
      answer: "Tidak wajar",
      answer5: "Wajar",
      options: ["Sangat wajar", "Wajar", "Kurang wajar", "Tidak wajar"],
    },
    {
      numb: 3,
      question: "Berdasarkan analisis KPK nilai-nilai Integritas (Antikotupsi) terbagi menjadi 9 nilai, apa saja nilai-nilai tersebut?",
      answer: "Jujur, mandiri, disiplin, peduli, tanggung jawab, kerja keras, adil, sederhana, dan berani",
      options: ["Peduli, amanah, jujur, kerja keras, faktual, tidak curang, mandiri, tanggung jawab dan adil", "Jujur, peduli, disiplin, integritas, kerja keras, percaya diri, adil, berani dan mandiri", "Jujur, mandiri, disiplin, peduli, tanggung jawab, kerja keras, adil, sederhana, dan berani", "Adil, tanggung jawab, jujur, cerdas, mandiri, amanah, peduli, faktual dan berani"],
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
      question: "Sore ini kamu akan mengerjakan tugas kelompok pelajaran kimia. kerja kelompok dimulai jam 16:00 WITA dirumah temanmu. dan pada jam 16:00 WITA kamu mendapat telfon dari nenekmu sehingga kamu terlambat ikut kerja kelompok selama 15 menit. Bagaimana tanggapanmu?",
      answer: "Tidak wajar, karena teman akan menunggu",
      answer5: "Kurang Wajar, karena akan terlambat",
      options: ["Tidak wajar, karena teman akan menunggu", "Sangat Wajar, karena nenek adalah orang penting", "Kurang Wajar, karena akan terlambat", "Wajar karena sudah lama tidak ditelfon nenek"],
    },
    {
      numb: 6,
      question: "Hari ini Doni mengikuti upacara bendera disekolah, tiba-tiba dia sakit perut dan izin pergi ke toilet, tapi setelah selesai dari toilet ternyata upacara sudah mau berakhir dan dia memutuskan bersantai di depan toilet. Bagaimana tanggapanmu?",
      answer:  "Sangat tidak wajar, karena mengikuti upacara sampai usai adalah kewajiban pelajar",
      options : ["Sangat wajar, karena hanya akan membuang waktu untuk kembali ke lapangan","Sangat tidak wajar, karena mengikuti upacara sampai usai adalah kewajiban pelajar","kurang wajar ,karena upacara belum usai","Wajar , karena sudah mau selesai"],
    },
    {
      numb: 7,
      question: "Aku kurang suka dengan seorang guru karena sangat galak dan suka memarahi aku. Setiap mapel guru tersebut aku selalu ke toilet dan berlama-lama",
      answer: "Sangat tidak wajar, karena hak guru untuk menegur anak muridnya",
      answer5: "Kurang wajar, apa salahnya mengikuti pelajaran sampai selesai",
      options: ["Sangat wajar, karena guru harusnya menyayangi murid,Wajar","tidak wajar mengikuti pelajaran yang tidak disukai adalah hak","Kurang wajar, apa salahnya mengikuti pelajaran sampai selesai","Sangat tidak wajar, karena hak guru untuk menegur anak muridnya"],
    },
    {
      numb: 8,
      question: "Hari ini ada pelajaran matematika, tetapi karena sebuah alasan pribadi yaitu menjemput anaknya yang sekolah seorang guru tidak masuk ke kelas. Bagaimana pendapatmu?",
      answer5: "Kurang wajar, karena bisa minta tolong ke orang lain untuk menjemput anaknya",
      answer: "Tidak wajar, karena guru tersebut mempunyai tanggung jawab mengajar",
      options: ["Sangat Wajar, karena adalah tugas orang tua menjaga anaknya","Wajar, karena sang anak akan menunggu di sekolahnya","Kurang wajar, karena bisa minta tolong ke orang lain untuk menjemput anaknya","Tidak wajar, karena guru tersebut mempunyai tanggung jawab mengajar"],
    },
    {
      numb: 9,
      question: "Hari ini ada upacara disekolah, kamu tidak memakai atribut lengkap dan harus masuk barisan khusus. kamu juga mengikuti bimbingan lomba sehingga boleh langsung ke tempat bimbingan apa yang akan kamu lakukan",
      answer: "Tetap ke lapangan dan masuk barisan khusus",
      answer5: "Mengambil punya teman",
      options:["Tetap ke lapangan dan masuk barisan khusus","Izin ke toilet dan bersembunyi","Langsung ke tempat bimbingan","Mengambil punya teman"],
    }, 
    {
      numb: 10,
      question: "Pada jam terakhir sekolah hari ini, sekolah mengadakan bersih-bersih dan kelasmu ternyata sudah bersih, dan dikelas tidak ada absen yang dilakukan sehingga bisa pulang lebih dulu",
      answer: "Menunggu jam pulang sekolah",
      answer5: "Menunggu arahan dari guru",
      options: ["Pulang lebih dulu","Menunggu arahan dari guru","Tidur dikelas","Menunggu jam pulang sekolah"],
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