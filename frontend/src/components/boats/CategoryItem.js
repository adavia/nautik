import React from 'react';
import { Box, Text } from 'rebass/emotion';
import styled from 'react-emotion';

const CategoryItem = ({ category }) => {
  return (  
    <Container>
      <Item>
        {category.name}
      </Item>
    </Container>
  );
}

const Item = styled(Text)({
  fontSize: '14px'
})

const Container = styled(Box)({
  padding: 2,
  border: '1px solid #4f5456',
  borderRadius: 3,
  marginRight: 4
})
 
export default CategoryItem;