if (window.listing?.geometry?.coordinates) {
  const map = new maplibregl.Map({
    container: "map",
    style: `https://api.maptiler.com/maps/streets/style.json?key=${window.mapToken}`,
    center: window.listing.geometry.coordinates, // [lng, lat]
    zoom: 9,
  });

  map.addControl(new maplibregl.NavigationControl());

  new maplibregl.Marker({ color: "red" })
    .setLngLat(window.listing.geometry.coordinates)
    .setPopup(
      new maplibregl.Popup({ offset: 25 }).setHTML(
        `<h4>${window.listing.title}</h4><p>Exact location will be provided after booking.</p>`
      )
    )
    .addTo(map)
    .togglePopup(); // shows popup by default
} else {
  console.warn("No coordinates found for this listing.");
}
