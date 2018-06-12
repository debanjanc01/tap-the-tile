
setInterval(changeColor, 500);
var score=0;
function changeColor()
{
  var number=Math.floor((Math.random() * 9) + 1);
  document.getElementById(number.toString()).style.background="red";
  setTimeout(function(){
      document.getElementById(number.toString()).style.background= "";
    },400);
}

function checkColor(id)
{
  var color=document.getElementById(id.toString()).style.backgroundColor
  if(color=="red")
  {
    score+=1;
    document.getElementById("scorearea").innerHTML="Score: "+score;
  }
}
