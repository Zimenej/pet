///*let mapa;

function initMap() {
  mapa = new google.maps.Map(document.getElementById("mapa"), {
    center: { lat: 18.5494871, lng: -99.6220976 },
    zoom: 20,
    mapTypeId: 'hybrid' // roadmap, satellite, hybrid, terrain
  });
}

