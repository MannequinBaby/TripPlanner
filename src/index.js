const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2NvdHRhbmRlcnNvbmdpcyIsImEiOiJjam9nZnF3eHkwZXA3M2txZnI0eGp1Zjc3In0.aHI2v_hYZxiu2Z0bhcyZNQ";

let map = new mapboxgl.Map({
  container: "map",
  center: [35.272, -120.74],
  zoom: 8, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10"
});
const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([35.272, -120.74]).addTo(map);
