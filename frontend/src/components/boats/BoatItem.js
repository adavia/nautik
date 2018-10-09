import React from 'react';
import { Flex, Box, Text } from 'rebass/emotion';

import { Edit } from 'emotion-icons/fa-regular';
import styled from 'react-emotion';

import ModalBase from '../shared/Modal/ModalBase';
import CategoryList from './CategoryList';
import BoatUpdate from './BoatUpdate';

const BoatItem = ({ boat }) => {
  const price = boat.pricing.retail.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  const modalProps = {
    ariaLabel: 'Update boat',
    element: <Edit size={20} css={{
      marginLeft: 'auto',
      cursor: 'pointer'}} 
    />
  };

  return (  
    <Container>
      <Item>
        <Name>{boat.name}</Name>
        <Description>{boat.description}</Description>
        <CategoryList categories={boat.categories} />
        <Flex flexDirection="row" mt={2}>
          <Price>${price}</Price>
          <ModalBase {...modalProps}>
            <BoatUpdate boatId={boat._id} />
          </ModalBase>
        </Flex>
      </Item>
    </Container>
  );
}

const Container = styled(Box)``

Container.defaultProps = {
  px: 2,
  py: 2,
  width: [1, 1/4]
}

const Item = styled(Box)({
  borderRadius: '.2em',
  boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5',
  transition: 'box-shadow .1s ease, transform .1s ease'
})

Item.defaultProps = {
  px: 3,
  py: 2
}

const Name = styled(Text)(props => 
  ({
    fontFamily: props.theme.fonts.Dosis,
    color: props.theme.colors.grayLight,
    fontSize: '1.3em',
    fontWeight: 700
  })
)

const Description = styled(Text)({
  fontSize: '15px'
})

Description.defaultProps = {
  pt: 1
}

const Price = styled(Text)(props => 
  ({
    fontFamily: props.theme.fonts.Dosis,
    fontWeight: 700
  })
)
 
export default BoatItem;