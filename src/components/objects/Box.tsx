import React, { useRef, useState } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";
import { MathUtils, TextureLoader } from "three";

export default function Box({...props}) {
  const { size } = useThree();
  const viewport = useThree((state) => state.viewport);
  // console.log(size)
  // console.log(viewport)

  const colorMap = useLoader(TextureLoader, '/imgs/001.png');

  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // useFrame((state, delta) => {
  //   meshRef.current.rotation.y += delta;
  //   meshRef.current.position.x = MathUtils.lerp(meshRef.current.position.x, active ? 0 : 2, 0.1)
  // })

  const springs = useSpring({
    scale: active ? 1.5 : 1,
    positionX: active ? -2 : 0,
    config: config.gentle,
  })
  const { scale, positionX } = springs;

  return (
    <animated.mesh
      {...props}
      ref={meshRef}
      scale={scale}
      position-x={positionX}
      position-y={0}
      position-z={0}
      onClick={() => setActive(!active)}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHover(true)
      }}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}  /> */}
      <meshStandardMaterial map={colorMap} displacementScale={0.2}  />
    </animated.mesh>
  )
}