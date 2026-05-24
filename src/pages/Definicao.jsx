import PageWrapper from "../components/PageWrapper";
import ImageBlock from "../components/ImageBlock";
import definicao from "../assets/definicao.svg"
import propagacao from "../assets/propagacao.jpeg"

const CARDS = [
  {
    icon: "🦠",
    title: "O que são?",
    body: "Programas autorreplicantes projetados para se espalhar entre sistemas e causar danos, roubar dados ou permitir acesso não autorizado a dispositivos infectados.",
  },
  {
    icon: "💻",
    title: "O que afetam?",
    body: "Computadores, smartphones, tablets, servidores, roteadores e qualquer dispositivo conectado à internet.",
  },
  {
    icon: "⚙️",
    title: "Como funcionam?",
    body: "Geralmente chegam via e-mail, downloads ou sites infectados. Ao ser executado, o código malicioso se instala no sistema e inicia suas ações.",
  },
];

export default function Definicao() {
  return (
    <PageWrapper
      tag="Conceitos"
      title="Definição"
      subtitle="Entenda o que são vírus digitais, quais sistemas eles afetam e como operam para causar danos a indivíduos e organizações."
      accent="red"
    >
      {/* Intro com imagem */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <p className="text-zinc-300 leading-relaxed text-base mb-4">
            Um <strong className="text-white">vírus de computador</strong> é um
            programa malicioso capaz de se replicar e se espalhar inserindo
            cópias de si mesmo em outros arquivos ou programas. Assim como um
            vírus biológico, ele precisa de um "hospedeiro" para se propagar,
            podendo ser um arquivo executável, um documento ou até o setor de
            boot de um sistema.
          </p>
          <p className="text-zinc-400 leading-relaxed text-sm">
            Uma vez ativado, o vírus pode corromper dados, consumir recursos do
            sistema, roubar informações confidenciais ou abrir brechas para
            outros tipos de ataque. O termo "vírus" é frequentemente usado de
            forma genérica para descrever qualquer software malicioso,
            tecnicamente chamado de malware.
          </p>
        </div>
        <ImageBlock
          src={definicao}
          alt="O que são vírus digitais"
          aspect="video"
        />
      </div>

      {/* Cards das 3 perguntas */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-6">
        Perguntas principais
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {CARDS.map(({ icon, title, body }) => (
          <div
            key={title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-500/30 transition-colors"
          >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      {/* Imagem extra + texto */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <ImageBlock
          src={propagacao}
          alt="Como vírus se propagam"
          aspect="square"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Propagação &amp; Impacto
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            A propagação de vírus evoluiu muito com a expansão da internet.
            Hoje, um malware pode infectar milhares de máquinas em minutos,
            aproveitando redes sociais, e-mails de phishing, downloads ilegais e
            vulnerabilidades em softwares desatualizados.
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            O impacto vai desde a lentidão do computador até o roubo de dados
            bancários, sequestro de arquivos por ransomware e espionagem
            corporativa.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
