export type Question = {
  id: number;
  question: { en: string; bn: string };
  options: { en: string[]; bn: string[] };
  correctAnswer: { en: string; bn: string };
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: {
      en: "What is the pre-dawn meal in Ramadan called?",
      bn: "রমজানে ভোরের খাবারকে কী বলা হয়?",
    },
    options: {
      en: ["Iftar", "Suhur", "Tarawih", "Fajr"],
      bn: ["ইফতার", "সাহরি", "তারাবিহ", "ফজর"],
    },
    correctAnswer: { en: "Suhur", bn: "সাহরি" },
  },
  {
    id: 2,
    question: {
      en: "What is the festival that marks the end of Ramadan?",
      bn: "রমজানের শেষে কোন উৎসব পালন করা হয়?",
    },
    options: {
      en: ["Eid al-Adha", "Laylat al-Qadr", "Mawlid", "Eid al-Fitr"],
      bn: ["ঈদুল আযহা", "লাইলাতুল কদর", "মাওলিদ", "ঈদুল ফিতর"],
    },
    correctAnswer: { en: "Eid al-Fitr", bn: "ঈদুল ফিতর" },
  },
  {
    id: 3,
    question: {
      en: "How many days does Ramadan typically last?",
      bn: "রমজান মাস সাধারণত কত দিনের হয়?",
    },
    options: {
      en: ["31 days", "25 days", "29 or 30 days", "Always 30 days"],
      bn: ["৩১ দিন", "২৫ দিন", "২৯ বা ৩০ দিন", "সবসময় ৩০ দিন"],
    },
    correctAnswer: { en: "29 or 30 days", bn: "২৯ বা ৩০ দিন" },
  },
  {
    id: 4,
    question: {
      en: "What is the act of giving charity, specifically at the end of Ramadan, called?",
      bn: "রমজানের শেষে যে নির্দিষ্ট দান করা হয় তাকে কী বলে?",
    },
    options: {
      en: ["Sadaqa", "Hajj", "Zakat al-Fitr", "Wudu"],
      bn: ["সাদকা", "হজ", "যাকাতুল ফিতর", "ওযু"],
    },
    correctAnswer: { en: "Zakat al-Fitr", bn: "যাকাতুল ফিতর" },
  },
  {
    id: 5,
    question: {
      en: "Which night during Ramadan is considered the 'Night of Power'?",
      bn: "রমজানের কোন রাতকে 'লাইলাতুল কদর' বা 'মহিমান্বিত রাত' বলা হয়?",
    },
    options: {
      en: ["The 1st night", "The 15th night", "Laylat al-Qadr", "The last Friday night"],
      bn: ["প্রথম রাত", "পনেরতম রাত", "লাইলাতুল কদর", "শেষ শুক্রবারের রাত"],
    },
    correctAnswer: { en: "Laylat al-Qadr", bn: "লাইলাতুল কদর" },
  },
  {
    id: 6,
    question: {
      en: "What is the name of the special prayers performed during Ramadan nights?",
      bn: "রমজান মাসে রাতের বিশেষ নামাজের নাম কী?",
    },
    options: {
      en: ["Tahajjud", "Ishraq", "Tarawih", "Duha"],
      bn: ["তাহাজ্জুদ", "ইশরাক", "তারাবিহ", "দুহা"],
    },
    correctAnswer: { en: "Tarawih", bn: "তারাবিহ" },
  },
  {
    id: 7,
    question: {
      en: "Fasting in Ramadan is one of the Five Pillars of what?",
      bn: "রমজানের রোজা কিসের পাঁচটি স্তম্ভের মধ্যে একটি?",
    },
    options: {
      en: ["Faith", "Charity", "Islam", "Prayer"],
      bn: ["বিশ্বাস", "দান", "ইসলাম", "নামাজ"],
    },
    correctAnswer: { en: "Islam", bn: "ইসলাম" },
  },
  {
    id: 8,
    question: {
      en: "What is the meal to break the fast after sunset called?",
      bn: "সূর্যাস্তের পর রোজা ভাঙার খাবারকে কী বলা হয়?",
    },
    options: {
      en: ["Suhur", "Iftar", "Ghabga", "Futoor"],
      bn: ["সাহরি", "ইফতার", "ঘাবগা", "ফুতুর"],
    },
    correctAnswer: { en: "Iftar", bn: "ইফতার" },
  },
  {
    id: 9,
    question: {
      en: "What is forbidden during the fasting hours of Ramadan?",
      bn: "রমজানে রোজা রাখা অবস্থায় কোন কাজটি নিষিদ্ধ?",
    },
    options: {
      en: ["Sleeping", "Working", "Eating and drinking", "Reading"],
      bn: ["ঘুমানো", "কাজ করা", "খাওয়া ও পান করা", "পড়া"],
    },
    correctAnswer: { en: "Eating and drinking", bn: "খাওয়া ও পান করা" },
  },
  {
    id: 10,
    question: {
      en: "In which Islamic month does Ramadan fall?",
      bn: "কোন ইসলামিক মাসে রমজান পালিত হয়?",
    },
    options: {
      en: ["Shawwal", "Rajab", "Ramadan", "Muharram"],
      bn: ["শাওয়াল", "রজব", "রমজান", "মহররম"],
    },
    correctAnswer: { en: "Ramadan", bn: "রমজান" },
  },
  {
    id: 11,
    question: {
        en: "What is the spiritual reward for fasting during Ramadan believed to be?",
        bn: "রমজানে রোজা রাখার আধ্যাত্মিক পুরস্কার কী বলে বিশ্বাস করা হয়?",
    },
    options: {
        en: ["Financial gain", "Good health", "Forgiveness of sins", "Social status"],
        bn: ["আর্থিক লাভ", "সুস্বাস্থ্য", "পাপ মোচন", "সামাজিক মর্যাদা"],
    },
    correctAnswer: { en: "Forgiveness of sins", bn: "পাপ মোচন" },
  },
  {
    id: 12,
    question: {
        en: "What does the word 'Ramadan' mean in Arabic?",
        bn: "আরবিতে 'রমজান' শব্দের অর্থ কী?",
    },
    options: {
        en: ["Fasting", "Scorching heat", "Blessing", "Month"],
        bn: ["রোজা", "প্রচণ্ড গরম", "আশীর্বাদ", "মাস"],
    },
    correctAnswer: { en: "Scorching heat", bn: "প্রচণ্ড গরম" },
  }
];
