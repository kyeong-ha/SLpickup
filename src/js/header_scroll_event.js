const header = document.querySelector("#header");

window.addEventListener("scroll", (event) => {
    const scrollY = this.scrollY;

    if(scrollY > 0){
        header.style.boxShadow = '0px 2px 8px -4px rgb(152, 152, 152)';
    }else{
        header.style.boxShadow = '0px 0px 0px 0px';
    }
});