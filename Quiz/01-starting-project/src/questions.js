const questions = [
    {
        question: "How many elements are in the periodic table?",
        answers: [
            "118",
            "120",
            "124",
            "116"
        ],
        correctAnswer: "118"
    },
    {
        question: "Which planet in the Milky Way is the hottest?",
        answers: [
            "Jupiter",
            "Venus",
            "Mercury",
            "Mars"
        ],
        correctAnswer: "Venus"
    },
    {
        question: "How many bones do we have in an ear?",
        answers: [
            "5",
            "7",
            "3",
            "2"
        ],
        correctAnswer: "3"
    },
    {
        question: "What is the process by which plants convert sunlight to energy?",
        answers: [
            "Photosynthesis",
            "Symbiosis",
            "Osmosis",
            "Quantum jump"
        ],
        correctAnswer: "Photosynthesis"
    },
    {
        question: "What is the chemical element with the symbol Fe?",
        answers: [
            "Iron",
            "Francium",
            "Fluorine",
            "Fermium"
        ],
        correctAnswer: "Iron"
    },
];

export function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  };

export default questions;