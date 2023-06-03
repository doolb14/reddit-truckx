import {FlatList} from 'react-native';
import React from 'react';
import CommentCard from '../../simple/CommentCard';
import _style from './style';
import {Separator} from '../../basic';

const CommentsList = ({comments}) => {
  return (
    <FlatList
      data={comments}
      contentContainerStyle={_style.content_container}
      renderItem={({item}) => <CommentCard comment={item} />}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default CommentsList;
