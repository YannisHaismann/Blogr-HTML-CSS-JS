//FLECHES
const arrowProduct = document.querySelector(".arrow-product");
const arrowCompany = document.querySelector(".arrow-company");
const arrowContact = document.querySelector(".arrow-contact");

const arrowProductMobile = document.querySelector(".arrow-product-mobile");
const arrowCompanyMobile = document.querySelector(".arrow-company-mobile");
const arrowContactMobile = document.querySelector(".arrow-contact-mobile");

//DESKTOP
// ->
//PRODUCT


const invisibleLayer = document.querySelector(".invisible-layer");

const productTitle = document.querySelector(".nav-header-product__title");
const productList = document.querySelector(".nav-header-product__list");
showNavItems(productTitle, productList, arrowProduct, invisibleLayer);
unshowNavItems(productList, arrowProduct, invisibleLayer);

//COMPANY
const companyTitle = document.querySelector(".nav-header-company__title");
const companyList = document.querySelector(".nav-header-company__list");
showNavItems(companyTitle, companyList, arrowCompany, invisibleLayer);
unshowNavItems(companyList, arrowCompany, invisibleLayer);

//CONTACT
const contactTitle = document.querySelector(".nav-header-contact__title");
const contactList = document.querySelector(".nav-header-contact__list");
showNavItems(contactTitle, contactList, arrowContact, invisibleLayer);
unshowNavItems(contactList, arrowContact, invisibleLayer);

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
showNavItemsMobile(productTitleMobile, arrowProductMobile, productListMobile);

const companyTitleMobile = document.querySelector(".js-mobile-company-title");
const companyListMobile = document.querySelector(".js-mobile-company-list");
showNavItemsMobile(companyTitleMobile, arrowCompanyMobile, companyListMobile);

const contactTitleMobile = document.querySelector(".js-mobile-contact-title");
const contactListMobile = document.querySelector(".js-mobile-contact-list");
showNavItemsMobile(contactTitleMobile, arrowContactMobile, contactListMobile);

//FONCTIONS
function showNavItems(title, block, arrow, invisibleLayer){
    title.addEventListener("click", function(event){
        event.preventDefault();
        block.style.display = "block";
        invisibleLayer.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    });
}
function unshowNavItems(block, arrow, invisibleLayer){
    invisibleLayer.addEventListener("click", function(event){
        block.style.display = "none";
        invisibleLayer.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    });
}

//MOBILE NAV FONCTIONS
function showNavItemsMobile(title, arrow, block) {
    title.addEventListener("click", function (event) {
        event.preventDefault();
        if(block.style.display == "block"){
            block.style.display = "none";
            arrow.style.transform = "rotate(0deg)"
        }else{
            block.style.display = "block";
            arrow.style.transform = "rotate(180deg)"
        }

    });
}
