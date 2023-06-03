import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import CommentsScreen from '../screens/CommentsScreen';
import {
  HOME_SCREEN,
  POST_DETAIL_SCREEN,
  LOGIN_SCREEN,
} from '../constants/route_names';
import {getTokenObj} from '../utils/AuthUtils';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../redux/slices/login';
import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const BaseRoutes = () => {
  const [show_loading, setShowLoading] = useState(true);
  const dispatch = useDispatch();
  const is_logged_in = useSelector(state => state.login.is_logged_in);

  useEffect(() => {
    getTokenObj()
      .then(token_obj => {
        if (token_obj) {
          dispatch(loginUser());
        }
      })
      .finally(() => setShowLoading(false));
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {show_loading ? (
        <Stack.Screen name={'Loading Screen'} component={LoadingScreen} />
      ) : !is_logged_in ? (
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen name={POST_DETAIL_SCREEN} component={CommentsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default BaseRoutes;
