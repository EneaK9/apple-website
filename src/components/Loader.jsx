import { Html } from "@react-three/drei"
import CircularProgress from '@mui/material/CircularProgress';
const Loader = () => {
  return (
  <Html>
    
    <div className="absolute top-0 -left-9 sm:-left-10 lg:-left-12 h-full flex flex-col justify-center items-center">
       <CircularProgress color="inherit" /> 
       <div className="w-[20vw] sm:w-[5vw] flex items-center justify-center mt-3">Loading ... </div>
        
    </div>
  </Html>
  )
}

export default Loader