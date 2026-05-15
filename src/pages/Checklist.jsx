import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

const GRUPOS = [
  {
    grupo: "Sistema & Atualizações",
    icon: "💻",
    items: [
      "Manter o sistema operacional atualizado",
      "Atualizar todos os softwares regularmente",
      "Ativar atualizações automáticas quando possível",
    ],
  },
  {
    grupo: "Autenticação",
    icon: "🔐",
    items: [
      "Usar senhas fortes e únicas em cada serviço",
      "Ativar a autenticação de dois fatores (2FA)",
      "Usar um gerenciador de senhas",
    ],
  },
  {
    grupo: "Proteção Ativa",
    icon: "🛡️",
    items: [
      "Instalar e manter um antivírus atualizado",
      "Configurar o firewall do sistema",
      "Evitar redes Wi-Fi públicas sem VPN",
    ],
  },
  {
    grupo: "Comportamento Online",
    icon: "🌐",
    items: [
      "Não clicar em links suspeitos por e-mail",
      "Verificar o remetente antes de abrir anexos",
      "Checar URLs antes de inserir dados pessoais",
    ],
  },
  {
    grupo: "Backup & Recuperação",
    icon: "💾",
    items: [
      "Realizar backups regulares dos dados importantes",
      "Armazenar backup em local separado (nuvem ou HD externo)",
      "Testar a restauração do backup periodicamente",
    ],
  },
];

export default function Checklist() {
  const [checked, setChecked] = useState({});

  const toggle = (key) => setChecked((p) => ({ ...p, [key]: !p[key] }));

  const allItems = GRUPOS.flatMap((g) => g.items);
  const total = allItems.length;
  const done = allItems.filter((_, i) => checked[i]).length;

  // Mapeia índice global por grupo
  let globalIdx = 0;

  const pct = Math.round((done / total) * 100);

  return (
    <PageWrapper
      tag="Boas práticas"
      title="Checklist de Segurança"
      subtitle="Avalie e melhore sua postura de segurança digital respondendo a este checklist completo."
      accent="green"
    >
      {/* Progresso geral */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">Progresso geral</p>
            <p className="text-3xl font-black text-white">
              {done}<span className="text-zinc-600">/{total}</span>
            </p>
          </div>
          <div className={`text-5xl font-black tabular-nums ${pct === 100 ? "text-green-400" : pct >= 60 ? "text-orange-400" : "text-red-400"}`}>
            {pct}%
          </div>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${pct === 100 ? "bg-green-500" : pct >= 60 ? "bg-orange-500" : "bg-red-500"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        {pct === 100 && (
          <p className="text-green-400 text-sm font-semibold mt-3 flex items-center gap-2">
            <span>🎉</span> Parabéns! Você concluiu todos os itens.
          </p>
        )}
      </div>

      {/* Grupos */}
      <div className="space-y-6">
        {GRUPOS.map(({ grupo, icon, items }) => {
          const groupStart = globalIdx;
          const groupItems = items.map((item, j) => {
            const idx = groupStart + j;
            return { item, idx };
          });
          globalIdx += items.length;

          const groupDone = groupItems.filter(({ idx }) => checked[idx]).length;

          return (
            <div key={grupo} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="font-bold text-white">{grupo}</h3>
                </div>
                <span className="text-xs text-zinc-500 font-mono">{groupDone}/{items.length}</span>
              </div>
              <ul className="divide-y divide-zinc-800">
                {groupItems.map(({ item, idx }) => (
                  <li
                    key={idx}
                    onClick={() => toggle(idx)}
                    className={`flex items-center gap-4 px-6 py-4 cursor-pointer select-none transition-colors ${
                      checked[idx] ? "bg-green-500/5" : "hover:bg-zinc-800/50"
                    }`}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      checked[idx] ? "bg-green-500 border-green-500" : "border-zinc-600"
                    }`}>
                      {checked[idx] && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm font-medium transition-colors ${
                      checked[idx] ? "text-zinc-600 line-through" : "text-zinc-200"
                    }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Reset */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={() => setChecked({})}
          className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors font-semibold uppercase tracking-wider"
        >
          ↺ Resetar checklist
        </button>
      </div>
    </PageWrapper>
  );
}
