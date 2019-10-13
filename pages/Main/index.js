/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
// import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import {
  Container,
  Form,
  TextInput,
  AddUserButton,
  UsersList,
  UserWrapper,
  UserAvatar,
  UserName,
  UserBio,
  UserProfButton,
  UserProfButtonText,
  MissingUsersWrapper,
  MissingUsersText,
} from './styles';

export default class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    loading: false,
    users: [],
    problem: false,
  };

  /*   async componentDidMount() {
    const users = await AsyncStorage.getItem('users');
    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  } */

  handleAddUser = async () => {
    const { users, newUser } = this.state;
    this.setState({ loading: true });

    function checkExistence(user) {
      return user.login.toUpperCase() === newUser.toUpperCase();
    }
    const userExists = users.findIndex(checkExistence);
    if (userExists !== -1) {
      this.setState({
        problem: true,
        loading: false,
        newUser: '',
      });
      return;
    }

    try {
      const response = await api.get(`/users/${newUser}`);
      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      this.setState({
        users: [...users, data],
        newUser: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      this.setState({
        users: [...users],
        newUser: '',
        loading: false,
        problem: true,
      });

      Keyboard.dismiss();
    }
  };

  handleNavigate = user => {
    const { navigation } = this.props;
    navigation.navigate('User', { user });
  };

  static navigationOptions = {
    title: 'Users',
  };

  render() {
    const { newUser, loading, users, problem } = this.state;

    return (
      <Container>
        <Form>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add User"
            value={newUser}
            onChangeText={text =>
              this.setState({ newUser: text, problem: false })
            }
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
            problem={problem}
          />
          <AddUserButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="add" size={20} color="#FFF" />
            )}
          </AddUserButton>
        </Form>
        {users.length > 0 ? (
          <UsersList
            data={users}
            keyExtractor={user => user.login}
            renderItem={({ item }) => (
              <UserWrapper>
                <UserAvatar source={{ uri: item.avatar }} />
                <UserName> {item.name}</UserName>
                <UserBio> {item.bio}</UserBio>
                <UserProfButton onPress={() => this.handleNavigate(item)}>
                  <UserProfButtonText>View Profile</UserProfButtonText>
                </UserProfButton>
              </UserWrapper>
            )}
          />
        ) : (
          <MissingUsersWrapper>
            <Icon name="error" size={80} color="#7159c1" />
            <MissingUsersText>No users found</MissingUsersText>
          </MissingUsersWrapper>
        )}
      </Container>
    );
  }
}
