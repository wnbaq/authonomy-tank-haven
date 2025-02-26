
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      zoom: 12,
      center: [-74.140814, 40.738788], // Center on first coordinate
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add markers for start and end points
    new mapboxgl.Marker({ color: '#00ff00' })
      .setLngLat([-74.140814, 40.738788])
      .addTo(map.current);

    new mapboxgl.Marker({ color: '#ff0000' })
      .setLngLat([-74.096203, 40.752953])
      .addTo(map.current);

    // Fetch directions when map loads
    map.current.on('load', async () => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/-74.140814,40.738788;-74.096203,40.752953?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${mapboxToken}`
        );
        
        const data = await response.json();
        
        if (data.routes && data.routes[0]) {
          map.current?.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: data.routes[0].geometry
            }
          });

          map.current?.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#00ff00',
              'line-width': 4,
              'line-opacity': 0.75
            }
          });

          // Fit the map to show the full route
          const coordinates = data.routes[0].geometry.coordinates;
          const bounds = coordinates.reduce((bounds: mapboxgl.LngLatBounds, coord: number[]) => {
            return bounds.extend([coord[0], coord[1]]);
          }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

          map.current?.fitBounds(bounds, {
            padding: 50
          });
        }
      } catch (error) {
        console.error('Error fetching directions:', error);
      }
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="bg-tank-800/50 rounded-lg p-4 space-y-4">
        <div className="text-white/80 text-sm">
          Please enter your Mapbox public token to display the map.
          You can get one at <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">mapbox.com</a>
        </div>
        <input
          type="text"
          placeholder="Enter Mapbox token"
          className="w-full bg-tank-700 text-white border border-tank-600 rounded px-3 py-2"
          onChange={(e) => setMapboxToken(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
  );
};

export default Map;
