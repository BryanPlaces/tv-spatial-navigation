import React from 'react';

const MenuWrapper = ({hasFocusedChild}) => {
  return (
    <div className={hasFocusedChild ? 'menu-wrapper-test' : 'menu-wrapper'} />
  );
}

export default MenuWrapper;