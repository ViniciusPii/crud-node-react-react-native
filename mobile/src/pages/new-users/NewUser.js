import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NewUser = () => {
  return (
    <SafeAreaView>
      <Text>Olá NewUser</Text>
    </SafeAreaView>
  );
};

export default NewUser;

NewUser.navigationOptions = {
  title: 'Novo Usuário',
  tabBarIcon: () => <Icon name="add-circle" size={24} />,
};
