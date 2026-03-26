import { CoverSlide } from "@/components/slides/CoverSlide";
import { ObjectiveSlide } from "@/components/slides/ObjectiveSlide";

import { WhatIsAISlide } from "@/components/slides/WhatIsAISlide";
import { DataExplosionSlide } from "@/components/slides/DataExplosionSlide";
import { IntroExplainingSlide } from "@/components/slides/IntroExplainingSlide";
import { ExplainingAISlide } from "@/components/slides/ExplainingAISlide";
import { IntroToolsSlide } from "@/components/slides/IntroToolsSlide";
import { Tool1Slide } from "@/components/slides/Tool1Slide";
import { Tool2Slide } from "@/components/slides/Tool2Slide";
import { Tool3Slide } from "@/components/slides/Tool3Slide";
import { Tool4Slide } from "@/components/slides/Tool4Slide";
import { Tool5Slide } from "@/components/slides/Tool5Slide";
import { Tool6Slide } from "@/components/slides/Tool6Slide";
import { Tool7Slide } from "@/components/slides/Tool7Slide";
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
    id: "intro-tools",
    title: "7 Ferramentas",
    component: IntroToolsSlide,
  },
  {
    id: "tool-1",
    title: "Ferramenta #1 - Perplexity",
    component: Tool1Slide,
  },
  {
    id: "tool-2",
    title: "Ferramenta #2 - TL;DV",
    component: Tool2Slide,
  },
  {
    id: "tool-3",
    title: "Ferramenta #3 - Gamma",
    component: Tool3Slide,
  },
  {
    id: "tool-4",
    title: "Ferramenta #4 - Opus Clip",
    component: Tool4Slide,
  },
  {
    id: "tool-5",
    title: "Ferramenta #5 - NotebookLM",
    component: Tool5Slide,
  },
  {
    id: "tool-6",
    title: "Ferramenta #6 - YouTube Summarize",
    component: Tool6Slide,
  },
  {
    id: "tool-7",
    title: "Ferramenta #7 - Navegador Comet",
    component: Tool7Slide,
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
