import PageWrapper from "../components/PageWrapper";

const STUDENTS = [
  { name: "Carlos Daniel Marchesin da Silva" },
  { name: "Higor Ramos da Silva" },
  { name: "Marlon Isaac Souza Camargo" },
  { name: "Miguel Rodrigues Bitencourt" },
  { name: "Pedro Henrique Brito Matos" },
  { name: "Raphael dos Santos Marson" },
  { name: "Thiago Dias de Oliveira" },
];
 
const INFO = [
  { label: "🔐 Curso",      value: "Segurança da Informação" },
  { label: "🎓 Faculdade",  value: "Fatec Americana" },
  { label: "👨‍🏫 Professor", value: "Eduardo Antonio Vicentini" },
  { label: "💻 Disciplina", value: "TI nas Organizações" },
  { label: "📅 Semestre",   value: "1º Semestre de 2026" },
];

export default function SobreNos() {
  return (
    <PageWrapper
      tag="O projeto"
      title="Sobre nós"
      subtitle="Conheça a equipe por trás deste projeto acadêmico e os nossos objetivos."
      accent="purple"
    >
      {/* Objetivo */}
      <div className="space-y-4 mb-16">
        <h2 className="text-2xl font-black text-white">Objetivo do site</h2>
        <p className="text-zinc-300 text-sm leading-relaxed">
          Este site foi desenvolvido com o objetivo de conscientizar usuários sobre os riscos das ameaças digitais
          e apresentar, de forma acessível e didática, os principais tipos de vírus, malwares e boas práticas de
          segurança cibernética.
        </p>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Em um mundo cada vez mais conectado, o conhecimento sobre segurança digital deixou de ser exclusividade
          de especialistas, é uma necessidade de todos. Nosso projeto busca democratizar essa informação,
          tornando-a clara e aplicável no dia a dia de qualquer pessoa.
        </p>
      </div>
 
      {/* Info acadêmica */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-6">Informações acadêmicas</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {INFO.map(({ label, value }) => (
          <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">{label}</p>
            <p className="text-white font-semibold text-sm">{value}</p>
          </div>
        ))}
      </div>
 
      {/* Estudantes */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-6">Equipe</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {STUDENTS.map(({ name }) => (
          <div key={name} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-colors">
            <div className="p-4 text-center">
              <p className="font-bold text-white text-sm">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
