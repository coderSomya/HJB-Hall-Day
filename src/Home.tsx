import { TypewriterEffectSmoothDemo } from './TestPages/TypewriterTest'
import { AnimatedTooltipPreview } from './TestPages/TooltipTest'
import { HeroScrollDemo } from './TestPages/ContainerScrollTest'
import { InfiniteMovingCardsDemo } from './TestPages/InfiniteCardsTest'
import { StickyScrollRevealDemo } from './TestPages/StickyScrollTest'

const Home = () => {
  return (
    <>   
     <div>Home</div>
     <div className='mx-auto w-1/2'>
    {/* <TextGenerateEffectDemo/> */}

    <TypewriterEffectSmoothDemo/>
    </div>
    {/* <ThreeDCardDemo/> */}
    <AnimatedTooltipPreview/>
    <HeroScrollDemo/>
    {/* <NavbarDemo/> */}
    <InfiniteMovingCardsDemo/>
    <StickyScrollRevealDemo/>
    
    </>
  )
}

export default Home