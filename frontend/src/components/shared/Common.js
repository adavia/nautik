import React from 'react';
import styled from 'react-emotion';

export const Button = (props) => {
  return (
    <CustomButton {...props}>
      {props.children}
    </CustomButton>
  );
}

const CustomButton = styled('button')({
  cursor: 'pointer',
  display: 'inline-block',
  minHeight: '1em',
  outline: 0,
  border: 'none',
  verticalAlign: 'baseline',
  background: '#e0e1e2 none',
  color: 'rgba(0,0,0,.6)',
  fontFamily: 'Raleway, sans-serif',
  margin: '0 .25em 0 0',
  padding: '.78em 1.5em .78em',
  textTransform: 'none',
  textShadow: 'none',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '1em',
  fontStyle: 'normal',
  textAlign: 'center',
  borderRadius: '.28rem',
  '&:hover': {
    backgroundColor: '#cacbcd',
    backgroundImage: 'none',
    boxShadow: '0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset',
    color: 'rgba(0,0,0,.8)'
  }
})