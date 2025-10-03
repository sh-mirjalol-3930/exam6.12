import React from 'react'
import Card from '../../components/card/Card'
import SkeltonComponent from '../../components/skeleton/SkeletonCom';
import { useAxios } from '../../hooks/useAxios';
import Banner from '../../components/banner/Banner';

const Home = () => {
  const {data, loading} = useAxios("products");
  console.log(data);
  return (
    <>
      <div className='container'>
        <Banner />
        <div className='flex gap-[10px] flex-wrap justify-between mt-[10px] py-[20px]'>
          {loading ? (<SkeltonComponent/>)
          : (data.map((value) => <Card key={value.id} {...value}/>))}
        </div>
      </div>
    </>
  )
}

export default Home
