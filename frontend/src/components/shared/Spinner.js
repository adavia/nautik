import React from 'react';
import styled from 'react-emotion';
import { Box } from 'rebass/emotion';
import Loader from 'react-spinkit';

const Spinner = () => {
  return ( 
    <Container>
      <Loader 
        fadeIn="half"
        name="ball-scale-multiple" 
        color="#FFB400"
      />
    </Container>
  );
}

const Container = styled(Box)``

Container.defaultProps = {
  my: 6,
  mx: 'auto',
  width: '5%'
}

export default Spinner;