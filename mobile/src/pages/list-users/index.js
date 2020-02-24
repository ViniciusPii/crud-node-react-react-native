import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Background} from './styles';

const ListUsers = () => {
  return <Background />;
};

export default ListUsers;

ListUsers.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={35} color={tintColor} />,
};
