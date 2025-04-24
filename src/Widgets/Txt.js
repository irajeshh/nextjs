export function Txt({ text, isBold, fontSize }) {
    const fontWeight = isBold ? "font-bold" : "";
    const customStyle = fontSize ? { fontSize: `${fontSize}px` } : {};
    return (
        <div className={`${fontWeight}`} style={customStyle}>
            {text}
        </div>
    );
}