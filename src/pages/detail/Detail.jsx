import { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { BiCartAdd } from "react-icons/bi";
import { getData } from "../../redux/cart-slice/cartSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const DetailProduct = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const { thumbnail, title, price } = product || {};
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (error) {
    return <p>Something went wrong :(</p>;
  }

  if (loading) {
    return <h1 className="container">Loading...</h1>;
  }

  if (!product) return null;

  return (
    <>
    <div className="container">
      <h2 className="text-[25px] font-[700] text-[#1f2026] font-mono">{product.category}</h2>
      <p className="flex items-center">
        <FaStar className="text-[#ffcc02]"/>
        <FaStar className="text-[#ffcc02]"/>
        <FaStar className="text-[#ffcc02]"/>
        <FaStar className="text-[#ffcc02]"/>
        <FaStar className="text-[#ffcc02]"/>
        {product.rating} ({product.discountPercentage}%)
      </p>
      <div className="flex items-center justify-around">
        <div className="flex items-center">
          <div className="flex flex-col items-baseline gap-[10px]">
            {product.images?.map((img, i) => (
              <img key={i} src={img} width={100} alt={`${product.title}-${i}`} />
            ))}
          </div>
          <img className="w-[400px]" src={product.images?.[0]} alt={product.title}/>
        </div>
        <div className="w-[350px] flex flex-col gap-[15px]">
          <b className="text-[50px] font-[100]">{product.title}</b>
          <p>{product.description}</p>
          <strong>{product.price} so'm</strong>
          <button onClick={() => {dispatch(getData(product)); toast.success("Product cartga qo'shildi");}} className="rounded-[100px] border-1 border-[#00b6ff] p-[5px]">
              add to cart
            </button>
        </div>
        <ul><div className="flex flex-col">
            {product.reviews?.map((rev, i) => (
              <div key={i} className="border-1 border-[#C6D0DF] p-[15px] my-[15px]">
                <h3 className="text-[20px] font-[700]">{rev.reviewerName}</h3>
                <p className="flex gap-[10px] items-center">{rev.comment}<span className="text-[#ffcc02] flex gap-[5px] items-center">{rev.rating} <FaStar className="inline"/></span></p>
                <p className="text-[#6c757d] text-[13px]">date: {rev.date}</p>
              </div>
            ))}
      </div></ul>
      </div>
    </div>
    </>
  );
};

export default DetailProduct;
