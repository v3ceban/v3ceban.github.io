function memoryJS() {
    //create the array of cards
    const cardArray = [
        {
            name: 'angel',
            img: './assets/Memory/angel.png'
        },
        {
            name: 'bad',
            img: './assets/Memory/bad.png'
        },
        {
            name: 'cool',
            img: './assets/Memory/cool.png'
        },
        {
            name: 'funny',
            img: './assets/Memory/funny.png'
        },
        {
            name: 'hello',
            img: './assets/Memory/hello.png'
        },
        {
            name: 'hungry',
            img: './assets/Memory/hungry.png'
        },
        {
            name: 'kiss',
            img: './assets/Memory/kiss.png'
        },
        {
            name: 'sick',
            img: './assets/Memory/sick.png'
        },
        {
            name: 'angel',
            img: './assets/Memory/angel.png'
        },
        {
            name: 'bad',
            img: './assets/Memory/bad.png'
        },
        {
            name: 'cool',
            img: './assets/Memory/cool.png'
        },
        {
            name: 'funny',
            img: './assets/Memory/funny.png'
        },
        {
            name: 'hello',
            img: './assets/Memory/hello.png'
        },
        {
            name: 'hungry',
            img: './assets/Memory/hungry.png'
        },
        {
            name: 'kiss',
            img: './assets/Memory/kiss.png'
        },
        {
            name: 'sick',
            img: './assets/Memory/sick.png'
        }
    ];

    //sort the array randomly
    cardArray.sort(() => 0.5 - Math.random()); //sorts the array randomly

    //set some variables
    const gridDisplay = document.querySelector('#cardsGrid');
    var cardsChosen = [],
        cardsChosenIds = [],
        score = 0;

    //creates an image for each card in the array of cards
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            //sets the src to every card
            card.setAttribute('src', './assets/Memory/card.png');
            //gives the data id of i to every card
            card.setAttribute('data-id', i);
            //adds event listener to every card with the flipCard function
            card.addEventListener('click', flipCard);
            //appends all cards into gridDisplay (#cardsGrid)
            gridDisplay.appendChild(card);
        }
    }

    //execute the function and create images in document
    createBoard();

    function flipCard() {
        //only do this if there's no more than 2 cards chosen
        if (cardsChosen.length <= 1) {
            //variable
            let cardId = this.getAttribute('data-id');
            //add the name of the card with the clicked data-id to the cardsChosen array
            cardsChosen.push(cardArray[cardId].name);
            //add the data-id of the clicked card to the cardsChosenIds array
            cardsChosenIds.push(cardId);
            //set src attribute of the clicked card to the img value of the corresponding item from the cardArray
            this.setAttribute('src', cardArray[cardId].img);
            //add animation to the clicked card
            this.classList.add('animated');
            //prevent card from being clicked again
            this.removeEventListener('click', flipCard);
            //get all the cards
            let cards = document.querySelectorAll('#cardsGrid img');
            //prevent the new cards to be clicked before the animation finishes
            cards.forEach(card => card.removeEventListener('click', flipCard));
            //allow the cards to be clicked after the animation finishes 
            setTimeout(() => {
                cards.forEach(card => card.addEventListener('click', flipCard));
            }, 800);
            //remove the animation class after the animation finishes
            setTimeout(() => {
                this.classList.remove('animated');
            }, 800);
        }

        //when more than 1 card is clicked perform checkMatch function with 800ms delay (to finish the animation)
        if (cardsChosen.length > 1) {
            setTimeout(checkMatch, 800);
        }
    }

    function checkMatch() {
        //get all the cards
        let cards = document.querySelectorAll('#cardsGrid img');

        //if the two cards with the same name are clicked (win)
        if (cardsChosen[0] == cardsChosen[1]) {
            //check that the first card is actually clicked and then remove its event listener
            if (cardsChosenIds[0]) { cards[cardsChosenIds[0]].removeEventListener('click', flipCard); }
            //check that the second card is actually clicked and then remove its event listener
            if (cardsChosenIds[1]) { cards[cardsChosenIds[1]].removeEventListener('click', flipCard); }
            //increase the score counter
            score++;
        } /*if the images are different, or something unexpected happened*/else {
            //check that the first card is clicked, then hide its image (set to the default image)
            if (cardsChosenIds[0]) {
                cards[cardsChosenIds[0]].setAttribute('src', './assets/Memory/card.png');
            }
            //check that the second card is clicked, then hide its image (set to the default image)
            if (cardsChosenIds[1]) {
                cards[cardsChosenIds[1]].setAttribute('src', './assets/Memory/card.png');
            }
        }

        //empty the arrays with the names and ids
        cardsChosen = [];
        cardsChosenIds = [];
        //update the score counter on the page
        document.getElementById('MemoryScore').innerHTML = score;

        //display a message if the game is over
        if (score == cardArray.length / 2) {
            document.getElementById('MemoryScore').innerHTML = 'You won!';
        }
    }
}

memoryJS();