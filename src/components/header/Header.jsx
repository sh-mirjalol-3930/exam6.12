import { Badge } from 'antd'
import React from 'react'
import { BiBorderAll } from 'react-icons/bi'
import { FaEarthAsia, FaHandshake } from 'react-icons/fa6'
import { IoApps, IoBriefcaseSharp, IoHeartSharp, IoLocation, IoSearchSharp } from 'react-icons/io5'
import { MdCall } from 'react-icons/md'
import { PiShoppingCartDuotone } from 'react-icons/pi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const {data} = useSelector((state) => state.cartSlice)
  const {like} = useSelector((state) => state.likeSlice)
  
  return (
    <div>
      <div className="container">
        <div className="flex py-[5px] justify-between items-center">
          <div className="flex items-center gap-[20px]">
            <p className='flex items-center gap-[5px] text-[13px] text-[#C2CDDD]'><IoLocation/>Shahar <span className='text-[blue] underline'>Toshkent</span></p>
            <p className='flex items-center gap-[5px] text-[13px] text-[#5D78FF]'><FaHandshake className='text-[22px] mt-[2px]'/>Продавайтена Zon.uz</p>
            <p className='flex items-center gap-[5px] text-[13px] text-[#6682A9]'><IoBriefcaseSharp />Покупать как юрлицо</p>
            <select className='text-[13px] text-[#6682A9]' name="help" id="">
              <option value="1">Помощь</option>
              <option value="2">Контакты</option>
              <option value="3">О нас</option>
            </select>
            <p className='text-[#6682A9] text-[13px] px-[10px]'>Контакты</p>
          </div>
          <p className='flex items-center gap-[5px] text-[13px] font-[700]'><MdCall className='text-[18px] text-[#6682A9]'/>+998-78 555-35-00</p>
        </div>
        <div className="flex items-center py-[18px] mb-[20px] justify-between gap-[20px]">
          <Link to="/"><img className='w-[160px]' src="https://zon.uz/_next/static/media/zon.uz-logo.b0330e5a.svg" alt="" /></Link>
          <button className='flex py-[8px] border-2 items-center px-[8px] text-[#011C47] border-[#011C47] rounded-[6px] font-[700] gap-[5px]'><BiBorderAll className='text-[20px]'/>KATALOG</button>
          <div className="flex items-center rounded-[6px] border-[#6682A9] border-2 justify-between">
            <input className='w-[500px] h-[40px] px-[10px] outline-none' type="text" placeholder='Qidiruv...' />
            <IoSearchSharp className='text-[#6682A9] bg-[#D1DAE6] rounded-[0_4px_4px_0] text-[40px] p-[10px]' />
          </div>
          <Badge count={data.length}>
            <Link to="/cart"><PiShoppingCartDuotone className='text-[#6682A9] text-[40px] p-[5px]' /></Link>
          </Badge>
          <Badge count={like.length}>
            <Link to={'/liked'}><IoHeartSharp className='text-[#6682A9] text-[35px] p-[5px]' /></Link>
          </Badge>
          <div className="flex items-center">
            <FaEarthAsia className='text-[#6682A9] text-[35px] p-[5px]' />
            <select className='outline-none text-[18px] font-[600] rounded-[6px] p-[5px]' name="language" id="">
              <option value="UZ">UZ</option>
              <option value="RU">RU</option>
              <option value="EN">EN</option>
            </select>
          </div>
          <Link to={'/'}><IoApps className='text-[#6682A9] text-[35px] p-[5px]' /></Link>
          <button className='bg-[#5D78FF] text-white text-[18px] rounded-[6px] px-[15px] p-[5px]'>Kirish</button>
        </div>
      
      </div>
    </div>
  )
}

export default Header
