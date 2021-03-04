import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 5px;
  background-color: #EE4443;
`;

const Logo = styled.span`
  font-size: 40px;
  font-family: 'Patrick Hand', cursive;
  padding: 5px;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>MentorMatch</Logo>
  </HeaderContainer>
);

export default Header;