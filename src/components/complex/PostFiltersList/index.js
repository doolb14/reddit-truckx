import {View, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import PostFilterTag from '../../simple/PostFilterTag';
import style from './style';
import {useDispatch} from 'react-redux';
import {POST_FILTERS} from '../../../constants';
import {changePostsFilter} from '../../../redux/slices/post';
import {Separator} from '../../basic';

const PostFiltersList = () => {
  const dispatch = useDispatch();
  const filters = Object.values(POST_FILTERS);
  const [selected_filter_index, setSelectedFilterIndex] = useState(0);
  const onClickFilter = useCallback(new_filter => {
    setSelectedFilterIndex(filters.indexOf(new_filter));
    dispatch(changePostsFilter({filter: new_filter}));
  }, []);

  return (
    <FlatList
      horizontal
      style={style.container}
      contentContainerStyle={style.content_container}
      data={filters}
      renderItem={({item}) => (
        <PostFilterTag
          filter={item}
          is_selected={item === filters[selected_filter_index]}
          onPressFilter={onClickFilter}
        />
      )}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default PostFiltersList;
