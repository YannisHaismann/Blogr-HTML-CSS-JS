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
const invisibleLayer = document.querySelector(".invisible-layer");
//PRODUCT
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

//HAMBURGER
