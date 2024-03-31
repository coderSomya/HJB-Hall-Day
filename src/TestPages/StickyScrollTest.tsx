import { StickyScroll } from "../components/ui/Scroll-reveal.tsx";
import weed from "../assets/food/weed.jpeg";
import alcohol from "../assets/food/alcohol.jpeg";
import butter from "../assets/food/butter.jpeg";
// import samosa from "./assets/food/samosa.jpeg";
import watermelon from "../assets/food/watermelon.jpeg";
const content = [
  {
    title: "Canna Butter",
    description:
      "Cannabis butter is a special type of butter infused with cannabis. It was discovered by the girl who used to come in the logo of Amul butter. Once strained and cooled, cannabis butter can be used in various recipes to create edibles such as brownies, cookies, idlis or dosa.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={`${butter}`}
          style={{
            "height": 300,
            "width": 350
          }}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Gaanja",
    description:
      "Weed, also known as marijuana, is a plant that some people smoke for relaxing. Other people smoke it to forget their crush who is now going out with someone else in hall-days. When people smoke weed, they might feel relaxed or happy, but it can also make them feel hungry or sleepy. Some people use weed for medical reasons, like aids. Just like with anything else, it's essential to be responsible and make informed choices while smoking weed.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={`${weed}`}
          style={{
            "height": 350,
            "width": 350
          }}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Daaru",
    description:
      "Alcohol is a drink that many adults enjoy. It comes in different forms like beer, wine, and liquor. When people drink alcohol, they talk very maturely. It can make people dizzy or sick, but so can preparing for UPSC. Some people choose not to drink alcohol at all, and that's okay too. But fuck those people anyway.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={`${alcohol}`}
          style={{
            "height": 350,
            "width": 350
          }}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Watermelon",
    description:
      "Watermelon, often confused as Lotte Choco Pie, are tasty vegetables enjoyed in many parts of the world, especially in Kenya. They're usually spherical in shape and filled with a delicious mixture of spiced potatoes, peas, and sometimes meat.Eating watermelon is also recognized as an enhancer of mental aptitude and intelligence by UNICEF.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={`${watermelon}`}
          style={{
            "height": 300,
            "width": 350
          }}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
