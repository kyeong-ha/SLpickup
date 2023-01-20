const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const slideWidth = 100; //한개의 슬라이드 넓이
const slideMargin = 0; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides.style.height = (slideWidth + slideMargin) * slideCount + 'vh';

function moveSlide(num) {
  slides.style.top = -num * 100 + 'vh';
  currentIdx = num;
}

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 38){ // Press the Up
        if(currentIdx !== 0) moveSlide(currentIdx - 1);
    }else if(e.keyCode == 40){ // Press the Down
        if(currentIdx !== slideCount-1) moveSlide(currentIdx + 1);
    }
});

let inputFlag = true; // 슬라이드가 넘어가는 동안 even 발생 차단을 위한 변수

window.addEventListener("wheel", (e) => {
    if(inputFlag){
        inputFlag = false;

        if(e.deltaY < 1){
            if(currentIdx !== 0) moveSlide(currentIdx - 1);
        }else if (e.deltaY > 1){
            console.log(inputFlag);
            if (currentIdx !== slideCount-1) moveSlide(currentIdx + 1);
        }
        setTimeout(function() { // 슬라이드가 넘어가는 동안 flag off
        inputFlag = true;
        }, 1400); 
    }
});


// const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
// const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
// let currentIdx = 0; //현재 슬라이드 index
// const slideCount = slideImg.length; // 슬라이드 개수
// const slideWidth = 100; //한개의 슬라이드 넓이
// const slideMargin = 0; //슬라이드간의 margin 값

// //전체 슬라이드 컨테이너 넓이 설정
// slides.style.width = (slideWidth + slideMargin) * slideCount + 'vw';

// function moveSlide(num) {
//   slides.style.left = -num * 100 + 'vw';
//   currentIdx = num;
// }

// window.addEventListener("keydown", (e) => {
//     if(e.keyCode == 38){ // Press the Up
//         if(currentIdx !== 0) moveSlide(currentIdx - 1);
//     }else if(e.keyCode == 40){ // Press the Down
//         if(currentIdx !== slideCount-1) moveSlide(currentIdx + 1);
//     }
// });

// let inputFlag = true; // 슬라이드가 넘어가는 동안 even 발생 차단을 위한 변수

// window.addEventListener("wheel", (e) => {
//     if(inputFlag){
//         inputFlag = false;

//         if(e.deltaY < 1){
//             if(currentIdx !== 0) moveSlide(currentIdx - 1);
//         }else if (e.deltaY > 1){
//             console.log(inputFlag);
//             if (currentIdx !== slideCount-1) moveSlide(currentIdx + 1);
//         }
//         setTimeout(function() { // 슬라이드가 넘어가는 동안 flag off
//         inputFlag = true;
//         }, 1100); 
//     }
// });
