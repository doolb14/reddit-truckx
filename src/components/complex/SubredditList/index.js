import {FlatList, View} from 'react-native';
import React, {useCallback} from 'react';
import SubredditTag from '../../simple/SubredditTag';
import {useDispatch, useSelector} from 'react-redux';
import {changeSelectedSubredditUrl} from '../../../redux/slices/subreddit';
import style from './style';
import {Separator} from '../../basic';

const SubredditList = props => {
  const dispatch = useDispatch();
  const selected_subreddit_url = useSelector(
    state => state.subreddit.selected_subreddit_url,
  );

  const subreddits = useSelector(state => state.subreddit.list);
  const onSelectSubreddit = useCallback(subreddit => {
    dispatch(changeSelectedSubredditUrl({url: subreddit?.url}));
  }, []);
  return (
    <FlatList
      horizontal
      style={style.container}
      contentContainerStyle={style.content_container}
      data={subreddits}
      ItemSeparatorComponent={Separator}
      renderItem={({item}) => (
        <SubredditTag
          subreddit={item?.data}
          is_selected={selected_subreddit_url === item?.data?.url}
          onPressSubreddit={onSelectSubreddit}
        />
      )}
      {...props}
    />
  );
};

export default SubredditList;
