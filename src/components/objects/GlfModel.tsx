// import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const GlfModel = ({ ...props }: { url: string, [x: string]: any }) => {
  const { url } = props;
  const { scene} = useGLTF(url);
  return <primitive object={scene} {...props} />;
}

export default GlfModel;