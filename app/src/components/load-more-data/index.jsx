import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 :  20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if(products && products.length === 100) setDisabledBtn(true);
  
  }, [products]);

  if(loading) {
    return <div>Loading data! Please wait..</div>
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length ? products.map((item) => (
          <div className="product rounded-md border-gray-500" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        )) : null}
      </div>
      <div className="button-container flex justify-center gap-2 my-3">
        <button className="bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-xl p-3 cursor-pointer disabled:bg-gray-950 disabled:cursor-not-allowed disabled:text-gray-300" onClick={() => setCount(count + 1)} disabled={disabledBtn}>Load More Products</button>
        {disabledBtn ? <p className="p-2">You have reached to 100 products</p> :null}
      </div>
    </div>
  );
}
