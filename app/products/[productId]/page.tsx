import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { LARAVEL_URL } from "@/config/env";

const getProduct = async (productId : string) => {
    const data = await fetch(`${LARAVEL_URL}/api/products/${productId}`)
    return data.json()
}

export default async function ProductPage({
    params: { productId },
  }: {
    params: { productId: string }
  }) {

    const productData =  getProduct(productId);
    const [product] = await Promise.all([productData]);

    {product}
  return (
    <div className="md:==container md:mx-auto mb-4" style={{maxWidth: '768px'}}>
        
      <Card className="max-w-[768px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{product.title}</p>
          <p className="text-small text-default-500">{product.brand}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <div className="center"><Image
          alt="nextui logo"
          radius="sm"
          src={product.images[product.images.length - 1]}
          width={460}
        /></div>
        <p className="text-small">{product.description}</p>
        <p className="text-large mt-4">{product.price}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        
      </CardFooter>
    </Card>

    </div>
  );
}
