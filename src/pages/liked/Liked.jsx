import React from 'react'
import Card from '../../components/card/Card';
import { useSelector } from 'react-redux';


const Liked = () => {
  const {like} = useSelector((state) => state.likeSlice);
  return (
    <div>
      <div className="container">
        <h1 className='text-[30px] font-bold py-[20px]'>Liked Products</h1>
        <div className='flex py-[10px] gap-[20px] flex-wrap'>
          {like.map((value) => (
            <Card key={value.id} {...value} />
          ))}
      </div>
      </div>
    </div>
  )
}

export default Liked
