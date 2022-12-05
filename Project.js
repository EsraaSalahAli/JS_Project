document.querySelector(".control-buttons span").onclick = function () {


    let yourName = prompt("Whats Your Name?");


    if (yourName == null || yourName == "") {


        document.querySelector(".name span").innerHTML = 'Unknown';


    } else {


        document.querySelector(".name span").innerHTML = yourName;

    }


    document.querySelector(".control-buttons").remove();

};

document.addEventListener('DOMContentLoaded', () => {

    var cardArray =
        [
            {
                name: 'bird',
                img: 'images/bird.png'
            },

            {
                name: 'bird',
                img: 'images/bird.png'
            },

            {
                name: 'butterfly',
                img: 'images/butterfly.png'
            },
            {
                name: 'butterfly',
                img: 'images/butterfly.png'
            },

            {
                name: 'cat',
                img: 'images/cat.png'
            },
            {
                name: 'cat',
                img: 'images/cat.png'
            },

            {
                name: 'dog',
                img: 'images/dog.png'
            },
            {
                name: 'dog',
                img: 'images/dog.png'
            },

            {
                name: 'giraffe',
                img: 'images/giraffe.png'
            },
            {
                name: 'giraffe',
                img: 'images/giraffe.png'
            },

            {
                name: 'lion',
                img: 'images/lion.png'
            },
            {
                name: 'lion',
                img: 'images/lion.png'
            }

        ]


    cardArray.sort(() => 0.5 - Math.random())


    var grid = document.querySelector('.grid')
    var resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function CreateBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        var optionOneId = cardsChosenId[0]
        var optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] == cardsChosen[1]) {
            document.getElementById('success').play();

            // cards[optionOneId].setAttribute('src','images/front.png')
            // cards[optionTwoId].setAttribute('src','images/front.png')
            cardsWon.push(cardsChosen)

        } else {
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
            document.getElementById('fail').play();

        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length == cardArray.length / 2) {
            resultDisplay.textContent = 'Win'

        }
    }


    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500)

        }
    }

    CreateBoard()

})