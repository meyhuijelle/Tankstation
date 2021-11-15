// let tl = gsap.timeline({
//     defaults: {
//       duration: 1,
//       ease: 'power1.inOut',
//     },
//     repeat: -1,
//     yoyo: true,
//   })

//   tl.set('#gas_drop_logo', {
//     transformOrigin: '50% 100%',
//   })

const listenToSideNav = function() {
    let toggleTrigger = document.querySelectorAll(".js-toggle-nav");
    let contactNav = document.querySelector(".js-contact");
    let euro95btn = document.querySelector(".js-euro95");
    let euro98btn = document.querySelector(".js-euro98");
    let dieselbtn = document.querySelector(".js-diesel");

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
    euro95btn.addEventListener('click', function(){
        console.log("er is gedrukkkkktttt!!");
        euro95btn.classList.toggle('u-euro95');
        euro95btn.classList.toggle('is-pressed');
    })

    euro98btn.addEventListener('click', function(){
        console.log("er is gedrukkkkktttt!!");
        euro98btn.classList.toggle('u-euro98');
        euro98btn.classList.toggle('is-pressed');
    })

    dieselbtn.addEventListener('click', function(){
        console.log("er is gedrukkkkktttt!!");
        dieselbtn.classList.toggle('u-diesel');
        dieselbtn.classList.toggle('is-pressed');
    })




}

document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM ingeladen!')
    listenToSideNav()
});