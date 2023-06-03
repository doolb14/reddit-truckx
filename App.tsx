/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/redux/store';
import BaseRoutes from './src/routes/BaseRoutes';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer theme={DarkTheme}>
        <BaseRoutes />
      </NavigationContainer>
    </ReduxProvider>
  );
}

export default App;
