import React, { forwardRef } from 'react';
import MenuItem from './MenuItem';
import './style.css';

// const Menu = ({ list }) => {
//   return (
//     <main>
//       {list.map((item) => (
//         <MenuItem item={item} key={item.id} />
//       ))}
//     </main>
//   );
// };

// export default Menu;

const Menu = forwardRef(({ list }, ref) => (
  <main ref={ref}>
    {list.map((item) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </main>
));

export default Menu;
