let imageInfo = document.getElementsByClassName("image");
let textInfo = document.getElementsByClassName("text-info");


 function slide() {
    textInfo[0].classList.toggle("invisible");
    textInfo[1].classList.toggle("invisible");
    imageInfo[0].classList.toggle("invisible");
    imageInfo[1].classList.toggle("invisible");
}

