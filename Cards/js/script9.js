var name = prompt('Input your name', "User");
var cont = document.createElement('div');
var usCont = document.createElement('div');
var compCont = document.createElement('div');
var usName = document.createElement('div');
var generate = document.createElement('button');
var pointUs = document.createElement('div');
var pointC = document.createElement('div');
var cont2 = document.createElement('div');
var usPic = document.createElement('div');
var compPic = document.createElement('div');
var pointComp=0;
var pointUser=0;
var cont3=document.createElement('div');
cont3.style.padding="8%";
cont3.style.height="30%";
cont3.className="uscont";
cont3.style.backgroundColor="rgba(71, 114, 131, 0%)";
usName.innerHTML=name;
usName.className="name";
cont.className="cont";
cont2.classList.add('cont2');
generate.innerHTML = 'Generate';
generate.className="buttonD";
pointUs.className="point";
usCont.className="uscont";
usPic.classList.add('pics');
compCont.className="uscont";
var nameC = document.createElement('div');
nameC.className="name";
nameC.innerHTML="Computer";
pointC.className="point";
pointC.innerHTML=`Points: ${pointComp}`;
compPic.classList.add('pics');
pointUs.innerHTML=`Points: ${pointUser}`;
var count = 0; 
generate.onclick = function(){
        var classC = Math.floor(Math.random() * (10 -1)) + 1;
        var classU =Math.floor(Math.random() * (10 -1)) + 1;
       if(classC==1){compPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/6-pik.png')"; pointComp+=6;}
       if(classC==2){compPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/7-pik.png')"; pointComp+=7;}
       if(classC==3){compPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/8-pik.png')"; pointComp+=8;}
       if(classC==4){compPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/9-pik.png')"; pointComp+=9;}
       if(classC==5){compPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/10-pik.png')"; pointComp+=10;}
       if(classC==6){ compPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/valet-pik.png')"; pointComp+=2;}
       if(classC==7){ compPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/dama-pik.png')"; pointComp+=3;}
       if(classC==8){compPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/korol-pik.png')"; pointComp+=4;}
       if(classC==9){compPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/tuz-pik.png')"; pointComp+=11;}
       if(classU==1){usPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/6-pik.png')";pointUser+=6;}
       if(classU==2){usPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/7-pik.png')";pointUser+=7;}
       if(classU==3){usPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/8-pik.png')";pointUser+=8;}
       if(classU==4){usPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/9-pik.png')";pointUser+=9;}
       if(classU==5){usPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/10-pik.png')";pointUser+=10;}
       if(classU==6){usPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/valet-pik.png')";pointUser+=2;}
       if(classU==7){usPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/dama-pik.png')";pointUser+=3;}
       if(classU==8){usPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/korol-pik.png')";pointUser+=4;}
       if(classU==9){usPic.style.backgroundImage="url('https://astrometa.ru/images/winds/karty2/tuz-pik.png')";pointUser+=11;}
       pointC.innerHTML=`Points: ${pointComp}`;
       pointUs.innerHTML=`Points: ${pointUser}`;
       count++;
        if(count==3){
            generate.disabled = true; 
            if(pointUser<pointComp){
            var Lose = document.createElement('div');
            Lose.innerHTML=" You lose ";
            Lose.className="txt";
            cont3.append(Lose);
            }
            if(pointUser>pointComp){
            var win = document.createElement('div');
            win.innerHTML=" You win! ";
            win.className="txt";
            cont3.append(win);
            }
            if(pointUser==pointComp){
                var fr = document.createElement('div');
                fr.innerHTML="Friendship win! ";
                fr.className="txt";
                cont3.append(fr);
            }
            var restart = document.createElement('button');
            restart.className="buttonD";
            restart.innerHTML="Restart";
            cont3.append(restart);
            restart.onclick = function(){
                if(pointUser>pointComp){win.remove();}
                if(pointUser<pointComp){Lose.remove();}
                if(pointUser==pointComp){fr.remove();}
                pointUser = 0; pointComp = 0;
                count=0;
                pointC.innerHTML=`Points: ${pointUser}`;
                pointUs.innerHTML=`Points: ${pointComp}`;
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
cont2.append(generate);
cont.append(compCont);
compCont.append(nameC);
compCont.append(pointC);
compCont.append(compPic);
