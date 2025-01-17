// Controlla se il browser supporta la geolocalizzazione
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        // Ottieni latitudine e longitudine
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Inizializza la mappa alla posizione dell'utente
        const mappa = L.map('mappa').setView([lat, lon], 13);

        // Aggiungi le tile di OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(mappa);

        // Crea un'icona personalizzata
        const motorbikeIcon = L.icon({
            iconUrl: '../media/battery.png', // URL dell'icona della bici
            iconSize: [30, 30], // Dimensione dell'icona
            iconAnchor: [19, 38], // Punto dove l'icona "punta" sulla mappa
            popupAnchor: [0, -38] // Dove si apre il popup rispetto all'icona
        });

        // Aggiungi un marker alla posizione dell'utente
        L.marker([lat, lon]).addTo(mappa)
            .bindPopup("Sei qui!")
            .openPopup();

        // Aggiungi un marker con l'icona della bici
        L.marker([45.5463, 11.5478], { icon: motorbikeIcon }).addTo(mappa)
        .bindPopup(`<a href="#book-container"><button onclick='showMapsLink(45.5463, 11.5478)' type='button' id='book-btn-pop-up' class='btn btn-primary btn-lg'>INDICAZIONI</button></a>`);
 
        L.marker([45.5490, 11.5420], { icon: motorbikeIcon }).addTo(mappa)
        .bindPopup(`<a href="#book-container"><button onclick='showMapsLink(45.5490, 11.5420)' type='button' id='book-btn-pop-up' class='btn btn-primary btn-lg'>INDICAZIONI</button></a>`);
                
        L.marker([45.5390, 11.5500], { icon: motorbikeIcon }).addTo(mappa)
        .bindPopup(`<a href="#book-container"><button onclick='showMapsLink(45.5390, 11.5500)' type='button' id='book-btn-pop-up' class='btn btn-primary btn-lg'>INDICAZIONI</button></a>`);
                
        L.marker([45.5340, 11.5600], { icon: motorbikeIcon }).addTo(mappa)
        .bindPopup(`<a href="#book-container"><button onclick='showMapsLink(45.5340, 11.5600)' type='button' id='book-btn-pop-up' class='btn btn-primary btn-lg'>INDICAZIONI</button></a>`);
                
    }, (error) => {
        console.error("Impossibile ottenere la posizione:", error.message);
        alert("Non è stato possibile ottenere la tua posizione.");
    });
} else {
    alert("La geolocalizzazione non è supportata dal tuo browser.");
}


// Funzione per chiudere il pop-up
const closeButton = document.getElementById('closePopupBtn');
if (closeButton) {
  closeButton.addEventListener('click', function() {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'none'; // Nascondi il pop-up quando clicchi su "Chiudi"
    }
  });
}


// FUNZIONE PER MOSTRARE I LINK DI GOOGLE MAPS E MAPS DI APPLE
// https://www.google.com/maps?q=x,y
// https://maps.apple.com/?q=x,y
function showMapsLink (x, y) {
    let bookContainer = document.getElementById('book-container');
    let gBtn = document.getElementById('google-maps-link-btn');
    let popUpId = document.getElementById('book-btn-pop-up');

    popUpId.innerText = '✅ PRENOTATO';
    popUpId.id = 'book-btn-pop-up-booked';
    bookContainer.style.display = 'flex';

    // Aggiungi un evento al bottone per il reindirizzamento
    gBtn.addEventListener('click', function() {
        console.log('cliccato google')
        let googleMapsLink = `https://www.google.com/maps?q=${x},${y}`;

        // Reindirizza
        window.location.href = googleMapsLink;
    });
}