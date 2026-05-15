export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-600 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-black text-xs">V</div>
          <span className="font-semibold text-zinc-400">VirusInfo</span>
        </div>
        <p>© 2024 · Trabalho Acadêmico · Lorem Ipsum University</p>
      </div>
    </footer>
  );
}
