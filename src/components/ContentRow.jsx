import React, { useCallback, useRef } from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import Asset from './Asset';

const ContentRow = ({ title: rowTitle, onAssetPress, onFocus }) => {
  const { ref, focusKey } = useFocusable({ onFocus });

  const assets = [
    {
      title: 'Asset 1',
      color: 'asset-color-1'
    },
    {
      title: 'Asset 2',
      color: 'asset-color-2'
    },
    {
      title: 'Asset 3',
      color: 'asset-color-3'
    },
    {
      title: 'Asset 4',
      color: 'asset-color-1'
    },
    {
      title: 'Asset 5',
      color: 'asset-color-2'
    },
    {
      title: 'Asset 6',
      color: 'asset-color-3'
    },
    {
      title: 'Asset 7',
      color: 'asset-color-1'
    },
    {
      title: 'Asset 8',
      color: 'asset-color-2'
    },
    {
      title: 'Asset 9',
      color: 'asset-color-3'
    }
  ];
  const scrollingRef = useRef(null);

  const onAssetFocus = useCallback(
    ({ x }) => {
      scrollingRef.current.scrollTo({
        left: x,
        behavior: 'smooth'
      });
    },
    [scrollingRef]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className='content-row-wrapper'>
        <div className='content-row-title'>{rowTitle}</div>
        <div ref={scrollingRef} className='content-row-scrolling-wrapper'>
          <div className='content-row-scrolling-content'>
            {assets.map(({ title, color }) => (
              <Asset
                key={title}
                title={title}
                color={color}
                onEnterPress={onAssetPress}
                onFocus={onAssetFocus}
              />
            ))}
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default ContentRow;