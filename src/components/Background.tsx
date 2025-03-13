import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Three.js background
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);

    // Create enhanced stars particles
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2500; // Increased star count
    const starsPositions = new Float32Array(starsCount * 3);
    const starsSizes = new Float32Array(starsCount);

    for (let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      starsPositions[i3] = (Math.random() - 0.5) * 120;
      starsPositions[i3 + 1] = (Math.random() - 0.5) * 120;
      starsPositions[i3 + 2] = (Math.random() - 0.5) * 120;
      
      // Varied star sizes
      starsSizes[i] = Math.random() * 0.1 + 0.02;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(starsSizes, 1)); // Add size attribute
    
    // Create material with different colors for stars
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true // Enable size attenuation
    });

    const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starsMesh);

    // Create digital circuit lines
    const circuitLinesCount = 15;
    const circuitLines: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>[] = [];
    
    for (let i = 0; i < circuitLinesCount; i++) {
      const points = [];
      const segmentCount = Math.floor(Math.random() * 5) + 3;
      let x = (Math.random() - 0.5) * 100;
      let y = (Math.random() - 0.5) * 100;
      let z = (Math.random() - 0.5) * 100;
      
      for (let j = 0; j < segmentCount; j++) {
        points.push(new THREE.Vector3(x, y, z));
        
        // Create 90-degree turns for circuit-like appearance
        const direction = Math.floor(Math.random() * 3);
        const distance = Math.random() * 10 + 5;
        
        if (direction === 0) x += distance;
        else if (direction === 1) y += distance;
        else z += distance;
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const color = Math.random() > 0.5 ? 0x00ffff : 0xff3366; // Cyan or red
      const material = new THREE.LineBasicMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.3 + Math.random() * 0.3
      });
      
      const line = new THREE.Line(geometry, material);
      circuitLines.push(line);
      scene.add(line);
    }

    // Camera position
    camera.position.set(0, 5, 50);
    camera.rotation.x = -0.1;

    // Animation
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Rotate stars slowly
      starsMesh.rotation.y += 0.0003;
      starsMesh.rotation.x += 0.0001;

      // Animate circuit lines
      circuitLines.forEach((line, index) => {
        line.material.opacity = 0.2 + Math.sin(time + index) * 0.2;
      });

      // Very subtle camera movement
      camera.position.x += (mouseX - camera.position.x) * 0.01;
      camera.position.y += (-mouseY - camera.position.y) * 0.01;

      renderer.render(scene, camera);
    };

    // Mouse move effect
    const handleMouseMove = (event: MouseEvent) => { // Added type annotation
      mouseX = (event.clientX - window.innerWidth / 2) * 0.002; // Slightly increased movement
      mouseY = (event.clientY - window.innerHeight / 2) * 0.002;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none" />
      
      {/* Additional CSS overlay effects */}
      <div className="fixed top-0 left-0 w-full h-full z-9 pointer-events-none">
        {/* Scan lines effect */}
        <div className="absolute inset-0 scanlines"></div>
        
        {/* Occasional glitch effect */}
        <div className="absolute inset-0 glitch-effect"></div>
      </div>
    </>
  );
}