const imageProducts = document.querySelector('.image-products');
const footer = document.querySelector('.footer');

window.addEventListener("scroll", (event) =>{
    const docTop = $(window).scrollTop();
    const docBottom = docTop + $(window).height();

    const productsTop = $('.image-products').offset().top;
    const productsBottom = productsTop + $('.image-products').height();

    const footerTop = $('.footer').offset().top;

    if(docTop > productsBottom){
        imageProducts.style.opacity = "0";
        document.body.style.backgroundColor = "#535851"
        footer.style.opacity = "1";
        footer.style.backgroundColor = "#535851";
    }else{
        document.body.style.backgroundColor = "#fff"
        footer.style.backgroundColor = "#fff";
        footer.style.opacity = "0";
        imageProducts.style.opacity = "1";
        document.body.style.backgroundColor = "#fff"
    }
});
