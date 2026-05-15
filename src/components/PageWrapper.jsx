// Layout base para todas as páginas internas
export default function PageWrapper({ tag, title, subtitle, accent = "red", children }) {
  const accents = {
    red:    "from-red-500/20 via-transparent",
    orange: "from-orange-500/20 via-transparent",
    blue:   "from-blue-500/20 via-transparent",
    green:  "from-green-500/20 via-transparent",
    purple: "from-purple-500/20 via-transparent",
  };

  const tagColors = {
    red:    "bg-red-500/10 text-red-400 border-red-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    blue:   "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green:  "bg-green-500/10 text-green-400 border-green-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Page hero */}
      <div className={`relative pt-32 pb-16 px-6 bg-gradient-to-b ${accents[accent]} border-b border-zinc-800`}>
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
        />
        <div className="relative max-w-6xl mx-auto">
          {tag && (
            <span className={`inline-block border text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${tagColors[accent]}`}>
              {tag}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none mb-3">{title}</h1>
          {subtitle && <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
        </div>
      </div>

      {/* Page content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
        {children}
      </main>
    </div>
  );
}
