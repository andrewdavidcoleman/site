// JS file not using webpack

document.getElementById('main').addEventListener("scroll", showMenu)

function showMenu() {
  console.log('main scrolltop: ' + document.getElementById('main').scrollTop);
  console.log('height: ' + $(window).height());
  if (document.getElementById('main').scrollTop > $(window).height()) {
      document.getElementById("scrollMenu").style.top = "0";
  } else {
      document.getElementById("scrollMenu").style.top = "-100%";
  }
}
