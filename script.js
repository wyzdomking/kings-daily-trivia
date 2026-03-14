/* QUESTION DATA */

const questions=[

{
question:"A document made for the assets and wishes of a dead person to their loved ones",
answer:"WILL",
hint:"Try alternative short names for Bill"
},

{
question:"This is the second person in the most widely spoken language globally including non natives, translates to tu in other European languages",
answer:"YOU",
hint:"Me and ___ by Tems"
},

{
question:"To ___ or not to ___? That is the question",
answer:"BE",
hint:"Bzzzz"
},

{
question:"Me, __self and I. This idiom is used to indicate a focus on oneself",
answer:"MY",
hint:"Me, may, __ , mo, muu (vocal warmups)"
},

{
question:"Two pieces. Opposite of guys and more than an acquaintance, put together.",
answer:"GIRLFRIEND",
hint:"I think you know where this is going?"
}

];

let currentQuestion=0;

let finalWords=[];

/* ELEMENTS */

const playButton=document.getElementById("PLAY");
const titleScreen=document.getElementById("titleScreen");
const game=document.getElementById("game");
const questionText=document.getElementById("question");
const boxes=document.getElementById("boxes");
const input=document.getElementById("answerInput");
const message=document.getElementById("message");
const hintText=document.getElementById("hint");

/* START GAME */

playButton.onclick=()=>{

titleScreen.classList.add("hidden");

game.classList.remove("hidden");

document.body.style.background='url("questions.png") center/contain no-repeat';

loadQuestion();

};

/* LOAD QUESTION */

function loadQuestion(){

const q=questions[currentQuestion];

questionText.textContent=q.question;

boxes.innerHTML="";

for(let i=0;i<q.answer.length;i++){

let box=document.createElement("div");
box.classList.add("box");

boxes.appendChild(box);

}

input.value="";
hintText.textContent="";
message.textContent="";

game.classList.add("swipe");

setTimeout(()=>game.classList.remove("swipe"),500);

}

/* SUBMIT ANSWER */

document.getElementById("submitBtn").onclick=()=>{

let guess=input.value.toUpperCase();

let correct=questions[currentQuestion].answer;

if(guess===correct){

message.textContent="";

const letters=boxes.children;

for(let i=0;i<correct.length;i++){

letters[i].textContent=correct[i];

letters[i].classList.add("correct");

}

finalWords.push(correct);

setTimeout(nextQuestion,700);

}

else{

message.textContent="Mmmmm nope!";

}

};

/* NEXT QUESTION */

function nextQuestion(){

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}

else{

showFinal();

}

}

/* HINT */

document.getElementById("hintBtn").onclick=()=>{

hintText.textContent=questions[currentQuestion].hint;

};

/* FINAL REVEAL */

function showFinal(){

game.classList.add("hidden");

const final=document.getElementById("finalScreen");

final.classList.remove("hidden");

const phrase="Will you be my girlfriend?".split(" ");

const display=document.getElementById("finalPhrase");

let i=0;

let reveal=setInterval(()=>{

display.textContent+=phrase[i]+" ";

i++;

if(i===phrase.length){

clearInterval(reveal);

createHearts();

}

},700);

}

/* HEARTS */

function createHearts(){

const container=document.getElementById("hearts");

for(let i=0;i<10;i++){

let heart=document.createElement("span");

heart.className="heart";

heart.textContent="❤";

container.appendChild(heart);

}

}