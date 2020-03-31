// initialize variables at the start of the script running on the first page
var wins = 0;
var losses = 0;
var ties = 0;

let shoot = function (playerChoice) { // update borders
    if (playerChoice == 1) {
        document.getElementById("rockImg").style.borderColor = "red";
        document.getElementById("paperImg").style.borderColor = "blue";
        document.getElementById("scissorsImg").style.borderColor = "blue";
    } else if (playerChoice == 2) {
        document.getElementById("rockImg").style.borderColor = "blue";
        document.getElementById("paperImg").style.borderColor = "red";
        document.getElementById("scissorsImg").style.borderColor = "blue";
    } else if (playerChoice == 3) {
        document.getElementById("rockImg").style.borderColor = "blue";
        document.getElementById("paperImg").style.borderColor = "blue";
        document.getElementById("scissorsImg").style.borderColor = "red";
    }
    // random number for computer choice
    var computerChoice = Math.ceil(Math.random() * 3);

    // decide win, lose, or tie
    // decide win, lose, or tie
    if (playerChoice == computerChoice){  // make sure if statements dont end in ; or they will chop the head of the body of code below in braces {}
        ties += 1;
        document.getElementById("choice").innerHTML = "You chose " + output(playerChoice) + " and the computer chose " + output(computerChoice) + ". It's a tie.";
    }else if (playerChoice == 1 && computerChoice == 2 || playerChoice == 2 && computerChoice == 3 || playerChoice == 3 && computerChoice == 1){  // make sure if statements dont end in ; or they will chop the head of the body of code below in braces {}
        losses += 1;
        document.getElementById("choice").innerHTML = "You chose " + output(playerChoice) + " and the computer chose " + output(computerChoice) + ". You lose...";
    }else{ 
        wins += 1;
        document.getElementById("choice").innerHTML = "You chose " + output(playerChoice) + " and the computer chose " + output(computerChoice) + ". You win!";
    }
    console.log("PlayerChoice: "+ playerChoice + " ComputerChoice: " + computerChoice + "\nwins: " + wins + "\nlosses: " + losses + "\nties: " + ties)

    // update display content on webpage
    
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("ties").innerHTML = "Ties: " + ties;


}

let output = function (num) {
    if (num == 1) 
        return "rock";
     else if (num == 2) 
        return "paper";
     else 
        return "scissors";
    

}
