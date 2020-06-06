function init() {
    loadData();
}
var data = {

        /*_____________Carousel________________*/

        "LocationName": "Charles Oxford",
        "LocationWebsiteExtern" : "http://www.charles-oxford.de/",
        "Carousel_images" : ["OxCharlesCarousel1", "OxCharlesCarousel2" ],



        /*_____________Opening-Hours________________*/

        "Monday": "11:30 - 01:00",
        "Tuesday": "11:30 - 01:00",
        "Wednesday": "11:30 - 01:00",
        "Thursday": "11:30 - 01:00",
        "Friday": "11:30 - 02:00",
        "Saturday": "11:30 - 02:00",
        "Sunday": "12:00 - 00:00",


        /*_____________Info-Card-Deck________________*/

        "phoneNumber": "+4972192127550",
        "mail": "reservierung@charles-oxford.de",
        "map": "https://www.google.de/maps/place/Charles+Oxford/@49.0102034,8.3978101,20z/data=!4m5!3m4!1s0x0:0xc5ae146297dcfebd!8m2!3d49.0103149!4d8.3977431",
        "adress": "Waldstraße 30  </br> 76133 Karlsruhe </br> Germany</p>",


        /*_____________Menu________________*/
        "PDF_Link": "https://cdn.website.dish.co/media/ce/95/2403199/Charles-Charles-Food.pdf",
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
















