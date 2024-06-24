import { TProduct } from "@/Types";
import Image from "next/image";
import { FC } from "react";
import s from "./Product.module.css";

interface ProductProps {
  product: TProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className={s.Product}>
      <div className={s.Image}>
        <Image src={`/products${product.img}`} alt={product.title} fill />
      </div>
      <div className={s.Info}>
        <h2>{product.title}</h2>
        <div>
          <p>Alfagroup-sport</p>
          <p>Артикул: {product.vendorCode}</p>
        </div>
        <p>{product.price.toLocaleString("ru")} ₽</p>
        <div>
          {product.parameters.map((param) => (
            <p key={param}>{param}</p>
          ))}
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
