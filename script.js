

var pos = 0;
var neg = 0;
var userInput;
function upload()
{
    userInput = document.getElementById("user").value;
    if (userInput > 0){
      pos++;
    }
    else if (userInput < 0){
      neg ++;
    }
    else if (userInput == 0){
      results();
    }
}
function results()
{
  document.getElementById("positive").textContent= pos;
  document.getElementById("negative").textContent= neg;
}
