// attach event listener to form
// attach eventlistener to game box
//initialize the game
// checking which gamemode we're playing
//set win conditions
//determine current player

const form = document.querySelector("#myForm");
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    document.querySelector('.modal-wrapper').setAttribute('hidden', true);
    console.log(data);
})