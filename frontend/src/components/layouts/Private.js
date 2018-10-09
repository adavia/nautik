import React, { Component, Fragment } from 'react';
import styled from 'react-emotion';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { authenticate, logout } from '../../modules/auth/actions';
import { loadingIndicator } from '../../modules/loader/selectors';

import Header from '../shared/Header';
import Spinner from '../shared/Spinner';

class Private extends Component {
  componentDidMount = async () => {
    const { history, authenticated } = this.props;
    if (!authenticated) {
      const response = await this.props.dispatch(authenticate());
      if (response.status !== 200) {
        history.push('/auth/login');
      }
    }
  }

  onLogout = async () => {
    const { history } = this.props;

    const response = await this.props.dispatch(logout());
    if (response.status === 200) {
      history.push('/auth/login');
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    
    return (
      <Route component={matchProps => {
        const { currentUser, loading, authenticated } = rest;

        if (loading) {
          return <Spinner />;
        }
        
        return (
          <Container>
            {authenticated && 
              <Fragment>
                <Header currentUser={currentUser} onLogout={this.onLogout} />
                <Sidebar />
                <Content>
                  <Component {...rest} {...matchProps} />
                </Content>
              </Fragment>
            }
          </Container>
        );   
      }} />
    );
  }
}

function mapStateToProps(state) {
  const { authenticated, currentUser } = state.auth;

  const loadingState = loadingIndicator(['AUTH']);
  
  return { 
    loading: loadingState(state),
    authenticated,
    currentUser
  }
}

const Container = styled('div')({
  display: 'grid',
  minHeight: '100vh',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '250px 1fr',
  gridTemplateAreas: "'sidebar header' 'sidebar content'"
})

const Sidebar = styled('aside')(props =>
  ({
    gridArea: 'sidebar',
    background: '#F1F1F1',
    gridColumn: props.collapsed ? '1' : '3 / span 3'
  })
)

const Content = styled('main')({
  gridArea: 'content',
  gridColumn: '1 / span 3'
})

export default withRouter(connect(mapStateToProps)(Private));