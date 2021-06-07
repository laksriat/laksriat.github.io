if (!document.location.pathname.includes("header")) {
	addHeaderBody();
}

const lis = document.querySelectorAll("li");
const lbs = document.querySelectorAll(".lb");
const ul = document.querySelector("ul");
const lineDash = document.querySelector(".line-dash");
const routes = ["/laksri/", "/laksri/products.html", "/laksri/contact.html", "/laksri/about.html"];

var dashOrigin = -35; //pixels
var selectedLi = -35; //pixels
var speed = 500; //move this many pixels in one second.
var distance = 0;
var time = 0;

handleActivePage();

for (let i = 0; i < 4; ++i) {
	lis[i].addEventListener("mouseover", function() {
		dashOrigin = Math.abs(250 * i);
		lineDash.attributes.x1.value = dashOrigin;
	});

	lis[i].addEventListener("click", function() {
		selectedLi = -250 * i - 35;
		removeCurrentActive()
		callActive(i);
	});
}

function handleActivePage() {
	var activePageFound = false;
	for (let i = 0; i < 4; ++i) {
		if (document.location.pathname == routes[i]) {
			activePageFound = true;
			dashOrigin = Math.abs(250 * i);
			lineDash.attributes.x1.value = dashOrigin;			
			selectedLi = -250 * i - 35;
			removeCurrentActive();
			lis[i].classList.add("active");
			lbs[i].setAttribute("transform","matrix(1,0,0,1,0,-43)");
		}
	}
	// if (!activePageFound) {
	// 	var i = 0;			
	// 	dashOrigin = Math.abs(250 * i);
	// 	lineDash.attributes.x1.value = dashOrigin;			
	// 	selectedLi = -250 * i - 35;
	// 	removeCurrentActive();
	// 	lis[i].classList.add("active");
	// 	lbs[i].setAttribute("transform","matrix(1,0,0,1,0,-43)");
	// }	
}

function addHeaderBody() {
	const body = document.querySelector("#header");

	if (body != undefined) {
		body.innerHTML = 
		`
		<link rel="stylesheet" href="/laksri/components/header/header.css"/>
		<div class="nav-header">ලක් ශ්‍රි අත්කම් සල</div>
		<div class="header">
			<div class="menu-button" onclick="openNav(this)">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>
			<div class="menu">
				<svg class="line-top" width="750" height="15" viewbox="0,0 1000,20">
				<line class="line-dash" x1="0" y1="15" x2="1000" y2="15"/>
				</svg>
				<ul>
				<li>Home</li><li>Products</li><li>Contact Us</li><li>About</li>
				</ul>
				<svg class="line-bottom" width="750" height="30" viewbox="0,0 1000,40">
				<polygon class="lb" points="35,53 115,53 125,43 135,53 215,53"/>
				<polygon class="lb" points="285,53 365,53 375,43 385,53 465,53" />       
				<polygon class="lb" points="535,53 615,53 625,43 635,53 715,53" />       
				<polygon class="lb" points="785,53 865,53 875,43 885,53 965,53" />
				</svg>
			</div>
		</div>
		<div id="mySidenav" class="sidenav">
			<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>			
			<a href="/laksri/">Home</a>
			<a href="/laksri/products.html">Products</a>
			<a href="/laksri/contact.html">Contact Us</a>
			<a href="/laksri/about.html">About</a>
		</div>
		<div class="nav-icon">
			<div class="nav-icon-tooltip">Contact Us</div>
		</div>
		<script src="/laksri/components/header/header.js"></script>
		`;
	}

	const navIcon = document.getElementsByClassName("nav-icon").item(0);
	navIcon.addEventListener("mouseover", function() {

	});
	navIcon.addEventListener("click", function() {
		window.location = "/laksri/contact.html";
	});
}

function callActive(index) {
	lis[index].classList.add("active");
	lbs[index].setAttribute("transform","matrix(1,0,0,1,0,-43)");
	window.location = routes[index];
}

function removeCurrentActive() {
	let current = document.getElementsByClassName("active");
	if (current[0] != undefined) {
		current[0].classList.remove("active");		
		for (let j = 0; j < 4; ++j) {
			lbs[j].removeAttribute("transform");
		}
	}
}

function menuBtnClicked(x) {
	x.classList.toggle("toggle");
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

// ul.addEventListener(
// 	"mouseleave",
// 	function(e) {
// 		if (e.relatedTarget) {
// 			distance = Math.abs(dashOrigin - selectedLi);
// 			time = distance / speed;
// 			dashOrigin = selectedLi;
// 			if (time) {
// 				// overlaping tweens would give a zero time
// 				// TweenLite.to(lineDash, time, {
// 				// 	strokeDashoffset: selectedLi,
// 				// 	ease: Bounce.easeOut
// 				// });
// 			} //if
// 		} //if
// 	},
// 	false
// );

