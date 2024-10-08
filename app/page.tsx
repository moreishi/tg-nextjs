import CardItem from "@/components/CardItem";
import { Link, Button } from "@nextui-org/react";
import SearchInput from "../components/SearchGroup/SearchInput";
import { LARAVEL_URL } from "@/config/env";

const https = require('https');
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

async function getCategories() {
  const categories = await fetch(`${LARAVEL_URL}/api/products/categories`, {
    method: "GET"
  });
  return categories.json();
}

async function getProducts() {
  const products = await fetch(`${LARAVEL_URL}/api/products`);
  return products.json();
}

export default async function Home() {

  const categoriesData = getCategories();
  const productsData = getProducts();
  const [categories, products] = await Promise.all([categoriesData, productsData]);

  return (
    <div className="md:==container md:mx-auto mb-4" style={{maxWidth: '768px'}}>
      <div className="grid mb-4">
        <SearchInput />
      </div>
      <div className="grid mb-4">
        Categories: <ul>{categories.map((cat:any) => {
          return <Link className="ml-3" href={`/products/category/${cat.slug}`}>{cat.name}</Link>
        })}</ul>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.products.map((product:any) => 
          <Link href={`/products/${product.id}`} key={product.id}><CardItem data={{product: product}} /></Link>)}
      </div>
    </div>
  );
}
