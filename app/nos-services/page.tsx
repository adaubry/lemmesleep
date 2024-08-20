import { CTANosServices } from "@/components/CTA/cta-nos-services";
import { Heading } from "@/components/heading";
import { NosServices } from "@/components/nos-services/nos-services";
import { Subheading } from "@/components/subheading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[color:var(--background)] text-[color:var(--text-color)]">
      <Heading>L'Essence de Notre Savoir-Faire</Heading>
      <Subheading>
        La spécificité de Lumena est et restera toujours la variété de nos
        services et notre réactivité quelle que soit la nature de votre
        organisation, pas de solution toute faite ou de discours opaque
      </Subheading>
      <NosServices />
      <CTANosServices />
    </main>
  );
}
