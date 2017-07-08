var distance = new Date();
// z jakiegoś powodu się nie liczy!
var count = 0;
function pomodoroTimer (initMinutes, initSeconds)  {

  // Find the distance between now an the count down date
  distance.setMinutes(initMinutes);
  distance.setSeconds(initSeconds-count);
  count++;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = minutes + " : " + seconds;

  // If the count down is finished, write some text
  console.log("distance = " + distance);
  console.log("distance condition " + (distance < 0));
  if (distance.getMinutes() == 0 && distance.getSeconds() == 0) {
    clearInterval(x);
    count = 0;
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
  // console.log("outside x = " + x);
}
