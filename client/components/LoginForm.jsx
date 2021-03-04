import React from 'react';
import styled from 'styled-components';

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #48C9B0;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 50%;
  height: 40%;
  padding: 10px;
  overflow: auto;
`;

const StyledButton = styled.button`
  background-color: #364EB9;
  border-color: #364EB9;
  border-radius: 5px;
  color: white;
  padding: 5px;
  margin: 10px;
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleSignUp(e) {
    e.preventDefault();
    console.log('signing up');
  }

  render() {
    return (
      <LoginFormContainer>
          <span>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </span>
          <span>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </span>
          <StyledButton onClick={this.handleLogin}>Login</StyledButton>
          <span>
            New to MentorMatch? 
            <StyledButton onClick={this.handleSignUp}>Sign Up</StyledButton>
          </span>
      </LoginFormContainer>
    )
  }
}



export default LoginForm;