import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, ChevronUp, Compass, Eye, Lightbulb, MessageCircle, Scale, Send, Sparkles, X } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import luminosoHalo from "@/assets/luminoso-halo.jpg";
import neonLed from "@/assets/neon-led.jpg";
import cajaLuz from "@/assets/caja-luz.jpg";
import letras3d from "@/assets/letras-3d.jpg";
import { CATEGORIES, MATERIALS, SERVICES, whatsappUrl, type CategoryId } from "@/data/catalog";
import { TRABAJOS_IMAGES } from "@/data/trabajos";
import { ServiceCard } from "@/components/studio/ServiceCard";
import { ServiceSheet } from "@/components/studio/ServiceSheet";
import PixelCard from "@/components/PixelCard";
import CardFX from "@/components/CardFX";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rincón Digital | Letreros Luminosos y Letras 3D" },
      {
        name: "description",
        content: "Fabricamos letreros LED, letras 3D, neón, impresión y gran formato. Cotiza por WhatsApp.",
      },
      { property: "og:title", content: "Rincón Digital | Letreros Luminosos y Letras 3D" },
      {
        property: "og:description",
        content: "Fabricamos letreros LED, letras 3D, neón, impresión y gran formato. Cotiza por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ABOUT = [
  { icon: Compass, title: "Misión", text: "Ideas en piezas impecables, con procesos responsables y tiempos que respetan tu proyecto." },
  { icon: Eye, title: "Visión", text: "Ser el referente regional en comunicación visual, uniendo diseño, tecnología y producción." },
  { icon: Sparkles, title: "Vanguardia", text: "Tecnología al servicio de una buena idea." },
  { icon: Scale, title: "Sentido Común", text: "Soluciones justas para tu objetivo y presupuesto." },
];

const LUMINOSOS = [
  {
    id: "letras-luminosas",
    title: "Letreros Luminosos LED",
    text: "Letras iluminadas o con halo retroiluminado para fachadas que se leen de noche.",
    image: luminosoHalo,
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: "letras-3d",
    title: "Letras Corpóreas 3D",
    text: "Volumetría en acrílico, PVC o metal con acabados premium.",
    image: letras3d,
    span: "",
  },
  {
    id: "neon-led",
    title: "Neón LED a Medida",
    text: "Trazos y logotipos en neón flexible, en el color que pidas.",
    image: neonLed,
    span: "",
  },
  {
    id: "cajas-luz",
    title: "Cajas de Luz",
    text: "Anuncios de bandera y marquesinas con luz pareja.",
    image: cajaLuz,
    span: "sm:col-span-2",
  },
];

function Index() {
  const [category, setCategory] = useState<CategoryId>("all");
  const [selected, setSelected] = useState<string[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (category === "all" ? SERVICES : SERVICES.filter((s) => s.category === category)),
    [category],
  );

  const visible = showAll ? filtered : filtered.slice(0, 6);
  const hasMore = filtered.length > 6;

  const openService = SERVICES.find((s) => s.id === openId) ?? null;

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const quoteUrl = () => {
    const names = SERVICES.filter((s) => selected.includes(s.id)).map((s) => `• ${s.title}`);
    const body = [
      "Hola Rincón Digital, me interesa cotizar:",
      names.length ? names.join("\n") : "(aún sin seleccionar servicios)",
      notes.trim() ? `\nNotas: ${notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return whatsappUrl(body);
  };

  return (
    <div className="min-h-screen">
      <header className="glass-bar fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-tight">
            Rincón<span className="text-primary">.</span>Digital
          </a>
          <nav className="hidden gap-5 text-sm text-muted-foreground lg:flex">
            <a href="#luminosos" className="transition-colors hover:text-foreground">Luminosos</a>
            <a href="#catalogo" className="transition-colors hover:text-foreground">Catálogo</a>
            <a href="#trabajos" className="transition-colors hover:text-foreground">Trabajos</a>
            <a href="#cotizador" className="transition-colors hover:text-foreground">Cotizador</a>
          </nav>
          <a
            href={quoteUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/50 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-4"
          >
            <MessageCircle className="size-3.5" /> Cotizar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        />
        <div className="veil absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
          <p className="eyebrow">Letreros Luminosos · Letras 3D · Neón · Cajas de Luz</p>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] sm:text-5xl sm:leading-[0.98] md:text-6xl lg:text-7xl">
            Tu marca visible de noche.
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
            Fabricamos e instalamos anuncios iluminados, letras corpóreas y neón a medida.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#luminosos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Ver Luminosos <ArrowRight className="size-4" />
            </a>
            <a
              href={quoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
            >
              Cotizar por WhatsApp <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* LUMINOSOS */}
      <section id="luminosos" className="scroll-mt-20 border-b border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Nuestro fuerte</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Letreros luminosos & letras 3D
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Diseño, fabricación e instalación. Un solo proveedor, con garantía.
            </p>
          </div>

          <div className="mt-10 grid auto-rows-[210px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:auto-rows-[240px]">
            {LUMINOSOS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpenId(item.id)}
                className={cn(
                  "group hover-glow relative isolate block overflow-hidden rounded-xl border border-border text-left",
                  item.span,
                )}
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="veil absolute inset-0 -z-10" />
                <div className="flex h-full flex-col justify-end p-5">
                  <Lightbulb className="mb-3 size-5 text-primary" />
                  <h3 className="text-lg font-semibold sm:text-xl">{item.title}</h3>
                  <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">{item.text}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                setCategory("all");
                document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Ver fichas técnicas <ArrowRight className="size-4" />
            </button>
            <a
              href={quoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
            >
              Cotizar <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Catálogo</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Servicios del estudio</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Toca cada pieza para ver su ficha. <span className="text-primary">+</span> para agregar a tu cotización.
          </p>
        </div>

        <div className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:flex-wrap sm:overflow-visible sm:px-0">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setCategory(c.id);
                setShowAll(false);
              }}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors",
                category === c.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-1 gap-4 sm:mt-10 sm:columns-2 sm:gap-6 lg:columns-3">
          {visible.map((s) => (
            <CardFX key={s.id} className="rounded-xl">
              <ServiceCard
                service={s}
                selected={selected.includes(s.id)}
                onToggle={() => toggle(s.id)}
                onOpen={() => setOpenId(s.id)}
              />
            </CardFX>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {showAll ? (
                <>
                  Ver menos <ChevronUp className="size-4" />
                </>
              ) : (
                <>
                  Ver más servicios <ChevronDown className="size-4" />
                </>
              )}
            </button>
          </div>
        )}
      </section>

      {/* TRABAJOS */}
      <section id="trabajos" className="scroll-mt-20 border-b border-border py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Galería</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">Nuestros trabajos</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Desliza el cursor sobre la galería.
            </p>
          </div>
          <div className="relative mt-10 h-[520px] overflow-hidden rounded-xl border border-border bg-card">
            <PixelCard variant="default" className="rounded-xl">
              <div className="h-full w-full overflow-y-auto p-3">
                <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
                  {TRABAJOS_IMAGES.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      loading="lazy"
                      className="mb-3 w-full rounded-lg border border-border/50 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ))}
                </div>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* MATERIALES */}
      <section id="materiales" className="scroll-mt-20 border-y border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow">Materiales</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Sustratos con los que trabajamos.
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {MATERIALS.map((m) => (
              <div key={m.name} className="bg-surface p-6 transition-colors hover:bg-accent">
                <p className="font-mono text-xs text-primary">{m.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COTIZADOR */}
      <section id="cotizador" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="eyebrow">Cotizador</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Arma tu proyecto y recibe precio por WhatsApp.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Selecciona servicios, agrega notas y envíanos tu solicitud.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
            <p className="eyebrow">Servicios de interés</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {SERVICES.map((s) => {
                const active = selected.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggle(s.id)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-md border px-3 py-2.5 text-left text-sm transition-colors",
                      active
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
                    )}
                  >
                    {s.title}
                  </button>
                );
              })}
            </div>

            <label htmlFor="notas" className="eyebrow mt-8 block">
              Notas
            </label>
            <textarea
              id="notas"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Medidas, cantidades, fechas..."
              className="mt-3 w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />

            <a
              href={quoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Send className="size-4" /> Enviar a WhatsApp ({selected.length})
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:px-6">
          <div className="group relative">
            <p className="cursor-default font-display text-foreground">
              Rincón<span className="text-primary">.</span>Digital
            </p>
            <div className="pointer-events-none absolute bottom-full left-0 mb-3 hidden w-72 rounded-xl border border-border bg-card p-4 opacity-0 shadow-lg transition-opacity duration-200 group-hover:pointer-events-auto group-hover:block group-hover:opacity-100">
              <div className="space-y-3">
                {ABOUT.map((a) => (
                  <div key={a.title} className="flex gap-2.5">
                    <a.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{a.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{a.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p>Letreros Luminosos · Letras 3D · Impresión & Gran Formato</p>
        </div>
      </footer>

      {selected.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-4 sm:pb-4">
          <div className="glass-bar mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-full border px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="text-xs sm:text-sm">
              <span className="font-semibold text-primary">{selected.length}</span> servicio
              {selected.length > 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelected([])}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Limpiar"
              >
                <X className="size-4" />
              </button>
              <a
                href={quoteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
              >
                <MessageCircle className="size-4" /> Enviar
              </a>
            </div>
          </div>
        </div>
      )}

      <ServiceSheet
        service={openService}
        open={openId !== null}
        onOpenChange={(v) => !v && setOpenId(null)}
        selected={openService ? selected.includes(openService.id) : false}
        onToggle={() => openService && toggle(openService.id)}
      />
    </div>
  );
}
