
    //Order has to be the same as in index.html!!!!!!!
    var distances = [MensaDis, OxOstDis, OxCafeDis, OxPubDis, OxCharlesDis];
    var positions =  [49.0118492, 8.4148235, 
                      49.009339, 8.421732,
                      49.009126, 8.4095924,
                      49.0086067, 8.4107285,
                      49.0103096, 8.3955915];

    
    
    function init() {
      getLocation();
      //sortList();
    }
    
    
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(calcDistances);
      } else { 
        dis.innerHTML = "Geolocation is not supported by this browser.";
      }
    }





  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  function calcDistances(position) {
    var aktLat = position.coords.latitude;
    var aktLon = position.coords.longitude;
    var disForCalc = [];

    for (i = 0; i < distances.length; i++) {
      var R = 6371; // km
      var dLat = toRad(positions[2*i]-aktLat);
      var dLon = toRad(positions[2*i + 1]-aktLon);
      var lat1 = toRad(aktLat);
      var lat2 = toRad(positions[2*i]);
      
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      
      disForCalc.push(d);
      distances[i].innerHTML = d.toFixed(2) + " km";
    }

    sortList(disForCalc)
  }
    // Converts numeric degrees to radians
  function toRad(Value) {
      return Value * Math.PI / 180;
  }





    function sortList(disForCalc) {
      var list, i, switching, b, bSort, shouldSwitch;
      list = document.getElementById("LocationList");
      switching = true;
      /* Make a loop that will continue until
      no switching has been done: */
      while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        bSort = list.getElementsByTagName("P");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
          // start by saying there should be no switching:
          shouldSwitch = false;
          /* check if the next item should
          switch place with the current item: */
          
          if (disForCalc[i] > disForCalc[i + 1]) {
            /* if next item is numerically
            lower than current item, mark as a switch
            and break the loop: */
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark the switch as done: */
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          var x = disForCalc[i];
          disForCalc[i] = disForCalc[i+1];
          disForCalc[i + 1] = x;
          switching = true;
        }
      }
    }

   














    function open_OxOst_location()
    {
        location.href = "https://www.google.com/maps/place/Oxford+OST/@49.0093355,8.4239207,15z/data=!4m5!3m4!1s0x0:0x9b3b4995f5ef0d72!8m2!3d49.0093355!4d8.4239207";
    } 
function open_OxOst_daily()
    {
        location.href = "https://cdn.website.dish.co/media/34/ae/1745471/Oxford-East-Ost-Food-2-8-01.pdf";
    } 