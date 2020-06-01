function init() {
    loadData();
}
const data = {

        /*_____________Carousel________________*/

        "LocationName": "Mensa am Adenauerring",
        "LocationWebsiteExtern" : "https://www.sw-ka.de/de/essen/",
        "Carousel_images" : ["Carousel1", "Carousel2" ],

        };

function loadData() {
    loadCarousel();
}


function loadCarousel() {
    document.getElementById("LocationName").innerHTML = data.LocationName;

    var car = document.getElementById("Carousel_images");
    car.innerHTML += '<div class="carousel-item active" id=' + data.Carousel_images[0] + '></div>';
    for (var i = 1; i < data.Carousel_images.length; i++) {
       car.innerHTML += '<div class="carousel-item" id=' + data.Carousel_images[i] + '></div>';
    }
}


function open_extern() {
    location.href = data.LocationWebsiteExtern;
}
















