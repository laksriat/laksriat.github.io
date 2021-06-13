

const nav_routes = ["/#", "/products.html", "/#contact", "/#about"];
const routes = ["/", "/products.html"];
const hashes = {
	"/": ["", "#contact", "#about"] // Hashes for index/home page
};

// Language related varaibles
var languageBtn;
var selectedLanguage = "LK";
var LKStr = "<p>LK | <strike>EN</strike><p>";
var ENStr = "<p><strike>LK</strike> | EN<p>";

var dashOrigin = -35; //pixels
var selectedLi = -35; //pixels
var speed = 500; //move this many pixels in one second.
var distance = 0;
var time = 0;

if (!document.location.pathname.includes("header")) {
	addHeaderBody();
}

const lis = document.querySelectorAll("li");
const lbs = document.querySelectorAll(".lb");
const ul = document.querySelector("ul");
const lineDash = document.querySelector(".line-dash");	

handleActivePage();

for (let i = 0; i < 4; ++i) {
	lis[i].addEventListener("mouseover", function() {
		dashOrigin = Math.abs(250 * i);
		lineDash.attributes.x1.value = dashOrigin;
	});

	lis[i].addEventListener("click", function() {
		selectedLi = -250 * i - 35;
		removeCurrentActive()
		callActive(i, true);
	});
}

function handleActivePage() {
	var nav_route_length = routes.length;
	var location_path_name = document.location.pathname;
	var location_hash = document.location.hash;
	for (let i = 0; i < nav_route_length; i++) {
		if (location_path_name == routes[i]) {
			if (location_hash != null && location_hash != "") {
				var hash_arr = hashes[location_path_name];
				var hash_length = hash_arr.length;
				if (hash_length > 0) {
					var activeHashFound = false;
					for (let j = 0; j < hash_length; j++) {
						if (location_hash == hash_arr[j]) {
							if (j > 0) {
								handleActive(i + 1 + j);
							}
							else {
								handleActive(i + j);
							}
							activeHashFound = true;
							break;
						}
					}
					if (activeHashFound) break;					
					handleActive(i);
				}
				else {
					handleActive(i);
					break;
				}
			}
			else {
				handleActive(i);
				break;
			}
		}
	}
}

function addHeaderBody() {
	const body = document.querySelector("#header");

	if (body != undefined) {
		body.innerHTML = 
		`
		<link rel="stylesheet" href="/components/header/header.css"/>
		<div id="header-body" class="hidden">
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
				<a href="/#">Home</a>
				<a href="/products.html">Products</a>
				<a href="/#contact">Contact Us</a>
				<a href="/#about">About</a>
			</div>

			<!-- Language trigger button -->
			<button id="languageBtn" onclick="triggerLanguage()"></button>

			<!-- Floating button for contact section -->
			<div class="nav-icon">
				<div class="nav-icon-tooltip">Contact Us</div>
			</div>
			<script src="/components/header/header.js"></script>
		</div>
		`;
	}

	// Show elements
	$(document).ready(function() {
		$("#header-body").removeClass("hidden");
	});

	// Handle language
	languageBtn = document.getElementById("languageBtn");
	updateLanguageBtn();

	// Add events for nav-icon
	const navIcon = document.getElementsByClassName("nav-icon").item(0);
	navIcon.addEventListener("mouseover", function() {

	});
	navIcon.addEventListener("click", function() {
		handleActive(2, true);
	});
}

function handleActive(index, routeTo = false) {	
	dashOrigin = Math.abs(250 * index);
	lineDash.attributes.x1.value = dashOrigin;			
	selectedLi = -250 * index - 35;
	removeCurrentActive();
	callActive(index, routeTo);
}

function callActive(index, routeTo) {
	lis[index].classList.add("active");
	lbs[index].setAttribute("transform","matrix(1,0,0,1,0,-43)");
	if (routeTo) {
		navigateTo(index);
	}
}

function navigateTo(index) {	
	window.location = nav_routes[index];
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

// Handle side navigation menu
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

// Language related methods
function triggerLanguage ()  {
    if (selectedLanguage == "LK") {  
        selectedLanguage = "EN";              
        updateLanguageBtn();
    }
    else {             
        selectedLanguage = "LK";   
        updateLanguageBtn();
    }
}

function updateLanguageBtn() {
    if (selectedLanguage == "LK") {
        languageBtn.innerHTML = LKStr;
        $(".LK").removeClass("hidden");
        $(".EN").addClass("hidden");
    }
    else {
        languageBtn.innerHTML = ENStr;
        $(".LK").addClass("hidden");
        $(".EN").removeClass("hidden"); 
    }
}