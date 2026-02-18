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
  },
  {
    id: 13,
    question: {
        en: "Which Surah in the Quran does not begin with 'Bismillah'?",
        bn: "কুরআনের কোন সূরা 'বিসমিল্লাহ' দিয়ে শুরু হয়নি?",
    },
    options: {
        en: ["Surah Al-Fatihah", "Surah At-Tawbah", "Surah Yasin", "Surah Al-Baqarah"],
        bn: ["সূরা আল-ফাতিহা", "সূরা আত-তওবা", "সূরা ইয়াসিন", "সূরা আল-বাকারা"],
    },
    correctAnswer: { en: "Surah At-Tawbah", bn: "সূরা আত-তওবা" },
  },
  {
    id: 14,
    question: {
        en: "Who was the first Muezzin (caller to prayer) in Islam?",
        bn: "ইসলামের প্রথম মুয়াজ্জিন কে ছিলেন?",
    },
    options: {
        en: ["Ali ibn Abi Talib", "Umar ibn Al-Khattab", "Bilal ibn Rabah", "Abu Bakr As-Siddiq"],
        bn: ["আলী ইবনে আবি তালিব", "উমর ইবনুল খাত্তাব", "বিলাল ইবনে রাবাহ", "আবু বকর আস-সিদ্দিক"],
    },
    correctAnswer: { en: "Bilal ibn Rabah", bn: "বিলাল ইবনে রাবাহ" },
  },
  {
    id: 15,
    question: {
        en: "In which battle were Muslims heavily outnumbered but still achieved a decisive victory with Allah's help?",
        bn: "কোন যুদ্ধে মুসলমানরা সংখ্যায় অনেক কম হওয়া সত্ত্বেও আল্লাহর সাহায্যে একটি নির্ণায়ক বিজয় লাভ করে?",
    },
    options: {
        en: ["Battle of Uhud", "Battle of Khandaq", "Battle of Badr", "Battle of Tabuk"],
        bn: ["উহুদের যুদ্ধ", "খন্দকের যুদ্ধ", "বদরের যুদ্ধ", "তাবুকের যুদ্ধ"],
    },
    correctAnswer: { en: "Battle of Badr", bn: "বদরের যুদ্ধ" },
  },
  {
    id: 16,
    question: {
        en: "What is the name of the cave where Prophet Muhammad (PBUH) received his first revelation?",
        bn: "যে গুহায় নবী মুহাম্মদ (সাঃ) প্রথম ওহী লাভ করেন তার নাম কী?",
    },
    options: {
        en: ["Cave of Thawr", "Cave of Hira", "Cave of Uhud", "Cave of Mina"],
        bn: ["সওর গুহা", "হেরা গুহা", "উহুদ গুহা", "মিনা গুহা"],
    },
    correctAnswer: { en: "Cave of Hira", bn: "হেরা গুহা" },
  },
  {
    id: 17,
    question: {
        en: "Which prophet was swallowed by a large fish?",
        bn: "কোন নবীকে একটি বড় মাছ গিলে ফেলেছিল?",
    },
    options: {
        en: ["Prophet Musa (Moses)", "Prophet Isa (Jesus)", "Prophet Yunus (Jonah)", "Prophet Ibrahim (Abraham)"],
        bn: ["নবী মূসা (আঃ)", "নবী ঈসা (আঃ)", "নবী ইউনুস (আঃ)", "নবী ইব্রাহিম (আঃ)"],
    },
    correctAnswer: { en: "Prophet Yunus (Jonah)", bn: "নবী ইউনুস (আঃ)" },
  },
  {
    id: 18,
    question: {
        en: "What is the longest Surah in the Quran?",
        bn: "কুরআনের দীর্ঘতম সূরা কোনটি?",
    },
    options: {
        en: ["Surah Al-Imran", "Surah Al-Baqarah", "Surah An-Nisa", "Surah Al-Ma'idah"],
        bn: ["সূরা আল-ইমরান", "সূরা আল-বাকারা", "সূরা আন-নিসা", "সূরা আল-মায়িদাহ"],
    },
    correctAnswer: { en: "Surah Al-Baqarah", bn: "সূরা আল-বাকারা" },
  },
  {
    id: 19,
    question: {
        en: "Who is known as 'Sayf-ullah' (The Sword of Allah)?",
        bn: "'সাইফুল্লাহ' (আল্লাহর তলোয়ার) নামে কে পরিচিত?",
    },
    options: {
        en: ["Umar ibn Al-Khattab", "Ali ibn Abi Talib", "Hamza ibn Abd al-Muttalib", "Khalid ibn al-Walid"],
        bn: ["উমর ইবনুল খাত্তাব", "আলী ইবনে আবি তালিব", "হামজা ইবনে আব্দুল মুত্তালিব", "খালিদ বিন ওয়ালিদ"],
    },
    correctAnswer: { en: "Khalid ibn al-Walid", bn: "খালিদ বিন ওয়ালিদ" },
  },
  {
    id: 20,
    question: {
        en: "The Treaty of Hudaybiyyah was a pact between the Muslims of Medina and which tribe from Mecca?",
        bn: "হুদায়বিয়ার সন্ধি মদিনার মুসলিম এবং মক্কার কোন গোত্রের মধ্যে হয়েছিল?",
    },
    options: {
        en: ["Banu Hashim", "Quraysh", "Banu Thaqif", "Banu Nadir"],
        bn: ["বনু হাশিম", "কুরাইশ", "বনু সাকিফ", "বনু নাদির"],
    },
    correctAnswer: { en: "Quraysh", bn: "কুরাইশ" },
  },
  {
    id: 21,
    question: {
        en: "In which Islamic calendar month is Hajj performed?",
        bn: "ইসলামী ক্যালেন্ডারের কোন মাসে হজ পালন করা হয়?",
    },
    options: {
        en: ["Ramadan", "Shawwal", "Dhul-Hijjah", "Muharram"],
        bn: ["রমজান", "শাওয়াল", "জিলহজ্জ", "মহররম"],
    },
    correctAnswer: { en: "Dhul-Hijjah", bn: "জিলহজ্জ" },
  },
  {
    id: 22,
    question: {
        en: "How many chapters (Surahs) are there in the Holy Quran?",
        bn: "পবিত্র কুরআনে মোট কতটি সূরা আছে?",
    },
    options: {
        en: ["100", "124", "114", "110"],
        bn: ["১০০", "১২৪", "১১৪", "১১০"],
    },
    correctAnswer: { en: "114", bn: "১১৪" },
  },
  {
    id: 23,
    question: {
        en: "Which prophet was known for his ability to interpret dreams?",
        bn: "কোন নবী স্বপ্ন ব্যাখ্যা করার ক্ষমতার জন্য পরিচিত ছিলেন?",
    },
    options: {
        en: ["Prophet Yaqub (Jacob)", "Prophet Yusuf (Joseph)", "Prophet Dawud (David)", "Prophet Sulaiman (Solomon)"],
        bn: ["নবী ইয়াকুব (আঃ)", "নবী ইউসুফ (আঃ)", "নবী দাউদ (আঃ)", "নবী সুলাইমান (আঃ)"],
    },
    correctAnswer: { en: "Prophet Yusuf (Joseph)", bn: "নবী ইউসুফ (আঃ)" },
  },
  {
    id: 24,
    question: {
        en: "What is 'Isra and Miraj'?",
        bn: "'ইসরা ও মিরাজ' কী?",
    },
    options: {
        en: ["The Prophet's migration", "The Prophet's first battle", "The Prophet's night journey and ascension", "The Prophet's farewell pilgrimage"],
        bn: ["নবীর হিজরত", "নবীর প্রথম যুদ্ধ", "নবীর রাতের ভ্রমণ এবং ঊর্ধ্বগমন", "নবীর বিদায় হজ"],
    },
    correctAnswer: { en: "The Prophet's night journey and ascension", bn: "নবীর রাতের ভ্রমণ এবং ঊর্ধ্বগমন" },
  },
  {
    id: 25,
    question: {
        en: "Who was the first Caliph of Islam after Prophet Muhammad (PBUH)?",
        bn: "নবী মুহাম্মদ (সাঃ) এর পর ইসলামের প্রথম খলিফা কে ছিলেন?",
    },
    options: {
        en: ["Uthman ibn Affan", "Ali ibn Abi Talib", "Umar ibn Al-Khattab", "Abu Bakr As-Siddiq"],
        bn: ["উসমান ইবনে আফফান", "আলী ইবনে আবি তালিব", "উমর ইবনুল খাত্তাব", "আবু বকর আস-সিদ্দিক"],
    },
    correctAnswer: { en: "Abu Bakr As-Siddiq", bn: "আবু বকর আস-সিদ্দিক" },
  },
  {
    id: 26,
    question: {
        en: "What is the term for the documented sayings and traditions of Prophet Muhammad (PBUH)?",
        bn: "নবী মুহাম্মদ (সাঃ) এর নথিভুক্ত উক্তি ও ঐতিহ্যকে কী বলা হয়?",
    },
    options: {
        en: ["Tafsir", "Fiqh", "Hadith", "Sirah"],
        bn: ["তাফসির", "ফিকহ", "হাদিস", "সিরাত"],
    },
    correctAnswer: { en: "Hadith", bn: "হাদিস" },
  },
  {
    id: 27,
    question: {
        en: "The 'Year of Sorrow' ('Aam al-Huzn) was named so due to the deaths of which two people close to the Prophet?",
        bn: "'শোকের বছর' (আম আল-হুজন) নামকরণ করা হয়েছিল নবীর কাছের কোন দুই ব্যক্তির মৃত্যুর কারণে?",
    },
    options: {
        en: ["His father and mother", "His wife Khadijah and uncle Abu Talib", "His sons Ibrahim and Qasim", "His companions Abu Bakr and Umar"],
        bn: ["তার বাবা ও মা", "তার স্ত্রী খাদিজা এবং চাচা আবু তালিব", "তার পুত্র ইব্রাহিম ও কাসিম", "তার সাহাবী আবু বকর ও উমর"],
    },
    correctAnswer: { en: "His wife Khadijah and uncle Abu Talib", bn: "তার স্ত্রী খাদিজা এবং চাচা আবু তালিব" },
  },
  {
    id: 28,
    question: {
        en: "Which prophet rebuilt the Kaaba with his son, Ismail?",
        bn: "কোন নবী তার পুত্র ইসমাইলের সাথে কাবা পুনর্নির্মাণ করেন?",
    },
    options: {
        en: ["Prophet Adam", "Prophet Nuh (Noah)", "Prophet Ibrahim (Abraham)", "Prophet Musa (Moses)"],
        bn: ["নবী আদম (আঃ)", "নবী নূহ (আঃ)", "নবী ইব্রাহিম (আঃ)", "নবী মূসা (আঃ)"],
    },
    correctAnswer: { en: "Prophet Ibrahim (Abraham)", bn: "নবী ইব্রাহিম (আঃ)" },
  },
  {
    id: 29,
    question: {
        en: "What is the name of the angel who delivered the revelations to Prophet Muhammad (PBUH)?",
        bn: "যে ফেরেশতা নবী মুহাম্মদ (সাঃ) এর কাছে ওহী পৌঁছে দিতেন তার নাম কী?",
    },
    options: {
        en: ["Mika'il (Michael)", "Israfil", "Jibril (Gabriel)", "Ridwan"],
        bn: ["মিকাইল (আঃ)", "ইসরাফিল (আঃ)", "জিবরাইল (আঃ)", "রিদওয়ান (আঃ)"],
    },
    correctAnswer: { en: "Jibril (Gabriel)", bn: "জিবরাইল (আঃ)" },
  },
  {
    id: 30,
    question: {
        en: "In the Battle of Uhud, what was the key mistake made by some of the Muslim archers?",
        bn: "উহুদের যুদ্ধে মুসলিম তীরন্দাজদের মূল ভুলটি কী ছিল?",
    },
    options: {
        en: ["They fell asleep", "They left their assigned post", "They ran out of arrows", "They surrendered"],
        bn: ["তারা ঘুমিয়ে পড়েছিল", "তারা তাদের নির্দিষ্ট স্থান ত্যাগ করেছিল", "তাদের তীর শেষ হয়ে গিয়েছিল", "তারা আত্মসমর্পণ করেছিল"],
    },
    correctAnswer: { en: "They left their assigned post", bn: "তারা তাদের নির্দিষ্ট স্থান ত্যাগ করেছিল" },
  },
  {
    id: 31,
    question: {
        en: "What is 'Tayammum'?",
        bn: "'তায়াম্মুম' কী?",
    },
    options: {
        en: ["A type of prayer", "A charity", "Dry ablution using pure earth", "A form of fasting"],
        bn: ["এক প্রকার নামাজ", "একটি দান", "পবিত্র মাটি দ্বারা শুষ্ক ওযু", "এক প্রকার রোজা"],
    },
    correctAnswer: { en: "Dry ablution using pure earth", bn: "পবিত্র মাটি দ্বারা শুষ্ক ওযু" },
  },
  {
    id: 32,
    question: {
        en: "Who was the first woman to convert to Islam?",
        bn: "ইসলাম গ্রহণকারী প্রথম মহিলা কে ছিলেন?",
    },
    options: {
        en: ["Aisha bint Abi Bakr", "Fatimah bint Muhammad", "Khadijah bint Khuwaylid", "Sumayyah bint Khabbat"],
        bn: ["আয়েশা বিনতে আবি বকর", "ফাতিমা বিনতে মুহাম্মদ", "খাদিজা বিনতে খুওয়াইলিদ", "সুমাইয়া বিনতে খাব্বাত"],
    },
    correctAnswer: { en: "Khadijah bint Khuwaylid", bn: "খাদিজা বিনতে খুওয়াইলিদ" },
  },
  {
    id: 33,
    question: {
        en: "Which Surah is famously known as the 'Heart of the Quran'?",
        bn: "কোন সূরাটি 'কুরআনের হৃদয়' হিসেবে বিখ্যাত?",
    },
    options: {
        en: ["Surah Ar-Rahman", "Surah Al-Mulk", "Surah Yasin", "Surah Al-Waqi'ah"],
        bn: ["সূরা আর-রহমান", "সূরা আল-মুলক", "সূরা ইয়াসিন", "সূরা আল-ওয়াকিয়াহ"],
    },
    correctAnswer: { en: "Surah Yasin", bn: "সূরা ইয়াসিন" },
  },
  {
    id: 34,
    question: {
        en: "What is the name of the holy well in Mecca from which pilgrims drink?",
        bn: "মক্কার পবিত্র কূপের নাম কী, যেখান থেকে হাজীরা পানি পান করেন?",
    },
    options: {
        en: ["Well of Hira", "Well of Zamzam", "Well of Badr", "Well of Quba"],
        bn: ["হেরা কূপ", "জমজম কূপ", "বদর কূপ", "কুবা কূপ"],
    },
    correctAnswer: { en: "Well of Zamzam", bn: "জমজম কূপ" },
  },
  {
    id: 35,
    question: {
        en: "How old was Prophet Muhammad (PBUH) when he received the first revelation?",
        bn: "প্রথম ওহী লাভের সময় নবী মুহাম্মদ (সাঃ) এর বয়স কত ছিল?",
    },
    options: {
        en: ["25", "35", "40", "50"],
        bn: ["২৫", "৩৫", "৪০", "৫০"],
    },
    correctAnswer: { en: "40", bn: "৪০" },
  },
  {
    id: 36,
    question: {
        en: "Who was the third Caliph of Islam, known for compiling the Quran into a single volume?",
        bn: "ইসলামের তৃতীয় খলিফা কে ছিলেন, যিনি কুরআনকে একটি একক গ্রন্থে সংকলন করার জন্য পরিচিত?",
    },
    options: {
        en: ["Abu Bakr As-Siddiq", "Umar ibn Al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"],
        bn: ["আবু বকর আস-সিদ্দিক", "উমর ইবনুল খাত্তাব", "উসমান ইবনে আফফান", "আলী ইবনে আবি তালিব"],
    },
    correctAnswer: { en: "Uthman ibn Affan", bn: "উসমান ইবনে আফফান" },
  },
  {
    id: 37,
    question: {
        en: "What is the Islamic term for the Day of Judgement?",
        bn: "ইসলামে শেষ বিচারের দিনকে কী বলা হয়?",
    },
    options: {
        en: ["Yawm al-Arafah", "Yawm al-Qiyamah", "Yawm al-Jumu'ah", "Yawm al-Ashura"],
        bn: ["ইয়াউমুল আরাফাহ", "ইয়াউমুল কিয়ামাহ", "ইয়াউমুল জুমু'আহ", "ইয়াউমুল আশুরা"],
    },
    correctAnswer: { en: "Yawm al-Qiyamah", bn: "ইয়াউমুল কিয়ামাহ" },
  },
  {
    id: 38,
    question: {
        en: "Which companion of the Prophet (PBUH) is the only one mentioned by name in the Quran?",
        bn: "কুরআনে নাম দ্বারা উল্লিখিত একমাত্র সাহাবী কে?",
    },
    options: {
        en: ["Abu Bakr As-Siddiq", "Zayd ibn Harithah", "Umar ibn Al-Khattab", "Salman al-Farsi"],
        bn: ["আবু বকর আস-সিদ্দিক", "যায়িদ ইবনে হারিসা", "উমর ইবনুল খাত্তাব", "সালমান আল-ফারসি"],
    },
    correctAnswer: { en: "Zayd ibn Harithah", bn: "যায়িদ ইবনে হারিসা" },
  },
  {
    id: 39,
    question: {
        en: "What does the term 'Hijra' signify in Islamic history?",
        bn: "ইসলামী ইতিহাসে 'হিজরত' শব্দটি কী বোঝায়?",
    },
    options: {
        en: ["A peace treaty", "A religious festival", "The migration from Mecca to Medina", "A holy war"],
        bn: ["একটি শান্তি চুক্তি", "একটি ধর্মীয় উৎসব", "মক্কা থেকে মদিনায় গমন", "একটি ধর্মযুদ্ধ"],
    },
    correctAnswer: { en: "The migration from Mecca to Medina", bn: "মক্কা থেকে মদিনায় গমন" },
  },
  {
    id: 40,
    question: {
        en: "Which prophet was given the ability to speak to animals and control the Jinn?",
        bn: "কোন নবীকে পশুদের সাথে কথা বলার এবং জ্বিনদের নিয়ন্ত্রণ করার ক্ষমতা দেওয়া হয়েছিল?",
    },
    options: {
        en: ["Prophet Dawud (David)", "Prophet Musa (Moses)", "Prophet Isa (Jesus)", "Prophet Sulaiman (Solomon)"],
        bn: ["নবী দাউদ (আঃ)", "নবী মূসা (আঃ)", "নবী ঈসা (আঃ)", "নবী সুলাইমান (আঃ)"],
    },
    correctAnswer: { en: "Prophet Sulaiman (Solomon)", bn: "নবী সুলাইমান (আঃ)" },
  },
  {
    id: 41,
    question: {
        en: "Which Surah of the Quran, if recited, is considered equivalent to reciting one-third of the Quran?",
        bn: "কুরআনের কোন সূরা পাঠ করলে এক-তৃতীয়াংশ কুরআন পাঠের সমতুল্য সওয়াব পাওয়া যায়?",
    },
    options: {
        en: ["Surah Al-Fatihah", "Surah Al-Ikhlas", "Surah Al-Asr", "Surah Al-Kawthar"],
        bn: ["সূরা আল-ফাতিহা", "সূরা আল-ইখলাস", "সূরা আল-আসর", "সূরা আল-কাউসার"],
    },
    correctAnswer: { en: "Surah Al-Ikhlas", bn: "সূরা আল-ইখলাস" },
  },
  {
    id: 42,
    question: {
        en: "Who was the fourth of the 'Rightly Guided Caliphs'?",
        bn: "'খোলাফায়ে রাশেদীন' এর চতুর্থ খলিফা কে ছিলেন?",
    },
    options: {
        en: ["Umar ibn Al-Khattab", "Uthman ibn Affan", "Abu Bakr As-Siddiq", "Ali ibn Abi Talib"],
        bn: ["উমর ইবনুল খাত্তাব", "উসমান ইবনে আফফান", "আবু বকর আস-সিদ্দিক", "আলী ইবনে আবি তালিব"],
    },
    correctAnswer: { en: "Ali ibn Abi Talib", bn: "আলী ইবনে আবি তালিব" },
  },
  {
    id: 43,
    question: {
        en: "The Battle of the Trench is also known by what other name?",
        bn: "খন্দকের যুদ্ধ অন্য কোন নামেও পরিচিত?",
    },
    options: {
        en: ["Battle of Ahzab", "Battle of Hunayn", "Battle of Mu'tah", "Battle of Yarmouk"],
        bn: ["আহযাবের যুদ্ধ", "হুনাইনের যুদ্ধ", "মুতাহর যুদ্ধ", "ইয়ারমুকের যুদ্ধ"],
    },
    correctAnswer: { en: "Battle of Ahzab", bn: "আহযাবের যুদ্ধ" },
  },
  {
    id: 44,
    question: {
        en: "What is 'Fiqh' in Islamic terminology?",
        bn: "ইসলামী পরিভাষায় 'ফিকহ' কী?",
    },
    options: {
        en: ["Quranic exegesis", "Islamic Jurisprudence", "Biography of the Prophet", "Theology"],
        bn: ["কুরআনের তাফসীর", "ইসলামী আইনশাস্ত্র", "নবীর জীবনী", "ধর্মতত্ত্ব"],
    },
    correctAnswer: { en: "Islamic Jurisprudence", bn: "ইসলামী আইনশাস্ত্র" },
  },
  {
    id: 45,
    question: {
        en: "Which prophet was raised to the heavens alive and is expected to return before the Day of Judgement?",
        bn: "কোন নবীকে জীবিত অবস্থায় আকাশে তুলে নেওয়া হয়েছিল এবং কিয়ামতের আগে তার ফিরে আসার কথা রয়েছে?",
    },
    options: {
        en: ["Prophet Idris", "Prophet Isa (Jesus)", "Prophet Ilyas (Elijah)", "Prophet Muhammad"],
        bn: ["নবী ইদ্রিস (আঃ)", "নবী ঈসা (আঃ)", "নবী ইলিয়াস (আঃ)", "নবী মুহাম্মদ (সাঃ)"],
    },
    correctAnswer: { en: "Prophet Isa (Jesus)", bn: "নবী ঈসা (আঃ)" },
  },
  {
    id: 46,
    question: {
        en: "What is the term for the minimum amount of wealth a Muslim must possess before they are obliged to pay Zakat?",
        bn: "যে ন্যূনতম পরিমাণ সম্পদের মালিক হলে একজন মুসলমানের উপর যাকাত ফরজ হয়, তাকে কী বলা হয়?",
    },
    options: {
        en: ["Sadaqa", "Jizya", "Nisab", "Fidyah"],
        bn: ["সাদকা", "জিজিয়া", "নেসাব", "ফিদিয়া"],
    },
    correctAnswer: { en: "Nisab", bn: "নেসাব" },
  },
  {
    id: 47,
    question: {
        en: "Who was Prophet Muhammad's (PBUH) wet nurse who took care of him in the desert?",
        bn: "নবী মুহাম্মদ (সাঃ) এর দুধ মা কে ছিলেন যিনি মরুভূমিতে তার যত্ন নিতেন?",
    },
    options: {
        en: ["Fatimah bint Asad", "Thuwaybah", "Barakah (Umm Ayman)", "Halimah as-Sa'diyah"],
        bn: ["ফাতিমা বিনতে আসাদ", "সুওয়াইবা", "বারাকা (উম্মে আয়মান)", "হালিমা আস-সাদিয়া"],
    },
    correctAnswer: { en: "Halimah as-Sa'diyah", bn: "হালিমা আস-সাদিয়া" },
  },
  {
    id: 48,
    question: {
        en: "How many times is the name 'Muhammad' explicitly mentioned in the Quran?",
        bn: "কুরআনে 'মুহাম্মদ' নামটি স্পষ্টভাবে কতবার উল্লেখ করা হয়েছে?",
    },
    options: {
        en: ["Once", "Four times", "Ten times", "Twenty-five times"],
        bn: ["একবার", "চারবার", "দশবার", "পঁচিশবার"],
    },
    correctAnswer: { en: "Four times", bn: "চারবার" },
  },
  {
    id: 49,
    question: {
        en: "Which prophet's wife was turned into a pillar of salt for disobeying Allah's command?",
        bn: "আল্লাহর আদেশ অমান্য করার জন্য কোন নবীর স্ত্রীকে লবণের স্তম্ভে পরিণত করা হয়েছিল?",
    },
    options: {
        en: ["Prophet Nuh (Noah)", "Prophet Ibrahim (Abraham)", "Prophet Lut (Lot)", "Prophet Shu'ayb"],
        bn: ["নবী নূহ (আঃ)", "নবী ইব্রাহিম (আঃ)", "নবী লূত (আঃ)", "নবী শুয়াইব (আঃ)"],
    },
    correctAnswer: { en: "Prophet Lut (Lot)", bn: "নবী লূত (আঃ)" },
  },
  {
    id: 50,
    question: {
        en: "What is 'Tafsir'?",
        bn: "'তাফসির' কী?",
    },
    options: {
        en: ["Recitation of the Quran", "Memorization of the Quran", "Exegesis/interpretation of the Quran", "Calligraphy of the Quran"],
        bn: ["কুরআন তেলাওয়াত", "কুরআন মুখস্থ করা", "কুরআনের ব্যাখ্যা/ভাষ্য", "কুরআনের ক্যালিগ্রাফি"],
    },
    correctAnswer: { en: "Exegesis/interpretation of the Quran", bn: "কুরআনের ব্যাখ্যা/ভাষ্য" },
  },
  {
    id: 51,
    question: {
        en: "Who was the leader of the Quraysh army in the Battle of Badr?",
        bn: "বদরের যুদ্ধে কুরাইশ সেনাবাহিনীর নেতা কে ছিল?",
    },
    options: {
        en: ["Abu Sufyan", "Utbah ibn Rabi'ah", "Abu Jahl", "Umayyah ibn Khalaf"],
        bn: ["আবু সুফিয়ান", "উতবা ইবনে রাবিয়াহ", "আবু জাহেল", "উমাইয়া ইবনে খালাফ"],
    },
    correctAnswer: { en: "Abu Jahl", bn: "আবু জাহেল" },
  },
  {
    id: 52,
    question: {
        en: "In which city was Prophet Muhammad (PBUH) born?",
        bn: "নবী মুহাম্মদ (সাঃ) কোন শহরে জন্মগ্রহণ করেন?",
    },
    options: {
        en: ["Medina", "Jerusalem", "Ta'if", "Mecca"],
        bn: ["মদিনা", "জেরুজালেম", "তায়িফ", "মক্কা"],
    },
    correctAnswer: { en: "Mecca", bn: "মক্কা" },
  },
  {
    id: 53,
    question: {
        en: "What is the Arabic word for Islamic monotheism, the core principle of the faith?",
        bn: "ইসলামী একেশ্বরবাদের জন্য আরবি শব্দ কী, যা এই ধর্মের মূল নীতি?",
    },
    options: {
        en: ["Shirk", "Tawhid", "Iman", "Ihsan"],
        bn: ["শিরক", "তৌহিদ", "ঈমান", "ইহসান"],
    },
    correctAnswer: { en: "Tawhid", bn: "তৌহিদ" },
  },
  {
    id: 54,
    question: {
        en: "What is the name of the holy book revealed to Prophet Dawud (David)?",
        bn: "নবী দাউদ (আঃ) এর উপর অবতীর্ণ পবিত্র গ্রন্থের নাম কী?",
    },
    options: {
        en: ["Tawrat (Torah)", "Injil (Gospel)", "Zabur (Psalms)", "Quran"],
        bn: ["তাওরাত", "ইনজিল", "যবুর", "কুরআন"],
    },
    correctAnswer: { en: "Zabur (Psalms)", bn: "যবুর" },
  },
  {
    id: 55,
    question: {
        en: "Who was the first person to be martyred (shaheed) in the cause of Islam?",
        bn: "ইসলামের পথে শহীদ হওয়া প্রথম ব্যক্তি কে?",
    },
    options: {
        en: ["Yasir ibn Amir", "Hamza ibn Abd al-Muttalib", "Sumayyah bint Khabbat", "Ammar ibn Yasir"],
        bn: ["ইয়াসির ইবনে আমির", "হামজা ইবনে আব্দুল মুত্তালিব", "সুমাইয়া বিনতে খাব্বাত", "আম্মার ইবনে ইয়াসির"],
    },
    correctAnswer: { en: "Sumayyah bint Khabbat", bn: "সুমাইয়া বিনতে খাব্বাত" },
  },
  {
    id: 56,
    question: {
        en: "Which Prophet was given the miracle of a she-camel that emerged from a rock?",
        bn: "কোন নবীকে পাথর থেকে একটি উটনী বের হওয়ার মুজিজা দেওয়া হয়েছিল?",
    },
    options: {
        en: ["Prophet Hud", "Prophet Salih", "Prophet Shu'ayb", "Prophet Lut (Lot)"],
        bn: ["নবী হুদ (আঃ)", "নবী সালিহ (আঃ)", "নবী শুয়াইব (আঃ)", "নবী লূত (আঃ)"],
    },
    correctAnswer: { en: "Prophet Salih", bn: "নবী সালিহ (আঃ)" },
  },
  {
    id: 57,
    question: {
        en: "What is 'I'tikaf'?",
        bn: "'ইতিকাফ' কী?",
    },
    options: {
        en: ["A form of pilgrimage", "A special fast", "Seclusion in a mosque for worship", "A type of charity"],
        bn: ["এক প্রকার হজ", "একটি বিশেষ রোজা", "ইবাদতের জন্য মসজিদে একান্তে অবস্থান", "এক প্রকার দান"],
    },
    correctAnswer: { en: "Seclusion in a mosque for worship", bn: "ইবাদতের জন্য মসজিদে একান্তে অবস্থান" },
  },
  {
    id: 58,
    question: {
      en: "Which of the Prophet's uncles was a staunch enemy of Islam and is mentioned in the Quran?",
      bn: "নবী (সাঃ) এর কোন চাচা ইসলামের ঘোর শত্রু ছিলেন এবং তার কথা কুরআনে উল্লেখ আছে?",
    },
    options: {
      en: ["Abu Talib", "Hamza", "Al-Abbas", "Abu Lahab"],
      bn: ["আবু তালিব", "হামজা", "আল-আব্বাস", "আবু লাহাব"],
    },
    correctAnswer: { en: "Abu Lahab", bn: "আবু লাহাব" },
  },
  {
    id: 59,
    question: {
      en: "How many gates does Jannah (Paradise) have?",
      bn: "জান্নাতের দরজা কয়টি?",
    },
    options: {
      en: ["Seven", "Eight", "Ten", "Twelve"],
      bn: ["সাতটি", "আটটি", "দশটি", "বারোটি"],
    },
    correctAnswer: { en: "Eight", bn: "আটটি" },
  },
  {
    id: 60,
    question: {
      en: "What is the name of the gate of Paradise reserved for those who fast?",
      bn: "যারা রোজা রাখে তাদের জন্য জান্নাতের কোন দরজাটি সংরক্ষিত?",
    },
    options: {
      en: ["Bab al-Salaah", "Bab al-Jihad", "Bab ar-Rayyan", "Bab al-Sadaqah"],
      bn: ["বাব আস-সালাহ", "বাব আল-জিহাদ", "বাব আর-রাইয়ান", "বাব আস-সাদাকাহ"],
    },
    correctAnswer: { en: "Bab ar-Rayyan", bn: "বাব আর-রাইয়ান" },
  },
  {
    id: 61,
    question: {
      en: "What was the original direction of prayer (Qibla) for Muslims before it was changed to the Kaaba in Mecca?",
      bn: "মক্কার কাবাকে কিবলা করার আগে মুসলিমদের নামাজের আসল দিক কোনটি ছিল?",
    },
    options: {
      en: ["Mount Sinai", "Al-Aqsa Mosque in Jerusalem", "The Prophet's Mosque in Medina", "Mount Arafat"],
      bn: ["সিনাই পর্বত", "জেরুজালেমের আল-আকসা মসজিদ", "মদিনার মসজিদে নববী", "আরাফাত পর্বত"],
    },
    correctAnswer: { en: "Al-Aqsa Mosque in Jerusalem", bn: "জেরুজালেমের আল-আকসা মসজিদ" },
  },
  {
    id: 62,
    question: {
      en: "Who are the 'Ahl al-Bayt'?",
      bn: "'আহলে বাইত' কারা?",
    },
    options: {
      en: ["The companions of the Prophet", "The family of the Prophet", "The early converts to Islam", "The scholars of Islam"],
      bn: ["নবীর সাহাবীরা", "নবীর পরিবার", "ইসলামের প্রথম দিকের ধর্মান্তরিতরা", "ইসলামের পণ্ডিতরা"],
    },
    correctAnswer: { en: "The family of the Prophet", bn: "নবীর পরিবার" },
  }
];
