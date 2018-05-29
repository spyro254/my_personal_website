function expandNav() {
  sn = document.getElementById("_sidenav");
  snc = document.getElementById("_sidenav-container");
  abt = document.getElementById("_snb-about");
  cod = document.getElementById("_snb-coding");
  bra = document.getElementById("_snb-branding");
  edu = document.getElementById("_snb-education");
  sn.style.width = "200px";
  snc.style.margin = "0 10%";
  abt.classList.add("width-100");
  cod.classList.add("width-100");
  bra.classList.add("width-100");
  edu.classList.add("width-100");
}

function shrinkNav() {
  sn = document.getElementById("_sidenav");
  snc = document.getElementById("_sidenav-container");
  abt = document.getElementById("_snb-about");
  cod = document.getElementById("_snb-coding");
  bra = document.getElementById("_snb-branding");
  edu = document.getElementById("_snb-education");
  sn.style.width = "80px";
  snc.style.margin = "0 30%";
  abt.classList.remove("width-100");
  cod.classList.remove("width-100");
  bra.classList.remove("width-100");
  edu.classList.remove("width-100");
}
