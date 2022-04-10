import React from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

function MenuItem() {
  const { ref, focused } = useFocusable();

  return <div ref={ref} className={focused ? 'menu-item-test' : 'menu-item'} />;
}

export default MenuItem;