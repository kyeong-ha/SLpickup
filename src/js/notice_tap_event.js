/*
    각 탭을 눌렀을 때 해당되는 type만 뜨게 한다.
    즉,
    1. selected된 탭이 돋보이게 하는 css 효과
    2. selected된 탭에 해당하는 type을 제외하고는 전부 display: none 처리
*/

const allTap = document.getElementById('all_tap');
const noticeTap = document.getElementById('notice_tap');
const faqTap = document.getElementById('faq_tap');
const etcTap = document.getElementById('etc_tap');

const noticeType = document.querySelectorAll('#notice_type');
const faqType = document.querySelectorAll('#faq_type');
const etcType = document.querySelectorAll('#etc_type');

const taps = [allTap, noticeTap, faqTap, etcTap];
const types = [noticeType, faqType, etcType];

const selected = 'button notice_tap selected';
const nonSelected = 'button notice_tap';

function selectedEffect(selectedIndex){
    taps.forEach((value, index) => {
        if(index == selectedIndex) value.className = selected;
        else value.className = nonSelected;
    });
}

function showSelectedList(selectedIndex){
    types.forEach((value, index) => {
        if(index == selectedIndex) {
            value.forEach((i) => {
                i.style.display = 'flex';
            });
        }
        else{
            value.forEach((i) => {
                i.style.display = 'none';
            });
        }
    });
}

/* default */
allTap.className = selected;

/* if click a ALL tap */
allTap.addEventListener("click", (e) => {
    selectedEffect(0);
    types.forEach((value, index) => {
        value.forEach((i) => {
            i.style.display = 'flex';
        });
    });
});

/* if click a NOTICE tap */
noticeTap.addEventListener("click", (e) => {
    selectedEffect(1);
    showSelectedList(0);
});

/* if click a FAQ tap */
faqTap.addEventListener("click", (e) => {
    selectedEffect(2);
    showSelectedList(1);
});

/* if click a ETC tap */
etcTap.addEventListener("click", (e) => {
    selectedEffect(3);
    showSelectedList(2);
});