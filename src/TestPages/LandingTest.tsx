import { Boxes } from "../components/ui/Boxes";
import { useNavigate } from 'react-router-dom';

export function BackgroundBoxesDemo() {
    const navigate = useNavigate();
  return (

<>    
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
    
      <p className="text-center mx-auto text-neutral-300 relative z-20">
      <button className="z-22 absolute w-[100px] h-[100px] rounded-full border-12 border-black px-2 py-2 bg-white text-black" onClick={()=>navigate("/home")}>
See whats in store
</button>      </p>
    </div>
    </>
  );
}
