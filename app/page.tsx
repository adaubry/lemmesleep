import { Services } from "@/components/services";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Team } from "@/components/team";
import { Worldwide } from "@/components/worldwide";
import { CTA } from "@/components/ui/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[color:var(--background)] pt-40 text-[color:var(--text-color)]">
      <div className="flex flex-col gap-40">
        <Hero />
        <section>
          <Services />
        </section>
 	<section>
	  <Team />
	</section>
 	<section>
          <Process />
        </section>
        <section>
          <Worldwide />
        </section>
        <section>
          <CTA
            heading="Accélérez vos ventes"
            description="Identifiez vos acheteurs idéaux, optimisez vos campagnes et réduisez vos coûts d'acquisition de 80%."
            buttonText="Boostez vos résultats"
          />
        </section>
      </div>
    </main>
  );
}
