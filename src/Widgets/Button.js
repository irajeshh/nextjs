///A common button component
export function Button({ onClick, customLabel, isIncrement, }) {
    const text = customLabel ?? (isIncrement ? "Increase" : "Decrease");
    return (
        <button
            className={`px-4 py-2 rounded ${isIncrement ? "bg-blue-500" : "bg-red-500"
                } text-white`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
