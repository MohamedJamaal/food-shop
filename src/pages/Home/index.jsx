import React from 'react';
import CartCountButton from '../../components/common/CartCountButton';
import Banner from '../../components/Home/Banner';
import Menu from '../../components/common/Menu';
import Footer from '../../components/common/Footer';

function Home() {
  return (
    <div>
      <Banner />
      <Menu />
      <Footer />
      <CartCountButton />
    </div>
  );
}

export default Home;
