import { useNavigate } from "react-router-dom";
import Rooms from "../Rooms";
import { TypewriterEffectSmooth } from "../components/ui/Typewriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome to",
    },
    {
      text: "HJB",
    },
    {
      text: "hall",
    },
    {
      text: "day",
    },
    {
      text: "2024",
      className: "text-red-500 dark:text-blue-500",
    },
  ];
  const navigate= useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-red-500 border dark:border-white border-transparent text-white text-sm" onClick={()=>navigate('/room')}>
          Excited
        </button>
        <button className="md:hidden w-40 h-10 rounded-xl bg-white border dark:border-white border-transparent text-black text-sm" onClick={()=>navigate('/room')}>
          Excited, but in white
        </button>
        <button >
        <Rooms/>
        </button>   
      </div>
    
    </div>
  );
}
