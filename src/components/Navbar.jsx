import React, { useEffect } from 'react';

import MenuWrapper from './MenuWrapper';
import MenuItem from './MenuItem';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';

const Navbar = ({ focusKey: focusKeyParam }) => {
  const {
    ref,
    focusSelf,
    hasFocusedChild,
    focusKey
    // setFocus, -- to set focus manually to some focusKey
    // navigateByDirection, -- to manually navigate by direction
    // pause, -- to pause all navigation events
    // resume, -- to resume all navigation events
    // updateAllLayouts -- to force update all layouts when needed
  } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: null,
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
    extraProps: { foo: 'bar' }
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className={hasFocusedChild ? 'menu-wrapper-test' : 'menu-wrapper'}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </FocusContext.Provider>
  );
}

export default Navbar;