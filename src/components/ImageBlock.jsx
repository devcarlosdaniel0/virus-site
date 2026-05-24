export default function ImageBlock({ src, alt = "Imagem", caption, aspect = "video", className = "" }) {
  const aspectMap = {
    video:   "aspect-video",
    square:  "aspect-square",
    portrait: "aspect-[3/4]",
    wide:    "aspect-[21/9]",
  };

  return (
    <figure className={`w-full ${className}`}>
      <div className={`relative w-full ${aspectMap[aspect] || aspectMap.video} rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/60 group`}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          /* Placeholder visual quando não há imagem */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 select-none">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-zinc-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-zinc-600 text-xs font-mono">{alt}</span>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-zinc-500 text-xs italic">{caption}</figcaption>
      )}
    </figure>
  );
}
