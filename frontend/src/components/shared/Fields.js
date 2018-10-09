import React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import Select from 'react-select';

export const InputField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const hasError = touched[field.name] && errors[field.name];
  return (
    <Container error={hasError}>
      {props.label && <Label>{props.label}</Label>}
      <Input {...field} {...props} />
      {hasError && <Error>{errors[field.name]}</Error>}
    </Container>
  );
}

export const TextField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const hasError = touched[field.name] && errors[field.name];
  return (
    <Container error={hasError}>
      {props.label && <Label>{props.label}</Label>}
      <TextArea {...field} {...props} />
      {hasError && <Error>{errors[field.name]}</Error>}
    </Container>
  );
}

export const SelectField = ({
  field,
  form: { touched, errors, setFieldValue, setFieldTouched },
  ...props
}) => {
  const onSetValue = option => {
    setFieldValue(field.name, option)
  }

  const onSetTouched = option => {
    setFieldTouched(field.name, option.value)
  }

  const hasError = touched[field.name] && errors[field.name];
  
  return (
    <Container error={hasError}>
      {props.label && <Label>{props.label}</Label>}
      <Select 
        styles={selectStyles} 
        {...field} 
        {...props} 
        error={hasError}
        onChange={onSetValue}
        onBlur={onSetTouched}
      />
      {hasError && <Error>{errors[field.name]}</Error>}
    </Container>
  );
}

const Container = styled('div')(props =>
  ({
    margin: '15px 0',
    'label': {
      color: props.error && "tomato"
    },
    'input, textarea': {
      borderColor: props.error && "tomato"
    },
    'input[type=number]': {
      minHeight: '45px',
      width: '30%',
      fontFamily: props.theme.fonts.Dosis,
      fontSize: '1.3em',
      fontWeight: 700
    },
    'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': { 
      '-webkit-appearance': 'none',
      margin: 0
    }
  })
)

const Label = styled('label')({
  display: 'block',
  fontSize: '15px',
  marginBottom: '5px'
})

const inputStyles = css({
  display: 'flex',
  boxSizing: 'border-box',
  border: '1px solid #CCCCCC',
  borderRadius: '3px',
  fontSize: '14px',
  width: '100%',
  fontFamily: 'Raleway, sans-serif',
  backgroundColor: 'white',
  minHeight: '38px',
  padding: '9px',
  outline: 'none',
  '&::placeholder': {
    color: '#CCCCCC'
  }
})

const selectStyles = {
  control: (styles, { selectProps }) => css({
    display: 'flex',
    boxSizing: 'border-box',
    border: `1px solid ${selectProps.error ? "tomato" : "#CCCCCC"}`,
    borderRadius: '3px',
    fontSize: '14px',
    width: '100%',
    backgroundColor: 'white',
    minHeight: '38px',
    outline: 'none',
  }),
  placeholder: styles => ({ ...styles, color: "#CCCCCC" }),
};

const Input = styled('input')(
  inputStyles
)

const TextArea = styled('textarea')(
  inputStyles
)

const Error = styled('span')({
  fontSize: '14px',
  color: 'tomato',
  marginTop: '5px',
})
