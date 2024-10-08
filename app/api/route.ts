const url = process.env.LARAVEL_URL;

export async function GET(request: Request) {
    const product = await fetch(`${url}/api/products/categories`)
    .then(res => res.json())
    .then(console.log);
    return Response.json({ product })
  }