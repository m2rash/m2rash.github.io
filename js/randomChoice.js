require(['./shake'], function(Shake) {
    var myShakeEvent = new Shake({
        threshold: 15, // optional shake strength threshold
        timeout: 1000 // optional, determines the frequency of event generation
    });
  
    myShakeEvent.start();
  
    window.addEventListener('shake', shakeEventDidOccur, false);
  
    //function to call when shake occurs
    function shakeEventDidOccur () {
  
        //put your own code here etc.
        var x = Math.floor(Math.random() * 10) + 1;
        switch(x) {
          case 1: window.location.href = "LocationSites/Oxfords/OxfordOst/OxOst.html";
          break;
          case 2: window.location.href = "LocationSites/Oxfords/OxfordCafe/OxCafe.html";
          break;
          default:
          break;
        }
    }
  });