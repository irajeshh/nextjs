'use client';

export function GridView({ children, maxCrossAxisCount = 2, padding = 16 }) {
    return (
        <div
            className="grid"
            style={{
                gridTemplateColumns: `repeat(${maxCrossAxisCount}, minmax(0, 1fr))`,
                gap: `${padding}px`,
            }}
        >
            {children}
        </div>
    );
}