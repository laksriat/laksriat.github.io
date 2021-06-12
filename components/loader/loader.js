if (!window.location.pathname.includes("loader")) {
	addLoaderBody();

    $(".loader").hide();
}

function addLoaderBody() {
	const body = document.querySelector("#loader");
    if (body != undefined) {
        body.innerHTML = 
        `
        <link rel="stylesheet" href="/components/loader/loader.css"/>
        <div class="loader">
            <div class="loading-wrapper"></div>    
            <div class="loading-border"> 
                <div class="loading"></div>
            </div>   
        </div>
        `;
    }
}
function hideLoading() {
    setTimeout(function(){ $(".loader").fadeOut("slow"); }, 500);
}

function showLoading() {    
    $(".loader").fadeIn("slow");
}