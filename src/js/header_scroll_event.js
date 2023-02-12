const header = document.querySelector("#header");

window.addEventListener("scroll", (event) => {
    const scrollY = this.scrollY;

    if(scrollY > 56){
        header.style.backgroundColor = '#FFF';
        header.style.boxShadow = '0px 2px 8px -4px rgb(152, 152, 152)';
    }else{
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = '0px 0px 0px 0px';
    }
});