import branding from "@/assets/branding.jpg";
import digital from "@/assets/digital.jpg";
import granformato from "@/assets/granformato.jpg";
import offset from "@/assets/offset.jpg";
import rotulacion from "@/assets/rotulacion.jpg";
import senalizacion from "@/assets/senalizacion.jpg";
import laser from "@/assets/laser.jpg";
import merch from "@/assets/merch.jpg";
import luminosoHalo from "@/assets/luminoso-halo.jpg";
import neonLed from "@/assets/neon-led.jpg";
import cajaLuz from "@/assets/caja-luz.jpg";
import letras3d from "@/assets/letras-3d.jpg";

export const WHATSAPP_NUMBER = "527223145340";

export const CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "identidad", label: "Identidad & Impresión Fina" },
  { id: "espacios", label: "Espacios & Gran Formato" },
  { id: "especial", label: "Corte 3D & Producción Especial" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export type Service = {
  id: string;
  title: string;
  category: CategoryId;
  image: string;
  aspect: "tall" | "wide" | "square";
  summary: string;
  bullets: string[];
  finishes: string[];
  specs: { label: string; value: string }[];
};

export const SERVICES: Service[] = [
  {
    id: "diseno-grafico",
    title: "Diseño Gráfico",
    category: "identidad",
    image: branding,
    aspect: "tall",
    summary:
      "Identidad visual con composición sólida y piezas profesionales listas para producción.",
    bullets: ["Identidad visual y manuales de marca", "Composición y retícula editorial", "Piezas listas para prensa"],
    finishes: ["Manual de marca", "Archivos vectoriales", "Preprensa CMYK"],
    specs: [
      { label: "Entregables", value: "Logotipo, paleta, tipografías, aplicaciones" },
      { label: "Formatos", value: "AI, PDF/X, SVG, PNG" },
      { label: "Tiempo estimado", value: "5 a 12 días hábiles" },
    ],
  },
  {
    id: "impresion-digital",
    title: "Impresión Digital",
    category: "identidad",
    image: digital,
    aspect: "wide",
    summary: "Tirajes cortos con color estable y acabados finos para papelería corporativa.",
    bullets: ["Tabloides y autoadheribles", "Couché, diplomas y credenciales", "Papelería corporativa completa"],
    finishes: ["Brillante", "Mate", "Autoadherible", "Suaje"],
    specs: [
      { label: "Sustratos", value: "Couché 130–350g, bond, opalina, adherible" },
      { label: "Formato máx.", value: "33 × 48 cm (tabloide extendido)" },
      { label: "Tiraje", value: "Desde 1 pieza" },
    ],
  },
  {
    id: "offset",
    title: "Impresión Offset",
    category: "identidad",
    image: offset,
    aspect: "wide",
    summary: "Grandes volúmenes con consistencia cromática y costo por pieza optimizado.",
    bullets: ["Revistas, folletos y flyers", "Carpetas, cajas y etiquetas", "Agendas y encuadernados"],
    finishes: ["Barniz UV", "Laminado mate/brillante", "Hot stamping", "Suaje y pegado"],
    specs: [
      { label: "Tiraje mínimo", value: "500 piezas" },
      { label: "Colores", value: "CMYK + tintas directas Pantone" },
      { label: "Encuadernación", value: "Grapa, hotmelt, wire-o" },
    ],
  },
  {
    id: "gran-formato",
    title: "Impresión en Gran Formato",
    category: "espacios",
    image: granformato,
    aspect: "tall",
    summary: "Alta resolución en lonas, vinilos y murales de gran superficie.",
    bullets: ["Lonas, vinilos, carteles y vallas", "Foto lienzos y murales", "Photocalls y backings"],
    finishes: ["Lona frontlit", "Vinil texturizado", "Laminado mate", "Ojillos y bastidor"],
    specs: [
      { label: "Resolución", value: "Hasta 1440 dpi" },
      { label: "Ancho máx.", value: "3.20 m sin costura" },
      { label: "Tintas", value: "Ecosolvente / látex resistente a UV" },
    ],
  },
  {
    id: "vinilo-recorte",
    title: "Vinilo de Recorte & Rotulación",
    category: "espacios",
    image: rotulacion,
    aspect: "square",
    summary: "Rotulación comercial y vehicular con corte de precisión e instalación profesional.",
    bullets: ["Rotulación comercial de fachadas", "Rotulación vehicular integral", "Microperforado y esmerilado"],
    finishes: ["Vinil mate", "Vinil brillante", "Esmerilado", "Reflejante"],
    specs: [
      { label: "Durabilidad", value: "3 a 7 años en exterior" },
      { label: "Instalación", value: "Incluida en zona metropolitana" },
      { label: "Aplicación", value: "Cristal, lámina, muro liso" },
    ],
  },
  {
    id: "senalizacion",
    title: "Cartelería & Señalización",
    category: "espacios",
    image: senalizacion,
    aspect: "wide",
    summary: "Señalética normativa para protección civil y seguridad laboral.",
    bullets: ["Protección civil y rutas de evacuación", "Normativas de seguridad laboral", "Señalética arquitectónica"],
    finishes: ["PVC 3mm", "Acrílico", "Aluminio", "Fotoluminiscente"],
    specs: [
      { label: "Normativa", value: "NOM-003-SEGOB / NOM-026-STPS" },
      { label: "Sustratos", value: "Trovicel, acrílico, aluminio compuesto" },
      { label: "Montaje", value: "Adhesivo estructural o tornillería" },
    ],
  },
  {
    id: "corte-laser",
    title: "Corte Láser & Letras Corpóreas",
    category: "especial",
    image: laser,
    aspect: "tall",
    summary: "Anuncios corpóreos y piezas caladas de alta precisión en múltiples materiales.",
    bullets: ["Letras corpóreas con o sin luz", "Piezas caladas y grabado", "Prototipos y volumetría 3D"],
    finishes: ["MDF corte láser", "Acrílico pulido", "Trovicel 3–19mm", "Iluminación LED"],
    specs: [
      { label: "Tolerancia", value: "± 0.2 mm" },
      { label: "Espesores", value: "1 mm a 19 mm" },
      { label: "Área de corte", value: "130 × 90 cm" },
    ],
  },
  {
    id: "sublimacion",
    title: "Sublimación, Estampado & Promocionales",
    category: "especial",
    image: merch,
    aspect: "square",
    summary: "Textiles, regalos personalizados y souvenirs con acabado durable.",
    bullets: ["Textiles y uniformes", "Regalos personalizados y souvenirs", "Herrería publicitaria"],
    finishes: ["Sublimado full color", "DTF", "Vinil textil", "Grabado láser"],
    specs: [
      { label: "Textiles", value: "Poliéster, mezclas, algodón (DTF)" },
      { label: "Mínimo", value: "1 pieza en sublimación" },
      { label: "Durabilidad", value: "Resistente a lavado industrial" },
    ],
  },

  {
    id: "letras-luminosas",
    title: "Letreros Luminosos LED",
    category: "all",
    image: luminosoHalo,
    aspect: "tall",
    summary:
      "Nuestra especialidad: letras corpóreas iluminadas con LED, frontales o con halo retroiluminado.",
    bullets: [
      "Letras con cara de acrílico iluminada al frente",
      "Halo retroiluminado sobre fachada",
      "Instalación y conexión eléctrica incluida",
    ],
    finishes: ["Acrílico iluminado", "Halo backlight", "Aluminio compuesto", "LED 2700K–6500K"],
    specs: [
      { label: "Altura de letra", value: "10 cm a 200 cm" },
      { label: "Consumo", value: "LED de bajo consumo, fuente certificada" },
      { label: "Uso", value: "Interior y exterior (IP65)" },
    ],
  },
  {
    id: "letras-3d",
    title: "Letras Corpóreas 3D",
    category: "especial",
    image: letras3d,
    aspect: "square",
    summary: "Volumetría precisa en acrílico, PVC, MDF o metal para fachadas y muros de marca.",
    bullets: [
      "Corte y armado CNC/láser de alta precisión",
      "Muros de marca y recepciones corporativas",
      "Acabados metálicos, mate y espejo",
    ],
    finishes: ["Acrílico pulido", "PVC 19mm", "Espejo dorado", "Pintura automotiva"],
    specs: [
      { label: "Espesores", value: "3 mm a 100 mm de volumen" },
      { label: "Tolerancia", value: "± 0.2 mm" },
      { label: "Montaje", value: "Separadores, tornillería oculta o adhesivo" },
    ],
  },
  {
    id: "neon-led",
    title: "Neón LED a Medida",
    category: "all",
    image: neonLed,
    aspect: "wide",
    summary: "Neón flexible LED para interiores, negocios y eventos, en cualquier trazo o color.",
    bullets: ["Frases y logotipos personalizados", "Base acrílica transparente", "Control de intensidad y color"],
    finishes: ["Neón cálido", "Neón RGB", "Base recortada", "Base rectangular"],
    specs: [
      { label: "Colores", value: "12 tonos fijos o RGB con control" },
      { label: "Tamaño", value: "Desde 30 cm hasta 3 m" },
      { label: "Alimentación", value: "12V con adaptador incluido" },
    ],
  },
  {
    id: "cajas-luz",
    title: "Cajas de Luz & Anuncios Retroiluminados",
    category: "all",
    image: cajaLuz,
    aspect: "wide",
    summary: "Anuncios de bandera, marquesinas y lightbox con difusión pareja de luz.",
    bullets: ["Cajas de luz de bandera y frontales", "Marquesinas y toldos iluminados", "Cambio de carátula sin desmontar"],
    finishes: ["Lona translúcida", "Acrílico opal", "Perfilería de aluminio", "Doble vista"],
    specs: [
      { label: "Profundidad", value: "8 cm a 20 cm" },
      { label: "Iluminación", value: "Módulos LED de alta difusión" },
      { label: "Resistencia", value: "Sellado para intemperie" },
    ],
  },
];

export const MATERIALS = [
  { name: "Couché 300g", note: "Papelería premium y portadas" },
  { name: "Trovicel 3mm", note: "Señalética rígida de interior" },
  { name: "MDF Corte Láser", note: "Corpóreos y piezas caladas" },
  { name: "Vinil Autoadherible", note: "Rotulación y decoración" },
  { name: "Lona Frontlit 13oz", note: "Gran formato exterior" },
  { name: "Acrílico 6mm", note: "Letras y displays pulidos" },
  { name: "Opalina 225g", note: "Diplomas y credenciales" },
  { name: "Poliéster Sublimable", note: "Textiles y merch" },
];

export function whatsappUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
