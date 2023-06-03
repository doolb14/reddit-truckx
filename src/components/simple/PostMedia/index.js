import React from 'react';
import Video from '../../basic/Video';
import Image from '../../basic/Image';
import style from './style';

const PostMedia = ({post, is_focused}) => {
  return post?.is_video ? (
    <Video
      repeat
      is_focused={is_focused}
      source={{uri: post?.media?.reddit_video?.hls_url}}
      poster={post?.thumbnail}
      style={style.container}
    />
  ) : (
    <Image
      is_focused={is_focused}
      style={style.container}
      source={{
        uri: post?.url?.replace(/\.[^.]*gifv$/g, '.gif'),
      }}
      thumbnail_source={{uri: post?.thumbnail}}
    />
  );
};

export default PostMedia;
