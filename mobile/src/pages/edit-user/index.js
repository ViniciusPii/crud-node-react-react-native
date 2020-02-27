import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {
  Background,
  Container,
  Title,
  InputArea,
  Input,
  Button,
  ButtonText,
} from '../../components/styles';
import {ButtonCancel} from './styles';
import axios from 'axios';

const EditUser = ({navigation}) => {
  const [data, setData] = useState({});
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [office, setOffice] = useState();

  const id = navigation.state.params.id;

  useEffect(() => {
    axios.get(`http://localhost:3333/user/${id}`).then(res => {
      setData(res.data);
    });
  }, [id]);

  useEffect(() => {
    setName(data.name);
    setAge(String(data.age));
    setOffice(data.office);
  }, [data]);

  const editUser = () => {
    axios.put(`http://localhost:3333/update/${id}`, {
      name,
      age,
      office,
    });
    navigation.navigate('ListUsers');
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
          <Button onPress={() => editUser(id)}>
            <ButtonText>Editar</ButtonText>
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
