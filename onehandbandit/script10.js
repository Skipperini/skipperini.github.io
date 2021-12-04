var name = prompt('Input your name', "User");
document.getElementById("name").innerHTML = name;
var btn = document.getElementById("butn");
var tern = document.getElementsByClassName("tern");
var allside = document.getElementsByClassName("allside");
var scores=document.getElementById("score");
var num1 = 0; var score = 500;
var num2 = 0;
var num3= 0;var num4= 0;var num5= 0;var num6= 0;
var img1= document.createElement('img');
var img2= document.createElement('img');
var img3= document.createElement('img');
var img4= document.createElement('img');
var img5= document.createElement('img');
var img6= document.createElement('img');
img1.className = ("imgs");
img2.className = ("imgs");
img3.className = ("imgs");
img4.className = ("imgs");
img5.className = ("imgs");
img6.className = ("imgs");
scores.innerHTML=`Scores: ${score}`;
image = new Array();
var rot=1800;
image[0]="banana.png";
image[1]="kokos.png";
image[2]="mandarin.png";
image[3]="pomidor.png";
btn.onclick = function(){
    score-=100;
    scores.innerHTML=`Scores: ${score}`;
    if(score<0){
       alert("You lose!!");
    }
    else{
    num1 =Math.round(Math.random()*3);
    img1.src = image[num1];
    document.getElementById("fpic").append(img1);
    num2 =Math.round(Math.random()*3);
    img2.src = image[num2];
    document.getElementById("spic").append(img2);
    num3 =Math.round(Math.random()*3);
    img3.src = image[num3];
    document.getElementById("tpic").append(img3);
    num4 =Math.round(Math.random()*3);
    img4.src = image[num4];
    num5 =Math.round(Math.random()*3);
    img5.src = image[num5];
    num6 =Math.round(Math.random()*3);
    img6.src = image[num6];
    document.getElementById("ffpic").append(img4);
    document.getElementById("sspic").append(img5);
    document.getElementById("ttpic").append(img6);
    for(var i=0; i < 3; i++){
        tern[i].style.transform = 'rotateX(' + rot + 'deg)';
        rot+=1800;
    }
    if(num1==1 && num2==1 && num3==0){
       score+=50;
    }
    if(num1==1 && num2==1 && num3==1){
        score+=150;
     }
     if(num1==1 && num2==1 && num3==2){
        score+=250;
     }
     if(num1==3 && num2==3 && num3==3){
        score+=350;
     }
     if((num1==num2)||(num2==num3)||(num1==num3)){
        score+=50;
     }
     setTimeout(function(){ scores.innerHTML=`Scores: ${score}`; },9000);  }
  }

   


