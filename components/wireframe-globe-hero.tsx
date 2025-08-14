'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Mr_Dafoe } from 'next/font/google';

const mrDafoe = Mr_Dafoe({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export function WireframeGlobeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Dynamic import of Three.js to avoid SSR issues
    import('three').then((THREE) => {
      const canvas = canvasRef.current!;
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 100);
      camera.position.z = 5;

      // Create wireframe sphere group
      const group = new THREE.Group();
      scene.add(group);

      const lineMat = new THREE.LineBasicMaterial({ color: '#374151' });
      const radius = 1.2;
      const segs = 128;

      const latitudeCount = 13;
      for (let i = 1; i < latitudeCount; i++) {
        const theta = -Math.PI / 2 + (i / latitudeCount) * Math.PI;
        const pts = [];
        for (let j = 0; j <= segs; j++) {
          const phi = (j / segs) * Math.PI * 2;
          const x = radius * Math.cos(theta) * Math.cos(phi);
          const y = radius * Math.sin(theta);
          const z = radius * Math.cos(theta) * Math.sin(phi);
          pts.push(new THREE.Vector3(x, y, z));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const line = new THREE.Line(geo, lineMat);
        group.add(line);
      }

      const longitudeCount = 18;
      for (let i = 0; i < longitudeCount; i++) {
        const phi0 = (i / longitudeCount) * Math.PI * 2;
        const pts = [];
        for (let j = 0; j <= segs; j++) {
          const t = -Math.PI / 2 + (j / segs) * Math.PI;
          const x = radius * Math.cos(t) * Math.cos(phi0);
          const y = radius * Math.sin(t);
          const z = radius * Math.cos(t) * Math.sin(phi0);
          pts.push(new THREE.Vector3(x, y, z));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const line = new THREE.Line(geo, lineMat);
        group.add(line);
      }

      const group2 = group.clone();
      group2.scale.multiplyScalar(1.002);
      scene.add(group2);

      // Resize handler
      function resizeRenderer() {
        const { clientWidth: w, clientHeight: h } = canvas;
        if (canvas.width !== w || canvas.height !== h) {
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      }
      window.addEventListener('resize', resizeRenderer);
      resizeRenderer();

      let last = 0;
      function tick(t: number) {
        resizeRenderer();
        const dt = (t - last) / 1000 || 0;
        last = t;

        group.rotation.y += dt * 0.5;
        group2.rotation.y = group.rotation.y;

        // Subtle Z wobble for organic feel
        group.rotation.z = Math.sin(t * 0.0004) * 0.1;
        group2.rotation.z = group.rotation.z;

        renderer.render(scene, camera);
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);

      // All bolts animate together with same timing
      const bolts = document.querySelectorAll('.bolt');
      bolts.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.setProperty('--d', '0s');
        htmlEl.style.setProperty('--t', '2s');
      });

      // Cleanup
      return () => {
        window.removeEventListener('resize', resizeRenderer);
        renderer.dispose();
      };
    });
  }, []);

  return (
    <section className="py-16 flex bg-gradient-to-br justify-center from-brand-manila to-brand-manila/80">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto  bg-[radial-gradient(#c1ad8f_1px,transparent_1px)] [background-size:8px_8px]">
          {/* Three.js Globe with SVG Lightning Overlay and Ace Image */}
          <div className="flex justify-center items-center relative">
            {/* Large Header Text positioned behind everything */}
            <div className="absolute inset-0 flex justify-center mt-12 z-0">
              <h1 className={`text-6xl md:text-8xl lg:text-9xl text-gray-600 select-none ${mrDafoe.className}`}>
                &ldquo;Electrifying the planet!&rdquo;
              </h1>
            </div>

            <div className="relative w-[32rem] h-[32rem] z-10">
              <canvas ref={canvasRef} className="w-full h-full" />

              <svg
                ref={overlayRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <style>
                  {`
                    .bolt {
                      animation: boltBlink var(--t, 2s) ease-in-out infinite;
                      animation-delay: var(--d, 0s);
                      transform: rotate(var(--r, 0deg));
                    }
                    @keyframes boltBlink {
                      0%, 100% { opacity: 0; }
                      50% { opacity: 1; }
                    }
                  `}
                </style>
                <defs>
                  <symbol id="bolt" viewBox="0 0 100 150">
                    <path d="M62 2 L14 84 H43 L33 148 L88 58 H58 L62 2 Z" fill="#f59e0b" />
                  </symbol>
                </defs>

                <use
                  href="#bolt"
                  className="bolt"
                  x="25"
                  y="5"
                  width="12"
                  height="18"
                  style={{ '--r': '-30deg' } as React.CSSProperties}
                />
                <use
                  href="#bolt"
                  className="bolt"
                  x="45"
                  y="0"
                  width="12"
                  height="18"
                  style={{ '--r': '0deg' } as React.CSSProperties}
                />
                <use
                  href="#bolt"
                  className="bolt"
                  x="79"
                  y="15"
                  width="12"
                  height="18"
                  style={{ '--r': '5deg' } as React.CSSProperties}
                />
              </svg>

              {/* Ace Image positioned over the globe */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-72 h-72 md:w-40 md:h-40 lg:w-96 lg:h-96">
                  <Image src="/ace.png" alt="Ace" fill className="object-contain drop-shadow-lg" priority />
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gray-800/10 blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
