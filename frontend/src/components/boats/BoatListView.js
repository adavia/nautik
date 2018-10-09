import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBoats } from '../../modules/boats/actions';
import { loadingIndicator } from '../../modules/loader/selectors';
import { getAllBoats } from '../../modules/boats/selectors';

import Spinner from '../shared/Spinner';
import BoatList from './BoatList';

class BoatListView extends Component {
  componentDidMount() {
    this.props.dispatch(fetchBoats());
  }

  render() {
    const { loading, boats } = this.props;
    
    if (loading) {
      return <Spinner />;
    }

    return (
      <BoatList boats={boats} /> 
    );
  }
}

function mapStateToProps(state) {
  const loadingState = loadingIndicator(['FETCH_BOATS']);
  
  return { 
    loading: loadingState(state),
    boats: getAllBoats(state)
  }
}
 
export default connect(mapStateToProps)(BoatListView);