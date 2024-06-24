import { TProduct } from "@/Types";

type ProductOmited = Omit<TProduct, "parameters">;

interface ProductRes extends ProductOmited {
  parameters: string;
}

export async function getProduct(id: string) {
  try {
    const productRes = await fetch(`https://1ae6dad7db0c881d.mokky.dev/products?id=${id}`);

    if (!productRes.ok) throw new Error("Something went wrong");

    const productParsed: ProductRes[] = await productRes.json();

    const product: TProduct = { ...productParsed[0], parameters: productParsed[0].parameters.split("; ") };

    return product;
  } catch (e) {
    console.error(e);
  }
}
