import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { certificates } from "@/content/site";

export const metadata: Metadata = {
  title: "Certificates & Achievements - Geofry Oduor",
  description:
    "Verified certificates and achievements in AI, software development and related fields",
};

export default function CertificatesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
            Certificates
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Professional Achievements
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-text-secondary">
            Below are verified certificates and achievements from recognized programs
            and institutions. Each represents focused learning and practical application
            of skills in AI, software development and related domains.
          </p>

          <div className="mt-8 space-y-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="rounded-2xl border border-border-custom bg-bg-1 p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={200}
                      height={280}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-2xl font-semibold tracking-tight mb-2">
                      {cert.title}
                    </h2>
                    <p className="text-sm text-brand-ink font-medium mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-text-tertiary mb-4">
                      Issued: {cert.date}
                    </p>

                    {/* Verified badges or details could go here */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-border-custom">
            <p className="text-sm text-text-tertiary">
              More achievements and projects are documented throughout this portfolio.
              Explore the projects and experience sections to learn more about the
              skills and applications behind these certificates.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80} className="lg:sticky lg:top-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-custom bg-bg-2 shadow-[var(--shadow-lift)]">
            <Image
              src="/geofry-portrait.jpg"
              alt={`Portrait of Geofry Oduor`}
              fill
              sizes="(max-width: 1024px) 90vw, 380px"
              className="object-cover"
            />
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-text-tertiary">
            {site.location}
          </p>
        </Reveal>
      </div>
    </div>
  );
}