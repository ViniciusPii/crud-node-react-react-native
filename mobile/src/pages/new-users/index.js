import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Background, Container, Title} from '../../components/styles';
import {InputArea, Input, Button, ButtonText} from './styles';

const NewUser = () => {
  return (
    <Background>
      <Container>
        <Title>Novo Usuário</Title>
        <InputArea>
          <Input
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            autoCorrect={false}
            autoFocus={true}
            placeholder={'Nome do Funcionário'}
            placeholderTextColor={'#575757'}
          />
          <Input
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            autoCorrect={false}
            autoFocus={true}
            placeholder={'Idade'}
            placeholderTextColor={'#575757'}
            keyboardType={'numeric'}
          />
          <Input
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            autoCorrect={false}
            autoFocus={true}
            placeholder={'Cargo'}
            placeholderTextColor={'#575757'}
          />
          <Button>
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </InputArea>
      </Container>
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
