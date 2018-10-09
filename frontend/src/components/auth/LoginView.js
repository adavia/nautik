import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { Box } from 'rebass/emotion';

import { login } from '../../modules/auth/actions';

import Login from './Login';

class LoginView extends Component {
  onLogin = (values) => {
    return this.props.dispatch(login(values));
  }

  render() {
    const { history } = this.props;
    
    return (
      <Container>
        <Login 
          history={history}
          onLogin={this.onLogin} 
        />
      </Container>
    );
  }
}

const Container = styled(Box)``;

Container.defaultProps = {
  p: 15
}

export default connect()(LoginView);
