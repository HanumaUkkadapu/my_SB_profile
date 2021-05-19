let root,
	body,
	navEl,
	navlinks,
	menuBtn,
	typeHead,
	x = 0,
	str,
	dsp;

/*
    //console.log(typeof typeHead.textContent,typeHead.textContent.length);
    
*/

window.addEventListener("DOMContentLoaded", () => {
	init();

	menuBtn.addEventListener("click", () => {
		menuBtn.classList.toggle("open");
		navEl.classList.toggle("open");
		body.classList.toggle("menu-open");
	});

	navLinks.forEach((el) => {
		el.addEventListener("click", () => {
			if (menuBtn.classList.contains("open")) menuBtn.click();
		});
	});

	const vars = [
		"--comm-bg",
		"--body-bg",
		"--body-clr",
		"--hdr-bg",
		"--hdr-clr",
		"--nav-link-brd-clr",
		"--nav-opn-bg",
		"--nav-opn-clr",
		"--nav-link-hvr-bg-2",
		"--mn-hvr-bg",
		"--cta-hvr",
		"--cta-fcs-clr",
		"--prj-tl-ol-clr",
		"--pht-brd-clr",
		"--ftr-clr",
		"--ftr-nav-hvr-clr"
	];
	const theme = {
		dark: [
			"#222",
			"#222",
			"#f3f3f3",
			"var(--body-bg)",
			"#91C16C",
			"rgba(255, 255, 255, 0.4)",
			"rgba(22, 22, 22, 0.9)",
			"#91C16C",
			"#4f5f45",
			"rgba(255, 255, 255, 0.2)",
			"brightness(0.94)",
			"#805c1a",
			"rgba(255, 255, 255, 0.6)",
			"rgba(255, 255, 255, 0.08)",
			"#91C16C",
			"#b1d59b"
		],
		light: [
			"#91C16C",
			"#e2f6d6",
			"black",
			"#91C16C",
			"black",
			"rgba(0, 0, 0, 0.4)",
			"rgba(226, 246, 214, 0.9)",
			"black",
			"#91C16C",
			"rgba(0, 0, 0, 0.1)",
			"brightness(1.06)",
			"#cc9329",
			"rgba(22, 22, 22, 0.6)",
			"rgba(0, 0, 0, 0.08)",
			"#493548",
			"rgba(255, 255, 255, 0.7)"
		]
	};
	const swIp = document.getElementById("switchInput");
	swIp.addEventListener("input", () => {
		let thm = swIp.checked ? "dark" : "light";
		vars.forEach((el, i) => {
			root.style.setProperty(el, `${theme[thm][i]}`);
		});
	});

	startTyping();
	//setInterval(startTyping, 7000);
});

function init() {
	root = document.documentElement;
	body = document.body;
	navEl = document.getElementById("nav_el");
	navLinks = document.querySelectorAll("#nav_el a");
	menuBtn = document.getElementById("menu");
	typeHead = document.getElementById("typing");
	str = "Web Developer";
}

async function startTyping() {
	await sleep(1000);
	typing();
	await sleep(3000);
	unTyping();
	await sleep(2000);
	startTyping();
}

async function typing() {
	//console.log("inside typing()");
	let x = 0;
	while (x < str.length) {
		await sleep(100);
		typeHead.textContent += str.charAt(x);
		x++;
	}
}
async function unTyping() {
	//console.log("inside unTyping()");
	let x = 0,
		str2 = str;
	let letters = str2.split("");
	while (x < str.length) {
		await sleep(100);
		let ch = letters.pop();
		typeHead.textContent = letters.join("");
		x++;
	}
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
