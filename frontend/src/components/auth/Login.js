import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Box } from 'rebass/emotion';
import { InputField } from '../shared/Fields';

import { Button } from '../shared/Common';

const Login = ({ history, onLogin, }) => {
  return (
    <Formik
      initialValues={{ 
        email: '', 
        password: '' 
      }}
      onSubmit={ async (values, actions) => {
        const response = await onLogin(values);
        if (response.status === 200) {
          history.push('/');
        } else {
          actions.setSubmitting(false);
        }
      }}
      render={props => (
        <Container mx="auto" width={[ 1, 1/3 ]}>
          <Title>Sign In to the site!</Title>
          <Form>
            <Field 
              name="email" 
              label="Email" 
              placeholder="Your email" 
              component={InputField} 
            />
            <Field 
              name="password" 
              label="Password" 
              type="password"
              placeholder="Your super secret password!" 
              component={InputField} 
            />
            <Button 
              primary 
              disabled={props.isSubmitting}
              type="submit">
              {props.isSubmitting ? <span>Signing in...</span> : <span>Sign in!</span>}
            </Button>
            <Register>Or <Link to="/users/new">register</Link> now</Register>
          </Form>
        </Container>
      )}
    />
  );
}

const Container = styled(Box)``;

const Title = styled('h1')(props => 
  ({
    fontFamily: props.theme.fonts.Dosis,
    fontSize: '2rem',
    marginBottom: 0,
    textAlign: 'center'
  })
)

const Register = styled('span')({
  marginLeft: '20px'
})

export default Login;