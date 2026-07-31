import { ArrowUpRight, Check, MessageCircle, Plus } from "lucide-react";
import type { Service } from "@/data/catalog";
import { whatsappUrl } from "@/data/catalog";
import { cn } from "@/lib/utils";

const ASPECT: Record<Service["aspect"], string> = {
  tall: "aspect-[4/5]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

export function ServiceCard({
  service,
  selected,
  onToggle,
  onOpen,
}: {
  service: Service;
  selected: boolean;
  onToggle: () => void;
  onOpen: () => void;
}) {
  const waUrl = whatsappUrl(
    `Hola Rincón Digital, me interesa solicitar una cotización para el servicio de: ${service.title}.`,
  );

  return (
    <article
      className={cn(
        "group hover-glow mb-6 break-inside-avoid overflow-hidden rounded-xl border bg-card",
        selected && "border-primary/60",
      )}
    >
      <button
        type="button"
        onClick={onOpen}
        className={cn("relative block w-full overflow-hidden", ASPECT[service.aspect])}
        aria-label={`Ver detalles de ${service.title}`}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="veil absolute inset-0 opacity-90" />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {service.finishes.map((f) => (
            <span
              key={f}
              className="rounded-full border border-primary/40 bg-background/70 px-2.5 py-1 text-[11px] tracking-wide text-primary"
            >
              {f}
            </span>
          ))}
        </div>
      </button>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
          <button
            type="button"
            onClick={onToggle}
            aria-pressed={selected}
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors",
              selected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary",
            )}
            aria-label={selected ? "Quitar de la cotización" : "Agregar a la cotización"}
          >
            {selected ? <Check className="size-4" /> : <Plus className="size-4" />}
          </button>
        </div>

        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {service.bullets.slice(0, 3).map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            Ver detalles
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="size-3.5" /> Cotizar
          </a>
        </div>
      </div>
    </article>
  );
}
