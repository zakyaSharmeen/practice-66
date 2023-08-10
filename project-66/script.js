const aLeft = document.querySelector('.fa-arrow-left');
const aRight = document.querySelector('.fa-arrow-right');
const bg1 = document.querySelector('.content');
const bg2 = document.querySelector('.featured-icon');
const bg3 = document.querySelector('.side-img');

let id = 1;

aRight.addEventListener('click', () => {
    id++;

    if(id > 3){
        id=1;
    }
    bg1.style.backgroundImage = "url(img-lg" + id + ".jpg)";
    bg2.style.backgroundImage = "url(img-lg" + id + ".jpg)";
    bg3.style.backgroundImage = "url(img-lg" + id + ".jpg)";

});
aLeft.addEventListener('click', () => {
    id--;

    if(id < 1){
        id= 3;
    }
    bg1.style.backgroundImage = "url(img-lg" + id + ".jpg)";
    bg2.style.backgroundImage = "url(img-lg" + id + ".jpg)";
    bg3.style.backgroundImage = "url(img-lg" + id + ".jpg)";

});
