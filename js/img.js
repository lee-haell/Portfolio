let bg = document.getElementById("bg"),
    moon = document.getElementById("moon"),
    mountain = document.getElementById("mountain"),
    road = document.getElementById("road"),
    text = document.getElementById("text");

    window.addEventListener("scroll", function(){
        let value = window.scrollY;

        bg.style.top = value * 0.5 + 'px';
        moon.style.left = value * 0.5 + 'px';
        mountain.style.top = -value * 0.3 + 'px';
        road.style.top = value * 0.15 + 'px';
        text.style.top = value * 1 + 'px';
    })

