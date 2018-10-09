import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { Box } from 'rebass/emotion';

import { createUser } from '../../modules/users/actions';

import UserNew from './UserNew';

class UserNewView extends Component {
  onCreateUser = (values) => {
    return this.props.dispatch(createUser(values));
  }

  render() {
    const { history } = this.props;
    
    return (
      <Container>
        <UserNew
          history={history}
          onCreateUser={this.onCreateUser} 
        />
      </Container>
    );
  }
}

const Container = styled(Box)``

Container.defaultProps = {
  p: 15
}

export default connect()(UserNewView);
