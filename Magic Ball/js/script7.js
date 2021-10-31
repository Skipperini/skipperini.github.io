var divtxt = document.createElement('div');
divtxt.style.textAlign='center';
divtxt.innerHTML = '<span>Input or imagine your question<span>';
var cont = document.createElement('div');
var inputq = document.createElement('input');
inputq.setAttribute('type','text');
cont.style.textAlign='center';
inputq.style.width = '39%';
inputq.style.height = '4.5%';
inputq.style.fontSize = 'calc(10px + 1vw)';
document.body.append(divtxt);
document.body.append(cont);
cont.append(inputq);
var divball = document.createElement('div');
divball.style.borderRadius = '50%';
divball.style.background='radial-gradient(#8A0808, #2A0A0A)';
divball.style.boxShadow = '0px 1px 14px 15px #DF0101';
divball.style.width ='calc(30% + 1vw)';
divball.style.height ='calc(61% + 1vw)';
divball.style.margin ='auto';
divball.style.marginTop='5%';
divball.style.textAlign='center';
var divansver = document.createElement('div');
divansver.innerHTML='Click to ask';
divball.style.display='table';
divansver.style.display ='table-cell';
divansver.style.verticalAlign='middle';
var answers = ['Maybe.', 'Never!', 'NO.', 'The future is bleak.','Possibly.', 'Yes!','Spirits say yes',];
divball.onclick = function () {
        divball.className="clshake";
        var answer = answers[Math.floor(Math.random() * answers.length)];
        divansver.className="blinkcl";
        divansver.innerHTML = answer;
        divball.addEventListener( "animationend",  function() {
        divball.classList.remove("clshake");
        divansver.classList.remove("blinkcl")});}
document.body.append(divball);
divball.append(divansver);
