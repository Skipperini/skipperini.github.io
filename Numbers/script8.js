var name = prompt('Input your name', "Bloom");
var cont = document.createElement('div');
var usCont = document.createElement('div');
var compCont = document.createElement('div');
var usName = document.createElement('div');
var generate = document.createElement('button');
var pointUs = document.createElement('div');
var pointC = document.createElement('div');
var usNum = document.createElement('div');
var cont2 = document.createElement('div');
var cNum = document.createElement('div');
var usPic = document.createElement('div');
var compPic = document.createElement('div');
var cCount = 0;
var uCount = 0;
var UsNum = 0;
var CNum = 0;
var cont3=document.createElement('div');
cont3.style.padding="8%";
cont3.style.height="30%";
cont3.className="uscont";
cont3.style.backgroundColor="rgba(71, 114, 131, 0%)";
usName.innerHTML=name;
usName.className="name";
cont.className="cont";
usNum.className="nums";
cNum.className="nums";
cont2.classList.add('cont2');
generate.innerHTML = 'Fight';
generate.className="buttonD";
pointUs.className="point";
usCont.className="uscont";
usPic.classList.add('pics');
usPic.classList.add('userpic');
compCont.className="uscont";
usNum.innerHTML=UsNum;
var nameC = document.createElement('div');
nameC.className="name";
nameC.innerHTML="Valtor";
pointC.className="point";
pointC.innerHTML=`Points: ${cCount}`;
compPic.classList.add('pics');
compPic.classList.add('cpic');
cNum.innerHTML=CNum;
pointUs.innerHTML=`Points: ${uCount}`;
var count = 0; 
generate.onclick = function(){
        UsNum=Math.floor(Math.random() * (100 -10)) + 10;
        CNum=Math.floor(Math.random() * (100 -10)) + 10;
        usNum.innerHTML=UsNum;
        cNum.innerHTML=CNum;
        if(UsNum<CNum){ cCount++;}
        else if(UsNum>CNum){ uCount++;}
        else { cCount++; uCount++;}
        pointC.innerHTML=`Points: ${cCount}`;
        pointUs.innerHTML=`Points: ${uCount}`;
        count++;
        if(count==3){
            generate.disabled = true; 
            if(uCount<cCount){
            var Lose = document.createElement('div');
            Lose.innerHTML=" You lose ";
            Lose.className="txt";
            cont3.append(Lose);
            }
            if(uCount>cCount){
            var win = document.createElement('div');
            win.innerHTML=" You win! ";
            win.className="txt";
            cont3.append(win);
            }
            var restart = document.createElement('button');
            restart.className="buttonD";
            restart.innerHTML="Restart";
            cont3.append(restart);
            restart.onclick = function(){
                if(uCount>cCount){win.remove();}
                if(uCount<cCount){Lose.remove();}

                cCount = 0; uCount = 0; var UsNum = 0; var CNum = 0;
                count=0;
                pointC.innerHTML=`Points: ${cCount}`;
                pointUs.innerHTML=`Points: ${uCount}`;
                usNum.innerHTML=UsNum;
                cNum.innerHTML=CNum;
                generate.disabled = false; 
                restart.remove();
            }
        }
    }
document.body.append(cont);
cont.append(usCont);
usCont.append(usName);
usCont.append(pointUs);
usCont.append(usPic);
cont.append(cont3);
cont3.append(cont2);
cont2.append(usNum);
cont2.append(generate);
cont2.append(cNum);
cont.append(compCont);
compCont.append(nameC);
compCont.append(pointC);
compCont.append(compPic);


