import PageWrapper from "../components/PageWrapper";
import ImageBlock from "../components/ImageBlock";
import { LOREM, LOREM_SHORT } from "../constants";

const CARDS = [
  {
    icon: "🦠",
    title: "O que são?",
    body: LOREM,
  },
  {
    icon: "💻",
    title: "O que afetam?",
    body: LOREM,
  },
  {
    icon: "⚙️",
    title: "Como funcionam?",
    body: LOREM,
  },
];

export default function Definicao() {
  return (
    <PageWrapper
      tag="Conceitos"
      title="Definição"
      subtitle="Entenda o que são vírus digitais, quais sistemas eles afetam e como operam para causar danos."
      accent="red"
    >
      {/* Intro com imagem */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <p className="text-zinc-300 leading-relaxed text-base mb-4">{LOREM}</p>
          <p className="text-zinc-400 leading-relaxed text-sm">{LOREM}</p>
        </div>
        <ImageBlock
          alt="O que são vírus digitais"
          caption="Representação visual de um vírus digital"
          aspect="video"
        />
      </div>

      {/* Cards das 3 perguntas */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-6">Perguntas principais</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {CARDS.map(({ icon, title, body }) => (
          <div key={title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-500/30 transition-colors">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      {/* Imagem extra + texto */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <ImageBlock
          alt="Como vírus se propagam"
          caption="Diagrama: como um vírus se propaga em uma rede"
          aspect="square"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white">Propagação &amp; Impacto</h2>
          <p className="text-zinc-300 text-sm leading-relaxed">{LOREM}</p>
          <p className="text-zinc-400 text-sm leading-relaxed">{LOREM_SHORT}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Redes locais", "E-mail", "Downloads", "Mídias removíveis", "Navegação web"].map((t) => (
              <span key={t} className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
