function expandNav() {
  sn = document.getElementById("_sidenav");
  snc = document.getElementById("_sidenav-container");
  abt = document.getElementById("_snb-about");
  cod = document.getElementById("_snb-coding");
  bra = document.getElementById("_snb-branding");
  edu = document.getElementById("_snb-education");
  lin = document.getElementById("_snb-linkedin");
  git = document.getElementById("_snb-github");
  res = document.getElementById("_snb-resume");
  sn.classList.add("sidenav--open");
  snc.classList.add("sidenav__container--open");
  abt.classList.add("width-100");
  cod.classList.add("width-100");
  bra.classList.add("width-100");
  edu.classList.add("width-100");
  lin.classList.add("width-100");
  git.classList.add("width-100");
  res.classList.add("width-100");
}

function shrinkNav() {
  sn = document.getElementById("_sidenav");
  snc = document.getElementById("_sidenav-container");
  abt = document.getElementById("_snb-about");
  cod = document.getElementById("_snb-coding");
  bra = document.getElementById("_snb-branding");
  edu = document.getElementById("_snb-education");
  lin = document.getElementById("_snb-linkedin");
  git = document.getElementById("_snb-github");
  res = document.getElementById("_snb-resume");
  sn.classList.remove("sidenav--open");
  snc.classList.remove("sidenav__container--open");
  abt.classList.remove("width-100");
  cod.classList.remove("width-100");
  bra.classList.remove("width-100");
  edu.classList.remove("width-100");
  lin.classList.remove("width-100");
  git.classList.remove("width-100");
  res.classList.remove("width-100");
}

function testAlert() {
  alert('test');
}

// function menuClick() {
//   snc = document.getElementById("_sidenav-container");
//   if (snc.classList.contains("sidenav__container--open")) {
//     alert("hey");
//     // window.location.href = "http://google.com";
//   }
// }
