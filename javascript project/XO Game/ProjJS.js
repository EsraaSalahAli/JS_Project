var Turn = 1;     // 1 Meaning X Turn
var Squares = [];
const divCon = document.getElementById('winner') 
const gameDiv = document.getElementById('game-div')
function Reset(Ssquare1,Ssquare2,Ssquare3)
{
    document.getElementById('Square'+Ssquare1).style.color="#000000";
    document.getElementById('Square'+Ssquare2).style.color="#000000";
    document.getElementById('Square'+Ssquare3).style.color="#000000";

    setTimeout(() => {
        location.reload()    // Refresh
    }, 10000);
}

function CheckWinner()
{
    for(var i=1; i<=9;i++)
    {
        Squares[i]=document.getElementById('Square'+i).innerHTML;
    }
    // Check Horizontal 
    if (Squares[1]==Squares[2] && Squares[2]==Squares[3] && Squares[1]!="")
    {
        // alert('Player' + " " + Squares[1] + " " + 'Wins Of Game 🥳');
        win();
        divCon.classList.remove('hide');
        gameDiv.classList.add('hide');
        Reset(1,2,3);
    }
    if (Squares[4]==Squares[5] && Squares[5]==Squares[6] && Squares[4]!="")
    {
        //alert('Player' + " " + Squares[4] + " " + 'Wins Of Game 🥳');
        win();
        divCon.classList.remove('hide');
        gameDiv.classList.add('hide');
        Reset(4,5,6);
    }
    if (Squares[7]==Squares[8] && Squares[8]==Squares[9] && Squares[9]!="")
    {
        // alert('Player' + " " + Squares[9] + " " + 'Wins Of Game 🥳');
        win();
        divCon.classList.remove('hide');
        gameDiv.classList.add('hide');
        Reset(7,8,9);
    }
    // Check Vertical
    if (Squares[1]==Squares[4] && Squares[4]==Squares[7] && Squares[7]!="")
    {
        //alert('Player' + " " + Squares[7] + " " + 'Wins Of Game 🥳');
        win();
        divCon.classList.remove('hide');
        gameDiv.classList.add('hide');
        Reset(1,4,7);
    }
    if (Squares[2]==Squares[5] && Squares[5]==Squares[8] && Squares[2]!="")
    {
        //alert('Player' + " " + Squares[2] + " " + 'Wins Of Game 🥳');
        win();
        divCon.classList.remove('hide');
        gameDiv.classList.add('hide');
        Reset(2,5,8);
    }
    if (Squares[3]==Squares[6] && Squares[6]==Squares[9] && Squares[9]!="")
    {
        //alert('Player' + " " + Squares[9] + " " + 'Wins Of Game 🥳');
        win();
        divCon.classList.remove('hide');
        gameDiv.classList.add('hide');
        Reset(3,6,9);
    }
     // Check Diagonal
     if (Squares[1]==Squares[5] && Squares[5]==Squares[9] && Squares[5]!="")
     {
         //alert('Player' + " " + Squares[5] + " " + 'Wins Of Game 🥳');
         win();
         divCon.classList.remove('hide');
         gameDiv.classList.add('hide');
         Reset(1,5,9);
     }
     if (Squares[3]==Squares[5] && Squares[5]==Squares[7] && Squares[5]!="")
     {
         //alert('Player' + " " + Squares[5] + " " + 'Wins Of Game 🥳');
         win();
         divCon.classList.remove('hide');
         gameDiv.classList.add('hide');
         Reset(3,5,7);
     }
}

function Insert(id)
{
    var square=document.getElementById(id);
    if(Turn && square.innerHTML=="")
    {
       square.innerHTML="X";
        Turn=!Turn
    }
    else if(!Turn && square.innerHTML=="")
    {
        square.innerHTML="O";
        Turn=!Turn
    }
    CheckWinner();
}

// function startSound(){
//     document.getElementById("Audio").play();
// }


document.body.addEventListener("mousemove", function () {
    document.getElementById("Audio1").play(); 
})

function win()
{
    document.getElementById("Audio2").play(); 
    document.getElementById("Audio1").pause();
}