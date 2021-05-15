//let root, menuBtn, navEl, navlinks, go2Top, go2TopBtn;

const root = document.documentElement;
const menuBtn = document.getElementById("menu");
const navEl = document.getElementById("nav_el");
const navLinks = document.querySelectorAll("#nav_el a");
const go2Top = document.getElementById("back2top");
const go2TopBtn = document.querySelector("#back2top button");

menuBtn.addEventListener("click", () => {
  menuBtn.children[0].children[0].classList.toggle("cross");
  navEl.classList.toggle("open");
});

navLinks.forEach((el) => {
  el.addEventListener("click", () => {
    menuBtn.click();
  });
});


window.addEventListener("scroll", () => {
  let dsp = window.pageYOffset > 600 ? "block" : "none";
  //console.log(window.pageYOffset);
  go2Top.style.display = dsp;
  /*
if(window.pageYOffset > 600) go2Top.style.display = 'block';
else go2Top.style.display = 'none';
*/
});
go2TopBtn.addEventListener("click", () => {
  root.scrollTop = 0;
});

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
