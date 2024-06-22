import { TProduct } from "@/Types";

type ProductOmited = Omit<TProduct, "parameters">;

interface ProductRes extends ProductOmited {
  parameters: string;
}

export async function getProducts(id: string) {
  try {
    const productsRes = await fetch(`https://1ae6dad7db0c881d.mokky.dev/products?categoryId=${id}`);

    if (!productsRes.ok) throw new Error("Something went wrong");

    const productsParsed: ProductRes[] = await productsRes.json();

    const products: TProduct[] = productsParsed.map((product) => ({
      ...product,
      parameters: product.parameters.split("; "),
    }));

    return products;
  } catch (e) {
    console.error(e);
  }
}
