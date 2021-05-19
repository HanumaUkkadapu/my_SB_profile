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
		"--hdr-shdw-clr",
		"--nav-link-hvr-bg-1",
		"--nav-link-brd-clr",
		"--nav-opn-bg",
		"--nav-link-hvr-bg-2",
		"--mn-hvr-bg",
		"--cta-hvr",
		"--cta-fcs-clr",
		"--sec-h-bg",
		"--prj-tl-ol-clr",
		"--prj-tl-fltr",
		"--vw-all-hvr-brd-clr",
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
			"#c5edac",
			"rgba(255, 255, 255, 0.33)",
			"rgba(255, 255, 255, 0.18)",
			"rgba(255, 255, 255, 0.4)",
			"rgba(22, 22, 22, 0.9)",
			"#4f5f45",
			"rgba(255, 255, 255, 0.2)",
			"brightness(0.94)",
			"#805c1a",
			"#4f5f45",
			"rgba(255, 255, 255, 0.6)",
			"brightness(0.85)",
			"rgba(255, 255, 255, 0.3)",
			"rgba(255, 255, 255, 0.08)",
			"#8aa678",
			"#b1d59b"
		],
		light: [
			"#c5edac",
			"#e2f6d6",
			"black",
			"#c5edac",
			"black",
			"rgba(0, 0, 0, 0.33)",
			"rgba(0, 0, 0, 0.18)",
			"rgba(0, 0, 0, 0.4)",
			"rgba(226, 246, 214, 0.9)",
			"#c5edac",
			"rgba(0, 0, 0, 0.1)",
			"brightness(1.06)",
			"#cc9329",
			"#b1d59b",
			"rgba(22, 22, 22, 0.6)",
			"brightness(1)",
			"rgba(0, 0, 0, 0.3)",
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
