const bg = document.querySelectorAll(".parallax");
const el = document.querySelectorAll("h1");

const scroll = () => {
    let scrolled = window.pageYOffset;
    bg[0].style.backgroundPositionY = scrolled / -.5 + "px";
    el[1].style.transform = "translateY(-" + (scrolled / 2) + "px)";

    if(scrolled + window.innerHeight >= bg[2].offsetTop + 700) {
        el[2].className += " slideIn";
        el[3].className += " slideIn";
    } else {
        el[2].className = "collapse";
        el[3].className = "collapse";
    }
};

window.addEventListener("scroll", scroll);
