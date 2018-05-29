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
