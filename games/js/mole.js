function MoleJS() {
    //variables
    const squares = document.querySelectorAll('#moleGrid .moleSquare'),
        timeLeft = document.querySelector('#MoleTimer'),
        score = document.querySelector('#MoleScore'),
        startGame = document.querySelector('#MoleNewGame');

    let result = 0,
        hitbox = null,
        pseudoRandomNumber = null,
        lastNumber = null,
        currentTime = 60,
        timerID = null;

    //function sets the mole to a random square, but not twice to the same one
    function randomSquare() {
        //removes any moles from the field
        squares.forEach(square => {
            square.classList.remove('mole');
        });

        //sets pseudoRandomNumber to a random number withou repeating a number twice in a row
        function getPseudoRandomNumber() {
            //Math.random to get a random value from 0 to 1. Multiply by 9 to get it bigger. Math.floor to round it down, so now it's a random number from 0 to 8.
            randomNumber = Math.floor(Math.random() * 9);
            //if last number is different from the random generated number
            if (lastNumber != randomNumber) {
                //set last number to the generated number
                lastNumber = randomNumber;
                //set pseudoRandomNumber to the generated number
                pseudoRandomNumber = randomNumber;
            } else {
                //if the last number is the same as generated number - do the function again
                getPseudoRandomNumber();
            }
        }

        //calling out the function every time the randomSquare function triggers
        getPseudoRandomNumber();
        //squares[pseudoRandomNumber] returns a random square from the squares array, but no the same square twice
        let randomSquare = squares[pseudoRandomNumber];
        //add the mole to a random square
        randomSquare.classList.add('mole');

        //sets the hitbox to the id of the random square with the mole
        hitbox = randomSquare.id;
    }

    //adds an event listener to each square
    squares.forEach(square => {
        square.addEventListener('click', () => {
            //if the id of the square is the same as the hitbox adds a point, updates it on the page, resets the hitbox
            if (square.id == hitbox) {
                result++;
                score.innerHTML = result;
                //add shake when clicked
                square.classList.add('shake');
                //remove shake when animation finishes to reset it
                setTimeout(() => {
                    square.classList.remove('shake');
                }, 800);
                hitbox = null;
            };
        })
    });

    function moveMole() {
        timerID = setInterval(randomSquare, 1000);
        currentTime = 60;
        squares.forEach(square => {
            square.classList.remove('mole');
        });

        function countDown() {
            currentTime--;
            timeLeft.innerHTML = currentTime;

            if (currentTime == 0) {
                clearInterval(countDownTimerID);
                clearTimeout(timerID);
                hit = null;
                timeLeft.innerHTML = `Time's up!`;
                squares.forEach(square => {
                    square.classList.remove('mole');
                });
                document.querySelector('#moleGrid').style = "background-image: url('../games/assets/Whac/start.png')";
            }
        }

        let countDownTimerID = setInterval(countDown, 1000);

        startGame.removeEventListener('click', moveMole);
        startGame.setAttribute('disabled', 'disabled');

        setTimeout(() => {
            startGame.addEventListener('click', moveMole);
            startGame.removeAttribute('disabled', 'disabled');
        }, 60000)
    }

    function gameInit() {
        moveMole();
        result = 0;
        score.innerHTML = result;
        document.querySelector('#moleGrid').style = "background-image: none";
    }

    startGame.addEventListener('click', gameInit);
}

MoleJS();