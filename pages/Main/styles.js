import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #f5f5f5;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20;
  border-bottom-width: 1px;
  border-color: #ddd;
`;
export const TextInput = styled.TextInput`
  background-color: #fff;
  flex: 1;
  margin-right: 10;
  border-radius: 10px;
  padding: 10px 15px;
  border: ${props => (props.problem ? '1px solid #BD2C00' : '1px solid #eee')};
`;
export const AddUserButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const UsersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 10px 12px;
`;
export const UserWrapper = styled.View`
  align-items: center;
  margin-bottom: 20px;
  flex-shrink: 0;
`;
export const UserAvatar = styled.Image`
  width: 70;
  height: 70;
  border-radius: 35;
`;
export const UserName = styled.Text`
  color: #333;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
`;
export const UserBio = styled.Text.attrs({
  numberOfLines: 2,
})`
  text-align: center;
  margin-bottom: 10px;
`;
export const UserProfButton = styled(RectButton)`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background-color: #555;
  height: 40px;
  border-radius: 10;
`;
export const UserProfButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const MissingUsersWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 0px;
`;

export const MissingUsersText = styled.Text`
  text-align: center;
  color: #333;
  font-size: 22;
`;
