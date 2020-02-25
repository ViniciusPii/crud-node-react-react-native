import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['#262630', '#1b2d4e'],
})`
  flex: 1;
`;

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

export const InputArea = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
`;

export const Input = styled.TextInput`
  margin-top: 20px;
  width: 80%;
  background-color: #fff;
  height: 50px;
  border-radius: 7px;
  padding-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #07f;
  border-radius: 7px;
  height: 50px;
  margin-top: 20px;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
