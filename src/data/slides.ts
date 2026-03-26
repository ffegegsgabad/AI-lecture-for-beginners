import { CoverSlide } from "@/components/slides/CoverSlide";
import { ObjectiveSlide } from "@/components/slides/ObjectiveSlide";

import { WhatIsAISlide } from "@/components/slides/WhatIsAISlide";
import { DataExplosionSlide } from "@/components/slides/DataExplosionSlide";
import { IntroExplainingSlide } from "@/components/slides/IntroExplainingSlide";
import { ExplainingAISlide } from "@/components/slides/ExplainingAISlide";
import { WhyAIMattersSlide } from "@/components/slides/WhyAIMattersSlide";
import { ChatGPTIntroSlide } from "@/components/slides/ChatGPTIntroSlide";
import { ChatGPTStep0Slide } from "@/components/slides/ChatGPTStep0Slide";
import { ChatGPTStep1Slide } from "@/components/slides/ChatGPTStep1Slide";
import { ChatGPTStep2Slide } from "@/components/slides/ChatGPTStep2Slide";
import { TakeawaySlide } from "@/components/slides/TakeawaySlide";



export interface Slide {
  id: string;
  title: string;
  component: () => JSX.Element;
}

export const slides: Slide[] = [
  {
    id: "cover",
    title: "Capa",
    component: CoverSlide,
  },
  {
    id: "objective",
    title: "Objetivo",
    component: ObjectiveSlide,
  },
  {
    id: "why-ai-born",
    title: "Por que a IA Nasceu",
    component: WhatIsAISlide,
  },
  {
    id: "data-explosion",
    title: "Explosão de Dados",
    component: DataExplosionSlide,
  },
  {
    id: "intro-explaining",
    title: "Descomplicando a IA - Intro",
    component: IntroExplainingSlide,
  },
  {
    id: "explaining-ai",
    title: "Estagiário Superdotado",
    component: ExplainingAISlide,
  },
  {
    id: "why-matters",
    title: "Por que a IA é Importante",
    component: WhyAIMattersSlide,
  },
  {
    id: "chatgpt-intro",
    title: "ChatGPT - Introdução",
    component: ChatGPTIntroSlide,
  },
  {
    id: "chatgpt-step-0",
    title: "ChatGPT - Passo 0",
    component: ChatGPTStep0Slide,
  },
  {
    id: "chatgpt-step-1",
    title: "ChatGPT - Passo 1",
    component: ChatGPTStep1Slide,
  },
  {
    id: "chatgpt-step-2",
    title: "ChatGPT - Passo 2",
    component: ChatGPTStep2Slide,
  },
  {
    id: "takeaway",
    title: "Resumo Final",
    component: TakeawaySlide,
  },
];
