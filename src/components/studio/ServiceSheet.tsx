import { ArrowLeft, Check, MessageCircle, Plus } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import type { Service } from "@/data/catalog";
import { whatsappUrl } from "@/data/catalog";
import SideRays from "@/components/SideRays";
import { cn } from "@/lib/utils";

export function ServiceSheet({
  service,
  open,
  onOpenChange,
  selected,
  onToggle,
}: {
  service: Service | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  selected: boolean;
  onToggle: () => void;
}) {
  const handleToggle = () => {
    onToggle();
    onOpenChange(false);
  };

  const waUrl = service
    ? whatsappUrl(
        `Hola Rincón Digital, me interesa solicitar una cotización para el servicio de: ${service.title}.`,
      )
    : "#";

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col border-border bg-surface p-0 sm:max-w-xl">
        {service && (
          <>
            <div className="glass-bar sticky top-0 z-20 flex items-center gap-3 border-b border-border px-4 py-3">
              <SheetClose className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/60 hover:text-primary">
                <ArrowLeft className="size-4" /> Volver
              </SheetClose>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="veil absolute inset-0" />
                <SideRays
                  speed={2.5}
                  rayColor1="#EAB308"
                  rayColor2="#96c8ff"
                  intensity={1.6}
                  spread={2}
                  origin="top-right"
                  saturation={1.5}
                  blend={0.75}
                  falloff={1.4}
                  opacity={0.9}
                  className="absolute inset-0"
                />
              </div>

              <div className="space-y-6 px-6 pb-10">
                <SheetHeader className="px-0 pt-6">
                  <SheetTitle className="text-2xl">{service.title}</SheetTitle>
                  <SheetDescription>{service.summary}</SheetDescription>
                </SheetHeader>

                <section className="space-y-3">
                  <p className="eyebrow">Entregables</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <p className="eyebrow">Acabados disponibles</p>
                  <div className="flex flex-wrap gap-2">
                    {service.finishes.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-primary/30 px-3 py-1 text-xs text-primary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="space-y-3">
                  <p className="eyebrow">Ficha técnica</p>
                  <dl className="divide-y divide-border rounded-lg border border-border">
                    {service.specs.map((s) => (
                      <div key={s.label} className="grid grid-cols-3 gap-4 p-3 text-sm">
                        <dt className="text-muted-foreground">{s.label}</dt>
                        <dd className="col-span-2">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                <div className="flex flex-col gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="size-4" /> Cotizar este servicio
                  </a>

                  <button
                    type="button"
                    onClick={handleToggle}
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-medium transition-colors",
                      selected
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground",
                    )}
                  >
                    {selected ? <Check className="size-4" /> : <Plus className="size-4" />}
                    {selected ? "¡Agregado!" : "Agregar a la cotización"}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
