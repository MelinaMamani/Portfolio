window.onload = function () {
  var btnMenu = document.querySelector(".btnMenu");
  var btnImg = document.querySelector(".iconMenu");
  var clicked = false;
  if (btnMenu) {
    btnMenu.addEventListener("click", () => {
      var menuItems = document.querySelector(".menuItems");
      menuItems.classList.toggle("show");

      if (!clicked) {
        btnImg.src = "../assets/icons/cross.svg";
        clicked = true;
      } else {
        btnImg.src = "../assets/icons/menu.svg";
        clicked = false;
      }
    });
  }
};
