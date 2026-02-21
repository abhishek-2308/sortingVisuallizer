import { useEffect, useRef, useState } from 'react';

const NUM_BARS = 40;

function randomHeight() {
    return Math.floor(Math.random() * 60) + 20; // 20–80%
}

export default function SplashScreen({ onFinish }) {
    const [bars] = useState(() =>
        Array.from({ length: NUM_BARS }, (_, i) => ({
            id: i,
            height: randomHeight(),
            delay: Math.random() * 2,
            dur: 0.8 + Math.random() * 1.4,
        }))
    );

    const [phase, setPhase] = useState('in'); // 'in' | 'show' | 'out'

    useEffect(() => {
        // After 3.5 s start fade-out, hand control back at 4 s total
        const showTimer = setTimeout(() => setPhase('out'), 3500);
        const doneTimer = setTimeout(() => onFinish(), 4000);
        return () => {
            clearTimeout(showTimer);
            clearTimeout(doneTimer);
        };
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center gradient-bg-animated overflow-hidden
        transition-opacity duration-500 ${phase === 'out' ? 'opacity-0' : 'opacity-100'}`}
        >
            {/* Animated background bars */}
            <div className="absolute inset-0 flex items-end justify-center gap-[3px] px-4 pb-0 opacity-25">
                {bars.map((b) => (
                    <div
                        key={b.id}
                        className="bar-default rounded-t-sm flex-1 max-w-[14px]"
                        style={{
                            height: `${b.height}%`,
                            animation: `floatBar ${b.dur}s ease-in-out ${b.delay}s infinite`,
                        }}
                    />
                ))}
            </div>

            {/* Decorative orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
                style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
                style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in text-center px-6">
                {/* Icon */}
                <div className="relative">
                    <div className="w-24 h-24 rounded-2xl glass-strong flex items-center justify-center animate-pulse-glow">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="4" y="28" width="8" height="16" rx="2" fill="#818cf8" opacity="0.9" />
                            <rect x="14" y="20" width="8" height="24" rx="2" fill="#a78bfa" opacity="0.9" />
                            <rect x="24" y="10" width="8" height="34" rx="2" fill="#c084fc" opacity="0.9" />
                            <rect x="34" y="16" width="8" height="28" rx="2" fill="#e879f9" opacity="0.9" />
                        </svg>
                    </div>
                    {/* Orbit ring */}
                    <div
                        className="absolute -inset-3 rounded-full border border-indigo-500/30 animate-spin-slow"
                        style={{ borderStyle: 'dashed' }}
                    />
                </div>

                {/* Title */}
                <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight gradient-text leading-tight">
                        Sorting Algorithm
                    </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight gradient-text leading-tight">
                        Visualizer
                    </h1>
                </div>

                {/* Subtitle */}
                <p className="text-slate-400 text-sm sm:text-base max-w-md font-light tracking-wide">
                    Watch algorithms come to life — step by step, bar by bar.
                </p>

                {/* Loading dots */}
                <div className="flex gap-2 mt-2">
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            className="w-2 h-2 rounded-full bg-indigo-400"
                            style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom tagline */}
            <p className="absolute bottom-8 text-slate-600 text-xs tracking-widest uppercase font-medium select-none">
                Algorithms · Visualized · Beautifully
            </p>
        </div>
    );
}
