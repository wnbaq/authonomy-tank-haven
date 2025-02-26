
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
      zoom: 13,
      center: [-122.4194, 37.7749], // Default center - San Francisco
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

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
