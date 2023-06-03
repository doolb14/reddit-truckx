import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import Text from '../../basic/Text';

const SubredditTag = ({subreddit, is_selected, onPressSubreddit}) => {
  return (
    <TouchableOpacity onPress={() => onPressSubreddit(subreddit)}>
      <View style={style.container(is_selected)}>
        <Text style={style.text(is_selected)}>{subreddit?.url}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(SubredditTag);
