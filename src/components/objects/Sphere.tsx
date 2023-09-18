import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Sphere = ({ ...props }) => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    '/imgs/PavingStones092_1K/PavingStones092_1K-PNG_Color.png',
    '/imgs/PavingStones092_1K/PavingStones092_1K-PNG_Displacement.png',
    '/imgs/PavingStones092_1K/PavingStones092_1K-PNG_NormalGL.png',
    '/imgs/PavingStones092_1K/PavingStones092_1K-PNG_Roughness.png',
    '/imgs/PavingStones092_1K/PavingStones092_1K-PNG_AmbientOcclusion.png',
  ]);
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial metalness={1} roughness={0} />
      {/* <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        displacementScale={0.01} /> */}
    </mesh>
  )
}

export default Sphere;