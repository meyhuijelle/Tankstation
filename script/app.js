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

'use strict';

const provider = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
const copyright = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>';
//!!! correcte copyright vermelding maken!!!
let map, layergroup;
let euro95btn = document.querySelector(".js-euro95");
let euro98btn = document.querySelector(".js-euro98");
let dieselbtn = document.querySelector(".js-diesel");

// const coords, adres, stationNaam

let gastype = "";

// let stations = ["shell", "gassprom"];
// let coordinates = ["50.831510,3.262840", "50.631510,3.262840"];
// let adresses = ["oeselgem", "zulte"];

const listenToSideNav = function() {
    let toggleTrigger = document.querySelectorAll(".js-toggle-nav");
    let contactNav = document.querySelector(".js-contact");
    // let euro95btn = document.querySelector(".js-euro95");
    // let euro98btn = document.querySelector(".js-euro98");
    // let dieselbtn = document.querySelector(".js-diesel");

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

        euro98btn.classList.remove('is-pressed');
        euro98btn.classList.add('u-euro98');

        dieselbtn.classList.remove('is-pressed');
        dieselbtn.classList.add('u-diesel')

        if(euro95btn.classList.contains('is-pressed')){
            getStationsEuro95();
        }else{
            getStations();
        }
    })

    euro98btn.addEventListener('click', function(){
        console.log("er is gedrukkkkktttt!!");
        euro98btn.classList.toggle('u-euro98');
        euro98btn.classList.toggle('is-pressed');

        euro95btn.classList.remove('is-pressed');
        euro95btn.classList.add('u-euro98');

        dieselbtn.classList.remove('is-pressed');
        dieselbtn.classList.add('u-diesel')
        if(euro98btn.classList.contains('is-pressed')){
            getStationsEuro98();
        }else{
            getStations();
        }
    })

    dieselbtn.addEventListener('click', function(){
        console.log("er is gedrukkkkktttt!!");
        dieselbtn.classList.toggle('u-diesel');
        dieselbtn.classList.toggle('is-pressed');

        euro95btn.classList.remove('is-pressed');
        euro95btn.classList.add('u-euro98');

        euro98btn.classList.remove('is-pressed');
        euro98btn.classList.add('u-euro98');
        
        if(dieselbtn.classList.contains('is-pressed')){
            getStationsDiesel();
        }else{
            getStations();
        }
    })

    

}

const showStations = function (jsonObject) {
    //Toon menu
    // console.log("gaat het")

    console.log(jsonObject);
    // console.log(jsonObject[0].coords)
    layergroup.clearLayers();

    for(const station of jsonObject){
        console.log("ben er")
        console.log(station)
        const coords = station.coords; // this = het element waaraan je de eventlistener koppelt
        const adres = station.adres; // this = het element waaraan je de eventlistener koppelt
        const stationNaam = station.naam; // this = het element waaraan je de eventlistener koppelt
        maakMarker(coords, adres, stationNaam);
        // showEuro95();
    }
    
    
  };

const showStationsEuro95 = function (jsonObject) {
    //Toon menu
    // console.log("gaat het")

    console.log(jsonObject);
    // console.log(jsonObject[0].coords)
    layergroup.clearLayers();
    for(const station of jsonObject){
        console.log("ben er")
        console.log(station)
        const coords = station.coords; // this = het element waaraan je de eventlistener koppelt
        const adres = station.adres; // this = het element waaraan je de eventlistener koppelt
        const stationNaam = station.naam; // this = het element waaraan je de eventlistener koppelt
        const gastype = station.gastype;
        const price = station.price;
        maakMarkerGasType(coords, adres, stationNaam, gastype, price);
    }
    
    
  };


  const showStationsEuro98 = function (jsonObject) {
    //Toon menu
    // console.log("gaat het")

    console.log(jsonObject);
    // console.log(jsonObject[0].coords)
    layergroup.clearLayers();
    for(const station of jsonObject){
        console.log("ben er")
        console.log(station)
        const coords = station.coords; // this = het element waaraan je de eventlistener koppelt
        const adres = station.adres; // this = het element waaraan je de eventlistener koppelt
        const stationNaam = station.naam; // this = het element waaraan je de eventlistener koppelt
        const gastype = station.gastype;
        const price = station.price;
        maakMarkerGasType(coords, adres, stationNaam, gastype, price);
    }
    
    
  };

  const showStationsDiesel = function (jsonObject) {
    //Toon menu
    // console.log("gaat het")

    console.log(jsonObject);
    // console.log(jsonObject[0].coords)
    layergroup.clearLayers();
    for(const station of jsonObject){
        console.log("ben er")
        console.log(station)
        const coords = station.coords; // this = het element waaraan je de eventlistener koppelt
        const adres = station.adres; // this = het element waaraan je de eventlistener koppelt
        const stationNaam = station.naam; // this = het element waaraan je de eventlistener koppelt
        const gastype = station.gastype;
        const price = station.price;
        maakMarkerGasType(coords, adres, stationNaam, gastype, price);
    }
    
    
  };


// const showEuro95 = function(){
//     console.log(euro95btn.classList)
//     const classlist = euro95btn.classList.toString()
//     // console.log(klas)
//     if(classlist.includes("is-pressed")){
//         console.log("jaaa");
//         // gastype = "euro95";
//         // console.log(gastype)
//         // layergroup.clearLayers();
//         // getStations();
//         getStationsEuro95();

//     }
//     else{
//         console.log("nooo");
//     }
// }


const maakMarker = function (coords, adres, stationNaam) {
    //console.log(coords);

    
    const arr_coords = coords.split(','); //String spiltsen in een array
    //layergroup.clearLayers(); //telkens layer leegmaken voor we een marker aanmaken! zodat we geen 5 markers bvb op 1 plaats kunnen gaan zetten.
    let marker = L.marker(arr_coords).addTo(layergroup); //marker heeft een array nodig en geen geen string.
    // addTo... is hier dat we de marker toevoegen aan de eerder aangemaakte layer
    // lat=latitude of lengtegraad

    // if(euro95btn.getAttribute )
    marker.bindPopup(`
    <h3 style="margin:0 auto">Name: ${stationNaam}</h3>
    <h4>${gastype}</h4>
    <em style="color:black; font-size: 14px;">Located: ${adres}</em>`);
    // `` --> string litheral denkik
  };


const maakMarkerGasType = function (coords, adres, stationNaam, gastype, price) {
    //console.log(coords);

    
    const arr_coords = coords.split(','); //String spiltsen in een array
    //layergroup.clearLayers(); //telkens layer leegmaken voor we een marker aanmaken! zodat we geen 5 markers bvb op 1 plaats kunnen gaan zetten.
    let marker = L.marker(arr_coords).addTo(layergroup); //marker heeft een array nodig en geen geen string.
    // addTo... is hier dat we de marker toevoegen aan de eerder aangemaakte layer
    // lat=latitude of lengtegraad

    // if(euro95btn.getAttribute )
    marker.bindPopup(`
    <h3 style="margin:0 auto">Name: ${stationNaam}</h3>
    <p style="color:black; font-size: 22px; border:1px solid black; padding:8px; border-radius: 5px;">${gastype} => €${price}</p>
    <em style="color:black; font-size: 14px;">Located: ${adres}</em>`);
    // `` --> string litheral denkik
  };




// const addEventsToStations = function () {
    // const stations = document.querySelectorAll('.c-station__row');
    
    // const coords = coordinates[0]; // this = het element waaraan je de eventlistener koppelt
    // const adres = adresses[0]; // this = het element waaraan je de eventlistener koppelt
    // const sationNaam = stations[0]; // this = het element waaraan je de eventlistener koppelt
    // maakMarker(coords, adres, sationNaam);
      
    
//   };

  const getStations = function () {
    //handleData('https://apptankstaioneindopdracht.azurewebsites.net/api/gasStations', showStations);
    // handleData('https://appsmartank.azurewebsites.net/api/gasStations', showStations);
    handleData('https://testfortankstations.azurewebsites.net/api/gasStations', showStations);
  };

  const getStationsEuro95 = function () {
    //handleData('https://apptankstaioneindopdracht.azurewebsites.net/api/gasStations/euro95', showStationsEuro95);
    // handleData('https://appsmartank.azurewebsites.net/api/gasStations/euro95', showStationsEuro95);
    handleData('https://testfortankstations.azurewebsites.net/api/gasStations/euro95', showStationsEuro95);
  };

  const getStationsEuro98 = function () {
    //handleData('https://apptankstaioneindopdracht.azurewebsites.net/api/gasStations/euro95', showStationsEuro95);
    // handleData('https://appsmartank.azurewebsites.net/api/gasStations/euro98', showStationsEuro98);
    handleData('https://testfortankstations.azurewebsites.net/api/gasStations/euro98', showStationsEuro98);
  };

  const getStationsDiesel = function () {
    //handleData('https://apptankstaioneindopdracht.azurewebsites.net/api/gasStations/euro95', showStationsEuro95);
    // handleData('https://appsmartank.azurewebsites.net/api/gasStations/diesel', showStationsDiesel);
    handleData('https://testfortankstations.azurewebsites.net/api/gasStations/diesel', showStationsDiesel);
  };

document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM ingeladen!')
    
    // kaart aanmaken --> map aanmaken in het element met het id: mapid
    map = L.map('map').setView([51.041028, 3.398512], 10); //L is een soort object (een afleiding van leaflet). *** https://leafletjs.com/reference-1.7.1.html ***[51.041028, 3.398512] (lengtegraad en breedtegraad)--> waar je wil gaan kijken op de wereld. 10 Is hoe dicht jet het ingezoomed wil hebben.

    // De kaarten van leaflet zelf ontbreken hier, want dit heeft te maken met copyright... Dit moeten we nu zelf gaan doen!
    L.tileLayer(provider, { attribution: copyright }).addTo(map); // We gaan 2 dingen gaan meegeven aan de tileLayer! 1 waar de prentjes vandaan komen. (provider zie bovenaan de pagina of doe ctrl+click op "provider") 2 copyright meegevne. Dan adden aan de map.

    // een nieuwe laag toevoegen om die markers op te plaatsen, dit is een tile!
    // layergroup: laag waarop ik kan tekenen
    layergroup = L.layerGroup().addTo(map);
    // addEventsToStations();

    listenToSideNav();
    getStations();

    document.getElementById("barFilled").style.width = "10%";
    const gasprice = document.querySelector(".js-gasprice");
    gasprice.innerHTML = `10euro`;
    // document.getElementById("barFilled").style.backgroundColor = "green";
});

// dit is een test om te kijken of github werkt!