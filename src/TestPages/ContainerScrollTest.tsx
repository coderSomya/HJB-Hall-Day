import { ContainerScroll } from "../components/ui/ContainerScroll";
import hjb from "../assets/hall5.jpg"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              HJB Hall of Residence <br /> <br/>
            </h1>
          </>
        }
      >
        <img
          src={`${hjb}`}
          alt="hero"
        //   style={{
        //     "height": 700,
        //     "width": 900
        //   }}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

