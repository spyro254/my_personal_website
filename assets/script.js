// function toggleNav() {
//   clicked = document.getElementById("_togglenav").parentElement;
//   po = document.getElementById("_page-overlay");
//   if (clicked.classList.contains("btm-nav--open")) {
//     clicked.classList.remove("btm-nav--open");
//     clicked.classList.add("btm-nav--closed");
//     po.classList.remove("page-overlay--show");
//     po.classList.add("page-overlay--hide");
//   }
//   else if (clicked.classList.contains("btm-nav--closed")){
//     clicked.classList.remove("btm-nav--closed");
//     clicked.classList.add("btm-nav--open");
//     po.classList.remove("page-overlay--hide");
//     po.classList.add("page-overlay--show");
//   }
//   else {
//     clicked.classList.remove("btm-nav--closed");
//     clicked.classList.add("btm-nav--open");
//     po.classList.remove("page-overlay--hide");
//     po.classList.add("page-overlay--show");
//   }
// }

function expandNav() {
  sn = document.getElementById("_sidenav");
  snc = document.getElementById("_sidenav-container");
  sn.style.width = "200px";
  sn.children[0].innerHTML = "Abdulrehmarn Ali";
  snc.style.margin = "0 10%";
}

function shrinkNav() {
  sn = document.getElementById("_sidenav");
  snc = document.getElementById("_sidenav-container");
  sn.style.width = "80px";
  sn.children[0].innerHTML = "A Ali";
  snc.style.margin = "0 30%";
}
