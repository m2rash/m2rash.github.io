function open_OxOst_location()
    {
        location.href = "https://www.google.com/maps/place/Oxford+OST/@49.0093355,8.4239207,15z/data=!4m5!3m4!1s0x0:0x9b3b4995f5ef0d72!8m2!3d49.0093355!4d8.4239207";
    } 
function open_OxOst_daily()
    {
        location.href = "https://cdn.website.dish.co/media/34/ae/1745471/Oxford-East-Ost-Food-2-8-01.pdf";
    } 





    var x = document.getElementById("demo");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }





var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function distance(lon1, lat1, lon2, lat2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
    var dLon = (lon2-lon1).toRad(); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  /** Converts numeric degrees to radians */
  if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }
  }
  
  window.navigator.geolocation.getCurrentPosition(function(pos) {
    console.log(pos); 
    console.log(
      distance(pos.coords.longitude, pos.coords.latitude, 42.37, 71.03)
    ); 
  });