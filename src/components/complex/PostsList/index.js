import {FlatList, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import PostCard from '../../simple/PostCard';
import {useDispatch, useSelector} from 'react-redux';
import _style from './style';
import {Separator} from '../../basic';
import {FETCH_MORE_POSTS} from '../../../redux/sagas/saga_actions';
import LoadMore from '../../basic/LoadMore';

const PostsList = ({...props}) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.list);
  const [itemInFocus, setItemInFocus] = useState(0);

  const loadMoreData = useCallback(
    () => dispatch({type: FETCH_MORE_POSTS}),
    [],
  );

  const viewability_config = {
    minimumViewTime: 1000,
    waitForInteraction: false,
    viewAreaCoveragePercentThreshold: 100,
    // itemVisiblePercentThreshold: 80,
  };

  const handleViewableItemsChanged = useCallback(info => {
    setItemInFocus(info?.viewableItems?.[0]?.index);
  }, []);
  return (
    <FlatList
      contentContainerStyle={_style.content_container}
      viewabilityConfig={viewability_config}
      onViewableItemsChanged={handleViewableItemsChanged}
      showsVerticalScrollIndicator={false}
      data={posts}
      renderItem={({item, index}) => (
        <PostCard post={item?.data} is_focused={index === itemInFocus} />
      )}
      ItemSeparatorComponent={Separator}
      onEndReached={loadMoreData}
      ListFooterComponent={LoadMore}
    />
  );
};

export default PostsList;
