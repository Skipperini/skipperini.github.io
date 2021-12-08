var input = $("input[type=text]");
var eng;
var pointR=0; var pointNR=0; var count=0;
$("#txt").css({
    fontSize: 'calc(10px + 4vw)',
    color:'darkslategrey',
    marginTop:'1%',
});
$("body").css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height:'100%',
  flexDirection: 'column',
  backgroundColor: 'burlywood',
});
document.querySelector("#start").onclick =  function(){
  butnC();
}
function butnC() { 
  $("#countR").text(` Right: ${pointR}`);
  $("#countNR").text(` Wrong: ${pointNR}`);
  count=0;
  if($("[type=radio]:checked").attr("value") == 'easy'){
    var wordEng = ["tea","cat", "apricot","apple","hair","lion","fish","juice","lemon","tiger"];
    var wordUkr = ["чай","кіт", "абрикос","яблуко","волосся","лев","риба","сік","лемон","тигр"];
    start(wordEng,wordUkr);
  }
  else if($("[type=radio]:checked").attr("value") == 'medium'){
    var wordEng1 = ["food","animal", "tree","uncle","sister","brave","businessman","glasses","colourful","circle"];
    var wordUkr1 = ["їжа","тварина", "дерево","дядько","сестра","сміливий","бізнесмен","окуляри","кольоровий","коло"];
    start(wordEng1,wordUkr1);
  }
  else if($("[type=radio]:checked").attr("value") == 'hard'){
    var wordEng2 = ["thousand","kettle", "fireplace","rainbow","illicit","faith","success","disguise","mint","umbrella"];
    var wordUkr2 = ["тисяча","чайник", "камін","райдуга","незаконний","віра","успіх","маска","м'ята","парасоля"];
    start(wordEng2,wordUkr2);
  }
}
function start(wordsE, wordsU){
$("button").unbind();
function neWord(){
  if(count < 10){
  eng = Math.floor(Math.random() * wordsE.length);
  $("#words").text(wordsE[eng]);
  count++;
  $("#countW").text(`${count}/10`);}
  else{
    result();
}}
function result(){
  $("#words").unbind();
    if(pointR<=3){
      alert("Very bad!")
    }
    if(3<pointR && pointR<=7){
     alert("Not bad")
    }
    if(7<pointR && pointR<=10){
    alert("Excellent");
    }
    pointR=0; pointNR=0; count=0;
}
neWord();
function check1(){
  if(input.val()==wordsU[eng]){
    pointR++;
    $("#countR").text(` Right: ${pointR}`);
   }
   else{
    pointNR++;
    $("#countNR").text(` Wrong: ${pointNR}`);
   }
   wordsU.splice(eng, 1);
   wordsE.splice(eng, 1);
    input.val('');
   neWord();
}
$('input').keydown(function(e) {
  
  if(e.keyCode === 13) {
    if(count < 10){
    check1();}
    else{
      result();
    }
  }
});
$("#words").bind('click', check1);}
