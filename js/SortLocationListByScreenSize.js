
function sortLocationList() {
    var list, i, b, l,
    list = document.getElementById("LocationList");
    b = list.getElementsByTagName("LI");
    l = b.length;

    for (i = 0; i < (l - 1); i += 2) {
        if (i % 2 != 0) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
        }
    }

}