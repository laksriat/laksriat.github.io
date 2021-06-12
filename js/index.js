const languageBtn = document.getElementById("languageBtn");
var selectedLanguage = "LK";
var sinhaleStr = "<p>LK | <strike>EN</strike><p>";
var englishStr = "<p><strike>LK</strike> | EN<p>";
updateLanguageBtn();
showLoading();
$(document).ready(function() {
    $("body").removeClass("hidden");
});
hideLoading();
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
        languageBtn.innerHTML = sinhaleStr;
        $(".sinhala").removeClass("hidden");
        $(".english").addClass("hidden");
    }
    else {
        languageBtn.innerHTML = englishStr;
        $(".sinhala").addClass("hidden");
        $(".english").removeClass("hidden"); 
    }
}