export default function getCurrentLatLng() {
  let currentLatLng = undefined;

  navigator.geolocation.getCurrentPosition((pos) => {
    currentLatLng = {
      lat: pos.coords.latitude,
      long: pos.coords.latitude,
    };
  });

  return currentLatLng;
}
