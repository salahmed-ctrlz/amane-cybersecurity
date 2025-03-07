import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';

export const Shield = () => {
  // Load the 3D model from the public folder
  const gltf = useLoader(GLTFLoader, '/models/shield.glb');  // Path from the public folder
  const modelRef = useRef<any>(null);

  <primitive
  object={gltf.scene}
  ref={modelRef}
  whileHover={{ scale: 1.2 }}  // Scaling up the shield on hover
/>

  // Scale the shield model to make it smaller
  gltf.scene.scale.set(0.005, 0.005, 0.005);  // Scale to 5% of the original size

  // Rotate the model to create animation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate the shield slowly
    }
  });

  return (
    <primitive object={gltf.scene} ref={modelRef} />
  );
};
