import React from 'react';
import {SafeAreaView, Text} from 'react-native';

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
};
