'use client';

export function Padding({ children, padding = 8 }) {
    return (
        <div
            style={{
                padding: `${padding}px`,
            }}
        >
            {children}
        </div>
    );
}