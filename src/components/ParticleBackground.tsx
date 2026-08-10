import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CyberWeb() {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  
  const particleCount = 250;
  const maxDistance = 3.5; 
  
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      vel.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ));
    }
    return [pos, vel];
  }, []);

  const maxLines = (particleCount * (particleCount - 1)) / 2;
  const [linePositions, lineColors] = useMemo(() => {
    return [new Float32Array(maxLines * 6), new Float32Array(maxLines * 8)];
  }, [maxLines]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current) return;
    
    const posAttribute = pointsRef.current.geometry.attributes.position;
    const posArray = posAttribute.array as Float32Array;
    
    // Update Points
    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] += velocities[i].x;
      posArray[i * 3 + 1] += velocities[i].y;
      posArray[i * 3 + 2] += velocities[i].z;
      
      // Box bounds
      if (Math.abs(posArray[i * 3]) > 15) velocities[i].x *= -1;
      if (Math.abs(posArray[i * 3 + 1]) > 15) velocities[i].y *= -1;
      if (Math.abs(posArray[i * 3 + 2]) > 10) velocities[i].z *= -1;
    }
    posAttribute.needsUpdate = true;
    
    // Update Lines (Plexus Effect)
    let lineIndex = 0;
    let colorIndex = 0;
    let vertexCount = 0;
    
    for (let i = 0; i < particleCount; i++) {
      const px1 = posArray[i * 3];
      const py1 = posArray[i * 3 + 1];
      const pz1 = posArray[i * 3 + 2];
      
      for (let j = i + 1; j < particleCount; j++) {
        const px2 = posArray[j * 3];
        const py2 = posArray[j * 3 + 1];
        const pz2 = posArray[j * 3 + 2];
        
        const dx = px1 - px2;
        const dy = py1 - py2;
        const dz = pz1 - pz2;
        const distSq = dx * dx + dy * dy + dz * dz;
        
        if (distSq < maxDistance * maxDistance) {
          const dist = Math.sqrt(distSq);
          
          linePositions[lineIndex++] = px1;
          linePositions[lineIndex++] = py1;
          linePositions[lineIndex++] = pz1;
          
          linePositions[lineIndex++] = px2;
          linePositions[lineIndex++] = py2;
          linePositions[lineIndex++] = pz2;
          
          const alpha = Math.max(0, (1.0 - dist / maxDistance) * 0.5);
          
          lineColors[colorIndex++] = 0.23; // R
          lineColors[colorIndex++] = 0.51; // G
          lineColors[colorIndex++] = 0.96; // B
          lineColors[colorIndex++] = alpha; // A
          
          lineColors[colorIndex++] = 0.54; // R
          lineColors[colorIndex++] = 0.36; // G
          lineColors[colorIndex++] = 0.96; // B
          lineColors[colorIndex++] = alpha; // A
          
          vertexCount += 2;
        }
      }
    }
    
    const linePosAttr = linesRef.current.geometry.attributes.position;
    const lineColAttr = linesRef.current.geometry.attributes.color;
    
    linePosAttr.needsUpdate = true;
    lineColAttr.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, vertexCount);
    
    // Mouse Interactive Rotation
    const targetX = state.pointer.x * 0.2;
    const targetY = state.pointer.y * 0.2;
    
    pointsRef.current.rotation.x += (targetY - pointsRef.current.rotation.x) * 0.05;
    pointsRef.current.rotation.y += (targetX - pointsRef.current.rotation.y) * 0.05;
    pointsRef.current.rotation.z += delta * 0.02;

    linesRef.current.rotation.x = pointsRef.current.rotation.x;
    linesRef.current.rotation.y = pointsRef.current.rotation.y;
    linesRef.current.rotation.z = pointsRef.current.rotation.z;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.12} color="#60a5fa" transparent opacity={0.85} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxLines * 2}
            array={linePositions}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            attach="attributes-color"
            count={maxLines * 2}
            array={lineColors}
            itemSize={4}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundColor: 'var(--bg)' }}>
      {/* Subtle ambient glow blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', opacity: 0.5 }}>
        <div style={{
          position: 'absolute', top: '-100px', left: '-100px',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', right: '-100px',
          width: '550px', height: '550px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />
      </div>

      {/* Grid Overlay */}
      <div className="grid-overlay" />

      {/* 3D Cyberweb Canvas */}
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <CyberWeb />
      </Canvas>
    </div>
  );
}
