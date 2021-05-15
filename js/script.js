let root,
	menuBtn,
	navEl,
	navlinks,
	go2Top,
	go2TopBtn,
	dsp,
	prevYPos = -1,
	currYPos,
	flag = false;

window.addEventListener("DOMContentLoaded", () => {
	init();
	window.addEventListener("scroll", () => {
		currYPos = window.pageYOffset;
		if (prevYPos < currYPos && currYPos > 600 && !flag) {
			go2Top.style.display = "flex";
			flag = !flag;
		} else if (prevYPos > currYPos && currYPos < 600 && flag) {
			go2Top.style.display = "none";
			flag = !flag;
		}
		prevYPos = currYPos;
		/*
  if(window.pageYOffset > 600) go2Top.style.display = 'block';
  else go2Top.style.display = 'none';
  */
	});
	go2TopBtn.addEventListener("click", () => {
		root.scrollTop = 0;
	});

	menuBtn.addEventListener("click", () => {
		menuBtn.children[0].children[0].classList.toggle("cross");
		navEl.classList.toggle("open");
	});

	navLinks.forEach((el) => {
		el.addEventListener("click", () => {
			menuBtn.click();
		});
	});
});

function init() {
	root = document.documentElement;
	menuBtn = document.getElementById("menu");
	navEl = document.getElementById("nav_el");
	navLinks = document.querySelectorAll("#nav_el a");
	go2Top = document.getElementById("back2Top");
	go2TopBtn = document.querySelector("#back2Top button");
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
