
var OnTwoColsState;

function sortLocationListBySize() {
    var win = window;
    doc = document;
    docElem = doc.documentElement;
    body = doc.getElementsByTagName('body')[0];
    var x = win.innerWidth || docElem.clientWidth || body.clientWidth;

    if ((x > 768) && (OnTwoColsState == 0)) {
        sortForTwoCols();
    }
    else if ((x <= 768) && (OnTwoColsState == 1)) {
        sortForOneCol();
    }
    
}


function sortForTwoCols() {
    OnTwoColsState = 1;

    var list, i, b, l;
    list = document.getElementById("LocationList");
    b = list.getElementsByTagName("LI");
    l = b.length;
    

    for (i = 1; i < l / 2; i++) {
        b = list.getElementsByTagName("LI");
        
        b[i].parentNode.insertBefore(b[i], b[l - 1]);
    }

    if (l % 2 == 1) {
        b[l - 1].parentNode.insertBefore(b[l - 1], b[(l - 1) / 2]);
    }
}


function sortForOneCol() {
    OnTwoColsState = 0;

    var list, i, b, l, halfLength, cnt = 0;
    list = document.getElementById("LocationList");
    b = list.getElementsByTagName("LI");
    l = b.length;

    l % 2 == 0 ? halfLength = (l / 2) - 1 : halfLength = (l - 1) / 2;

    for (i = 1; i <= halfLength; i++) {
        b[halfLength + i].parentNode.insertBefore(b[halfLength + i], b[i + cnt]);
        cnt++;
    }
    
    /*if (l % 2 == 1) {helper = (l - 1) / 2;} else {helper = l / 2 - 1;}


    for(i = helper; i > 0; i--) {
        b = list.getElementsByTagName("LI");

        b[i].parentNode.insertBefore(b[i], b[(l - cnt)]);
        cnt += 2;
    }*/
}


function initSortLocationBySize() {
    if ($(document).width() > 768) {
        sortForTwoCols();
    } else {OnTwoColsState = 0;}

}
/*Bildschirmgröße?*/
window.onresize = sortLocationListBySize;
