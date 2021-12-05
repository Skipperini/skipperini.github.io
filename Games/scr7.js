var divtxt = document.createElement('div');
var cont = document.createElement('div');
var divball = document.createElement('div');
var divansver = document.createElement('span');
var answerB = document.createElement('button');
answerB.classList.add("buttonA")
answerB.innerHTML="GO";
divtxt.innerHTML = '<span>What will I play?<span>';
divtxt.style.textAlign='center';
cont.className="cont";
divansver.innerHTML='Click to ask';
document.body.append(cont);
cont.append(divtxt);
var answer;
divball.classList.add('ball');
var answers = ['OneHand Bandit', 'Numbers', 'Cards'];
divball.onclick = function () {
    divball.classList.add('clshake');
    answer = answers[Math.floor(Math.random() * answers.length)];
    divansver.className="blinkcl";
    divansver.innerHTML = answer;
    divball.addEventListener( "animationend",  function() {
    divball.classList.remove("clshake");
    divansver.classList.remove("blinkcl")});
    cont.append(answerB);
    answerB.classList.add("blinkclB");
    if(answer=='OneHand Bandit'){
        answerB.onclick=function () {
            window.location.href="https://skipperini.github.io/onehandbandit/";
    }
    }
    if(answer=='Numbers'){
        answerB.onclick=function () {
            window.location.href='https://skipperini.github.io/Numbers/';}
    }
    if(answer=='Cards'){
        answerB.onclick=function () {
            window.location.href='https://skipperini.github.io/Cards/';}
    }
}
cont.append(divball);
divball.append(divansver);
