const slideWrap = document.querySelector(".main_info");

const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

let slideItems = document.querySelectorAll(".slide");
const maxSlide = slideItems.length;

let currSlide = -1;

const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

// 무한 슬라이드를 위해 start, end 슬라이드 복사
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;


// 각 복제한 엘리먼트 추가
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

// 엘리먼트 추가 후 wrap 크기 재조정
const wrap = document.querySelector(".slide_wrap");
wrap.style.width = 65 * (maxSlide+2) + '%';


// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택
slideItems = document.querySelectorAll(".slide");
slideWidth = slide.clientWidth;

function nextMove() {
  currSlide++;

  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위함
  if (currSlide < maxSlide) {
    const offset = slideWidth * currSlide;
 
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
    });

    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide].classList.add("active");
  } else {
    currSlide = -1;
    
    let offset = slideWidth * currSlide;

    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });

    currSlide++;
    offset = slideWidth * currSlide;

    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);

    // // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide].classList.add("active");
  }
}

function prevMove() {
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > -1) {
    const offset = slideWidth * currSlide;

    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
    });

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide].classList.add("active");
  } else {
    currSlide = maxSlide;
    let offset = slideWidth * currSlide;

    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
    });

    currSlide--;
    offset = slideWidth * currSlide;

    setTimeout(() => {

      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide].classList.add("active");
  }
}

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
    currSlide = i;
    const offset = slideWidth * currSlide;

    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide].classList.add("active");
  });
}

// 드래그(스와이프) 이벤트를 위한 변수 초기화
let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slideWrap.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slideWrap.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우
    nextMove();
  }
});

// 모바일 터치 이벤트 (스와이프)
slideWrap.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
slideWrap.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
  if (startPoint < endPoint) {
    // 오른쪽으로 스와이프 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 왼쪽으로 스와이프 된 경우
    nextMove();
  }
});

// 기본적으로 슬라이드 루프 시작하기
let loopInterval = setInterval(() => {
    nextMove();
}, 3500);

// 슬라이드에 마우스가 올라간 경우 루프 멈추기
slide.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});

// 슬라이드에서 마우스가 나온 경우 루프 재시작하기
slide.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 3500);
});