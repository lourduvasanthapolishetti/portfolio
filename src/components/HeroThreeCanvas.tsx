import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, Compass } from 'lucide-react';

interface HeroThreeCanvasProps {
  className?: string;
  interactive?: boolean;
}

export const HeroThreeCanvas: React.FC<HeroThreeCanvasProps> = ({
  className = '',
  interactive = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isInteracting, setIsInteracting] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x070c18, 1);

    // ROOT HOLOGRAPHIC GROUP
    const hologramGroup = new THREE.Group();
    scene.add(hologramGroup);

    // PALETTE: Vivid Cyan & Emerald & Electric Indigo (Optimized for maximum contrast & visibility)
    const primaryColor = 0x00e5ff; // Radiant Cyan
    const secondaryColor = 0x10b981; // Vibrant Emerald
    const accentColor = 0xa855f7; // Vivid Violet
    const coreColor = 0x0f172a;

    // 1. OUTER WIREFRAME ICOSAHEDRON (Primary Data Cage)
    const outerRadius = 3.0;
    const outerGeo = new THREE.IcosahedronGeometry(outerRadius, 1);
    const outerWireMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerWireMat);
    hologramGroup.add(outerMesh);

    // 2. INNER DENSE FACETED CORE (Central Intelligence)
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: coreColor,
      roughness: 0.25,
      metalness: 0.9,
      emissive: 0x082f49,
      emissiveIntensity: 0.4
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    hologramGroup.add(innerMesh);

    // Inner wireframe overlay for tech lattice
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const innerWireMesh = new THREE.Mesh(innerGeo, innerWireMat);
    hologramGroup.add(innerWireMesh);

    // 3. GLOWING VERTICES (Data Nodes on Outer Cage)
    const nodeGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x38bdf8 : 0x0284c7
    });
    const pos = outerGeo.attributes.position;
    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < pos.count; i += 3) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(pos.getX(i), pos.getY(i), pos.getZ(i));
      hologramGroup.add(node);
      nodes.push(node);
    }

    // 4. MULTI-AXIS ORBITAL GIMBAL RINGS (Planetary Data Pipelines)
    const createRing = (radius: number, tube: number, color: number, rotX: number, rotY: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.65
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.set(rotX, rotY, 0);
      hologramGroup.add(ringMesh);
      return ringMesh;
    };

    const ring1 = createRing(4.2, 0.028, primaryColor, Math.PI / 3, 0);
    const ring2 = createRing(4.7, 0.024, secondaryColor, -Math.PI / 4, Math.PI / 6);
    const ring3 = createRing(5.2, 0.02, accentColor, Math.PI / 2.2, Math.PI / 3);

    // 5. ORBITING SATELLITE DATA CHIPS (Representing SQL, Power BI, LIMS, Excel)
    const satelliteCount = 4;
    const satellites: THREE.Mesh[] = [];
    const satGeo = new THREE.BoxGeometry(0.26, 0.14, 0.14);
    const satMat = new THREE.MeshStandardMaterial({
      color: secondaryColor,
      roughness: 0.1,
      metalness: 0.9,
      emissive: secondaryColor,
      emissiveIntensity: 0.8
    });

    for (let i = 0; i < satelliteCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      hologramGroup.add(sat);
      satellites.push(sat);
    }

    // 6. VOLUMETRIC DATA PARTICLE FIELD (Star-stream constellation)
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const baseColor1 = new THREE.Color(primaryColor);
    const baseColor2 = new THREE.Color(secondaryColor);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spherical shell distribution
      const r = 3.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i3 + 2] = r * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? baseColor1 : baseColor2;
      particleColors[i3] = mixed.r;
      particleColors[i3 + 1] = mixed.g;
      particleColors[i3 + 2] = mixed.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    hologramGroup.add(particles);

    // 7. DYNAMIC LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(primaryColor, 4, 25);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(secondaryColor, 4, 25);
    pointLight2.position.set(-5, -4, 4);
    scene.add(pointLight2);

    // MOUSE & INTERACTION STATE
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      targetX = ((clientX / rect.width) - 0.5) * 2;
      targetY = ((clientY / rect.height) - 0.5) * 2;

      if (isMouseDown) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        dragVelocityX = deltaX * 0.006;
        dragVelocityY = deltaY * 0.006;
        hologramGroup.rotation.y += dragVelocityX;
        hologramGroup.rotation.x += dragVelocityY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      if (!interactive) return;
      isMouseDown = true;
      setIsInteracting(true);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isMouseDown = false;
      setIsInteracting(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        targetX = (((touch.clientX - rect.left) / rect.width) - 0.5) * 2;
        targetY = (((touch.clientY - rect.top) / rect.height) - 0.5) * 2;
      }
    };

    container.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchmove', onTouchMove, { passive: true });

    // RESIZE OBSERVER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // ANIMATION LOOP
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth camera sway with damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!isMouseDown) {
        // Inertia decay
        dragVelocityX *= 0.94;
        dragVelocityY *= 0.94;
        hologramGroup.rotation.y += dragVelocityX;
        hologramGroup.rotation.x += dragVelocityY;

        // Baseline rotation
        hologramGroup.rotation.y += 0.005 * rotationSpeed;
        hologramGroup.rotation.x = Math.sin(elapsed * 0.4) * 0.12 + (mouseY * 0.3);
      }

      // Parallax camera lookAt
      camera.position.x = mouseX * 1.5;
      camera.position.y = -mouseY * 1.2;
      camera.lookAt(0, 0, 0);

      // Gimbal rings rotation at differential velocities
      ring1.rotation.z += 0.012 * rotationSpeed;
      ring2.rotation.z -= 0.008 * rotationSpeed;
      ring3.rotation.z += 0.005 * rotationSpeed;

      // Inner core reverse counter-spin
      innerMesh.rotation.y -= 0.015 * rotationSpeed;
      innerMesh.rotation.x = Math.cos(elapsed * 0.8) * 0.2;
      innerWireMesh.rotation.y -= 0.015 * rotationSpeed;
      innerWireMesh.rotation.x = Math.cos(elapsed * 0.8) * 0.2;

      // Satellites orbiting in 3D paths
      satellites.forEach((sat, idx) => {
        const satAngle = elapsed * 0.8 + (idx * (Math.PI / 2));
        const satRadius = 4.4 + Math.sin(elapsed + idx) * 0.2;
        sat.position.set(
          Math.cos(satAngle) * satRadius,
          Math.sin(satAngle * 0.7) * 1.8,
          Math.sin(satAngle) * satRadius
        );
        sat.rotation.x += 0.02;
        sat.rotation.y += 0.03;
      });

      // Node pulsing
      const pulse = 1 + Math.sin(elapsed * 2.5) * 0.15;
      nodes.forEach((node, i) => {
        const offset = (i % 3) * 0.2;
        node.scale.setScalar(pulse + offset);
      });

      // Particle slow drift
      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchmove', onTouchMove);
      resizeObserver.disconnect();
      renderer.dispose();
      outerGeo.dispose();
      outerWireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      innerWireMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      satGeo.dispose();
      satMat.dispose();
    };
  }, [isDark, interactive, rotationSpeed]);

  return (
    <div
      ref={containerRef}
      id="hero-three-container"
      className={`relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing border border-slate-300 dark:border-cyan-500/30 bg-[#070c18] shadow-2xl ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block relative z-10" />

      {/* Futuristic Corner Tech Brackets */}
      <div className="absolute top-3 left-3 z-20 pointer-events-none flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold bg-cyan-950/90 px-2.5 py-1 rounded-md border border-cyan-400/50 shadow-md">
          3D QUANTUM DATA CORE // LIVE
        </span>
      </div>

      <div className="absolute top-3 right-3 z-20 pointer-events-none text-right">
        <span className="text-[10px] font-mono text-slate-200 block font-medium">
          SQL · DAX · ETL · LIMS
        </span>
        <span className="text-[9px] font-mono text-emerald-400 block font-bold">
          99.8% AUDIT INTEGRITY
        </span>
      </div>

      {/* Floating 3D Telemetry HUD Chips */}
      <div className="absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-2 pointer-events-none">
        <div className="px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono text-cyan-200 flex items-center gap-1.5 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>DRAG TO ROTATE 360°</span>
        </div>
        <div className="hidden sm:flex px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono text-emerald-300 items-center gap-1.5 shadow-lg">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span>INTERACTIVE PHYSICS</span>
        </div>
      </div>

      {/* Speed Multiplier & Reset Controls */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5">
        <button
          onClick={() => setRotationSpeed((prev) => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1))}
          className="px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-[10px] font-mono transition-all flex items-center gap-1 shadow-md"
          title="Toggle 3D Speed"
        >
          <Compass className="w-3 h-3 text-cyan-400" />
          <span>{rotationSpeed}x VELOCITY</span>
        </button>
      </div>

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-16 w-full animate-scanline pointer-events-none" />
    </div>
  );
};
