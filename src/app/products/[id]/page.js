import { getProductById } from '@/Repos/Products';
import { Center } from '@/Widgets/Center';
import { Column } from '@/Widgets/Column';
import { Txt } from '@/Widgets/Txt';
export const dynamic = 'force-dynamic';

export default async function ProductDetail({ params }) {
    const { id } = await params; 
    const product = await getProductById(id);
    if (!product) return _productNotFound();
    return _detailsUI(product);
}


export function _detailsUI(product) {
    return (
        <Column
            children={<>
                <Txt
                    text={product.name}
                    isBold={true}
                    fontSize={48}
                    center={true}
                />
                <Txt
                    text={product.description}
                    fontSize={24}
                    center={true}
                />
                <Txt
                    text={product.id}
                    fontSize={12}
                    center={true}
                />
            </>
            }
        />
    );
}

export function _productNotFound() {
    return (
        <Center
            child={
                <Txt
                text={"Product not found"}
                isBold={true}
                fontSize={48}
                center={true}

                />
            }
        />
    );
}