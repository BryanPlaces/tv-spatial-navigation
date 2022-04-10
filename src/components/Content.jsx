import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentRow from "./ContentRow";
import React, { useCallback, useState } from 'react';

const Content = () => {
  const { ref, focusKey } = useFocusable();
  const [selectedAsset, setSelectedAsset] = useState(null);

  const rows = [
    {
      title: 'Recommended'
    },
    {
      title: 'Movies'
    },
    {
      title: 'Series'
    },
    {
      title: 'TV Channels'
    },
    {
      title: 'Sport'
    }
  ];

  const onAssetPress = useCallback((asset) => {
    setSelectedAsset(asset);
  }, []);

  const onRowFocus = useCallback(
    ({ y }) => {
      ref.current.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="content-wrapper">
        <div className="content-title">Norigin Spatial Navigation</div>
        <div className="selected-item-wrapper">
          <div className="selected-item-box"
            color={selectedAsset ? selectedAsset.color : '#565b6b'}
          />
          <div className="selected-item-title">
            {selectedAsset
              ? selectedAsset.title
              : 'Press "Enter" to select an asset'}
          </div>
        </div>
        <div ref={ref} className="scrolling-rows">
          <div>
            {rows.map(({ title }) => (
              <ContentRow
                key={title}
                title={title}
                onAssetPress={onAssetPress}
                onFocus={onRowFocus}
              />
            ))}
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default Content;