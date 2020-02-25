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
