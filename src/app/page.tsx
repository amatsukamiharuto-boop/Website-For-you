import JournalOpening from "@/components/opening/JournalOpening";
import OpenWhenCards from "@/components/cards/OpenWhenCards";
import NoteJar from "@/components/jar/NoteJar";
import SecretCapsule from "@/components/capsule/SecretCapsule";
import Reveal from "@/components/ui/Reveal";
import { footer } from "@/data/keepsake";

export default function Home() {
  return (
    <JournalOpening>
      <Reveal>
        <OpenWhenCards />
      </Reveal>
      <hr className="hairline" />
      <Reveal>
        <NoteJar />
      </Reveal>
      <hr className="hairline" />
      <Reveal>
        <SecretCapsule />
      </Reveal>
      <footer className="border-t border-line py-14 text-center">
        <p className="display-italic text-xl text-ink-soft">{footer.note}</p>
      </footer>
    </JournalOpening>
  );
}
