import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getData } from "../../redux/cart-slice/cartSlice";
import { BiCartAdd } from "react-icons/bi";
import { IoMdHeart } from "react-icons/io";
import { getDatalike, removeDatalike } from "../../redux/like-slice/likeSlice";
import { useNavigate } from "react-router-dom"; 

const Card = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { thumbnail, title, price , id} = props;
  const { like } = useSelector((state) => state.likeSlice);

  const isLiked = like.find((value) => value.id === id);

  return (
    <div className="shadow w-[200px]  p-2">
      <div className="relative h-[200px]">
        <img onClick={() => {
          navigate(`/products/${id}`);
          // console.log("Image clicked");
        }} src={thumbnail} alt="" />
        {Boolean(isLiked) ? (
          <FaHeart onClick={()=> {
            dispatch(removeDatalike(id));
            toast.success("Dislike")
          }} 
          className="absolute top-1 right-2 cursor-pointer text-red"
          />
        ) : (<FaRegHeart onClick={()=> {
          dispatch(getDatalike(props));
          toast.success("liked")
        }}
        className="absolute top-1 right-2 cursor-pointer text-red"
        />)}
      </div>
      <div className="h-[100px] flex items-start justify-between flex-col">
        <h1>{title}</h1>
        <div className="flex text-[#6682A9] text-[12px] gap-[5px] items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <div className="flex items-center gap-[20px]">
            <b>{price} so'm</b>
            <button onClick={() => {dispatch(getData(props)); toast.success("Product cartga qo'shildi");}} className="rounded-[100px] border-1 border-[#00b6ff] p-[5px]">
              <BiCartAdd  className="text-[25px] text-[#00b6ff]"/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Card;