import React, { FC } from 'react'
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Posts from '../../components/Posts/Posts';

const HomePage:FC = () => {
  return (
    <>
      <Banner/>
      <Categories/>
      <Posts/>
    </>
  )
}

export default HomePage