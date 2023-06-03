import {View} from 'react-native';
import React from 'react';
import style from './style';
import Text from '../../basic/Text';

const CommentCard = ({comment}) => {
  return (
    <View style={style.container}>
      <Text style={style.comment}>{comment}</Text>
    </View>
  );
};

export default CommentCard;
