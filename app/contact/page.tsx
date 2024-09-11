import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-[var(--background)]">
      <ContactForm />
    </div>
  );
}
