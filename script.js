let go = document.querySelector('.go');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let img5 = document.querySelector('.img5');
let img6 = document.querySelector('.img6');
let img7 = document.querySelector('.img7');
let img8 = document.querySelector('.img8');




go.addEventListener("click", () => {
    img3.style.top = "590px";
    img4.style.top = "590px";
    img4.style.transition = "3s";
    img3.style.transition = "3s";
    setTimeout(() => {
        img1.style.top = "270px";
        img2.style.top = "270px";
        img2.style.transition = "2s";
        img1.style.transition = "2s";
    }, 500);
    setTimeout(() => {
        img7.style.left = "650px";
        img8.style.left = "650px";
        img7.style.transition = "3.5s";
        img8.style.transition = "3.5s";
    }, 500 );
    setTimeout(() => {
        img7.style.left = "1239px";
        img8.style.left = "1239px";
        img5.style.left = "650px";
        img6.style.left = "650px";
        img5.style.transition = "2s";
        img6.style.transition = "2s";
    }, 1000);
    setTimeout(() => {
        img1.style.top = "520px";
        img2.style.top = "520px";
    }, 2500);
    setTimeout(() => {
        img5.style.left = "1169px";
        img6.style.left = "1169px";
    }, 3500);
});
    