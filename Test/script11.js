var wordEng = ["tea","cat", "apricot","apple","hair","lion","fish","juice","lemon","tiger"];
var wordUkr = ["чай","кіт", "абрикос","яблуко","волосся","лев","риба","сік","лемон","тигр"];
var input = $("input[type=text]");
var eng; var pointR=0; var pointNR=0; var count=0;
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
function neWord(){
  if(count < 10){
  eng = Math.floor(Math.random() * wordEng.length);
  $("#words").text(wordEng[eng]);
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
}
neWord();
function check1(){
  if(input.val()==wordUkr[eng]){
    pointR++;
    $("#countR").text(` Right: ${pointR}`);
   }
   else{
    pointNR++;
    $("#countNR").text(` Wrong: ${pointNR}`);
   }
   wordUkr.splice(eng, 1);
   wordEng.splice(eng, 1);
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
$("#words").bind('click', check1);
