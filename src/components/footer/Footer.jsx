import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-[10px]'>
        <div className="container">
          <div className="flex gap-[20px] justify-between">
            <div className="flex w-full items-start border-1 border-[#E9E9E9] flex-col p-[20px]">
              <b>Контакты</b>
              <p className='text-[#6682A9]'>Call-центр</p>
              <span className='ml-[15px]'>+998-78 555-35-00</span>
              <p className='text-[#6682A9]'>Эл. почта</p>
              <span className='ml-[15px]'>info@zon.uz</span>
              <p className='text-[#6682A9]'>График работы</p>
              <span className='ml-[15px]'>В будние - с 09:00 до 18:00</span>
              <span className='ml-[15px]'>Суббота - с 09:00 до 16:00</span>
            </div>
            <div className="flex w-full gap-[20px] flex-col">
              <div className="flex flex-col border-1 border-[#E9E9E9] p-[20px]">
                <b>Мы в социальных сетях</b>
                <div className="flex items-center justify-between gap-[20px]">
                  <FaTelegram className='text-[30px]' />
                  <FaYoutube className='text-[35px]' />
                  <FaInstagram className='text-[32px]' />
                  <FaFacebook className='text-[30px]' />
                </div>
              </div>
              <div className="flex flex-col border-1 border-[#E9E9E9] p-[20px]">
                <div className="flex items-center gap-[20px]">
                  <img className='w-[100px]' src="https://www.fibernet.uz/wp-content/uploads/payme-logo.png" alt="" />
                  <img className='w-[100px] filter:brightness-0 invert' src="https://click.uz/click/images/logo.svg" alt="" />
                </div>
                <p className='text-center w-[250px]'>Интернет магазин Zon.uz 2017-2024. Все права защищены</p>
              </div>
            </div>
            <div className="flex w-full flex-col border-1 border-[#E9E9E9] p-[20px]">
              <b>Компания</b>
              <p className='text-[#007AA7]'>О нас</p>
              <p className='text-[#007AA7]'>Реквизиты</p>
              <p className='text-[#007AA7]'>Контакты</p>
              <p className='text-[#007AA7]'>Вакансии</p>
              <p className='text-[#007AA7]'>Карта сайта</p>
              <p className='text-[#007AA7]'>Партнерская программа</p>              
            </div>
            <div className="flex w-full flex-col border-1 border-[#E9E9E9] p-[20px]">
              <b>Помощь</b>
              <p className='text-[#007AA7]'>Вопросы и ответы</p>
              <p className='text-[#007AA7]'>Условия рассрочки</p>
              <p className='text-[#007AA7]'>Способ оптлаты</p>
              <p className='text-[#007AA7]'>Доставка</p>
              <p className='text-[#007AA7]'>Возврат товаров</p>
              <p className='text-[#007AA7]'>Сервисные центры</p>              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
