import { FC } from "react";
import s from "./Products.module.css";
import { getProducts } from "@/utils/getProducts";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
  id: string;
}

const Products: FC<ProductsProps> = async ({ id }) => {
  const products = await getProducts(id);

  if (!products || products.length === 0) {
    return (
      <div className={s.Empty}>
        <h2>Извините, товары данной категории не найдены</h2>
      </div>
    );
  }

  return (
    <div className={s.Products}>
      {products.map((product) => (
        <Link key={product.id} className={s.Product} href={`/products/${product.id}`}>
          <div className={s.Product_Image}>
            <Image src={`/products${product.img}`} alt={product.title} fill />
          </div>
          <h2>{product.title}</h2>
          <p>{product.price.toLocaleString("ru")} ₽</p>
          <div className={s.Product_Params}>
            {product.parameters.map((param) => (
              <p key={param}>{param}</p>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
