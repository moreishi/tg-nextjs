import CardItem from "@/components/CardItem";
import { Link } from "@nextui-org/react";
import { LARAVEL_URL } from "@/config/env";

async function getProducts(categoryId: string) {
    const products = await fetch(`${LARAVEL_URL}/api/products/category/${categoryId}`);
    console.log(products);
    return products.json();
}

export default async function CategorySlugPage({
    params: { categoryId },
  }: {
    params: { categoryId: string }
  }) {

    const productsData = getProducts(categoryId);
    const [{products}] = await Promise.all([productsData]);

    return (
        <div className="md:==container md:mx-auto mb-4" style={{maxWidth: '768px'}}>
            <div className="grid grid-cols-3 gap-4">
            {products.map((product:any) => 
            <Link href={`/products/${product.id}`} key={product.id}><CardItem data={{product: product}} /></Link>)}
            </div>
        </div>
    );
  }
  