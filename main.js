var menu = document.getElementsByClassName("menu")[0];


function openSesame(x) {
  x.classList.toggle("change");
  if (menu.style.visibility === "hidden") {
    menu.classList.toggle("show-menu");
    menu.style.visibility = "visible";
  } else if (menu.style.visibility === "visible") {
    menu.style.visibility = "hidden";
  }
}

function openNav(x) {
  x.classList.toggle("change");
  document.getElementById("menu").style.height = "100%";
}

function closeNav() {
  var y = document.getElementById("hamburger-container");
  y.classList.toggle("bar1")
  document.getElementById("menu").style.height = "0%";
}
