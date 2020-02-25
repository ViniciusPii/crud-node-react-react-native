import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Background, Container, Title} from '../../components/styles';
import {
  UserView,
  UserInfo,
  UserTitle,
  UserText,
  List,
  UserInfoContainer,
  UserInfoActions,
  Buttom,
} from './styles';
import axios from 'axios';

const ListUsers = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/list').then(res => {
      setData(res.data);
    });
  }, [data]);

  const deleteUser = id => {
    axios.delete(`http://localhost:3333/delete/${id}`).then(res => {
      const filter = data.filter(item => item._id !== id);
      setData(filter);
    });
  };

  const renderItem = ({item}) => {
    return (
      <UserView>
        <UserInfoContainer>
          <UserInfo>
            <UserTitle>Nome: </UserTitle>
            <UserText>{item.name}</UserText>
          </UserInfo>
          <UserInfo>
            <UserTitle>Idade: </UserTitle>
            <UserText>{item.age}</UserText>
          </UserInfo>
          <UserInfo>
            <UserTitle>Cargo: </UserTitle>
            <UserText>{item.office}</UserText>
          </UserInfo>
        </UserInfoContainer>
        <UserInfoActions>
          <Buttom onPress={() => deleteUser(item._id)}>
            <Icon name="trash-can-outline" size={30} color={'#b30000'} />
          </Buttom>
          <Buttom onPress={() => navigation.navigate('EditUser')}>
            <Icon name="pencil-outline" size={30} color={'#222'} />
          </Buttom>
        </UserInfoActions>
      </UserView>
    );
  };

  return (
    <Background>
      <Container>
        <Title>Crud Usuários :)</Title>
        <List
          data={data}
          keyExtractor={item => item._id}
          renderItem={renderItem}
        />
      </Container>
    </Background>
  );
};

export default ListUsers;

ListUsers.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={30} color={tintColor} />,
};
