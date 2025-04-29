import Link from 'next/link'; // Import Link from Next.js
import { getAllProducts } from '@/Repos/Products';

export default async function ProductsPage() {
    const products = await getAllProducts();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Our Products v0.1.1</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <li key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                        {/* Use Link directly without <a> */}
                        <Link href={`/products/${product.id}`}>
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            {/* Add more product details here if available */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}