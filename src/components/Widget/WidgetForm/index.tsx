import { useState } from "react";
import CloseButton from "../CloseButton";
import bugImageUrl from "../../../assets/bug.svg";
import emojiImageUrl from "../../../assets/emoji.svg";
import thoughtImageUrl from "../../../assets/thought.svg";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: emojiImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};
export type FeedbackType = keyof typeof feedbackTypes;
export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto]">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
      ) : (
        <div>hello</div>
      )
      }
      <footer className="text-xs text-neutral-400">
        Feito com &#9829; por{" "}
        <span className="underline underline-offset-1">Arthur Santos</span>
      </footer>
    </div>
  );
}
