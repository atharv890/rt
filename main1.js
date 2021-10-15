player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
playerscore=0;
player2score=0;
document.getElementById("name").innerHTML= player1 +":";
document.getElementById("name1").innerHTML=player2 +":";
document.getElementById("number").innerHTML=playerscore ;
document.getElementById("number2").innerHTML=player2score;
document.getElementById("Questionname").innerHTML="Question turn : "+player1;
document.getElementById("Answername").innerHTML="Answer turn : "+player2;
function check(){
d1= "<h4 id='wd'>0</h4> <h4>*</h4> <h4 id='wd1'>0</h4>  ";
d2= "<br><h4 id='hd'>Answer </h4> <input type='text' placeholder='Number2' id='n2'<br><br>";
d3="<br><br><button class='btn btn-primary' onclick='submit()'> Check </button><br><br>";
d4=d1+d2+d3;
document.getElementById("output").innerHTML=d4;
document.getElementById("word").value="";
document.getElementById("word2").value="";
q=document.getElementById("word").value;
q1=document.getElementById("word2").value;
document.getElementById("wd").innerHTML=q;
document.getElementById("wd1").innerHTML=q1;

}