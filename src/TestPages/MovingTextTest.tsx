import { TextGenerateEffect } from "../components/ui/Text-generate.tsx";

const words = `
You are invited to join us
at HJB hall day
D-block
30.03.2024
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
