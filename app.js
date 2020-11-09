document.addEventListener('DOMContentLoaded', () => {
    
    const cardArray = [
        {
            name: 'am95',
            img: 'images/am95.jpg'
        },
        {
            name: 'am95',
            img: 'images/am95.jpg'
        },
        {
            name: 'am97',
            img: 'images/am97.jpg'
        },
        {
            name: 'am97',
            img: 'images/am97.jpg'
        },
        {
            name: 'am98',
            img: 'images/am98.jpg'
        },
        {
            name: 'am98',
            img: 'images/am98.jpg'
        },
        {
            name: 'tnog',
            img: 'images/tnog.jpg'
        },
        {
            name: 'tnog',
            img: 'images/tnog.jpg'
        },
        {
            name: 'tailwindIV',
            img: 'images/tailwindIV.jpg'
        },
        {
            name: 'tailwindIV',
            img: 'images/tailwindIV.jpg'
        },
        {
            name: 'humara',
            img: 'images/humara.jpg'
        },
        {
            name: 'humara',
            img: 'images/humara.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    const messageDisplay = document.querySelector('#message')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {
        for (i = 0 ; i < cardArray.length ; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    createBoard()

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            messageDisplay.innerHTML = 'You found a match !'
            cards[optionOneId].setAttribute('src','images/white.jpg')
            cards[optionTwoId].setAttribute('src','images/white.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src','images/blank.jpg')
            cards[optionTwoId].setAttribute('src','images/blank.jpg')
            messageDisplay.innerHTML = 'Sorry, try again !'
        }
        
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all !'
        }
    }

    function flipCard() {
        var cardImage = this.getAttribute('src')
        var cardId = this.getAttribute('data-id')
        if (cardImage === 'images/white.jpg') {
            messageDisplay.innerHTML = 'This card was removed from the board !'
        } else if (cardsChosen.length === 1 && cardId === cardsChosenId[0]) {
            messageDisplay.innerHTML = 'You must flip a different card !'
        } else if (cardsChosen.length !== 2) {
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        } else {
            messageDisplay.innerHTML = 'You can only flip two !'
        }
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 300)
        }
    }


})