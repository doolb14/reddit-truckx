import {Button, View} from 'react-native';
import React from 'react';
import style from './style';
import SubredditList from '../../components/complex/SubredditList';
import PostsList from '../../components/complex/PostsList';
import PostFiltersList from '../../components/complex/PostFiltersList';
import Text from '../../components/basic/Text';

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.filters}>
        <Text>Subreddits: </Text>
        <SubredditList />
      </View>
      <View style={style.seperator} />
      <View style={style.filters}>
        <Text>Filters: </Text>
        <PostFiltersList />
      </View>

      <View style={style.seperator} />
      <PostsList />
    </View>
  );
};

export default HomeScreen;
