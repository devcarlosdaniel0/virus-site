import { useState } from "react";
import { NAV_LINKS } from "../constants";

export default function Navbar({ current, navigate }) {
  const [open, setOpen] = useState(false);

  const go = (path) => { navigate(path); setOpen(false); };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-4 mt-4 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 shadow-2xl">
        <div className="px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-sm font-black text-white shadow-lg shadow-red-500/30">
              V
            </div>
            <span className="font-black text-white tracking-tight text-sm uppercase">
              Virus<span className="text-red-400">Info</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <button
                  onClick={() => go(path)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    current === path
                      ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="lg:hidden text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="lg:hidden border-t border-zinc-800 px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, path }) => (
              <button
                key={path}
                onClick={() => go(path)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                  current === path
                    ? "bg-red-500 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
