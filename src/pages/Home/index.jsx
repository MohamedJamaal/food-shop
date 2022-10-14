import React, { useRef } from 'react';
import CartCountButton from '../../components/common/CartCountButton';
import Banner from '../../components/Home/Banner';
import Menu from '../../components/common/Menu';
import Footer from '../../components/common/Footer';
import { menuItemsData } from '../../components/common/Menu/data';

function Home() {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <CartCountButton />
    </div>
  );
}

export default Home;
