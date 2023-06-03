import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import Text from '../../basic/Text';

const PostFilterTag = ({is_selected, filter, onPressFilter}) => {
  return (
    <TouchableOpacity onPress={() => onPressFilter(filter)}>
      <View style={style.container(is_selected)}>
        <Text style={style.text(is_selected)}>{filter}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostFilterTag;
