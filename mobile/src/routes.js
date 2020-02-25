import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ListUsers from './pages/list-users/index';
import NewUser from './pages/new-user/index';
import EditUser from './pages/edit-user/';

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createBottomTabNavigator(
      {ListUsers, NewUser},
      {
        tabBarOptions: {
          labelStyle: {
            fontSize: 12,
          },
          activeTintColor: '#fff',
          style: {
            backgroundColor: '#1b2c4c',
            height: 70,
          },
        },
      },
    ),
    Edit: createSwitchNavigator({EditUser}),
  }),
);

export default Routes;
