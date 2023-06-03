import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {View} from 'react-native';
import _style from './style';
import Text from '../Text';
import PropTypes from 'prop-types';

const Image = ({is_focused, thumbnail_source, style, ...props}) => {
  const [is_image_loaded, setIsImageLoaded] = useState(null); // set true on success and false on failed
  const is_gif = props.source?.uri?.match(
    /(http(s?):)([/|.|\w|\s|-])*\.(?:gif)/g,
  );
  return (
    <View>
      <FastImage
        {...props}
        style={style}
        resizeMode={FastImage.resizeMode.contain}
        onLoad={() => setIsImageLoaded(true)}
      />

      {/* add is_focused here to enable show image on focus only */}
      {is_image_loaded && (is_gif ? is_focused : true) ? null : (
        <FastImage
          {...props}
          source={thumbnail_source}
          resizeMode={FastImage.resizeMode.contain}
          style={{...style, position: 'absolute'}}
        />
      )}
      {is_image_loaded === null ? (
        <View style={_style.image_loading_indicator}>
          <Text>loading image</Text>
        </View>
      ) : null}
    </View>
  );
};

Image.propTypes = {
  is_focused: PropTypes.bool,
  thumbnail_source: PropTypes.object,
};

export default Image;
