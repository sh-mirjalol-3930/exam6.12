import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteData, increment } from "../../redux/cart-slice/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { getDatalike, removeDatalike } from "../../redux/like-slice/likeSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ShopCard = (props) => {
  const { thumbnail, description, price, userPrice, count, id, title } = props;
  const dispatch = useDispatch();
  const { like } = useSelector((state) => state.likeSlice);
  const isLiked = like.find((value) => value.id === id);

  return (
    <div className="bg-white border border-[#E9E9E9] p-[15px] rounded-[10px] relative">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <div className="flex gap-[20px] items-start">
          <Link to={`/products/${id}`}>
            <img
              className="w-[120px] py-[20px] border border-[#E9E9E9] rounded-[5px]"
              src={thumbnail}
              alt={title}
            />
          </Link>
          <div className="flex flex-col py-[20px] items-start gap-4">
            <a
              href="#"
              className="text-base w-[160px] font-medium text-[16px] text-gray-900 hover:underline"
            >
              {title}
            </a>
            <div className="flex items-center gap-4">
              {Boolean(isLiked) ? (
                <FaHeart
                  onClick={() => {
                    dispatch(removeDatalike(id));
                    toast.success("Dislike");
                  }}
                  className="bg-[#F4F5FA] p-[8px] rounded-[5px] text-[34px] cursor-pointer text-red-500"
                />
              ) : (
                <FaRegHeart
                  onClick={() => {
                    dispatch(getDatalike(props));
                    toast.success("Liked");
                  }}
                  className="bg-[#F4F5FA] p-[8px] rounded-[5px] text-[34px] cursor-pointer text-red-500"
                />
              )}
              <button
                onClick={() => dispatch(deleteData(id))}
                type="button"
                className="bg-[#F4F5FA] p-[7px] rounded-[5px]"
              >
                <RiDeleteBin6Line className="text-[20px] text-red-600" />
              </button>
            </div>
          </div>
          <p className="text-[12px] py-[20px] w-[270px]">{description}</p>
        </div>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              onClick={() => dispatch(decrement(id))}
              type="button"
              className="py-[3px] rounded-[10px] px-[13px] flex justify-center items-center text-[27px] font-[700] bg-[#F4F5FA]"
            >
              <p className="mt-[-6px]">-</p>
            </button>
            <span className="px-2">{count}</span>
            <button
              onClick={() => dispatch(increment(id))}
              type="button"
              className="py-[2px] rounded-[10px] px-[10px] flex justify-center items-center text-[25px] font-[700] bg-[#F4F5FA]"
            >
              <p className="mt-[-4px]">+</p>
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[5px] min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <div className="flex gap-[5px] items-start justify-between">
            <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900">{price} so'm</p>
              <p className="text-base font-bold text-gray-900">
                {userPrice ? userPrice.toFixed(2) : 0} so'm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
