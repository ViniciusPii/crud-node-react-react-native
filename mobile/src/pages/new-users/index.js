import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Background} from '../../components/styles';

const NewUser = () => {
  return (
    <Background>
      <SafeAreaView>
        <Text>Olá NewUser</Text>
      </SafeAreaView>
    </Background>
  );
};

export default NewUser;

NewUser.navigationOptions = {
  title: 'Novo Usuário',
  tabBarIcon: ({tintColor}) => (
    <Icon name="add-circle" size={30} color={tintColor} />
  ),
};
