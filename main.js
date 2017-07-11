var distance = new Date();
var count = 0;
var y;

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
  if (distance.getMinutes() == 0 && distance.getSeconds() == 0) {
    clearInterval(x);
    count = 0;
    document.getElementById("status").innerHTML = "Break Time";
    y = setInterval (function(){breakTime()}, 1000);
  }
}

function breakTime() {
  distance.setMinutes(0);
  distance.setSeconds(5-count);
  count++;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = minutes + " : " + seconds;

  if (distance.getMinutes() == 0 && distance.getSeconds() == 0) {
    document.getElementById("status").innerHTML = "Work time";
    clearInterval(y);
    count = 0;
  }

}
