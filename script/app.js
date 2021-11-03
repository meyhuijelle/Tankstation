const listenToSideNav = function() {
    const hamburgerMenuButton = document.querySelector('.js-toggle-nav')
    hamburgerMenuButton.addEventListener('click', function(){
        console.log('Er is op me gedrukt!');
        document.querySelector("body").classList.toggle("has-mobile-nav");
    })
    // const other = document.querySelector('body')
    // other.addEventListener('click', function(){
    //     console.log('Er is op de body gedrukt!')
    //     // document.querySelector("body").classList.remove("has-mobile-nav");

    // })
}

document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM ingeladen!')
    listenToSideNav()
});