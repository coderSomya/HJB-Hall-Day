import { AnimatedTooltip } from "../components/ui/Tooltip.tsx";
import jyothi from "../assets/team/jyothi.jpg"
import joshi from "../assets/team/joshi.jpg"
import ak from "../assets/team/ak.jpg"
import jha from "../assets/team/jha.jpg"
import soham from "../assets/team/soham.jpg"
import kd from "../assets/team/kd.jpg"
import somya from "../assets/team/somya.jpg"
import tamaghna from "../assets/team/tamaghna.jpg"
import ap from "../assets/team/ap.jpeg"
import malothro from "../assets/team/malothro.jpg"
import pandey from "../assets/team/pandey.jpg"
import bachali from "../assets/team/bachali.jpg"

const people = [
  {
    id: 1,
    name: "SSVKSS",
    designation: "Jyothiraditya",
    image:
      `${jyothi}`,
  },
  {
    id: 2,
    name: "Soham",
    designation: "Mandal",
    image:
      `${soham}`,
  },
  {
    id: 3,
    name: "Aditya",
    designation: "Kumar",
    image:
      `${ak}`,
  }
];
const people2 = [
  {
    id: 1,
    name: "Aditya",
    designation: "Jha",
    image:
     `${jha}`,
  },
  {
    id: 2,
    name: "Tamaghna",
    designation: "Mandal",
    image:
     `${tamaghna}`,
  },
  {
    id: 3,
    name: "Kumar",
    designation: "Divyanshu",
    image: `${kd}`
  }
];
const people3 = [
  {
    id: 1,
    name: "Vaibhav",
    designation: "Joshi",
    image:
     `${joshi}`,
  },
  {
    id: 2,
    name: "Somyajeet",
    designation: "Gupta Chowdhury",
    image:
     `${somya}`,
  },
  {
    id: 3,
    name: "Abhinav",
    designation: "Prakash",
    image: `${ap}`
  }
];

const people4 = [
  {
    id: 1,
    name: "Malothro",
    designation: "Mena",
    image:
     `${malothro}`,
  },
  {
    id: 2,
    name: "Shauryan",
    designation: "Pandey",
    image:
     `${pandey}`,
  },
  {
    id: 3,
    name: "Bachali",
    designation: "Sarthikey",
    image: `${bachali}`
  }
];

export function AnimatedTooltipPreview() {
  return (
  <div>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
     <div className="flex flex-row items-center justify-center mb-10 w-full">
     <AnimatedTooltip items={people2} />
   </div>
   <div className="flex flex-row items-center justify-center mb-10 w-full">
     <AnimatedTooltip items={people3} />
   </div>
   <div className="flex flex-row items-center justify-center mb-10 w-full">
     <AnimatedTooltip items={people4} />
   </div>
   </div>
  );
}
