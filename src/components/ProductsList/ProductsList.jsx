import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  updateProduct,
} from "../../features/products/productsSlice";
const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name,
      quantity,
      unit,
    };
    dispatch(addProduct(newProduct));
    setName("");
    setQuantity("");
    setUnit("");
  };
  return (
    <div>
      <h1>Список продуктов</h1>
      <div>
        <input
          type="text"
          placeholder="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Количество"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Единицы измерения"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
        <button onClick={handleAddProduct}>Добавить продукт</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.quantity} {product.unit}
            <button onClick={() => dispatch(removeProduct(product.id))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductsList;
