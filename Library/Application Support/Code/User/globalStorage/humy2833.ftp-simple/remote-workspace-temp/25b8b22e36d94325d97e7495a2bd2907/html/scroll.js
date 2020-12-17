const SCROLL = "scroll";

function scrollTitle(){
    const con1 = document.querySelector('.item1_content'),
        con2 = document.querySelector('.item2_content'),
        con3 = document.querySelector('.item3_content'),
        conOffset1 = con1.offsetTop,
        conOffset2 = con2.offsetTop,
        conOffset3 = con3.offsetTop,
        screenOffset = window.pageYOffset;

    let content = [ con1, con2, con3 ];
    let offset = [ conOffset1, conOffset2, conOffset3 ];

    for(i=0; i<4; i++){
        if(offset[i] < screenOffset){
            content[i].classList.add(SCROLL);
        }
    }
}

function moveText(){
    const item4Wrap = document.querySelector('.item4_wrap'),
        item4Text = item4Wrap.querySelector('.item4_moveText'),
        item4Position = item4Text.getBoundingClientRect().top,
        screenPosition2 = window.innerHeight / 0.6;

    if(item4Position < screenPosition2){
        item4Text.classList.add(SCROLL);
    } else {
        item4Text.classList.remove(SCROLL);
    }
}

window.addEventListener('scroll', scrollTitle);
window.addEventListener('scroll', moveText);