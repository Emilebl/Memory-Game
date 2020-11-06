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
            alert('You found a match !')
            cards[optionOneId].setAttribute('src','images/white.jpg')
            cards[optionTwoId].setAttribute('src','images/white.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src','images/blank.jpg')
            cards[optionTwoId].setAttribute('src','images/blank.jpg')
            alert('Sorry, try again !')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all !'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


})