'use client'

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, PerformanceMonitor, Environment, Stars, Sparkles } from "@react-three/drei";
import Box from "../objects/Box";
import Sphere from "../objects/Sphere";
import GlfModel from "../objects/GlfModel";
import ModelLoading from "./ModelLoading";

export default function SceneCont () {
  
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <PerformanceMonitor onChange={({ factor }) => {console.log(factor)}} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <Box position={[0, 0, 0]} /> */}
        {/* <Box position={[0, 0, 0]} /> */}

        {/* <Sphere position={[2, 0, 0]} /> */}

        <Stars radius={10} depth={100} count={5000} factor={5} saturation={0} fade speed={1} />
        
        <Sparkles count={200} color="rgb(200, 110, 210)" speed={1} size={1} scale={1} noise={1} />

        <Suspense fallback={<ModelLoading />}>
          {/* <GlfModel url='/models/Hgvz-Poimandres.gltf' position={[0, 2, 0]} /> */}
          {/* <Environment files='/imgs/venice_sunset_1k.hdr' background blur={0.1} /> */}
          {/* <Environment files='/imgs/IndoorEnvironmentHDRI004_4K-HDR.exr' background /> */}
        </Suspense>

        <OrbitControls makeDefault />
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
          {/* alternative: <GizmoViewcube /> */}
        </GizmoHelper>
      </Canvas>
    </div>
  )
}