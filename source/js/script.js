var mapStatic = document.querySelector(".contacts__box-map--static");
var mapInteractive = document.querySelector(".contacts__box-map--interactive");

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-menu-toggle");

var popupCart = document.querySelector(".popup");
var productWeekOrder = document.querySelector(".product-week__order");

var productAddToCart = document.querySelectorAll(".card-product__add-to-cart");

if (mapStatic) {
  mapStatic.classList.add("visually-hidden");
}

if (mapInteractive) {
  mapInteractive.classList.remove("visually-hidden");
}

if (navMain) {
  navMain.classList.remove("main-nav--nojs");
}

if (navToggle) {
  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });
}

if (productWeekOrder) {
  productWeekOrder.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.add("popup--show");
  });
}

document.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    popupCart.classList.remove("popup--show");
  }
});

if (productAddToCart) {
  for (var i = 0; i < productAddToCart.length; i++) {
    productAddToCart[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      popupCart.classList.add("popup--show");
    });
  }
}
