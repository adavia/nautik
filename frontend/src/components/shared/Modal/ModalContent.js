import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'react-emotion';

const ModalContent = ({
  header,
  content,
  modalRef,
  onToggle,
  onClickAway
}) => {
  return ReactDOM.createPortal(
    <Overlay>
      <Modal innerRef={modalRef}>
        <Button type="button" onClick={onToggle} />
        <Header>{header}</Header>
        <Container>{content}</Container>
      </Modal>
    </Overlay>,
    document.body
  );
}

const Overlay = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  padding: '1rem',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 9999,
  overflowX: 'hidden',
  overflowY: 'auto',
  transformOrigin: '50% 50%',
})

const Modal = styled('div')({
  width: '60%',
  backgroundColor: '#FFF',
  boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.2)',
  borderRadius: '3px',
  '@media (max-width: 576px)': {
    width: '100%',
  }
})

const Header = styled('div')(props => 
  ({
    borderBottom: '1px solid rgba(34,36,38,.15)',
    padding: '0.7em',
    fontSize: '1.2em',
    color: props.theme.colors.grayLight,
    fontFamily: props.theme.fonts.Dosis,
    fontWeight: 700
  })
)

const Container = styled('div')``

const Button = styled('button')({
  position: 'fixed',
  top: 0,
  right: 0,
  background: '#FFF',
  width: '2.5rem',
  height: '2.5rem',
  padding: 0,
  border: 0,
  cursor: 'pointer',
  outline: 0,
  boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.2)',
  
  '&:before, &:after': {
    content: '""',
    position: 'absolute',
    top: '1.2rem',
    left: '0.25rem',
    width: '2rem',
    height: '0.1rem',
    backgroundColor: '#888',
  },

  '&:before': {
    transform: 'rotate(45deg)',
  },

  '&:after': {
    transform: 'rotate(-45deg)',
  },

  '&:hover:before, &:hover:after': {
    backgroundColor: '#444',
  }
})
 
export default ModalContent;