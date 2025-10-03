import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const OrderForm = () => {
  const cartData = useSelector((state) => state.cartSlice.items);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    price: "",
    adress: "",
    phone_num: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalPrice = localCart.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
    const order = {
      ...formData,
      price: totalPrice,
      data: localCart, 
    };

    try {
      await axios.post(
        "https://68ca8081430c4476c349bc0a.mockapi.io/hw/order",
        order
      );
    } catch (error) {
      console.error(error);
      alert("something went wrong :(");
    }
  };

  return (
    <form className="container w-[400px] flex gap-[20px] flex-col " onSubmit={handleSubmit}>
      <input
        className="py-[5px] px-[15px] rounded-[5px] border-1 border-[#9FB1C9]"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ism"
      />
      <input
        className="py-[5px] px-[15px] rounded-[5px] border-1 border-[#9FB1C9]"
        type="text"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        placeholder="Familiya"
      />
      <input
        className="py-[5px] px-[15px] rounded-[5px] border-1 border-[#9FB1C9]"
        type="text"
        name="adress"
        value={formData.adress}
        onChange={handleChange}
        placeholder="Manzil"
      />
      <input
        className="py-[5px] px-[15px] rounded-[5px] border-1 border-[#9FB1C9]"
        type="text"
        name="phone_num"
        value={formData.phone_num}
        onChange={handleChange}
        placeholder="Telefon raqam"
      />
      <button className="bg-[#243047] rounded-[5px] text-[white] py-[5px]" type="submit">Buyurtma berish</button>
    </form>
  );
};

export default OrderForm;