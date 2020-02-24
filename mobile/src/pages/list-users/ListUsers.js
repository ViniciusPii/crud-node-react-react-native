import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListUsers = () => {
  return (
    <SafeAreaView>
      <Text>Olá ListUsers</Text>
    </SafeAreaView>
  );
};

export default ListUsers;

ListUsers.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: () => <Icon name="home" size={24} />,
};
