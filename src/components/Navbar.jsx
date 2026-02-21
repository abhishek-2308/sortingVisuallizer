const PAGE_STEPS = [
    { key: 'select', label: 'Select' },
    { key: 'input', label: 'Configure' },
    { key: 'visualize', label: 'Visualize' },
    { key: 'results', label: 'Results' },
];

export default function Navbar({ page, onHomeClick }) {
    const currentIdx = PAGE_STEPS.findIndex((s) => s.key === page);

    return (
        <nav className="sticky top-0 z-40 w-full glass border-b border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

                {/* Brand */}
                <button onClick={onHomeClick} className="flex items-center gap-3 group flex-shrink-0">
                    <div className="w-9 h-9 rounded-lg glass-strong flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="13" width="4" height="9" rx="1" fill="#818cf8" />
                            <rect x="8" y="9" width="4" height="13" rx="1" fill="#a78bfa" />
                            <rect x="14" y="4" width="4" height="18" rx="1" fill="#c084fc" />
                            <rect x="20" y="7" width="4" height="15" rx="1" fill="#e879f9" />
                        </svg>
                    </div>
                    <span className="font-bold text-base tracking-tight gradient-text hidden sm:block">SortViz</span>
                </button>

                {/* Step indicator */}
                {currentIdx >= 0 && (
                    <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
                        {PAGE_STEPS.map((s, idx) => (
                            <div key={s.key} className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                                <div className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300
                  ${currentIdx === idx
                                        ? 'glass-strong text-indigo-300 border border-indigo-500/30'
                                        : currentIdx > idx
                                            ? 'text-emerald-400 bg-emerald-500/10'
                                            : 'text-slate-600 bg-transparent'}`}
                                >
                                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0
                    ${currentIdx === idx ? 'bg-indigo-500 text-white'
                                            : currentIdx > idx ? 'bg-emerald-500 text-white'
                                                : 'bg-white/8 text-slate-600'}`}
                                    >
                                        {currentIdx > idx ? '✓' : idx + 1}
                                    </span>
                                    <span className="hidden sm:block whitespace-nowrap">{s.label}</span>
                                </div>
                                {idx < PAGE_STEPS.length - 1 && (
                                    <div className={`w-3 sm:w-5 h-px flex-shrink-0 ${currentIdx > idx ? 'bg-emerald-500/40' : 'bg-white/10'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Right badge */}
                <div className="flex-shrink-0">
                    <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 glass rounded-full px-3 py-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Interactive
                    </span>
                </div>
            </div>
        </nav>
    );
}
