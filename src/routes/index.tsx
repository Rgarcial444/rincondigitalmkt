import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye, Lightbulb, MessageCircle, Scale, Send, Sparkles, X } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import luminosoHalo from "@/assets/luminoso-halo.jpg";
import neonLed from "@/assets/neon-led.jpg";
import cajaLuz from "@/assets/caja-luz.jpg";
import letras3d from "@/assets/letras-3d.jpg";
import { CATEGORIES, MATERIALS, SERVICES, WHATSAPP_NUMBER, type CategoryId } from "@/data/catalog";
import { ServiceCard } from "@/components/studio/ServiceCard";
import { ServiceSheet } from "@/components/studio/ServiceSheet";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rincón Digital | Letreros Luminosos y Letras 3D a Medida" },
      {
        name: "description",
        content:
          "Fabricamos letreros luminosos LED, letras corpóreas 3D, neón a medida y cajas de luz. También impresión, gran formato y rotulación. Cotiza por WhatsApp.",
      },
      { property: "og:title", content: "Rincón Digital | Letreros Luminosos y Letras 3D" },
      {
        property: "og:description",
        content:
          "Especialistas en letreros luminosos LED y letras corpóreas 3D. Catálogo interactivo con fichas técnicas y cotización directa por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PILLARS = [
  { icon: Sparkles, title: "Vanguardia", text: "Tecnología y técnica al servicio de una idea bien resuelta." },
  { icon: Eye, title: "Apertura", text: "Escuchamos el proyecto antes de proponer el formato." },
  { icon: Scale, title: "Sentido Común", text: "Soluciones proporcionales al objetivo y al presupuesto." },
];

const LUMINOSOS = [
  {
    id: "letras-luminosas",
    title: "Letreros Luminosos LED",
    text: "Letras con cara iluminada o halo retroiluminado para fachadas que se leen de noche.",
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

  const filtered = useMemo(
    () => (category === "all" ? SERVICES : SERVICES.filter((s) => s.category === category)),
    [category],
  );

  const openService = SERVICES.find((s) => s.id === openId) ?? null;

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const quoteUrl = () => {
    const names = SERVICES.filter((s) => selected.includes(s.id)).map((s) => `• ${s.title}`);
    const body = [
      "Hola Rincón Digital, me interesa cotizar:",
      names.length ? names.join("\n") : "• (aún sin seleccionar servicios)",
      notes.trim() ? `\nNotas: ${notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen">
      <header className="glass-bar fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-tight">
            Rincón<span className="text-primary">.</span>Digital
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#estudio" className="transition-colors hover:text-foreground">Estudio</a>
            <a href="#catalogo" className="transition-colors hover:text-foreground">Catálogo</a>
            <a href="#materiales" className="transition-colors hover:text-foreground">Materiales</a>
            <a href="#cotizador" className="transition-colors hover:text-foreground">Cotizador</a>
          </nav>
          <a
            href={quoteUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="size-3.5" /> Cotizar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate flex min-h-screen items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Taller de impresión y diseño de Rincón Digital"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div className="veil absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
          <p className="eyebrow">Diseño · Gran Formato · Señalización · Producción Especial</p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.95] md:text-7xl">
            Oficio gráfico para comunicar con precisión, permanencia y sentido.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Un estudio de impresión y diseño donde cada sustrato, acabado y milímetro se decide con
            criterio. Comunicación sostenible, producción de vanguardia.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explorar Catálogo <ArrowRight className="size-4" />
            </a>
            <a
              href={quoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
            >
              Solicitar Cotización Directa <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section id="estudio" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">Manifiesto del estudio</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Pensar la pieza antes de imprimirla.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="hover-glow rounded-xl border border-border bg-card p-6">
              <Compass className="size-5 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Misión</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Traducir ideas en piezas gráficas impecables, con procesos responsables y tiempos
                que respetan el proyecto del cliente.
              </p>
            </div>
            <div className="hover-glow rounded-xl border border-border bg-card p-6">
              <Eye className="size-5 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Visión</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ser el referente regional en comunicación visual sostenible, uniendo diseño,
                tecnología de impresión y producción especial bajo un mismo techo.
              </p>
            </div>
            {PILLARS.map((p) => (
              <div key={p.title} className="hover-glow rounded-xl border border-border bg-card p-6">
                <p.icon className="size-5 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Catálogo interactivo</p>
            <h2 className="mt-4 text-4xl font-semibold">Servicios & muestra de producción</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Pasa el cursor sobre cada pieza para ver los acabados disponibles. Agrega servicios a tu
            cotización con el botón <span className="text-primary">+</span>.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                category === c.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              selected={selected.includes(s.id)}
              onToggle={() => toggle(s.id)}
              onOpen={() => setOpenId(s.id)}
            />
          ))}
        </div>
      </section>

      {/* MATERIALES */}
      <section id="materiales" className="scroll-mt-24 border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">Estudio de materiales & acabados</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold">
            Sustratos con los que trabajamos todos los días.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
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
      <section id="cotizador" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Cotizador rápido</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Arma tu proyecto y envíalo por WhatsApp.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Selecciona los servicios que te interesan, agrega notas (medidas, cantidades, fechas) y
              te respondemos con una propuesta puntual.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
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
              Notas del proyecto
            </label>
            <textarea
              id="notas"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="Ej. Lona 3×2 m con ojillos + 2 letras corpóreas iluminadas, entrega en 10 días."
              className="mt-3 w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />

            <a
              href={quoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Send className="size-4" /> Cotizar selección ({selected.length})
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-muted-foreground">
          <p className="font-display text-foreground">Rincón Digital</p>
          <p>Diseño · Impresión · Gran Formato · Producción Especial</p>
        </div>
      </footer>

      {/* Barra flotante de selección */}
      {selected.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4">
          <div className="glass-bar mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-full border px-5 py-3">
            <p className="text-sm">
              <span className="font-semibold text-primary">{selected.length}</span> servicio
              {selected.length > 1 ? "s" : ""} en tu cotización
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelected([])}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Limpiar selección"
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
