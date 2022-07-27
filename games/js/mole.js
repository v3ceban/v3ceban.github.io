function MoleJS() {
    //variables
    const squares = document.querySelectorAll('#moleGrid .moleSquare'),
        timeLeft = document.querySelector('#MoleTimer'),
        score = document.querySelector('#MoleScore'),
        startGame = document.querySelector('#MoleNewGame');

    let result = 0,
        hit = null,
        currentTime = 60,
        timerID = null;

    function randomSquare() {
        squares.forEach(square => {
            square.classList.remove('mole');
        });

        //Math.random to get a random value from 0 to 1. Multiply by 9 to get it bigger. Math.floor to round it down, so now it's a random number from 0 to 8.
        //squares[random number from 0 to 8] returns a random square from the squares array.
        let randomSquare = squares[Math.floor(Math.random() * 9)];
        //add the mole to a random square
        randomSquare.classList.add('mole');

        hit = randomSquare.id;
    }

    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (square.id == hit) {
                result++;
                score.innerHTML = result;
                hit = null;
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
        document.querySelector('#moleGrid').style = "background-image: none";
    }

    startGame.addEventListener('click', gameInit);
}

MoleJS();