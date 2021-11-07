const listenToSideNav = function() {
    let toggleTrigger = document.querySelectorAll(".js-toggle-nav");
                for (let i = 0; i < toggleTrigger.length; i++) {
                    toggleTrigger[i].addEventListener("click", function() {
                        console.log("Er is op het hamburgermenu gedrukt!");
                        document.querySelector("body").classList.toggle("has-mobile-nav");
                    })
                }
}

document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM ingeladen!')
    listenToSideNav()
});