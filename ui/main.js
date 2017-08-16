// Counter Code

var button = document.getElementById('counter');
button.onclick = function () {
    // Create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystaechange = function () {
        if(request.readyState === XMLHttpRequest.DONE ) {
            // Take some Action
            if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
            }
            
        }
        //Not done yet
    };
  // Make the request
  request.open('GET', 'http://whyblue123.imad.hasura-app.io/counter', true)
  request.send(null); 
};