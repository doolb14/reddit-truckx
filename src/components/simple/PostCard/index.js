import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import PostMedia from '../PostMedia';
import {useNavigation} from '@react-navigation/native';
import {POST_DETAIL_SCREEN} from '../../../constants/route_names';
import Text from '../../basic/Text';

const PostCard = ({post, is_focused, ...props}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(POST_DETAIL_SCREEN, {post: post})}>
      <View style={styles.container}>
        <Text style={styles.posted_by}>{'Posted by ' + post?.author}</Text>
        <Text>{post?.title}</Text>

        {/* check whether post has video or image url */}
        {post?.is_video ||
        post?.url?.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g) ? (
          <PostMedia post={post} is_focused={is_focused} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(PostCard);
