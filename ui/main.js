// Counter Code
var counter = 0;
var button = document.getElementById("counter");
button.onclick = function() {
    
  // Render the variable in the correct span
  counter = counter + 1
  var span = document.getElementById("count");
  span.innerHTML = counter.toString();
};