import React, { forwardRef } from 'react';
import MenuItem from './MenuItem';
import { menuItemsData } from './data';
import './style.css';

const Menu = () => {
  return (
    <main>
      {menuItemsData.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </main>
  );
};

export default Menu;
