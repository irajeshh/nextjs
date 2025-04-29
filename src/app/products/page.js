import { getAllProducts } from '@/Repos/Products';
import * as W from '@/Widgets/Widgets';

///Primary page which depends upon the repository API
/// and will be shown only after loading the products from repository
export default async function ProductsPage() {
    const products = await getAllProducts();
    return (
        <W.Column>
            <W.Txt
                text="Our Products For You!"
                isBold={true}
                fontSize={48}
                center={true}
            />
            <W.GridView>
                {products.map(product => (
                    <W.Linker
                        text={product.name}
                        href={`/products/${product.id}`}
                        openInNewTab={false}
                    />
                ))
                }

            </W.GridView>
        </W.Column>

    );

}