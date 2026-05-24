import ImageBlock from "../components/ImageBlock";
import principal from "../assets/principal.svg"

const HIGHLIGHTS = [
  { icon: "🦠", label: "Definição",    desc: "O que são vírus e como afetam sistemas.", path: "definicao" },
  { icon: "🔬", label: "Tipos",        desc: "Spyware, Ransomware, Trojans, entre outros.", path: "tipos" },
  { icon: "🛡️", label: "Prevenção",    desc: "Ferramentas e boas práticas de proteção.", path: "prevencao" },
  { icon: "✅", label: "Checklist",    desc: "Avalie sua segurança digital agora.", path: "checklist" },
];

export default function Home({ navigate }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-24 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Segurança Digital
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            Vírus &amp;<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              Ameaças Digitais
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigate("definicao")}
              className="w-full sm:w-auto px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            >
              Começar →
            </button>
            <button
              onClick={() => navigate("checklist")}
              className="w-full sm:w-auto px-8 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-bold rounded-xl transition-all duration-200 text-sm uppercase tracking-wider"
            >
              Ver Checklist
            </button>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-20 max-w-5xl mx-auto w-full">
        <ImageBlock
          src={principal}
          alt="Imagem principal: cibersegurança"
          aspect="video"
        />
      </section>

      {/* Cards de navegação */}
      <section className="px-6 pb-24 max-w-6xl mx-auto w-full">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-6">Explorar seções</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map(({ icon, label, desc, path }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="group text-left p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/40 hover:bg-zinc-800/80 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{label}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 text-red-500 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Ver mais →
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
