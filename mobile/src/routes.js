import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ListUsers from './pages/list-users/ListUsers';
import NewUser from './pages/new-users/NewUser';

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createBottomTabNavigator({ListUsers, NewUser}),
  }),
);

export default Routes;
