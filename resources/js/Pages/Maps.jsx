import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; // Importer les styles CSS de Leaflet
import L from 'leaflet';

const Map = () => {
    useEffect(() => {
        // Créer une carte Leaflet et l'ajouter à votre div avec l'ID 'map'
        const map = L.map('map').setView([12.1536, 15.0341], 13);

        // Ajouter une tuile de carte OpenStreetMap à votre carte
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);
    }, []);

    return (
        <div id="map" className="bg-light p-30 mb-30" style={{ width: '100%', height: '400px' }}></div>
    );
};

export default Map;
