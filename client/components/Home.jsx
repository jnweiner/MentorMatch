import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import LoginForm from './LoginForm.jsx';

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const Image = styled.img`
  width: 100%;
`;

const Home = () => (
  <div>
    <Header />
    <HomeContainer>
      <Section>
        <LoginForm />
      </Section>
      <Section>
        <Image src="/home-image/32627.jpg" />
      </Section>
    </HomeContainer>
  </div>
)

export default Home;

{/* <a href='https://www.freepik.com/vectors/people'>People vector created by rawpixel.com - www.freepik.com</a> */}