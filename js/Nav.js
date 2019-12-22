function open_OxOst_location()
    {
        location.href = "https://www.google.com/maps/place/Oxford+OST/@49.0093355,8.4239207,15z/data=!4m5!3m4!1s0x0:0x9b3b4995f5ef0d72!8m2!3d49.0093355!4d8.4239207";
    } 
function open_OxOst_daily()
    {
        location.href = "https://cdn.website.dish.co/media/34/ae/1745471/Oxford-East-Ost-Food-2-8-01.pdf";
    } 





    var x = document.getElementById("dis");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(calcCrow);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  function calcCrow(position) 
  {
    
    var R = 6371; // km
    var dLat = toRad(49.0094941-position.coords.latitude);
    var dLon = toRad(8.4200555-position.coords.longitude);
    var lat1 = toRad(position.coords.latitude);
    var lat2 = toRad(49.0094941);
    
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    
    x.innerHTML = d.toFixed(2) + " km";
    return d;
  }

  
    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }