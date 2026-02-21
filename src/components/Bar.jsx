import { memo } from 'react';

/**
 * Single bar in the visualizer.
 * colourClass: 'bar-default' | 'bar-compare' | 'bar-swap' | 'bar-sorted' | 'bar-pivot'
 */
const Bar = memo(function Bar({ height, colourClass, value, showValue, width }) {
    return (
        <div
            className="relative flex flex-col items-center justify-end transition-all duration-75"
            style={{ width, height: '100%' }}
        >
            {/* Value label (only shown for small arrays) */}
            {showValue && (
                <span
                    className="absolute -top-5 text-[9px] font-semibold text-slate-400 select-none"
                    style={{ fontSize: width < 14 ? '7px' : '10px' }}
                >
                    {value}
                </span>
            )}
            {/* The bar itself */}
            <div
                className={`w-full rounded-t-sm ${colourClass} transition-colors duration-75`}
                style={{ height: `${height}%` }}
            />
        </div>
    );
});

export default Bar;
