import Image from "next/image";
import { SpotifySuggestions } from "@/components/spotify-suggestions";

import { SpotifySuggestions2 } from "@/components/spotify-suggestions2";

export default function Home() {
  return (
    <>
      <SpotifySuggestions />
      <SpotifySuggestions2 />
    </>
  );
}
