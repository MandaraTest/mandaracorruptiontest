// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      numb: 1,
      question: "Seorang guru tidak masuk ke kelas yang diajarnya siang ini, ternyata guru tersebut tidak bisa menghadiri pemakaman keluarga. namun beliau tidak menginfokan atau mengonfirmasikan ketidakhadirannya pada muridnya. Apa pendapatmu mengenai hal ini?",
      answer: "kurang wajar",
      answer15: "wajar",
      answer10: "tidak wajar",
      options: ["sangat wajar", "wajar", "kurang wajar", "tidak wajar"],
    },
    {
      numb: 2,
      question: "Seorang Pria bekerja sebagai Pegawai Negri, ia sering bepergian keluar kota Bersama keluarganya. Karena sangat menyayangi keluarganya dan tak mau keluarganya merasa tidak nyaman, terkadang ketika bepergian dengan tujuan pribadi, pria tersebut selalu menggunakan kendaraan dinasnya. Apa pendapatmu mengenai hal ini ?",
      answer: "Tidak wajar",
      answer15: "Wajar",
      answer10: "Kurang wajar",
      options: ["Sangat wajar", "Wajar", "Kurang wajar", "Tidak wajar"],
    },
    {
      numb: 3,
      question: "Hari ini adalah deadline pengumpulan tugas rangkuman biologi, dan ternyata kamu lupa mengerjakannya. Temanmu menawarkan untuk menyalin punya temanmu, apa yang mungkin kamu lakukan?",
      answer: "Tidak mengumpulkan tugas",
      answer15: "Bolos",
      answer10: "Menyalin setengah tugas teman",
      options: ["Menyalin seluruh tugas teman", "Bolos", "Tidak mengumpulkan tugas", "Menyalin setengah tugas teman"],
    },
    {
      numb: 4,
      question: "Osis akan mengadakan sebuah event, dan untuk melaksanakan event tersebut dibutuhkan dana. Salah satu cara mendapatkan dana adalah mengajukan proposal kesekolah. Dan Bendahara event membuat laporan anggaran dana melebihi yang dibutuhkan dengan alasan mengantisipasi kurangnya dana yang akan diberikan sekolah. Bagaimana pendapatmu?",
      answer: "Tidak wajar",
      answer15: "Kurang Wajar",
      answer10: "Wajar",
      options: ["Sangat wajar", "Wajar", "Kurang wajar", "Tidak Wajar"],
    },
    {
      numb: 5,
      question: "Sore ini kamu akan mengerjakan tugas kelompok pelajaran kimia. kerja kelompok dimulai jam 16:00 WITA dirumah temanmu. dan pada jam 16:00 WITA kamu mendapat telfon dari nenekmu sehingga kamu terlambat ikut kerja kelompok selama 15 menit. Bagaimana tanggapanmu?",
      answer: "Tidak wajar, karena teman akan menunggu",
      answer15: "Kurang Wajar, karena akan terlambat",
      answer10: "Wajar karena sudah lama tidak ditelfon nenek",
      options: ["Tidak wajar, karena teman akan menunggu", "Sangat Wajar, karena nenek adalah orang penting", "Kurang Wajar, karena akan terlambat", "Wajar karena sudah lama tidak ditelfon nenek"],
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