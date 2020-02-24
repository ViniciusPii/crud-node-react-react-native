import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ListUser from '../src/pages/list-user/ListUsers';
import NewUser from '../src/pages/new-user/NewUser';

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createBottomTabNavigator({ListUser, NewUser}),
  }),
);

export default Routes;
