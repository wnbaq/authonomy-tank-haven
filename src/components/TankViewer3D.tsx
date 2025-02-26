
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TankViewer3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create a simple tank body (placeholder)
    const geometry = new THREE.BoxGeometry(2, 1, 3);
    const material = new THREE.MeshPhongMaterial({ color: 0x3b3b3b });
    const tank = new THREE.Mesh(geometry, material);
    scene.add(tank);

    camera.position.z = 5;
    camera.position.y = 2;
    camera.lookAt(tank.position);

    const animate = () => {
      requestAnimationFrame(animate);
      tank.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full bg-tank-900 rounded-lg" />;
};

export default TankViewer3D;
