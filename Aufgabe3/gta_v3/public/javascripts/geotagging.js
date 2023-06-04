
function updateLocation() {
    if (document.getElementById('latitude').value == "" && document.getElementById('longitude').value == "") {

        LocationHelper.findLocation((location) => {
            // Zugriff auf die Eingabefelder des Tagging-Formulars
            let taggingLatitudeInput = document.getElementById('latitude');
            let taggingLongitudeInput = document.getElementById('longitude');

            // Überprüfung, ob die Eingabefelder vorhanden sind
            if (taggingLatitudeInput && taggingLongitudeInput) {
                // Aktualisieren der Eingabefeldwerte mit den Koordinaten
                taggingLatitudeInput.value = location.latitude;
                taggingLongitudeInput.value = location.longitude;
            }

            // Zugriff auf die versteckten Eingabefelder des Discovery-Formulars
            let discoveryLatitudeInput = document.getElementById('latitude-hidden');
            let discoveryLongitudeInput = document.getElementById('longitude-hidden');

            // Überprüfung, ob die versteckten Eingabefelder vorhanden sind
            if (discoveryLatitudeInput && discoveryLongitudeInput) {
                // Aktualisieren der Eingabefeldwerte mit den Koordinaten
                discoveryLatitudeInput.value = location.latitude;
                discoveryLongitudeInput.value = location.longitude;
            }
            const mapManager = new MapManager('7kGi1FF3n2jNRPac0JDJVAk84steZjnn');

            // Koordinaten abrufen und Karten-URL generieren
            const latitude = location.latitude;
            const longitude = location.longitude;
            const mapUrl = mapManager.getMapUrl(latitude, longitude, JSON.parse(document.getElementById("mapView").getAttribute("data-tags")));

            // Image-Element suchen und das src-Attribut aktualisieren
            const mapImage = document.getElementById('mapView');
            if (mapImage) {
                mapImage.src = mapUrl;
            }
        });
    }
}
// Rufen Sie die 'updateLocation'-Funktion nach dem Laden des Dokuments automatisch auf
window.addEventListener("load", updateLocation);