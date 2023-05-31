
//generate a random number from 1 --> 10 without decimals
const Num1 = Math.ceil(Math.random()*10);
const Num2 = Math.ceil(Math.random()*10);


const question = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));

// if (!score){
//     score=0;
// }
scoreEl.innerHTML=`Score: ${score}`;

question.innerText = `What is ${Num1} multiply by ${Num2}?`; 
const correctAns = Num1*Num2;


formEl.addEventListener("submit", ()=>{
  const userAns = +inputEl.value;
  if (userAns === correctAns){
    score++;
    updatelocalStorage();


  }else{
    score--;
    updatelocalStorage();
  }
});

function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}



