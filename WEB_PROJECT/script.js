function empty() {
    alert("Your cart is empty!")
}

function accept() {
    document.getElementById('alert').remove();
}

var img =
document.getElementById("succulents");

function over() {
    img.src = "img/succulents-2.jpg";
    img.alt = "succulents2";
}

function out() {
    img.src = "img/succulents-1.jpg";
    img.alt = "succulents1";
}