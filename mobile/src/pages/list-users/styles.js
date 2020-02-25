import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  margin: 30px 0;
`;

export const UserView = styled.View`
  height: 70px;
  background: #fff;
  border-radius: 7px;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 10px;
  align-items: center;
  flex-direction: row;
`;

export const UserInfo = styled.View`
  flex-direction: row;
`;

export const UserTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const UserText = styled.Text`
  font-size: 16px;
`;

export const List = styled.FlatList`
  margin-top: 15px;
  width: 90%;
`;

export const UserInfoContainer = styled.View``;

export const UserInfoActions = styled.View`
  flex-direction: row;
`;

export const Buttom = styled.TouchableOpacity`
  padding-left: 10px;
`;
