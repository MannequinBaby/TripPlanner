const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "nope"

let map = new mapboxgl.Map({
  container: "map",
  center: [35.272, -120.74],
  zoom: 9, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10"
});
const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([35.272, -120.74]).addTo(map);
