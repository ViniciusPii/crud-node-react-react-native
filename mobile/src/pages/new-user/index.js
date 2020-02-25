import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Background,
  Container,
  Title,
  InputArea,
  Input,
  Button,
  ButtonText,
} from '../../components/styles';
import axios from 'axios';

const NewUser = ({navigation}) => {
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
        <Title>Novo Usuário</Title>
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
