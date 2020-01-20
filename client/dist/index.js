// JS file not using webpack

document.getElementById('main').addEventListener("scroll", showMenu)

function showMenu() {
  console.log('pancakes');
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("scrollMenu").style.top = "0";
  } else {
      document.getElementById("scrollMenu").style.top = "-100%";
  }
}
