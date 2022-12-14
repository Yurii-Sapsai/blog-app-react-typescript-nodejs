import { FC } from 'react';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Posts from '../../components/Posts/Posts';
import Footer from '../../components/Footer/Footer';

const HomePage: FC = () => {
  
  return (
    <>
      <Banner />
      <Categories />
      <Posts />
      <Footer />
    </>
  )
}

export default HomePage;