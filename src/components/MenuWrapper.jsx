import React from 'react';
import MenuItem from './MenuItem';

const MenuWrapper = (hasFocusedChild) => {
  console.log(hasFocusedChild);
  return (
    <div className={hasFocusedChild ? 'menu-wrapper-test' : 'menu-wrapper'}>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
}

export default MenuWrapper;