var divtxt = document.createElement('div');
var cont = document.createElement('div');
var inputq = document.createElement('input');
var divball = document.createElement('div');
var divansver = document.createElement('span');
inputq.style.marginTop='2%';
divtxt.innerHTML = '<span>Input or imagine your question<span>';
divtxt.style.textAlign='center';
cont.className="cont";
divansver.innerHTML='Click to ask';
inputq.setAttribute('type','text');
document.body.append(cont);
cont.append(divtxt);
cont.append(inputq);
divball.classList.add('ball');
var answers = ['Maybe.', 'Never!', 'NO.', 'The future is bleak.','Possibly.', 'Yes!','Spirits say yes',];
divball.onclick = function () {
    if(inputq.value === ''){
        divansver.innerHTML='Input question!';
    }
    else{
    divball.classList.add('clshake');
    var answer = answers[Math.floor(Math.random() * answers.length)];
    divansver.className="blinkcl";
    divansver.innerHTML = answer;
    divball.addEventListener( "animationend",  function() {
    divball.classList.remove("clshake");
    divansver.classList.remove("blinkcl")});}}
cont.append(divball);
divball.append(divansver);
