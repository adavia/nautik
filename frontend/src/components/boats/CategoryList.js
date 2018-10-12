import React from 'react';
import { Flex } from 'rebass/emotion';
import styled from 'react-emotion';

import CategoryItem from './CategoryItem';

const CategoryList = ({ categories }) => {
  return (  
    <Container>
      {categories.map(category =>
        <CategoryItem key={category._id} category={category} />
      )}
    </Container>
  );
}

const Container = styled(Flex)({
  flexWrap: 'wrap',
  marginTop: 7
})
 
export default CategoryList;