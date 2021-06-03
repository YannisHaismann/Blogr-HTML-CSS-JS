//DESKTOP
// ->
//PRODUCT
const invisibleLayer = document.querySelector(".invisible-layer");

const productTitle = document.querySelector(".nav-header-product__title");
const productList = document.querySelector(".nav-header-product__list");
showNavItems(productTitle, productList, invisibleLayer);
unshowNavItems(productList, invisibleLayer);

//COMPANY
const companyTitle = document.querySelector(".nav-header-company__title");
const companyList = document.querySelector(".nav-header-company__list");
showNavItems(companyTitle, companyList, invisibleLayer);
unshowNavItems(companyList, invisibleLayer);

//CONTACT
const contactTitle = document.querySelector(".nav-header-contact__title");
const contactList = document.querySelector(".nav-header-contact__list");
showNavItems(contactTitle, contactList, invisibleLayer);
unshowNavItems(contactList, invisibleLayer);

//MOBILE
// ->
//HAMBURGER
const invisibleLayer2 = document.querySelector(".invisible-layer2");

const hamburgerOpen = document.querySelector(".mobile-nav-button__open");
const hamburgerClose = document.querySelector(".mobile-nav-button__close");
const mobile = document.querySelector(".mobile");

showNavItems(hamburgerOpen, hamburgerClose, invisibleLayer2);
hamburgerOpen.addEventListener("click", function(e){
   e.preventDefault();
   hamburgerOpen.style.display = "none";
   mobile.style.display = "block"
});

hamburgerClose.addEventListener("click", function(e){
    e.preventDefault();
    hamburgerClose.style.display = "none";
    hamburgerOpen.style.display = "block";
    invisibleLayer2.style.display = "none";
    mobile.style.display = "none";
});

//NAV MOBILE
const productTitleMobile = document.querySelector(".js-mobile-product-title");
const productListMobile = document.querySelector(".js-mobile-product-list");
showNavItemsMobile(productTitleMobile, productListMobile);

const companyTitleMobile = document.querySelector(".js-mobile-company-title");
const companyListMobile = document.querySelector(".js-mobile-company-list");
showNavItemsMobile(companyTitleMobile, companyListMobile);

const contactTitleMobile = document.querySelector(".js-mobile-contact-title");
const contactListMobile = document.querySelector(".js-mobile-contact-list");
showNavItemsMobile(contactTitleMobile, contactListMobile);

//FONCTIONS
function showNavItems(title, block, invisibleLayer){
    title.addEventListener("click", function(event){
        event.preventDefault();
        block.style.display = "block";
        invisibleLayer.style.display = "block"
    });
}
function unshowNavItems(block, invisibleLayer){
    invisibleLayer.addEventListener("click", function(event){
        block.style.display = "none";
        invisibleLayer.style.display = "none";
    });
}

//MOBILE NAV FONCTIONS
function showNavItemsMobile(title, block) {
    title.addEventListener("click", function (event) {
        event.preventDefault();
        if(block.style.display == "block"){
            block.style.display = "none";
        }else{
            block.style.display = "block";
        }

    });
}
