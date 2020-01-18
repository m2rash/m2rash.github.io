function init() {
    loadData();
}
var data = {

    /*_____________Carousel________________*/

    "LocationName": "Oxford Pub",
    "LocationWebsiteExtern" : "https://www.oxfordpub.de/",
    "Carousel_images" : ["OxPubCarousel1", "OxPubCarousel2" ],



    /*_____________Opening-Hours________________*/

    "Monday": "11:00 - 02:00",
    "Tuesday": "11:00 - 02:00",
    "Wednesday": "11:00 - 02:00",
    "Thursday": "11:00 - 02:00",
    "Friday": "11:00 - 02:00",
    "Saturday": "11:00 - 02:00",
    "Sunday": "11:00 - 02:00",


    /*_____________Info-Card-Deck________________*/

    "phoneNumber": "0721 145 96 420",
    "mail": "info@oxfordpub.de",
    "map": "https://www.google.de/maps/place/Oxford+Pub+-+Bier+%26+Burger/@49.0087922,8.4110596,18.5z/data=!4m5!3m4!1s0x0:0x823aadf9ebe8bb1d!8m2!3d49.0086068!4d8.4129226",
    "adress": "Fasanenstraße 6  </br> 76131 Karlsruhe </br> Germany</p>",


    /*_____________Menu________________*/
    "PDF_Link": "https://static1.squarespace.com/static/55a305e0e4b0bb17f7b3aba4/t/5e1b64e03796b2442315f8cf/1578853602596/Wochenkarte_Times.pdf",
    };

function loadData() {
    loadCarousel();
    loadOpeningHours();
    loadInfoCardDeck();
    loadPDF();
}


function loadCarousel() {
    document.getElementById("LocationName").innerHTML = data.LocationName;

    var car = document.getElementById("Carousel_images");
    car.innerHTML += '<div class="carousel-item active" id=' + data.Carousel_images[0] + '></div>';
    for (var i = 1; i < data.Carousel_images.length; i++) {
       car.innerHTML += '<div class="carousel-item" id=' + data.Carousel_images[i] + '></div>';
    }
}

function loadOpeningHours() {
    document.getElementById("MondayHours").innerHTML = data.Monday;
    document.getElementById("TuesdayHours").innerHTML = data.Tuesday;
    document.getElementById("WednesdayHours").innerHTML = data.Wednesday;
    document.getElementById("ThursdayHours").innerHTML = data.Thursday;
    document.getElementById("FridayHours").innerHTML = data.Friday;
    document.getElementById("SaturdayHours").innerHTML = data.Saturday;
    document.getElementById("SundayHours").innerHTML = data.Sunday;

}

function loadInfoCardDeck() {
    var deck = document.getElementById("Info-Card-Deck");

    deck.innerHTML += '<div class="card">' +
                            '<button class="card-body btn btn-light" onclick="open_Phone()">' +
                            '<img class="icon" src="images/icons/phone.svg">' +
                            '<h5 class="card-title text-center">Phone</h5>' +
                            '<p class="card-text text-center">' + data.phoneNumber + '</p>' +
                            '</button>' +
                        '</div>';

    deck.innerHTML += '<div class="card">' +
                            '<button class="card-body btn btn-light" onclick="open_Mail()">' +
                            '<img class="icon" src="images/icons/mail.svg">' +
                            '<h5 class="card-title text-center">Mail</h5>' +
                            '<p class="card-text text-center">' + data.mail + '</p>' +
                            '</button>' +
                        '</div>';

    deck.innerHTML += '<div class="card">' +
                            '<button class="card-body btn btn-light" onclick="open_Map()">' +
                            '<img class="icon" src="images/icons/map-pin.svg">' +
                            '<h5 class="card-title text-center">Maps</h5>' +
                            '<p class="card-text text-center">' + data.adress + '</p>' +
                            '</button>' +
                        '</div>';

}

        function open_Phone()
            {
                window.location.href = "tel:" + data.phoneNumber;
            }

        function open_Mail()
            {
                window.location.href = "mailto:" + data.mail;
            }

        function open_Map()
            {
                window.location.href = data.map;
            } 



function loadPDF() {
    document.getElementById("PDF-Container").innerHTML = '<div class="embed-responsive" style="padding-bottom:100%">' + 
                                                        '<object data="' + data.PDF_Link + '" type="application/pdf" width="100%" height="100%"></object>' + 
                                                        '</div>'
}







function open_extern() {
    location.href = data.LocationWebsiteExtern;
}
















