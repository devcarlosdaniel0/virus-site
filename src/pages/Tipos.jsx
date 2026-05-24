import PageWrapper from "../components/PageWrapper";
import ImageBlock from "../components/ImageBlock";
import wannacry from "../assets/wannacry.jpg"; 
import pegasus from "../assets/pegasus.jpeg"
import tiposVirus from "../assets/tiposVirus.jpg"

const TIPOS = [
  {
    nome: "Spyware",
    icon: "👁️",
    cor: "border-red-500/30    bg-red-500/5    text-red-400",
    desc: "Monitora silenciosamente a atividade do usuário, capturando senhas, hábitos de navegação e dados pessoais sem consentimento.",
  },
  {
    nome: "Adware",
    icon: "📢",
    cor: "border-orange-500/30 bg-orange-500/5 text-orange-400",
    desc: "Exibe propagandas indesejadas de forma agressiva, podendo redirecionar o navegador e coletar dados de comportamento para anunciantes.",
  },
  {
    nome: "Backdoor",
    icon: "🚪",
    cor: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400",
    desc: "Cria uma porta dos fundos no sistema, permitindo que invasores acessem o dispositivo remotamente mesmo após o vírus ser detectado.",
  },
  {
    nome: "Ransomware",
    icon: "🔒",
    cor: "border-purple-500/30 bg-purple-500/5 text-purple-400",
    desc: "Criptografa arquivos e exige resgate financeiro, geralmente em criptomoedas, para restaurar o acesso aos dados sequestrados.",
  },
  {
    nome: "Rootkit",
    icon: "🌱",
    cor: "border-pink-500/30   bg-pink-500/5   text-pink-400",
    desc: "Se esconde profundamente no sistema operacional, mascarando sua presença e dificultando a detecção por antivírus convencionais.",
  },
  {
    nome: "Malware",
    icon: "☣️",
    cor: "border-blue-500/30   bg-blue-500/5   text-blue-400",
    desc: "Termo genérico para qualquer software malicioso, abrangendo vírus, worms, trojans e outras ameaças digitais em geral.",
  },
  {
    nome: "Trojan",
    icon: "🐴",
    cor: "border-green-500/30  bg-green-500/5  text-green-400",
    desc: "Disfarça-se de software legítimo para enganar o usuário, instalando componentes maliciosos ao ser executado inadvertidamente.",
  },
  {
    nome: "Worms",
    icon: "🐛",
    cor: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400",
    desc: "Se replica automaticamente pela rede sem necessitar de ação humana, podendo sobrecarregar sistemas e abrir brechas de segurança.",
  },
];
 
export default function Tipos() {
  return (
    <PageWrapper
      tag="Classificação"
      title="Tipos de Vírus"
      subtitle="Existem dezenas de variações de ameaças digitais. Conheça as principais categorias, suas características e formas de atuação."
      accent="orange"
    >
      {/* Imagem intro */}
      <div className="mb-12">
        <ImageBlock
          src={tiposVirus}
          alt="Mapa de tipos de ameaças digitais"
          aspect="video"
        />
      </div>
 
      {/* Grid de tipos */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-6">Categorias</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {TIPOS.map(({ nome, icon, cor, desc }) => (
          <div
            key={nome}
            className={`border rounded-2xl p-5 transition-all hover:-translate-y-1 duration-200 ${cor}`}
          >
            <span className="text-3xl block mb-3">{icon}</span>
            <h3 className="font-black text-white text-base mb-2">{nome}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
 
      {/* Destaque — dois em coluna com imagem */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-6">Em destaque</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Ransomware destaque */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <ImageBlock src={wannacry} alt="Ransomware: como funciona" aspect="video" />
          <div className="p-6">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Ameaça crítica</span>
            <h3 className="text-xl font-black text-white mt-1 mb-2">Ransomware</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Considerado uma das ameaças mais devastadoras da atualidade, o ransomware paralisou hospitais, governos
              e grandes empresas. Ataques famosos como o WannaCry (2017) afetaram mais de 200 mil computadores em
              150 países, causando prejuízos bilionários e expondo a fragilidade da infraestrutura digital global.
            </p>
          </div>
        </div>
 
        {/* Spyware destaque */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <ImageBlock src={pegasus} alt="Spyware: vigilância" aspect="video" />
          <div className="p-6">
            <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Vigilância oculta</span>
            <h3 className="text-xl font-black text-white mt-1 mb-2">Spyware</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Spywares como o Pegasus demonstraram que até celulares podem ser monitorados completamente sem o
              conhecimento do usuário. Capturam mensagens, chamadas, localização e fotos, sendo utilizados tanto
              por criminosos quanto, em casos denunciados, por governos contra jornalistas e ativistas.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
