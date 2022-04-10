import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

const Asset = ({ title, color, onEnterPress, onFocus }) => {
  const { ref, focused } = useFocusable({
    onEnterPress,
    onFocus,
    extraProps: {
      title,
      color
    }
  });

  return (
    <div ref={ref} className='asset-wrapper'>
      <div className={`asset-box ${color} ${focused ? 'asset-box-focus': ''}`}/>
      <div className='asset-title'>{title}</div>
    </div>
  );
}

export default Asset;