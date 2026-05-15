import PageWrapper from "../components/PageWrapper";
import ImageBlock from "../components/ImageBlock";
import { LOREM, LOREM_SHORT } from "../constants";

const ITEMS = [
  { name: "Antivírus",          icon: "🛡️", desc: LOREM_SHORT, level: "Essencial" },
  { name: "Firewall",           icon: "🔥", desc: LOREM_SHORT, level: "Essencial" },
  { name: "2FA",                icon: "🔐", desc: LOREM_SHORT, level: "Recomendado" },
  { name: "Cuidado com Phishing", icon: "🎣", desc: LOREM_SHORT, level: "Comportamental" },
  { name: "Backups regulares",  icon: "💾", desc: LOREM_SHORT, level: "Recomendado" },
  { name: "Senhas fortes",      icon: "🔑", desc: LOREM_SHORT, level: "Essencial" },
  { name: "Atualizações de OS", icon: "🔄", desc: LOREM_SHORT, level: "Essencial" },
];

const levelColor = {
  "Essencial":      "bg-red-500/10 text-red-400 border-red-500/20",
  "Recomendado":    "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Comportamental": "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function Prevencao() {
  return (
    <PageWrapper
      tag="Proteção"
      title="Prevenção"
      subtitle="Um conjunto de ferramentas e hábitos para proteger você e seus dispositivos contra ameaças digitais."
      accent="blue"
    >
      {/* Intro image + texto */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white">Por que se proteger?</h2>
          <p className="text-zinc-300 text-sm leading-relaxed">{LOREM}</p>
          <p className="text-zinc-400 text-sm leading-relaxed">{LOREM_SHORT}</p>
        </div>
        <ImageBlock
          alt="Camadas de proteção digital"
          caption="Múltiplas camadas de segurança são sempre mais eficazes"
          aspect="video"
        />
      </div>

      {/* Lista de medidas */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-6">Medidas de proteção</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {ITEMS.map(({ name, icon, desc, level }) => (
          <div
            key={name}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{icon}</span>
              <span className={`text-xs font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${levelColor[level]}`}>
                {level}
              </span>
            </div>
            <h3 className="font-bold text-white mb-2">{name}</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Banner de destaque */}
      <div className="relative rounded-2xl overflow-hidden border border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-8 lg:p-10 relative">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Dica principal</span>
            <h3 className="text-2xl font-black text-white mt-2 mb-3">Defesa em profundidade</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{LOREM}</p>
          </div>
          <ImageBlock
            alt="Estratégia de segurança em camadas"
            caption=""
            aspect="video"
            className="rounded-none lg:rounded-r-2xl"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
