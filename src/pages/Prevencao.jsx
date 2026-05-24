import PageWrapper from "../components/PageWrapper";
import ImageBlock from "../components/ImageBlock";
import protecao from "../assets/protecao.jpg" 
import defesaProfundidade from "../assets/defesaProfundidade.jpeg" 

const ITEMS = [
  {
    name: "Antivírus",
    icon: "🛡️",
    desc: "Instale um antivírus confiável e mantenha-o sempre atualizado. Ele detecta e neutraliza ameaças conhecidas em tempo real antes que causem danos ao sistema.",
    level: "Essencial",
  },
  {
    name: "Firewall",
    icon: "🔥",
    desc: "O firewall monitora e filtra o tráfego de rede, bloqueando conexões não autorizadas e impedindo que malwares se comuniquem com servidores externos.",
    level: "Essencial",
  },
  {
    name: "Autenticação 2FA",
    icon: "🔐",
    desc: "A autenticação de dois fatores adiciona uma camada extra de segurança: mesmo que sua senha seja roubada, o acesso continua bloqueado sem o segundo fator.",
    level: "Recomendado",
  },
  {
    name: "Cuidado com Phishing",
    icon: "🎣",
    desc: "Verifique o remetente de e-mails antes de clicar em links ou abrir anexos. Criminosos imitam empresas conhecidas para enganar vítimas e roubar credenciais.",
    level: "Comportamental",
  },
  {
    name: "Backups regulares",
    icon: "💾",
    desc: "Mantenha cópias de segurança em local separado (nuvem ou HD externo). Em caso de ransomware, o backup permite recuperar dados sem pagar resgate.",
    level: "Recomendado",
  },
  {
    name: "Senhas fortes",
    icon: "🔑",
    desc: "Use senhas únicas e complexas para cada serviço, com letras maiúsculas, minúsculas, números e símbolos. Um gerenciador de senhas facilita esse processo.",
    level: "Essencial",
  },
  {
    name: "Atualizações de sistema",
    icon: "🔄",
    desc: "Mantenha o sistema operacional e aplicativos sempre atualizados. A maioria dos ataques explora falhas já corrigidas em versões mais recentes do software.",
    level: "Essencial",
  },
];
 
const levelColor = {
  Essencial:      "bg-red-500/10 text-red-400 border-red-500/20",
  Recomendado:    "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Comportamental: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};
 
export default function Prevencao() {
  return (
    <PageWrapper
      tag="Proteção"
      title="Prevenção"
      subtitle="Um conjunto de ferramentas e hábitos para proteger você e seus dispositivos contra as ameaças digitais mais comuns."
      accent="blue"
    >
      {/* Intro image + texto */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white">Por que se proteger?</h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Nenhum dispositivo conectado à internet é imune a ataques. Com o crescimento exponencial do trabalho
            remoto e das transações online, o número de alvos potenciais aumentou drasticamente, e os criminosos
            se tornaram cada vez mais sofisticados em suas abordagens.
          </p>
        </div>
        <ImageBlock
          src={protecao}
          alt="Camadas de proteção digital"
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
            <h3 className="font-bold text-base text-white mb-2">{name}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
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
            <p className="text-zinc-400 text-sm leading-relaxed">
              Nenhuma medida isolada garante proteção total. O conceito de "defesa em profundidade" combina múltiplas
              camadas, antivírus, firewall, 2FA, backups e educação do usuário. Assim, se uma barreira falhar, as
              demais ainda protegem o sistema. Funciona como uma cebola: cada camada extra dificulta o avanço de um atacante.
            </p>
          </div>
          <ImageBlock
            src={defesaProfundidade}
            alt="Estratégia de segurança em camadas"
            aspect="video"
            className="rounded-none lg:rounded-r-2xl"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
