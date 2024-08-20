import { FAQs } from "@/components/faqs";
import { Services } from "@/components/services";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Team } from "@/components/team";
import { Worldwide } from "@/components/worldwide";
import { CTA } from "@/components/CTA/cta-bottom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[color:var(--background)] text-[color:var(--text-color)]">
      <div>
        <Hero />
        <section>
          <Services />
        </section>
        <section>
          <Process />
        </section>
        <section>
          <Team />
        </section>
        <section>
          <Worldwide />
        </section>
        <section>
          <CTA />
        </section>
        <FAQs></FAQs>
      </div>
    </main>
  );
}
