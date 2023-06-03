import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import ApiAxios from '../../utils/ApiAxios';
import {getApiToGetPostComments} from '../../constants/api';
import CommentsList from '../../components/complex/CommentsList';
import style from './style';
import Text from '../../components/basic/Text';

const CommentsScreen = () => {
  const {
    params: {post},
  } = useRoute();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    ApiAxios.get(getApiToGetPostComments(post.id)).then(r => {
      const _comments = r.data?.[1]?.data?.children?.map(
        itm => itm?.data?.body,
      );
      setComments(_comments);
    });
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>{post?.title}</Text>
      <CommentsList comments={comments} />
    </View>
  );
};

export default CommentsScreen;
