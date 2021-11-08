const listenToSideNav = function() {
    let toggleTrigger = document.querySelectorAll(".js-toggle-nav");
    let contactNav = document.querySelector(".js-contact");
                for (let i = 0; i < toggleTrigger.length; i++) {
                    toggleTrigger[i].addEventListener("click", function() {
                        console.log("Er is op het hamburgermenu gedrukt!");
                        document.querySelector("body").classList.toggle("has-mobile-nav");
                    })
                }
    contactNav.addEventListener('click', function(){
        console.log("er is op me gedrukt!");
        contactNav.classList.toggle("c-contactSection");
    })

}

document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM ingeladen!')
    listenToSideNav()
});