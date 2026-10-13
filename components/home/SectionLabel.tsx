export default function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] opacity-80 sm:text-[11px]">
      <span>{n}</span>
      <span aria-hidden className="h-px w-10 bg-current opacity-60" />
      <span>{children}</span>
    </p>
  );
}
