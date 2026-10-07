import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { certificates } from "@/content/site";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Certificates from the programmes and events Geofry Oduor has completed: Zone01 Kisumu, Power Learn Project and the GOMYCODE Come Build with AI hackathon.",
  alternates: { canonical: "/certificates" },
};

export default function CertificatesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
          Certificates
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Training and programmes completed.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
          Certificates from the programmes and events I have taken part in. Each card says
          what the certificate is for.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Reveal
            as="li"
            key={cert.id}
            delayMs={index * 60}
            className="h-full overflow-hidden rounded-2xl border border-border-custom bg-bg-1 shadow-[var(--shadow-card)]"
          >
            <div className="relative aspect-[1.414/1] w-full border-b border-border-custom bg-bg-2">
              <Image
                src={cert.image}
                alt={`${cert.title} certificate from ${cert.issuer}`}
                fill
                sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 380px"
                className="object-contain"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {cert.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-brand-ink">{cert.issuer}</p>
              <p className="mt-1 text-sm text-text-tertiary">Issued {cert.date}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {cert.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
