const playerDetails = [];
function startGame(){   
}
function addPlayerDetails(){
   let player1Name = document.querySelector('#form1').value; 
   let player2Name = document.querySelector('#form2').value;
   let inputs = document.querySelectorAll('input[type="radio"]');
   let playerDifficulty;
   inputs.forEach((input)=>{
    input.addEventListener('clicked', function(event){
        playerDifficulty = event.value;
    })
   })
   console.log(player1Name);
   console.log(player2Name);
   console.log(playerDifficulty);
}
function Player(name, difficulty) {
  this.name = name;
  this.difficulty = difficulty;
}
function render() {
  this.innerHTML = 'X';
}
function reset(){
    const choices = document.querySelectorAll(".box");
    choices.forEach((choice)=>{
        choice.innerHTML = "";
    })
}
function newGame(){
    reset();
    const getForm1 = document.querySelector('.modal-wrapper');
    const getForm2 = document.querySelector('.modal');
    getForm1.setAttribute('style','display:flex');
    // getForm2.setAttribute('style','');
}
const choices = document.querySelectorAll(".box");
choices.forEach((choice) => {
    choice.addEventListener('click', render);
});
const resetButton = document.querySelector('#resetBtn');
resetButton.addEventListener('click', reset);
const newGameBtn = document.querySelector('#restartBtn');
newGameBtn.addEventListener('click', newGame);
document.querySelector('.startButton').addEventListener('click', function(event){
    event.preventDefault();
    addPlayerDetails();
    startGame();

})
