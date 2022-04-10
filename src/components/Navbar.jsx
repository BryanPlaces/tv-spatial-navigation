import React, { useEffect } from 'react';

import MenuWrapper from './MenuWrapper';

import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';

const Navbar = ({ focusKey: focusKeyParam }) => {
  const { ref, focusSelf, hasFocusedChild, focusKey } = useFocusable({
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
  console.log(ref);
  return (
    <FocusContext.Provider value={focusKey}>
      <MenuWrapper ref={ref} hasFocusedChild={hasFocusedChild}>
      </MenuWrapper>
    </FocusContext.Provider>
  );
}

export default Navbar;