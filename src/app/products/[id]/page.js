import { getProductById } from '@/Repos/Products';

export const dynamic = 'force-dynamic'; // Ensures dynamic rendering

///Product details page, which renders the product details
///by fetching the id from the URL param
export default async function ProductDetail({ params }) {
    const { id } = params;
    const product = await getProductById(id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>ID: {product.id}</p>
        </div>
    );
}