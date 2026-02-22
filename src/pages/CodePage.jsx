import { useState } from 'react';
import { ALGO_CODE } from '../data/algoCode';

const LANGS = [
    { id: 'c', label: 'C', bg: '#00599C', fg: '#A8D8FF' },
    { id: 'cpp', label: 'C++23', bg: '#004F8B', fg: '#7EC8E3' },
    { id: 'python', label: 'Python', bg: '#3572A5', fg: '#FFD43B' },
    { id: 'javascript', label: 'JavaScript', bg: '#F7DF1E', fg: '#323330' },
    { id: 'java', label: 'Java', bg: '#ED8B00', fg: '#fff' },
    { id: 'csharp', label: 'C#', bg: '#239120', fg: '#fff' },
    { id: 'perl', label: 'Perl', bg: '#39457E', fg: '#fff' },
    { id: 'swift', label: 'Swift', bg: '#F05138', fg: '#fff' },
    { id: 'ruby', label: 'Ruby', bg: '#CC342D', fg: '#fff' },
    { id: 'go', label: 'Go', bg: '#00ADD8', fg: '#fff' },
];

const ALGO_META = {
    bubble: { name: 'Bubble Sort', emoji: '🫧', color: '#6366f1' },
    selection: { name: 'Selection Sort', emoji: '🎯', color: '#7c3aed' },
    insertion: { name: 'Insertion Sort', emoji: '🃏', color: '#0891b2' },
    merge: { name: 'Merge Sort', emoji: '⚡', color: '#ea580c' },
    quick: { name: 'Quick Sort', emoji: '🚀', color: '#dc2626' },
    heap: { name: 'Heap Sort', emoji: '🏔️', color: '#db2777' },
    radix: { name: 'Radix Sort', emoji: '🔢', color: '#65a30d' },
    counting: { name: 'Counting Sort', emoji: '🔢', color: '#0d9488' },
    bucket: { name: 'Bucket Sort', emoji: '🪣', color: '#d97706' },
    shell: { name: 'Shell Sort', emoji: '🐚', color: '#0284c7' },
    tim: { name: 'Tim Sort', emoji: '⏱️', color: '#4f46e5' },
    tree: { name: 'Tree Sort', emoji: '🌳', color: '#16a34a' },
    comb: { name: 'Comb Sort', emoji: '🔀', color: '#a21caf' },
    cycle: { name: 'Cycle Sort', emoji: '🔁', color: '#c2410c' },
    bitonic: { name: 'Bitonic Sort', emoji: '⚡', color: '#7c3aed' },
    pancake: { name: 'Pancake Sort', emoji: '🥞', color: '#ca8a04' },
    strand: { name: 'Strand Sort', emoji: '🧵', color: '#0e7490' },
    pigeonhole: { name: 'Pigeonhole Sort', emoji: '🕊️', color: '#e11d48' },
    intro: { name: 'Introsort', emoji: '🧠', color: '#b91c1c' },
    block: { name: 'Block Sort', emoji: '🧱', color: '#475569' },
};

export default function CodePage({ selectedAlgo, onBack }) {
    const [lang, setLang] = useState('python');
    const [copied, setCopied] = useState(false);

    const meta = ALGO_META[selectedAlgo] ?? { name: 'Algorithm', emoji: '⚙️', color: '#6366f1' };
    const langMeta = LANGS.find(l => l.id === lang);
    const code = ALGO_CODE[selectedAlgo]?.[lang] ?? `// Implementation for ${meta.name} in ${langMeta?.label} coming soon.`;

    function handleCopy() {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="min-h-screen pb-16" style={{ background: `radial-gradient(ellipse at 50% 0%, ${meta.color}18 0%, transparent 55%), #020617` }}>
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-6">

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-3 text-xs text-slate-400 uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: meta.color }} />
                            Code Reference &nbsp;·&nbsp; 10 Languages
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center gap-3">
                            <span className="text-3xl">{meta.emoji}</span>
                            <span style={{ color: meta.color }}>{meta.name}</span>
                            <span className="text-slate-500 text-lg font-normal">Source Code</span>
                        </h1>
                    </div>
                    <button className="btn-algo flex items-center gap-2 mt-2" onClick={onBack}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        Back to Visualizer
                    </button>
                </div>

                {/* Language Tabs */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {LANGS.map(l => (
                        <button
                            key={l.id}
                            onClick={() => setLang(l.id)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all duration-200 ${lang === l.id
                                    ? 'scale-[1.06] border-transparent shadow-lg'
                                    : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/20'
                                }`}
                            style={lang === l.id ? { background: l.bg, color: l.fg, boxShadow: `0 0 22px ${l.bg}70` } : {}}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>

                {/* Code Block */}
                <div className="rounded-2xl overflow-hidden border border-white/[0.07]"
                    style={{ boxShadow: `0 0 50px ${meta.color}12` }}>

                    {/* Toolbar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]"
                        style={{ background: `linear-gradient(90deg,${langMeta.bg}22,transparent)` }}>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                            </div>
                            <span className="ml-3 text-xs font-mono text-slate-500">
                                {langMeta.label} &nbsp;·&nbsp; {meta.name}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold"
                                style={{ background: `${langMeta.bg}50`, color: langMeta.fg }}>
                                {langMeta.label}
                            </span>
                            <button
                                onClick={handleCopy}
                                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${copied
                                        ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10'
                                        : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                                    }`}
                            >
                                {copied ? (
                                    <><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg> Copied!</>
                                ) : (
                                    <><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg> Copy</>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Code */}
                    <div style={{ background: '#0d1117' }}>
                        <pre className="overflow-x-auto p-6 text-sm font-mono leading-relaxed text-slate-200" style={{ minHeight: '340px' }}>
                            <code>{code}</code>
                        </pre>
                    </div>
                </div>

                <p className="text-center text-xs text-slate-600 mt-5">
                    Reference implementations · The visualizer runs the JavaScript version with step-recording added.
                </p>
            </div>
        </div>
    );
}
