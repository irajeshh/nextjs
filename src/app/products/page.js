
import { getAllProducts } from '@/Repos/Products';
import * as W from "@/Widgets/Widgets";


export default async function Products() {
    const products = await getAllProducts();
    return (
        <W.Column>
            <W.Txt text="Products" isBold={true} fontSize={20} />
            <W.Txt text="List of Products" isBold={false} fontSize={16} />
            <W.Txt text="Click on a product to view details" isBold={false} fontSize={14} />
            {products.map((product) => (
                <li key={product.id}>
                    <W.Linker
                        text={product.name}
                        href={`/products/${product.id}`}
                    />
                </li>
            ))}
        </W.Column>
    );
}