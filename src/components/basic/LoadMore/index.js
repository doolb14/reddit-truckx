import React, {useEffect, useState} from 'react';
import Text from '../Text';
import _style from './style';

const LoadMore = () => {
  const [face, setFace] = useState(true);
  useEffect(() => {
    const interval_id = setInterval(() => {
      setFace(val => !val);
    }, 500);
    return () => clearInterval(interval_id);
  }, []);
  return (
    <Text style={_style.text}>
      {face ? 'loading-- >^u^< --data' : 'loading-- >^o^< --data'}
    </Text>
  );
};

export default LoadMore;
