function expandNav() {
  sn = document.getElementById("_sidenav");
  snc = document.getElementById("_sidenav-container");
  sn.style.width = "200px";
  snc.style.margin = "0 10%";
  snc.children[0].classList.toggle("sidenav__box--open");
  snc.children[1].classList.toggle("sidenav__box--open");
  snc.children[2].classList.toggle("sidenav__box--open");
}

function shrinkNav() {
  sn = document.getElementById("_sidenav");
  snc = document.getElementById("_sidenav-container");
  sn.style.width = "80px";
  snc.style.margin = "0 30%";
  snc.children[0].classList.toggle("sidenav__box--open");
  snc.children[1].classList.toggle("sidenav__box--open");
  snc.children[2].classList.toggle("sidenav__box--open");
}
