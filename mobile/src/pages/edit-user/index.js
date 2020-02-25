import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Background, Container, Title} from '../../components/styles';
import {InputArea, Input, Button, ButtonText, ButtonCancel} from './styles';
import axios from 'axios';

const EditUser = ({navigation}) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [office, setOffice] = useState();

  const createUser = () => {
    axios.post('http://localhost:3333/create', {
      name,
      age,
      office,
    });
    navigation.navigate('ListUsers');
    setName('');
    setAge('');
    setOffice('');
  };

  return (
    <Background>
      <Container>
        <Title>Editar Usuário</Title>
        <InputArea>
          <Input
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            autoCorrect={false}
            autoFocus={true}
            placeholder={'Nome do Funcionário'}
            placeholderTextColor={'#575757'}
            value={name}
            onChangeText={text => setName(text)}
          />
          <Input
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            autoCorrect={false}
            placeholder={'Idade'}
            placeholderTextColor={'#575757'}
            keyboardType={'numeric'}
            value={age}
            onChangeText={text => setAge(text)}
          />
          <Input
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            autoCorrect={false}
            placeholder={'Cargo'}
            placeholderTextColor={'#575757'}
            value={office}
            onChangeText={text => setOffice(text)}
          />
          <Button onPress={() => createUser()}>
            <ButtonText>Cadastrar</ButtonText>
          </Button>
          <ButtonCancel>
            <ButtonText onPress={() => navigation.navigate('ListUsers')}>
              Cancelar
            </ButtonText>
          </ButtonCancel>
        </InputArea>
      </Container>
    </Background>
  );
};

export default EditUser;
