import { Html, useProgress } from "@react-three/drei";

export default function ModelLoading() {
  const { progress } = useProgress();
  console.log(progress);
  return <Html center>{progress} % loaded</Html>
}
