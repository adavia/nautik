import React from 'react';
import { Flex } from 'rebass/emotion';
import styled from 'react-emotion';

import BoatItem from './BoatItem';

const BoatList = ({ boats }) => {
  return (  
    <Container>
      {boats.map(boat =>
        <BoatItem key={boat._id} boat={boat} />
      )}
    </Container>
  );
}

const Container = styled(Flex)``

Container.defaultProps = {
  flexWrap: 'wrap',
  m: 2
}
 
export default BoatList;