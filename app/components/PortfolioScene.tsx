"use client";
import React, { Suspense, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

function PortfolioModel({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Object3D>(null);

  // Expose model ref for GSAP
  useGSAP(() => {
    if (modelRef.current) {
        gsap.to(modelRef.current.rotation, {
            y: Math.PI * 2,
            scrollTrigger: {
                trigger: '#portfolio-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            }
        });
    }
  }, []);

  return <primitive ref={modelRef} object={scene} scale={2.5} position={[0, -1, 0]} />;
}

function SceneControls() {
    const { camera } = useThree();
    
    useGSAP(() => {
        gsap.to(camera.position, {
            z: 3,
            scrollTrigger: {
                trigger: '#hero-section',
                start: 'bottom top',
                end: '+=500',
                scrub: 1,
            }
        });
    }, []);

    return null;
}

export default function PortfolioScene() {
  return (
    <div className="absolute inset-0 z-0 h-screen w-screen overflow-hidden bg-[#0A192F]">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4FD1C5" />
        
        <Suspense fallback={null}>
          <PortfolioModel modelPath="/assets/3d/asset_0_hat_neutral_gaze.glb" />
          <Environment preset="city" />
        </Suspense>

        <SceneControls />
      </Canvas>
    </div>
  );
}
