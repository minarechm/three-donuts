import { Perf } from "r3f-perf"
import { OrbitControls, Text3D, Float, Center, useMatcapTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"


const Scene = () => {
  const tempArray = [...Array(100)]
  return (
    <>
    <Perf position="top-left"/>
    <OrbitControls/>
    <Center>
      <Float>
        <Text3D font="./fonts/helvetiker_regular.typeface.json">
          HELLO R3F
          <meshNormalMaterial/>
        </Text3D>
      </Float>
    </Center>

    { [...Array(100)].map((value, index) => 
    <Float>
      <mesh key={index} position={[
        (Math.random() -0.5) * 10,
        (Math.random() -0.5) * 10,
        (Math.random() -0.5) * 10,
      ]}>
        <torusGeometry args={ [1, 0.6, 16, 32]}/>
        <meshNormalMaterial/>
      </mesh>
    </Float>
    )}
    
    </>
  )
}
function App() {
  return (
    <>
      <Canvas camera={{
        position: [10, 15, 0],
      }}>
        <Scene/>
      </Canvas>
    </>
  )
}

export default App;
