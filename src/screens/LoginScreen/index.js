import {View, Button, ToastAndroid} from 'react-native';
import React, {useCallback, useState} from 'react';
import style from './style';
import {requestUserLogin} from '../../utils/AuthUtils';
import {useDispatch} from 'react-redux';
import {logoutUser, loginUser} from '../../redux/slices/login';
import Text from '../../components/basic/Text';

const LoginScreen = () => {
  const [is_logging_in, setIsLoggingIn] = useState(false);
  const dispatch = useDispatch();
  const onLoginPress = useCallback(() => {
    setIsLoggingIn(true);
    requestUserLogin()
      .then(() => dispatch(loginUser()))
      .catch(err => {
        console.log(err);
        ToastAndroid.show(
          'Error logging in. Please try again later.',
          ToastAndroid.SHORT,
        );
        dispatch(logoutUser());
        setIsLoggingIn(false);
      });
  }, []);

  return (
    <View style={style.container}>
      <Text>{'>^u^<'}</Text>
      <Button disabled={is_logging_in} onPress={onLoginPress} title={'Login'} />
    </View>
  );
};

export default LoginScreen;
