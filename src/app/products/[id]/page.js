import { getProductById } from '@/Repos/Products';

export const dynamic = 'force-dynamic'; // Ensures dynamic rendering

export default async function ProductDetail({ params }) {
    const { id } = params;
    const product = await getProductById(id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">{product.name}</h1>
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                <p className="text-lg text-gray-700">{product.description}</p>
                <p className="text-sm text-gray-500">Product ID: {product.id}</p>
            </div>
        </div>
    );
}