function rockPaperJS() {
    const computerChoiceDisplay = document.getElementById('computer-choice'),
        userChoiceDisplay = document.getElementById('user-choice'),
        resultDisplay = document.getElementById('result'),
        possibleChoices = document.querySelectorAll('.RockPaper button'),
        timer = 850;

    let userChoice, computerChoice;
    let buttons = document.querySelectorAll('.RockPaper button');

    possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = `<source srcset="./assets/RockPaper/${userChoice}.avif" type="image/avif">
    <img src="./assets/RockPaper/${userChoice}.png" alt="${userChoice}" class="animate">`;
        for (let i = 0; i < buttons.length; i++) {
            const element = buttons[i];
            element.setAttribute('disabled', 'disabled');
        }
        setTimeout(generateComputerChoice, timer);
    }));

    function generateComputerChoice() {
        let randomNumber = Math.floor(Math.random() * possibleChoices.length);
        switch (randomNumber) {
            case 0:
                computerChoice = possibleChoices[0].id;
                break;
            case 1:
                computerChoice = possibleChoices[1].id;
                break;
            case 2:
                computerChoice = possibleChoices[2].id;
                break;
        }
        computerChoiceDisplay.innerHTML = `<source srcset="./assets/RockPaper/${computerChoice}.avif" type="image/avif">
        <img src="./assets/RockPaper/${computerChoice}.png" alt="${computerChoice}" class="animate">`;

        setTimeout(getResults, timer);
    }

    function getResults() {
        let results = userChoice + computerChoice;
        if (userChoice == computerChoice) {
            resultDisplay.innerHTML = `<source srcset="./assets/RockPaper/tie.avif" type="image/avif">
        <img src="./assets/RockPaper/tie.png" alt="tie" class="animate">`;
        } else if (results === 'scissorspaper' || results === 'rockscissors' || results === 'paperrock') {
            resultDisplay.innerHTML = `<source srcset="./assets/RockPaper/win.avif" type="image/avif">
        <img src="./assets/RockPaper/win.png" alt="win" class="animate">`;
        } else {
            resultDisplay.innerHTML = `<source srcset="./assets/RockPaper/lose.avif" type="image/avif">
        <img src="./assets/RockPaper/lose.png" alt="lose" class="animate">`;
        }

        setTimeout(() => {
            for (let i = 0; i < buttons.length; i++) {
                const element = buttons[i];
                element.removeAttribute('disabled', 'disabled');
            }
        }, timer);
    }
}

rockPaperJS();
