import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [rotation, setRotation] = useState(0);
  let rotationDirection = 0.2;

  useEffect(() => {
    const animateRotation = () => {
      setRotation((prevRotation) => {
        if (prevRotation >= 0.2 || prevRotation <= -0.2) {
          rotationDirection *= -1;
        }
        return prevRotation + rotationDirection * 0.01;
      });
      requestAnimationFrame(animateRotation);
    };

    animateRotation();
  }, []);

  return (
    <Float speed={0.25} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={[0, rotation, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
