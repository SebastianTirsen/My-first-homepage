// javascript
let myIndex = 0;

const myCarousel = () => {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    myIndex++;
    if (nyIndex > slides.length) {myIndex = 1}
    slides[myIndex-1].style.display = "block";
    setTimeout(myCarousel, 3000);
}
    myCarousel();
