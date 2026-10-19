"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const BRAND = "#009bdf";
const BELT = 14; // conveyor length
const SPEED = 0.9;
const BOTTLES = 9;
const SPACING = BELT / BOTTLES;
const FILL_X = -1.6; // filling gantry
const CAP_X = 2.2; // capping head
const LABEL_X = 4.6; // labeller

const steel = new THREE.MeshStandardMaterial({ color: "#c9d4de", metalness: 0.9, roughness: 0.25 });
const darkSteel = new THREE.MeshStandardMaterial({ color: "#1b2a3a", metalness: 0.7, roughness: 0.4 });

/** Bottle position along the belt for index i at time t. */
const posX = (i: number, t: number) => (((i * SPACING + t * SPEED) % BELT) + BELT) % BELT - BELT / 2;
const smooth = (a: number, b: number, x: number) => {
  const k = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return k * k * (3 - 2 * k);
};

function Bottle({ index }: { index: number }) {
  const group = useRef<THREE.Group>(null);
  const liquid = useRef<THREE.Mesh>(null);
  const cap = useRef<THREE.Mesh>(null);
  const label = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const x = posX(index, clock.elapsedTime);
    const g = group.current!;
    g.position.x = x;
    // fade bottles in/out at the belt ends
    const edge = Math.min(smooth(-BELT / 2, -BELT / 2 + 0.6, x), 1 - smooth(BELT / 2 - 0.6, BELT / 2, x));
    g.scale.setScalar(0.001 + edge);
    const fill = smooth(FILL_X - 0.9, FILL_X + 0.6, x);
    liquid.current!.scale.y = Math.max(0.001, fill);
    liquid.current!.position.y = 0.08 + (0.95 * fill) / 2;
    const c = smooth(CAP_X - 0.25, CAP_X + 0.1, x);
    cap.current!.position.y = 1.55 + (1 - c) * 0.6;
    cap.current!.scale.setScalar(Math.max(0.001, c));
    cap.current!.rotation.y = c * Math.PI * 4;
    label.current!.scale.setScalar(Math.max(0.001, smooth(LABEL_X - 0.4, LABEL_X + 0.2, x)));
  });
  return (
    <group ref={group} position={[0, 0.42, 0]}>
      {/* glass body */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.28, 0.28, 1.15, 32]} />
        <meshPhysicalMaterial color="#e8f6ff" transmission={1} roughness={0.05} thickness={0.25} ior={1.45} transparent opacity={0.55} />
      </mesh>
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.11, 0.26, 0.3, 32]} />
        <meshPhysicalMaterial color="#e8f6ff" transmission={1} roughness={0.05} thickness={0.2} transparent opacity={0.55} />
      </mesh>
      {/* liquid */}
      <mesh ref={liquid} position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.95, 32]} />
        <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={0.35} roughness={0.2} />
      </mesh>
      {/* cap */}
      <mesh ref={cap} position={[0, 1.55, 0]} castShadow>
        <cylinderGeometry args={[0.13, 0.13, 0.16, 24]} />
        <meshStandardMaterial color="#f5f7fa" roughness={0.4} />
      </mesh>
      {/* label */}
      <mesh ref={label} position={[0, 0.62, 0]}>
        <cylinderGeometry args={[0.285, 0.285, 0.5, 32, 1, true]} />
        <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} roughness={0.6} />
      </mesh>
    </group>
  );
}

function Conveyor() {
  const slats = useRef<THREE.InstancedMesh>(null);
  const COUNT = 56;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  useFrame(({ clock }) => {
    const m = slats.current!;
    for (let i = 0; i < COUNT; i++) {
      const x = (((i * (BELT / COUNT) + clock.elapsedTime * SPEED) % BELT) + BELT) % BELT - BELT / 2;
      dummy.position.set(x, 0.36, 0);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
  });
  return (
    <group>
      <mesh position={[0, 0.2, 0]} receiveShadow material={darkSteel}>
        <boxGeometry args={[BELT + 0.4, 0.28, 1.1]} />
      </mesh>
      <instancedMesh ref={slats} args={[undefined, undefined, COUNT]} receiveShadow>
        <boxGeometry args={[BELT / COUNT - 0.04, 0.05, 0.95]} />
        <meshStandardMaterial color="#2a3c50" metalness={0.5} roughness={0.5} />
      </instancedMesh>
      {/* side guide rails */}
      {[-0.5, 0.5].map((z) => (
        <mesh key={z} position={[0, 0.62, z]} material={steel}>
          <boxGeometry args={[BELT + 0.4, 0.05, 0.04]} />
        </mesh>
      ))}
      {/* legs */}
      {[-6.6, -3.3, 0, 3.3, 6.6].flatMap((x) =>
        [-0.45, 0.45].map((z) => (
          <mesh key={`${x}${z}`} position={[x, -0.55, z]} material={steel}>
            <cylinderGeometry args={[0.05, 0.05, 1.3, 12]} />
          </mesh>
        ))
      )}
    </group>
  );
}

function FillingStation() {
  const nozzles = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    nozzles.current!.position.y = 2.55 + Math.sin(clock.elapsedTime * 3) * 0.12;
  });
  return (
    <group position={[FILL_X, 0, 0]}>
      {[-0.75, 0.75].map((z) => (
        <mesh key={z} position={[0, 1.6, z]} material={steel} castShadow>
          <boxGeometry args={[0.14, 3.2, 0.14]} />
        </mesh>
      ))}
      <RoundedBox args={[2.2, 0.5, 1.7]} radius={0.06} position={[0, 3.35, 0]} castShadow>
        <meshStandardMaterial color="#e9eef3" metalness={0.6} roughness={0.25} />
      </RoundedBox>
      {/* product tank */}
      <mesh position={[0, 4.05, 0]} material={steel} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.9, 32]} />
      </mesh>
      <group ref={nozzles}>
        {[-0.55, 0, 0.55].map((x) => (
          <group key={x} position={[x, 0, 0]}>
            <mesh material={steel}><cylinderGeometry args={[0.05, 0.05, 1, 12]} /></mesh>
            <mesh position={[0, -0.55, 0]}>
              <coneGeometry args={[0.07, 0.15, 12]} />
              <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={1.2} />
            </mesh>
          </group>
        ))}
      </group>
      {/* HMI panel */}
      <group position={[1.3, 2.3, 0.95]} rotation={[0, -0.5, 0]}>
        <RoundedBox args={[0.8, 0.6, 0.08]} radius={0.03}><meshStandardMaterial color="#1b2a3a" /></RoundedBox>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[0.68, 0.46]} />
          <meshStandardMaterial color="#0b6fa3" emissive={BRAND} emissiveIntensity={1.4} />
        </mesh>
        <mesh position={[0, -0.9, -0.05]} material={steel}><cylinderGeometry args={[0.03, 0.03, 1.4, 8]} /></mesh>
      </group>
    </group>
  );
}

function CappingStation() {
  const head = useRef<THREE.Mesh>(null);
  useFrame((_, d) => { head.current!.rotation.y += d * 6; });
  return (
    <group position={[CAP_X, 0, 0]}>
      <mesh position={[0, 1.4, -0.7]} material={steel} castShadow><boxGeometry args={[0.14, 2.8, 0.14]} /></mesh>
      <mesh position={[0, 2.7, -0.35]} material={steel}><boxGeometry args={[0.14, 0.14, 0.8]} /></mesh>
      <mesh ref={head} position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.2, 0.16, 0.5, 6]} />
        <meshStandardMaterial color="#e9eef3" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Labeller() {
  const roll = useRef<THREE.Mesh>(null);
  useFrame((_, d) => { roll.current!.rotation.y -= d * 2; });
  return (
    <group position={[LABEL_X, 0, -0.95]}>
      <RoundedBox args={[0.9, 1.6, 0.4]} radius={0.05} position={[0, 1.2, 0]} castShadow>
        <meshStandardMaterial color="#e9eef3" metalness={0.5} roughness={0.3} />
      </RoundedBox>
      <mesh ref={roll} position={[0, 1.4, 0.35]}>
        <cylinderGeometry args={[0.32, 0.32, 0.25, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 1.4, 0.48]}>
        <cylinderGeometry args={[0.12, 0.12, 0.27, 16]} />
        <meshStandardMaterial color={BRAND} />
      </mesh>
    </group>
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  const target = useMemo(() => new THREE.Vector3(0.6, 1.3, 0), []);
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, 5.5 + pointer.x * 1.8, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 4 + pointer.y * 1.2, 0.04);
    camera.lookAt(target);
  });
  return null;
}

export default function Hero3D() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      setOk(!!(c.getContext("webgl2") || c.getContext("webgl")));
    } catch { setOk(false); }
  }, []);
  if (!ok) return null;
  return (
    <Canvas shadows dpr={[1, 1.75]} camera={{ position: [5.5, 4, 8.5], fov: 38 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.6} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[FILL_X, 2.2, 1.5]} color={BRAND} intensity={6} distance={5} />
      <group position={[0, -0.6, 0]} rotation={[0, -0.35, 0]}>
        <Conveyor />
        <FillingStation />
        <CappingStation />
        <Labeller />
        {Array.from({ length: BOTTLES }, (_, i) => <Bottle key={i} index={i} />)}
        <ContactShadows position={[0, -1.2, 0]} opacity={0.45} scale={22} blur={2.6} far={4} />
      </group>
      <Sparkles count={60} scale={[14, 6, 6]} size={2} speed={0.3} color={BRAND} opacity={0.6} />
      <Environment resolution={256}>
        <Lightformer intensity={2} position={[0, 5, -6]} scale={[12, 4, 1]} />
        <Lightformer intensity={1.5} color={BRAND} position={[-6, 2, 2]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
        <Lightformer intensity={1} position={[6, 1, 2]} rotation-y={-Math.PI / 2} scale={[8, 2, 1]} />
      </Environment>
      <Rig />
    </Canvas>
  );
}
