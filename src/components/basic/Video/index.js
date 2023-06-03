import React from 'react';
import RNVideo from 'react-native-video';
import PropTypes from 'prop-types';

const Video = ({is_focused, ...props}) => {
  return (
    <RNVideo
      paused={!is_focused}
      posterResizeMode="contain"
      resizeMode="contain"
      onError={err => console.log('VIDEO ERROR----------', err)}
      {...props}
    />
  );
};

Video.propTypes = {
  is_focused: PropTypes.bool,
  source: PropTypes.object,
};

export default Video;
