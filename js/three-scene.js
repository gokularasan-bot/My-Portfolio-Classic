// ==========================================================================
// GOKULARASAN — 3D "ENGINEERING CORE" SYSTEM (Three.js WebGL)
// Interactive, scroll-transformed, performant technical visualization
// ==========================================================================

import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

class EngineeringCore {
  constructor() {
    this.container = document.getElementById('webgl-canvas-container');
    this.canvas = document.getElementById('webgl-canvas');
    if (!this.container || !this.canvas) return;

    // Check prefers-reduced-motion
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene & Renderer State
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.coreGroup = null;
    this.rings = [];
    this.pulses = [];
    this.nodes = [];
    this.solarPanels = [];
    this.clock = new THREE.Clock();

    // Mouse & Inertia Tracking
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotX = 0;
    this.targetRotY = 0;
    this.currentRotX = 0;
    this.currentRotY = 0;

    // Scroll State Targets
    this.scrollProgress = 0;
    this.targetPosition = new THREE.Vector3(2.2, 0, 0);
    this.targetScale = 1.0;
    this.targetComplexity = 1.0;
    this.currentScale = 1.0;

    this.init();
  }

  init() {
    try {
      // 1. Scene
      this.scene = new THREE.Scene();

      // 2. Camera
      const aspect = window.innerWidth / window.innerHeight;
      this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
      this.camera.position.set(0, 0, 9.5);

      // 3. Renderer with high performance & antialias
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // 4. Lighting (Technical Editorial lighting: Soft warm blue-grey key + amber fill)
      const ambientLight = new THREE.AmbientLight(0xf2efe8, 1.4);
      this.scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0x0f4c81, 2.2);
      dirLight.position.set(5, 8, 5);
      this.scene.add(dirLight);

      const amberLight = new THREE.PointLight(0xc8651b, 2.5, 12);
      amberLight.position.set(-3, -2, 2);
      this.scene.add(amberLight);

      // 5. Build "The Engineering Core" Geometry
      this.buildEngineeringCore();

      // 6. Event Listeners
      this.bindEvents();

      // 7. Start Animation Loop
      this.animate();
    } catch (e) {
      console.warn('WebGL initialization failed, falling back gracefully to 2D illustration:', e);
      if (this.container) this.container.style.display = 'none';
    }
  }

  buildEngineeringCore() {
    this.coreGroup = new THREE.Group();
    this.coreGroup.position.set(1.8, 0, 0);
    this.scene.add(this.coreGroup);

    // A. Central Conductive Core (Faceted Icosahedron Wireframe & Solid Kernel)
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    
    // Wireframe Mesh
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x0f4c81,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    this.coreWire = new THREE.Mesh(coreGeo, wireMat);
    this.coreGroup.add(this.coreWire);

    // Inner Glowing Kernel
    const kernelGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const kernelMat = new THREE.MeshStandardMaterial({
      color: 0x0f4c81,
      emissive: 0x166e67,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.8
    });
    this.kernelMesh = new THREE.Mesh(kernelGeo, kernelMat);
    this.coreGroup.add(this.kernelMesh);

    // Central Copper Node
    const centerPointGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const centerPointMat = new THREE.MeshBasicMaterial({ color: 0xc8651b });
    this.centerNode = new THREE.Mesh(centerPointGeo, centerPointMat);
    this.coreGroup.add(this.centerNode);

    // B. Concentric Kinetic Precision Rings
    const ringRadii = [1.8, 2.3, 2.85];
    ringRadii.forEach((radius, idx) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 0.022, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: idx === 1 ? 0xc8651b : 0x0f4c81,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: idx === 1 ? 0.6 : 0.35
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / (2 + idx * 0.4);
      ringMesh.rotation.y = (idx * Math.PI) / 3;
      
      this.rings.push({
        mesh: ringMesh,
        speedX: (idx % 2 === 0 ? 0.3 : -0.25) * 0.5,
        speedY: (idx % 2 === 0 ? -0.2 : 0.35) * 0.5
      });
      this.coreGroup.add(ringMesh);
    });

    // C. Energy Pulse Splines & Packets (Amber light flow)
    const curve = new THREE.EllipseCurve(0, 0, 2.3, 2.3, 0, 2 * Math.PI, false, 0);
    const points = curve.getPoints(50);
    const splineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const splineMat = new THREE.LineBasicMaterial({
      color: 0x0f4c81,
      transparent: true,
      opacity: 0.15
    });
    const splineLine = new THREE.Line(splineGeo, splineMat);
    splineLine.rotation.x = Math.PI / 3;
    this.coreGroup.add(splineLine);

    // Orbiting Energy Packets
    const packetCount = 4;
    for (let i = 0; i < packetCount; i++) {
      const pGeo = new THREE.SphereGeometry(0.06, 12, 12);
      const pMat = new THREE.MeshBasicMaterial({ color: 0xc8651b });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      this.pulses.push({
        mesh: pMesh,
        offset: (i / packetCount) * Math.PI * 2,
        radius: 2.3,
        speed: 1.2
      });
      this.coreGroup.add(pMesh);
    }

    // D. Floating Sensor Nodes & Data Points
    const nodeGeo = new THREE.OctahedronGeometry(0.12, 0);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x166e67,
      roughness: 0.2,
      metalness: 0.6
    });

    for (let i = 0; i < 8; i++) {
      const nMesh = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / 8) * Math.PI * 2;
      const dist = 3.2 + (i % 2) * 0.5;
      nMesh.position.set(
        Math.cos(angle) * dist,
        Math.sin(angle) * (dist * 0.6),
        (Math.sin(i) - 0.5) * 1.5
      );
      this.nodes.push({
        mesh: nMesh,
        initialPos: nMesh.position.clone(),
        phase: i * 0.8
      });
      this.coreGroup.add(nMesh);
    }

    // Adjust for mobile screens
    if (window.innerWidth < 768) {
      this.coreGroup.position.set(0, 0.8, 0);
      this.coreGroup.scale.set(0.65, 0.65, 0.65);
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize());

    // Mouse movement inertia tracking
    window.addEventListener('mousemove', (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      this.mouseX = (e.clientX - halfW) / halfW;
      this.mouseY = (e.clientY - halfH) / halfH;
      this.targetRotY = this.mouseX * 0.45;
      this.targetRotX = this.mouseY * 0.35;
    });

    // Scroll Transformation Observer
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  }

  onResize() {
    if (!this.renderer || !this.camera) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (w < 768) {
      this.targetPosition.set(0, 0.6, 0);
      this.targetScale = 0.65;
    } else {
      this.targetPosition.set(2.0, 0, 0);
      this.targetScale = 1.0;
    }
  }

  onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = Math.min(Math.max(scrollY / (docHeight || 1), 0), 1);

    const isMobile = window.innerWidth < 768;

    // Scroll narrative transformation across sections
    if (this.scrollProgress < 0.12) {
      // Hero
      this.targetPosition.set(isMobile ? 0 : 2.0, isMobile ? 0.6 : 0, 0);
      this.targetScale = isMobile ? 0.65 : 1.0;
    } else if (this.scrollProgress < 0.25) {
      // About
      this.targetPosition.set(isMobile ? 0 : 2.4, -0.2, -1.0);
      this.targetScale = isMobile ? 0.55 : 0.82;
    } else if (this.scrollProgress < 0.42) {
      // Skills & Focus
      this.targetPosition.set(isMobile ? 0 : -2.2, 0.1, -1.2);
      this.targetScale = isMobile ? 0.5 : 0.78;
    } else if (this.scrollProgress < 0.62) {
      // Projects
      this.targetPosition.set(isMobile ? 0 : 2.5, -0.4, -1.5);
      this.targetScale = isMobile ? 0.45 : 0.72;
    } else if (this.scrollProgress < 0.82) {
      // Experience & Industrial Exposure
      this.targetPosition.set(isMobile ? 0 : -2.5, 0.2, -1.8);
      this.targetScale = isMobile ? 0.4 : 0.65;
    } else {
      // Education, Profiles & Contact (Calm minimal state)
      this.targetPosition.set(0, -0.5, -2.2);
      this.targetScale = 0.5;
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    if (!this.coreGroup) return;

    // Inertia rotation smoothing
    if (!this.reducedMotion) {
      this.currentRotX += (this.targetRotX - this.currentRotX) * 0.05;
      this.currentRotY += (this.targetRotY - this.currentRotY) * 0.05;

      this.coreGroup.rotation.x = this.currentRotX + Math.sin(elapsedTime * 0.5) * 0.05;
      this.coreGroup.rotation.y = this.currentRotY + elapsedTime * 0.15;
    }

    // Smooth position & scale transitions
    this.coreGroup.position.lerp(this.targetPosition, 0.06);
    this.currentScale += (this.targetScale - this.currentScale) * 0.06;
    this.coreGroup.scale.set(this.currentScale, this.currentScale, this.currentScale);

    // Central meshes dynamic motion
    if (this.coreWire) {
      this.coreWire.rotation.x += delta * 0.2;
      this.coreWire.rotation.z += delta * 0.15;
    }
    if (this.kernelMesh) {
      this.kernelMesh.rotation.y -= delta * 0.25;
    }

    // Rings rotation
    this.rings.forEach((ring) => {
      ring.mesh.rotation.x += delta * ring.speedX;
      ring.mesh.rotation.y += delta * ring.speedY;
    });

    // Orbiting Energy Pulses
    this.pulses.forEach((p) => {
      const angle = elapsedTime * p.speed + p.offset;
      p.mesh.position.set(
        Math.cos(angle) * p.radius,
        Math.sin(angle) * p.radius * 0.5,
        Math.sin(angle) * 0.8
      );
    });

    // Floating Sensor Nodes
    this.nodes.forEach((n) => {
      n.mesh.position.y = n.initialPos.y + Math.sin(elapsedTime * 1.5 + n.phase) * 0.18;
      n.mesh.rotation.y += delta * 0.6;
    });

    this.renderer.render(this.scene, this.camera);
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.engineeringCoreInstance = new EngineeringCore();
});
