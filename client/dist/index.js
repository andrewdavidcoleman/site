// JS file not using webpack

document.getElementById('main').addEventListener("scroll", showMenu)

function showMenu() {
  const breakpoint = $(window).height() * 0.8;
  if (document.getElementById('main').scrollTop > breakpoint) {
      document.getElementById("scrollMenu").style.top = "0";
  } else {
      document.getElementById("scrollMenu").style.top = "-100%";
  }
}

function scrollToPortfolio(){
  document.getElementById('portfolio-section').scrollIntoView({ block: 'center',  behavior: 'smooth' });
}

function scrollToStory(){
  document.getElementById('story-section').scrollIntoView({ block: 'center',  behavior: 'smooth' });
}

function scrollToContact(){
  document.getElementById('contact-section').scrollIntoView({ block: 'center',  behavior: 'smooth' });
}

function submitForm() {
  console.log('submit');
}
