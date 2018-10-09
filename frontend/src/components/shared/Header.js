import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text } from 'rebass/emotion';
import styled from 'react-emotion';

import ModalBase from './Modal/ModalBase';
import BoatNew from '../boats/BoatNew';

const Header = ({ currentUser, onLogout }) => {
  const modalProps = {
    ariaLabel: 'Add information for a specific boat',
    element: <Trigger>Add new product</Trigger>
  };

  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo>NAUTIK</Logo>
        </Link>
        <ModalBase {...modalProps}>
          <BoatNew />
        </ModalBase>
        <Box mx='auto' />
        <Settings>Hi!, {currentUser.email} - <Logout onClick={onLogout}>log out</Logout></Settings>
      </Content>
    </Container>
  )
}

const Container = styled('header')(props =>
  ({
    gridArea: 'header',
    background: props.theme.colors.yellow,
    gridColumn: '1 / span 3',
    'a': {
      textDecoration: 'none',
      color: 'inherit'
    }
  })
)

const Trigger = styled(Text)({
  cursor: 'pointer'
})

Trigger.defaultProps = {
  mx: [0, 2],
  pb: [3, 0]
}

const Content = styled(Flex)(props => 
  ({
    color: props.theme.colors.grayLight,
  })
)

Content.defaultProps = {
  flexDirection: ['column', 'row'],
  m: 3
}

const Logo = styled(Text)(props => 
  ({
    fontFamily: props.theme.fonts.Dosis,
    fontSize: '1.5em',
    lineHeight: '1rem',
    fontWeight: 700
  })
)

Logo.defaultProps = {
  mr: [0, 20],
  pb: [3, 0]
}

const Settings = styled('div')({
  fontSize: '15px'
})

const Logout = styled('span')({
  fontWeight: 'bold',
  cursor: 'pointer'
})
 
export default Header;