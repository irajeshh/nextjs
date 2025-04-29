//If this file is deleted, then user will see like a freezing page until the
// data is loaded from the repository or API.
export default function Loading() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl mb-4">Loading will take 20 seconds fake delay...</h1>
            <div className="animate-pulse space-y-4">
                {/* Shimmer Skeleton for Title */}
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>

                {/* Shimmer Skeleton for Image */}
                <div className="h-64 bg-gray-300 rounded"></div>

                {/* Shimmer Skeleton for Description */}
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
        </div>
    );
}