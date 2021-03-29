

var pos = 0;
var neg = 0;
var userInput;
function upload()
{
    userInput = document.getElementById("user").value;
    if (userInput > 0){
      pos++;
      alert("Positive");
    }
    else if (userInput < 0){
      neg ++;
      alert("Negative");
    }
    else if (userInput == 0){
      alert("Zero");
      results();
    }
}
function results()
{
  alert("Results Called");
  document.getElementById("positive").textContent= pos;
  document.getElementById("negative").textContent= neg;
}
