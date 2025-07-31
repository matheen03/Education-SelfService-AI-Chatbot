const quizData = {
    general: {
        easy: [
            {
                question: "What is the capital of France?",
                answers: {
                    a: "Berlin",
                    b: "Madrid",
                    c: "Paris",
                    d: "Rome"
                },
                correct: "c"
            },
            {
                question: "Which planet is known as the Red Planet?",
                answers: {
                    a: "Venus",
                    b: "Mars",
                    c: "Jupiter",
                    d: "Saturn"
                },
                correct: "b"
            },
            {
                question: "What is the largest mammal in the world?",
                answers: {
                    a: "African Elephant",
                    b: "Giraffe",
                    c: "Blue Whale",
                    d: "Polar Bear"
                },
                correct: "c"
            },
            {
                question: "How many days are there in a leap year?",
                answers: {
                    a: "365",
                    b: "366",
                    c: "364",
                    d: "367"
                },
                correct: "b"
            },
            {
                question: "What is the smallest country in the world?",
                answers: {
                    a: "Monaco",
                    b: "Nauru",
                    c: "Vatican City",
                    d: "San Marino"
                },
                correct: "c"
            },
            {
                question: "Which ocean is the largest?",
                answers: {
                    a: "Atlantic Ocean",
                    b: "Indian Ocean",
                    c: "Arctic Ocean",
                    d: "Pacific Ocean"
                },
                correct: "d"
            },
            {
                question: "What is the currency of Japan?",
                answers: {
                    a: "Yuan",
                    b: "Yen",
                    c: "Won",
                    d: "Ringgit"
                },
                correct: "b"
            },
            {
                question: "How many continents are there?",
                answers: {
                    a: "5",
                    b: "6",
                    c: "7",
                    d: "8"
                },
                correct: "c"
            },
            {
                question: "What is the hardest natural substance on Earth?",
                answers: {
                    a: "Gold",
                    b: "Iron",
                    c: "Diamond",
                    d: "Platinum"
                },
                correct: "c"
            },
            {
                question: "Which gas makes up most of Earth's atmosphere?",
                answers: {
                    a: "Oxygen",
                    b: "Carbon Dioxide",
                    c: "Hydrogen",
                    d: "Nitrogen"
                },
                correct: "d"
            }
        ],
        medium: [
            {
                question: "Who wrote the novel '1984'?",
                answers: {
                    a: "Aldous Huxley",
                    b: "George Orwell",
                    c: "Ray Bradbury",
                    d: "H.G. Wells"
                },
                correct: "b"
            },
            {
                question: "What is the chemical symbol for gold?",
                answers: {
                    a: "Go",
                    b: "Gd",
                    c: "Au",
                    d: "Ag"
                },
                correct: "c"
            },
            {
                question: "In which year did World War II end?",
                answers: {
                    a: "1944",
                    b: "1945",
                    c: "1946",
                    d: "1947"
                },
                correct: "b"
            },
            {
                question: "What is the longest river in the world?",
                answers: {
                    a: "Amazon River",
                    b: "Nile River",
                    c: "Yangtze River",
                    d: "Mississippi River"
                },
                correct: "b"
            },
            {
                question: "Who painted the Mona Lisa?",
                answers: {
                    a: "Vincent van Gogh",
                    b: "Pablo Picasso",
                    c: "Leonardo da Vinci",
                    d: "Michelangelo"
                },
                correct: "c"
            },
            {
                question: "What is the speed of light in vacuum?",
                answers: {
                    a: "299,792,458 m/s",
                    b: "300,000,000 m/s",
                    c: "299,000,000 m/s",
                    d: "301,000,000 m/s"
                },
                correct: "a"
            },
            {
                question: "Which element has the atomic number 1?",
                answers: {
                    a: "Helium",
                    b: "Hydrogen",
                    c: "Lithium",
                    d: "Carbon"
                },
                correct: "b"
            },
            {
                question: "What is the capital of Australia?",
                answers: {
                    a: "Sydney",
                    b: "Melbourne",
                    c: "Canberra",
                    d: "Perth"
                },
                correct: "c"
            },
            {
                question: "Who developed the theory of relativity?",
                answers: {
                    a: "Isaac Newton",
                    b: "Albert Einstein",
                    c: "Stephen Hawking",
                    d: "Niels Bohr"
                },
                correct: "b"
            },
            {
                question: "What is the largest desert in the world?",
                answers: {
                    a: "Sahara Desert",
                    b: "Gobi Desert",
                    c: "Antarctica",
                    d: "Arabian Desert"
                },
                correct: "c"
            }
        ],
        hard: [
            {
                question: "What is the Planck constant approximately equal to?",
                answers: {
                    a: "6.626 × 10^-34 J⋅s",
                    b: "1.602 × 10^-19 C",
                    c: "9.109 × 10^-31 kg",
                    d: "1.381 × 10^-23 J/K"
                },
                correct: "a"
            },
            {
                question: "Who wrote 'The Brothers Karamazov'?",
                answers: {
                    a: "Leo Tolstoy",
                    b: "Fyodor Dostoevsky",
                    c: "Anton Chekhov",
                    d: "Ivan Turgenev"
                },
                correct: "b"
            },
            {
                question: "What is the half-life of Carbon-14?",
                answers: {
                    a: "5,730 years",
                    b: "4,500 years",
                    c: "6,200 years",
                    d: "3,800 years"
                },
                correct: "a"
            },
            {
                question: "Which mathematician proved Fermat's Last Theorem?",
                answers: {
                    a: "Pierre de Fermat",
                    b: "Andrew Wiles",
                    c: "Leonhard Euler",
                    d: "Carl Friedrich Gauss"
                },
                correct: "b"
            },
            {
                question: "What is the rarest naturally occurring element on Earth?",
                answers: {
                    a: "Francium",
                    b: "Astatine",
                    c: "Technetium",
                    d: "Promethium"
                },
                correct: "b"
            }
        ]
    },
    science: {
        easy: [
            {
                question: "What is the chemical formula for water?",
                answers: {
                    a: "H2O2",
                    b: "H2O",
                    c: "CO2",
                    d: "NaCl"
                },
                correct: "b"
            },
            {
                question: "How many bones are in the adult human body?",
                answers: {
                    a: "206",
                    b: "208",
                    c: "204",
                    d: "210"
                },
                correct: "a"
            },
            {
                question: "What force keeps planets in orbit around the sun?",
                answers: {
                    a: "Magnetic force",
                    b: "Electric force",
                    c: "Gravitational force",
                    d: "Nuclear force"
                },
                correct: "c"
            },
            {
                question: "What is the powerhouse of the cell?",
                answers: {
                    a: "Nucleus",
                    b: "Ribosome",
                    c: "Mitochondria",
                    d: "Chloroplast"
                },
                correct: "c"
            },
            {
                question: "What is the pH of pure water?",
                answers: {
                    a: "6",
                    b: "7",
                    c: "8",
                    d: "9"
                },
                correct: "b"
            }
        ],
        medium: [
            {
                question: "What is Newton's second law of motion?",
                answers: {
                    a: "F = ma",
                    b: "E = mc²",
                    c: "v = u + at",
                    d: "P = mv"
                },
                correct: "a"
            },
            {
                question: "Which blood type is known as the universal donor?",
                answers: {
                    a: "A+",
                    b: "B+",
                    c: "AB+",
                    d: "O-"
                },
                correct: "d"
            },
            {
                question: "What is the study of earthquakes called?",
                answers: {
                    a: "Meteorology",
                    b: "Seismology",
                    c: "Geology",
                    d: "Volcanology"
                },
                correct: "b"
            },
            {
                question: "Which organ produces insulin?",
                answers: {
                    a: "Liver",
                    b: "Kidney",
                    c: "Pancreas",
                    d: "Spleen"
                },
                correct: "c"
            },
            {
                question: "What is the most abundant gas in the universe?",
                answers: {
                    a: "Oxygen",
                    b: "Nitrogen",
                    c: "Helium",
                    d: "Hydrogen"
                },
                correct: "d"
            }
        ],
        hard: [
            {
                question: "What is the Heisenberg Uncertainty Principle?",
                answers: {
                    a: "Energy cannot be created or destroyed",
                    b: "Position and momentum cannot be precisely determined simultaneously",
                    c: "Matter and energy are equivalent",
                    d: "Time is relative to the observer"
                },
                correct: "b"
            },
            {
                question: "Which enzyme is responsible for DNA replication?",
                answers: {
                    a: "RNA polymerase",
                    b: "DNA polymerase",
                    c: "Ligase",
                    d: "Helicase"
                },
                correct: "b"
            },
            {
                question: "What is the critical temperature of superconductivity for mercury?",
                answers: {
                    a: "4.2 K",
                    b: "7.2 K",
                    c: "9.3 K",
                    d: "14.7 K"
                },
                correct: "a"
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who was the first President of the United States?",
                answers: {
                    a: "Thomas Jefferson",
                    b: "John Adams",
                    c: "George Washington",
                    d: "Benjamin Franklin"
                },
                correct: "c"
            },
            {
                question: "In which year did the Titanic sink?",
                answers: {
                    a: "1912",
                    b: "1913",
                    c: "1911",
                    d: "1914"
                },
                correct: "a"
            },
            {
                question: "Which ancient wonder of the world was located in Egypt?",
                answers: {
                    a: "Hanging Gardens of Babylon",
                    b: "Colossus of Rhodes",
                    c: "Great Pyramid of Giza",
                    d: "Lighthouse of Alexandria"
                },
                correct: "c"
            },
            {
                question: "Who was known as the 'Iron Lady'?",
                answers: {
                    a: "Queen Elizabeth II",
                    b: "Margaret Thatcher",
                    c: "Angela Merkel",
                    d: "Golda Meir"
                },
                correct: "b"
            },
            {
                question: "Which war was fought between the North and South in America?",
                answers: {
                    a: "World War I",
                    b: "Revolutionary War",
                    c: "Civil War",
                    d: "War of 1812"
                },
                correct: "c"
            }
        ],
        medium: [
            {
                question: "Who was the leader of the Soviet Union during World War II?",
                answers: {
                    a: "Vladimir Lenin",
                    b: "Joseph Stalin",
                    c: "Nikita Khrushchev",
                    d: "Leon Trotsky"
                },
                correct: "b"
            },
            {
                question: "In which year did the Berlin Wall fall?",
                answers: {
                    a: "1987",
                    b: "1988",
                    c: "1989",
                    d: "1990"
                },
                correct: "c"
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                answers: {
                    a: "Greek Empire",
                    b: "Ottoman Empire",
                    c: "Roman Empire",
                    d: "Byzantine Empire"
                },
                correct: "c"
            },
            {
                question: "What was the code name for the D-Day invasion?",
                answers: {
                    a: "Operation Overlord",
                    b: "Operation Neptune",
                    c: "Operation Market Garden",
                    d: "Operation Barbarossa"
                },
                correct: "a"
            },
            {
                question: "Who wrote the 95 Theses?",
                answers: {
                    a: "John Calvin",
                    b: "Martin Luther",
                    c: "Thomas Aquinas",
                    d: "Erasmus"
                },
                correct: "b"
            }
        ],
        hard: [
            {
                question: "What was the primary cause of the Peloponnesian War?",
                answers: {
                    a: "Rivalry between Athens and Sparta",
                    b: "Persian invasion",
                    c: "Trade disputes",
                    d: "Religious conflicts"
                },
                correct: "a"
            },
            {
                question: "Who was the Mongol leader who conquered most of Eastern Europe?",
                answers: {
                    a: "Genghis Khan",
                    b: "Kublai Khan",
                    c: "Batu Khan",
                    d: "Ögedei Khan"
                },
                correct: "c"
            }
        ]
    },
    sports: {
        easy: [
            {
                question: "How many players are on a basketball team on the court at one time?",
                answers: {
                    a: "4",
                    b: "5",
                    c: "6",
                    d: "7"
                },
                correct: "b"
            },
            {
                question: "Which sport is known as 'the beautiful game'?",
                answers: {
                    a: "Basketball",
                    b: "Tennis",
                    c: "Football/Soccer",
                    d: "Baseball"
                },
                correct: "c"
            },
            {
                question: "How often are the Summer Olympics held?",
                answers: {
                    a: "Every 2 years",
                    b: "Every 3 years",
                    c: "Every 4 years",
                    d: "Every 5 years"
                },
                correct: "c"
            },
            {
                question: "In which sport would you perform a slam dunk?",
                answers: {
                    a: "Volleyball",
                    b: "Basketball",
                    c: "Tennis",
                    d: "Badminton"
                },
                correct: "b"
            },
            {
                question: "What is the maximum score possible in ten-pin bowling?",
                answers: {
                    a: "250",
                    b: "300",
                    c: "350",
                    d: "400"
                },
                correct: "b"
            }
        ],
        medium: [
            {
                question: "Which country has won the most FIFA World Cups?",
                answers: {
                    a: "Germany",
                    b: "Argentina",
                    c: "Italy",
                    d: "Brazil"
                },
                correct: "d"
            },
            {
                question: "In which sport is the Ryder Cup competed?",
                answers: {
                    a: "Tennis",
                    b: "Golf",
                    c: "Cricket",
                    d: "Rugby"
                },
                correct: "b"
            },
            {
                question: "What is the diameter of a basketball hoop in inches?",
                answers: {
                    a: "16 inches",
                    b: "18 inches",
                    c: "20 inches",
                    d: "22 inches"
                },
                correct: "b"
            },
            {
                question: "Which tennis tournament is played on clay courts?",
                answers: {
                    a: "Wimbledon",
                    b: "US Open",
                    c: "French Open",
                    d: "Australian Open"
                },
                correct: "c"
            },
            {
                question: "How many minutes are in a soccer match (excluding stoppage time)?",
                answers: {
                    a: "80 minutes",
                    b: "90 minutes",
                    c: "100 minutes",
                    d: "120 minutes"
                },
                correct: "b"
            }
        ],
        hard: [
            {
                question: "Who holds the record for most home runs in a single MLB season?",
                answers: {
                    a: "Babe Ruth (60)",
                    b: "Mark McGwire (70)",
                    c: "Barry Bonds (73)",
                    d: "Sammy Sosa (66)"
                },
                correct: "c"
            },
            {
                question: "In what year was the first modern Olympic Games held?",
                answers: {
                    a: "1892",
                    b: "1896",
                    c: "1900",
                    d: "1904"
                },
                correct: "b"
            }
        ]
    }
};

// Function to get questions for a specific category and difficulty
function getQuestions(category, difficulty, count = 10) {
    const questions = quizData[category][difficulty];
    if (!questions) return [];
    
    // Shuffle questions and return the requested count
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Function to get all available categories
function getCategories() {
    return Object.keys(quizData);
}

// Function to get all available difficulties for a category
function getDifficulties(category) {
    return Object.keys(quizData[category] || {});
}