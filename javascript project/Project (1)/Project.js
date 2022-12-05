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
                img: 'Memoryimages/bird.png'
            },

            {
                name: 'bird',
                img: 'Memoryimages/bird.png'
            },

            {
                name: 'butterfly',
                img: 'Memoryimages/butterfly.png'
            },
            {
                name: 'butterfly',
                img: 'Memoryimages/butterfly.png'
            },

            {
                name: 'cat',
                img: 'Memoryimages/cat.png'
            },
            {
                name: 'cat',
                img: 'Memoryimages/cat.png'
            },

            {
                name: 'dog',
                img: 'Memoryimages/dog.png'
            },
            {
                name: 'dog',
                img: 'Memoryimages/dog.png'
            },

            {
                name: 'giraffe',
                img: 'Memoryimages/giraffe.png'
            },
            {
                name: 'giraffe',
                img: 'Memoryimages/giraffe.png'
            },

            {
                name: 'lion',
                img: 'Memoryimages/lion.png'
            },
            {
                name: 'lion',
                img: 'Memoryimages/lion.png'
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
            card.setAttribute('src', 'Memoryimages/back.png')
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

            // cards[optionOneId].setAttribute('src','Memoryimages/front.png')
            // cards[optionTwoId].setAttribute('src','Memoryimages/front.png')
            cardsWon.push(cardsChosen)

        } else {
            cards[optionOneId].setAttribute('src', 'Memoryimages/back.png')
            cards[optionTwoId].setAttribute('src', 'Memoryimages/back.png')
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