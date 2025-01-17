import styled from 'styled-components/native';
import Input from '../../components/input';
import Button from '../../components/button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
  behavior: 'padding'
})`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const LogoText = styled.Text`
  margin: 10px 0;
  font-size: 60px;
  color: rgba(255, 255, 255, 0.8);
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`;
