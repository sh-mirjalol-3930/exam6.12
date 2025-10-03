import React from "react";
import { useSelector } from "react-redux";
import ShopCard from "../../components/shop-cart/ShopCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data } = useSelector((state) => state.cartSlice);
  const totalPrice = data.reduce((acc, value) => acc + value.userPrice, 0);
  return (
    <div>
      <section className="bg-[#F4F5FA] py-[20px] antialiased">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {data.map((value) => (
                  <ShopCard key={value.id} {...value} />
                ))}
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <div className="space-y-4">
                  <dl className="flex items-center justify-between gap-4 border-b border-gray-200 pb-[20px] py-2">
                    <dt className="text-base font-bold text-gray-900">Итого</dt>
                    <dd className="text-base font-bold text-gray-900">{totalPrice.toFixed(2)}so'm</dd>
                  </dl>
                </div>
                <div className="flex justify-between">
                  <p>Товары</p>
                  <span>{data.length}</span>
                </div>
                <div className="flex justify-between">
                  <p>Скидка</p>
                  <span>0 so'm</span>
                </div>
                <div className="flex justify-between">
                  <p>Доставка</p>
                  <span>Бесплатная</span>
                </div>
                <Link to="/order">
                  <button className="w-full rounded-md bg-[#6682A9] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#005f73] sm:px-6">
                    Оформить заказ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
