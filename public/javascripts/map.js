mapboxgl.accessToken =
  "pk.eyJ1IjoiaXRzdGhlYW5kcmUiLCJhIjoiY2swaTRlNHN2MDhqZzNvcDVpcXZ3aGw2NiJ9.7E6mB22CddNilYJwPw3KPQ";

navigator.geolocation.getCurrentPosition(onSuccess);

function onSuccess(position) {
  console.log("position:", position);
  drawMap([position.coords.longitude, position.coords.latitude]);
}

function drawMap(center) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 8,
  });

  map.addControl(new mapboxgl.NavigationControl());

  geojson.features.forEach((singleMarker) => {
    const el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker(el)
      .setLngLat(singleMarker.geometry.coordinates)
      .addTo(map);
  });
}

var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [userInfo.longitude, userInfo.latitude],
      },
      properties: {
        title: "Mapbox",
        description: "Washington, D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [2.294694, 48.858093],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
  ],
};
