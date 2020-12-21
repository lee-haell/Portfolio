const SCROLL = "scroll";

function scrollNav(event){
    event.preventDefault();
    
    const li = document.querySelectorAll('header nav ul li'),
        con4 = document.querySelector('.item4_wrap'),
        footer = document.querySelector('footer'),
        footerOffset = footer.offsetTop / 1.1,
        conOffset4 = con4.offsetTop,
        screenOffset = window.pageYOffset;

    for(i=0; i<li.length; i++){
        if(conOffset4 < screenOffset){
            li[i].classList.add(SCROLL);
        } else {
            li[i].classList.remove(SCROLL);
        }
        if(footerOffset < screenOffset){
            li[i].classList.remove(SCROLL);
        }
    }
}

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
        screenPosition = window.innerHeight / 0.6;

    if(item4Position < screenPosition){
        item4Text.classList.add(SCROLL);
    } else {
        item4Text.classList.remove(SCROLL);
    }
}

window.addEventListener('scroll', scrollNav);
window.addEventListener('scroll', scrollTitle);
window.addEventListener('scroll', moveText);