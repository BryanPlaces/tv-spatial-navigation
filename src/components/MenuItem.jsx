import React from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

const MenuItem = () => {
  const { ref, focused } = useFocusable();

  console.log(ref, focused);

  return <div ref={ref} className={focused ? 'menu-item-focus' : 'menu-item'} />;
}

export default MenuItem;