import Link from 'next/link'; // Import Link from Next.js
import { getAllProducts } from '@/Repos/Products';
import * as W from '@/Widgets/Widgets';

///Primary page which depends upon the repository API
/// and will be shown only after loading the products from repository
export default async function ProductsPage() {
    const products = await getAllProducts();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Our Products Page</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <W.Linker
                        text={product.name}
                        href={`/products/${product.id}`}
                        openInNewTab={false}
                    />
                ))}
            </ul>
        </div>
    );
}