$(document).ready(function () {
    var timer = 30;
    var intervalId;

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 15;

    //To start game
    $("#question").hide();
    $("#answers").hide();
    $("#endGameResults").hide();

    $("#start").on("click", function () {
        $("#beginGame").hide();
        $("#question").show();
        $("#answers").show();
        startTimer();
        loadQuestion();
    });

    function startTimer() {
        intervalId = setInterval(decrement, 1000);
        function decrement() {
            timer--;
            $("#timer").html(timer + " seconds left!");
            if (timer === 0) {
                alert("time's up!");
            }
        }
    }

    var q1 = {
        question: "In Harry's Sorting ceremony, which house is the first student sorted into?",
        possibleAnswers: ["A. Hufflepuff", "B. Slytherin", "C. Gryffindor", "D. Ravenclaw"],
        flags: [true, false, false, false],
        answer: "A. Hufflepuff"
    };

    var q2 = {
        question: "What was the third challenge to reach the Sorcerer's Stone?",
        possibleAnswers: ["A. Fluffy", "B. Potions", "C. Devil's Snare", "D. Flying Keys"],
        flags: [false, false, false, true],
        answer: "D. Flying Keys"
    };

    var q3 = {
        question: "What was Harry's first broom called?",
        possibleAnswers: ["A. Cleansweep 5", "B. Nimbus 2000", "C. Comet 290", "D. Firebolt"],
        flags: [false, true, false, false],
        answer: "B. Nimbus 2000"
    };

    var q4 = {
        question: "Which Weasley died?",
        possibleAnswers: ["A. Charlie", "B. Fred", "C. Bill", "D. George"],
        flags: [false, true, false, false],
        answer: "B. Fred"
    };

    var q5 = {
        question: "What is Albus Dumbledore's full name?",
        possibleAnswers: ["A. Albus Patrick Flimbus Derek Dumblebore", "B. Albus William Bob Patrick Dumbledore", "C. Albus Aberforth Brian Dumbledore", "D. Albus Percival Wulfric Brian Dumbledore"],
        flags: [false, false, false, true],
        answer: "D. Albus Percival Wulfric Brian Dumbledore"
    };

    var q6 = {
        question: "How many years in a row had Slyterin won the House Cup before Harry's first year?",
        possibleAnswers: ["A. 5", "B. 9", "C. 7", "D. 10"],
        flags: [false, false, true, false],
        answer: "C. 7"
    };

    var q7 = {
        question: "What is Neville's boggart?",
        possibleAnswers: ["A. Professor Snape", "B. A big spider", "C. His grandmother", "D. A demeantor"],
        flags: [true, false, false, false],
        answer: "A. Professor Snape"
    }

    var q8 = {
        question: "James Potter, Sirius Black, and Peter Pettigrew are the only known unregistered Animagi--until who comes along?",
        possibleAnswers: ["A. Rita Skeeter", "B. Aberforth Dumbledore", "C. Nymphadora Tonks", "D. Ludo Bagman"],
        flags: [true, false, false, false],
        answer: "A. Rita Skeeter"
    }

    var q9 = {
        question: "Which vault belongs to the Potter family in Gringott's Wizarding Bank?",
        possibleAnswers: ["A. Vault 394", "B. Vault 256", "C. Vault 687", "D. Vault 555"],
        flags: [false, false, true, false],
        answer: "C. Vault 687"
    };

    var q10 = {
        question: "Which of these books was NOT written by Gildroy Lockhart?",
        possibleAnswers: ["A. Camping with Centaurs", "Marauding with Monsters", "Wanderings with Werewolves", "Break with a Banshee"],
        flags: [true, false, false, false],
        answer: "A. Camping with Centaurs"
    };

    var q11 = {
        question: "In The Deathly Hallows, what are the names of the three Peverell brothers?",
        possibleAnswers: ["A. Antioch, Cadmus, and Ibriham", "B. Antioch, Crydia, and Ignatius", "C. Aberforth, Cadmus, and Ignotus", "D. Antioch, Cadmus, and Ignotus"],
        flags: [false, false, false, true],
        answer: "D. Antioch, Cadmus, and Ignotus"
    };

    var q12 = {
        question: "What is Ron Weasley's patronus?",
        possibleAnswers: ["A. Stag", "B. Jack Russel Terrior", "C. Otter", "D. Spider"],
        flags: [false, true, false, false],
        answer: "B. Jack Russel Terrior",
    };

    var q13 = {
        question: "Which of these is NOT a famous wizarding-world treat?",
        possibleAnswers: ["A. Pumpkin Pasties", "B. Butterbeer", "C. Sour Snakes", "D. Chocolate Frogs"],
        flags: [false, false, true, false],
        answer: "C. Sour Snakes"
    };

    var q14 = {
        question: "The scar above Dumblebore's left knee is in the shape of what?",
        possibleAnswers: ["A. Hogwarts", "B. A Hippogriff", "C. The Chamber of Secrets", "D. The London Underground"],
        flags: [false, false, false, true],
        answer: "D. The London Underground"
    };

    var q15 = {
        question: "What is Nicolas Flamel's most famous creation?",
        possibleAnswers: ["A. The Magic Wand", "B. Butterbeer", "C. The Sorcerer's Stone", "D. The Time Turner"],
        flags: [false, false, true, false],
        answer: "C. The Sorcerer's Stone"
    };

    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];

    function loadQuestion() {
        $("#question").html("<h3>" + questionArray[index].question + "</h3>");
        $("#buttonA").text(questionArray[index].possibleAnswers[0]).show();
        $("#buttonB").text(questionArray[index].possibleAnswers[1]).show();
        $("#buttonC").text(questionArray[index].possibleAnswers[2]).show();
        $("#buttonD").text(questionArray[index].possibleAnswers[3]).show();
    }

    var index = 0;

    function answerCorrect() {
        alert("Correct!");
        correctAnswers++;
        index++;
        unAnswered--;
        nextQuestion();
    }

    function answerWrong() {
        alert("Wrong!");
        incorrectAnswers++;
        index++;
        unAnswered--;
        nextQuestion();
    }

    $(".answerChoice").on("click", function () {
        if (this.id == "buttonA") {
            var answerChosen = "A";
        } else if (this.id == "buttonB") {
            answerChosen = "B";
        } else if (this.id == "buttonC") {
            answerChosen = "C";
        } else if (this.id == "buttonD") {
            answerChosen = "D";
        }


        if ((answerChosen == "A") && (questionArray[index].flags[0] == true)) {
            answerCorrect();
        } else if (answerChosen == "A") {
            answerWrong();
        }

        if ((answerChosen == "B") && (questionArray[index].flags[1] == true)) {
            answerCorrect();
        } else if (answerChosen == "B") {
            answerWrong();
        }

        if ((answerChosen == "C") && (questionArray[index].flags[2] == true)) {
            answerCorrect();
        } else if (answerChosen == "C") {
            answerWrong();
        }

        if ((answerChosen == "D") && (questionArray[index].flags[3] == true)) {
            answerCorrect();
        } else if (answerChosen == "D") {
            answerWrong();
        }

    })

    function nextQuestion() {
        if (index < questionArray.length) {
            loadQuestion(index);
        } else {
            $("#question").hide();
            $("#answers").hide();
            $("#timer").hide();
            $("#endGameResults").show();
        }
    }


});