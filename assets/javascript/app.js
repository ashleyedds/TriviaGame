$(document).ready(function () {
    //timer stuff
    var timer = 21;
    var intervalId;


    //tracking questions
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 15;

    //sounds
    var audioTheme = new Audio("assets/audio/hedwigstheme.mp3");
    var audioWrong = new Audio("assets/audio/bloodyhell.mp3");
    var audioCorrect = new Audio("assets/audio/welldone.mp3");
    var audioTimeOut = new Audio("assets/audio/dontyoutworead.mp3");


    //questions
    var q1 = {
        question: "In Harry's Sorting ceremony, which house is the first student sorted into?",
        possibleAnswers: ["A. Hufflepuff", "B. Slytherin", "C. Gryffindor", "D. Ravenclaw"],
        flags: [true, false, false, false],
        answer: "Hufflepuff",
        displayGif: "<img id='gif' src = 'assets/images/q1.gif'>"
    };

    var q2 = {
        question: "What was the third challenge to reach the Sorcerer's Stone?",
        possibleAnswers: ["A. Fluffy", "B. Potions", "C. Devil's Snare", "D. Flying Keys"],
        flags: [false, false, false, true],
        answer: "Flying Keys",
        displayGif: "<img id='gif' src = 'assets/images/q2.gif'>"
    };

    var q3 = {
        question: "What was Harry's first broom called?",
        possibleAnswers: ["A. Cleansweep 5", "B. Nimbus 2000", "C. Comet 290", "D. Firebolt"],
        flags: [false, true, false, false],
        answer: "Nimbus 2000",
        displayGif: "<img id='gif' src = 'assets/images/q3.gif'>"
    };

    var q4 = {
        question: "Which Weasley died?",
        possibleAnswers: ["A. Charlie", "B. Fred", "C. Bill", "D. George"],
        flags: [false, true, false, false],
        answer: "Fred (may he rest in peace)",
        displayGif: "<img id='gif' src = 'assets/images/q4.gif'>"
    };

    var q5 = {
        question: "What is Albus Dumbledore's full name?",
        possibleAnswers: ["A. Albus Patrick Flimbus Derek Dumblebore", "B. Albus William Bob Patrick Dumbledore", "C. Albus Aberforth Brian Dumbledore", "D. Albus Percival Wulfric Brian Dumbledore"],
        flags: [false, false, false, true],
        answer: "Albus Percival Wulfric Brian Dumbledore",
        displayGif: "<img id='gif' src = 'assets/images/q5.gif'>"
    };

    var q6 = {
        question: "How many years in a row had Slyterin won the House Cup before Harry's first year?",
        possibleAnswers: ["A. 5", "B. 9", "C. 7", "D. 10"],
        flags: [false, false, true, false],
        answer: "7 years",
        displayGif: "<img id='gif' src = 'assets/images/q6.gif'>"
    };

    var q7 = {
        question: "What is Neville's boggart?",
        possibleAnswers: ["A. Professor Snape", "B. A big spider", "C. His grandmother", "D. A demeantor"],
        flags: [true, false, false, false],
        answer: "Professor Snape",
        displayGif: "<img id='gif' src = 'assets/images/q7.gif'>"
    }

    var q8 = {
        question: "James Potter, Sirius Black, and Peter Pettigrew are the only known unregistered Animagi--until who comes along?",
        possibleAnswers: ["A. Rita Skeeter", "B. Aberforth Dumbledore", "C. Nymphadora Tonks", "D. Ludo Bagman"],
        flags: [true, false, false, false],
        answer: "Rita Skeeter",
        displayGif: "<img id='gif' src = 'assets/images/q8.gif'>"
    }

    var q9 = {
        question: "Which vault belongs to the Potter family in Gringott's Wizarding Bank?",
        possibleAnswers: ["A. Vault 394", "B. Vault 256", "C. Vault 687", "D. Vault 555"],
        flags: [false, false, true, false],
        answer: "Vault 687",
        displayGif: "<img id='gif' src = 'assets/images/q9.gif'>"
    };

    var q10 = {
        question: "Which of these books was NOT written by Gildroy Lockhart?",
        possibleAnswers: ["A. Camping with Centaurs", "B. Marauding with Monsters", "C. Wanderings with Werewolves", "D. Break with a Banshee"],
        flags: [true, false, false, false],
        answer: "Camping with Centaurs",
        displayGif: "<img id='gif' src = 'assets/images/q10.gif'>"
    };

    var q11 = {
        question: "In The Deathly Hallows, what are the names of the three Peverell brothers?",
        possibleAnswers: ["A. Antioch, Cadmus, and Ibriham", "B. Antioch, Crydia, and Ignatius", "C. Aberforth, Cadmus, and Ignotus", "D. Antioch, Cadmus, and Ignotus"],
        flags: [false, false, false, true],
        answer: "Antioch, Cadmus, and Ignotus",
        displayGif: "<img id='gif' src = 'assets/images/q11.gif'>"
    };

    var q12 = {
        question: "What is Ron Weasley's patronus?",
        possibleAnswers: ["A. Stag", "B. Jack Russel Terrior", "C. Otter", "D. Spider"],
        flags: [false, true, false, false],
        answer: "Jack Russel Terrior",
        displayGif: "<img id='gif' src = 'assets/images/q12.gif'>"
    };

    var q13 = {
        question: "Which of these is NOT a famous wizarding-world treat?",
        possibleAnswers: ["A. Pumpkin Pasties", "B. Butterbeer", "C. Sour Snakes", "D. Chocolate Frogs"],
        flags: [false, false, true, false],
        answer: "Sour Snakes",
        displayGif: "<img id='gif' src = 'assets/images/q13.gif'>"
    };

    var q14 = {
        question: "The scar above Dumblebore's left knee is in the shape of what?",
        possibleAnswers: ["A. Hogwarts", "B. A Hippogriff", "C. The Chamber of Secrets", "D. The London Underground"],
        flags: [false, false, false, true],
        answer: "The London Underground",
        displayGif: "<img id='gif' src = 'assets/images/q14.gif'>"
    };

    var q15 = {
        question: "What is Nicolas Flamel's most famous creation?",
        possibleAnswers: ["A. The Magic Wand", "B. Butterbeer", "C. The Sorcerer's Stone", "D. The Time Turner"],
        flags: [false, false, true, false],
        answer: "The Sorcerer's Stone",
        displayGif: "<img id='gif' src = 'assets/images/q15.gif'>"
    };

    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];

    var index = 0;


    //To start game
    $("#question").hide();
    $("#answers").hide();
    $("#answerDisplay").hide();
    $("#endGameResults").hide();
    audioTheme.play();

    $("#start").on("click", function () {
        $("#beginGame").hide();
        $("#timer").show();
        audioTheme.pause();
        startTimer();
        loadQuestion();
        $("#question").show();
        $("#answers").show();
    });

    //Start timer countdown
    function startTimer() {
        intervalId = setInterval(decrement, 1000);
        function decrement() {
            timer--;
            $("#timer").html(timer + " seconds left!");
            if (timer === 0) {
                clearInterval(intervalId);
                $("#question").hide();
                $("#answers").hide();
                $("#answerDisplay").html(
                    "<p>Out of time! 10 points from your House!</p>" +
                    "<p>The correct answer is: " + questionArray[index].answer + "</p>" +
                    questionArray[index].displayGif);
                $("#answerDisplay").show();
                audioTimeOut.play();
                setTimeout(hide, 5000);
                timer = 21;
                index++;
                nextQuestion();
            }
        }
    }

    function hide() {
        $("#answerDisplay").hide();
        $("#question").show();
        $("#answers").show();
        startTimer();
    }

    //Cycle through questions
    function loadQuestion() {
        $("#question").html("<h3>" + questionArray[index].question + "</h3>");
        $("#buttonA").text(questionArray[index].possibleAnswers[0]).show();
        $("#buttonB").text(questionArray[index].possibleAnswers[1]).show();
        $("#buttonC").text(questionArray[index].possibleAnswers[2]).show();
        $("#buttonD").text(questionArray[index].possibleAnswers[3]).show();
    }

    //ID when player right and wrong
    function answerCorrect() {
        correctAnswers++;
        unAnswered--;
        clearInterval(intervalId);
        $("#question").hide();
        $("#answers").hide();
        $("#answerDisplay").html(
            "<p>Excellent!</p>" +
            "<p>" + questionArray[index].answer + " is correct!</p>" +
            questionArray[index].displayGif);
        $("#answerDisplay").show();
        audioCorrect.play();
        setTimeout(hide, 5000);
        timer = 21;
        index++;
        nextQuestion();
    }

    function answerWrong() {
        incorrectAnswers++;
        unAnswered--;
        clearInterval(intervalId);
        $("#question").hide();
        $("#answers").hide();
        $("#answerDisplay").html(
            "<p>Tough luck!</p>" +
            "<p>" + questionArray[index].answer + " is actually the correct answer. Hermione would be ashamed.</p>" +
            questionArray[index].displayGif);
        $("#answerDisplay").show();
        audioWrong.play();
        setTimeout(hide, 5000);
        timer = 21;
        index++;
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

    //Progress game
    function nextQuestion() {
        if (index < questionArray.length) {
            loadQuestion(index);
        } else {
            setTimeout(endGame, 5000);
            index = 0;
        }
    }

    //End game
    function endGame() {
        clearInterval(intervalId);
        $("#question").hide();
        $("#answers").hide();
        $("#timer").hide();
        $("#endGameResults").html(
            "<p>All done! Here's how you did:</p>" +
            "<br>" +
            "<p>Correct Answers: " + correctAnswers + "</p>" +
            "<br>" +
            "<p>Incorrect Answers: " + incorrectAnswers + "</p>" +
            "<br>" +
            "<p>Unanswered Questions: " + unAnswered + "</p>" +
            "<button id='startOver'>Start Over?</button>"
        )
        $("#endGameResults").show();
        audioTheme.play();

        //Reload game
        $("#startOver").on("click", function () {
            $("#endGameResults").hide();
            $("#question").show();
            $("#answers").show();
            index = 0;
            timer = 21;
            correctAnswers = 0;
            incorrectAnswers = 0;
            unAnswered = 15;
            loadQuestion();
            startTimer();
            $("#timer").show();
        });
    }

});


