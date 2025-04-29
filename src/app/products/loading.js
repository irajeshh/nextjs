//If this file is deleted, then user will see like a freezing page until the
// data is loaded from the repository or API.
export default function Loading() {
    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Loading Products...</h1>
            <div className="space-y-4">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="h-12 bg-gray-300 rounded animate-pulse"></div>
                ))}
            </div>
        </div>
    );
}