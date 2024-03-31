import { useNavigate } from "react-router-dom";
import { PinContainer } from "../components/ui/PinContainer";

export function AnimatedPinDemo() {
    const navigate = useNavigate();
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
        <div onClick={()=> navigate("/home")}>
      <PinContainer
        title="Take A Tour"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            We welcome you for our Hall Day
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              HJB Hall of residence
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      </div>
    </div>
  );
}
