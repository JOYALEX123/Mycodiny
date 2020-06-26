
if (lucky != unlucky && player == lucky){
    console.log("Player wins: matches lucky score.");
    wallet += (lucky + player) * 10;
}else if (lucky != unlucky && player == unlucky){
    console.log("Player loses: matches unlucky score.");
    wallet = 0;