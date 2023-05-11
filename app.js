const btn = document.getElementById("btn")
const ratingForm = document.getElementById('card--rating');
const successForm = document.getElementById('card--success');
btn.addEventListener("click", myFunction);

const selection = "input[name=rating-group]:checked";
const myScore = document.getElementById('rate');

function myFunction() {
    const mySelection = document.querySelector(selection);
    myScore.innerText = mySelection.value;
    ratingForm.classList.add('hidden');
    successForm.classList.remove('hidden');
    console.log(mySelection);
}