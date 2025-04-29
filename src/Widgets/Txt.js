export function Txt({ text, isBold, fontSize, center }) {
    const fontWeight = isBold ? "font-bold" : "";
    const customStyle = fontSize ? { fontSize: `${fontSize}px` } : {};
    const textAlign = center ? "text-center" : "";
    return (
        <div className={`${fontWeight} ${textAlign}`} style={customStyle}>
            {text}
        </div>
    );
}