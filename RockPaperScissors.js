var arrayImg={
    "rock":"images/rock2.png",
    "paper":"images/paper2.png",
    "scissors":"images/scissors2.png"
}

var SCORE=0;

function userPick(hand)
{
    var hands=document.querySelector("#elements");
    hands.style.display="none";

    var secondElements=document.querySelector("#secondElements");
    secondElements.style.display="flex";

    document.getElementById("userPickimg").src= arrayImg[hand];
    
    randomNumber=computerPick();
    Result(randomNumber,hand);
}

function computerPick()
{
    var handOption=[
        "rock",
        "paper",
        "scissors"
    ]

    var randomNumber=handOption[Math.floor(Math.random()* handOption.length)]
    document.getElementById("computerPickimg").src= arrayImg[randomNumber];

    return randomNumber;
}

function Result(userHand,randomNumber)
{
    if(randomNumber==userHand)
    {
        setDecision("IT'S A Draw !!?");
        draw();
    }
    else if(randomNumber=="rock" && userHand=="paper")
    {
        setDecision("YOU WIN '_'");
        setScore(SCORE+1);
        win();
    }
    else if(randomNumber=="rock" && userHand=="scissors")
    {
        setDecision("YOU LOSE !!");
        lose();
    }
    else if(randomNumber=="paper" && userHand=="scissors")
    {
        setDecision("YOU WIN '_'");
        setScore(SCORE+1);
        win();
    }
    else if(randomNumber=="paper" && userHand=="rock")
    {
        setDecision("YOU LOSE !!");
        lose();
    }
    else if(randomNumber=="scissors" && userHand=="rock")
    {
        setDecision("YOU WIN '_'");
        setScore(SCORE+1);
        win();
    }
    else if(randomNumber=="scissors" && userHand=="paper")
    {
        setDecision("YOU LOSE !!");
        lose();
    }
}


function setDecision(decision)
{
    document.querySelector("#decision h1").innerText=decision;
}

function setScore(score)
{
    SCORE=score;
    document.querySelector("#score h1").innerText=score;
}

function restartGame()
{
    var hands=document.querySelector("#elements");
    hands.style.display="flex";

    var secondElements=document.querySelector("#secondElements");
    secondElements.style.display="none";
}

function win()
{
    document.getElementById("win").play();
}

function draw()
{
    document.getElementById("draw").play();
}

function lose()
{
    document.getElementById("lose").play();
}