import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import WebView from './pages/WebView';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      WebView,
    },
    {
      headerLayoutPreset: 'center',
      initialRouteName: 'Main',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
