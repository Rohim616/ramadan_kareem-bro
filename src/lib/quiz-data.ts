export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What is the pre-dawn meal in Ramadan called?",
    options: ["Iftar", "Suhur", "Tarawih", "Fajr"],
    correctAnswer: "Suhur",
  },
  {
    id: 2,
    question: "What is the festival that marks the end of Ramadan?",
    options: ["Eid al-Adha", "Laylat al-Qadr", "Mawlid", "Eid al-Fitr"],
    correctAnswer: "Eid al-Fitr",
  },
  {
    id: 3,
    question: "How many days does Ramadan typically last?",
    options: ["31 days", "25 days", "29 or 30 days", "Always 30 days"],
    correctAnswer: "29 or 30 days",
  },
  {
    id: 4,
    question: "What is the act of giving charity, specifically at the end of Ramadan, called?",
    options: ["Sadaqa", "Hajj", "Zakat al-Fitr", "Wudu"],
    correctAnswer: "Zakat al-Fitr",
  },
];
