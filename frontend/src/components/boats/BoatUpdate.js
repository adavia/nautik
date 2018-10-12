import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { Formik, Form, Field } from 'formik';
import isEmpty from 'lodash/isEmpty';
import * as Yup from 'yup';
import { Flex, Box, Text } from 'rebass/emotion';

import { fetchBoatAndCategories, updateBoat } from '../../modules/boats/actions';
import { loadingIndicator } from '../../modules/loader/selectors';
import { getSelectedBoat } from '../../modules/boats/selectors';
import { getAllCategories } from '../../modules/categories/selectors';

import { InputField, TextField, SelectField } from '../shared/Fields';
import Spinner from '../shared/Spinner';
import { Button } from '../shared/Common';
import AttachmentUpload from './AttachmentUpload';

class BoatUpdate extends PureComponent {
  componentDidMount() {
    const { boatId } = this.props;
    this.props.dispatch(fetchBoatAndCategories(boatId));
  }

  render() {
    const { loading, categories, boat, boatId, dispatch } = this.props;

    if (loading || !boat) {
      return <Spinner />;
    }

    return (
      <Formik
        initialValues={{ 
          name: boat.name,
          description: boat.description, 
          categories: boat.categories.map(c => ({ value: c._id, label: c.name })),
          pricing: {
            retail: boat.pricing.retail,
            sale: boat.pricing.sale
          }
        }}
        validationSchema={
          Yup.object().shape({
            name: Yup.string()
              .max(50, 'Name cannot be to long!')
              .required('You must add a name!'),
            description: Yup.string()
              .max(300, 'Description cannot be to long!')
              .required('You must add a description!'),
          })
        }
        onSubmit={ async (values, actions) => {
          const categories = values.categories.map(category => category.value);
          await dispatch(updateBoat(boatId, { ...values, categories }));
          actions.setSubmitting(false);
        }}
        render={props => (
          <Form>
            <Flex flexWrap='wrap' mx={2}>  
              <Content width={[1, 1/2]} px={2}>
                <Field 
                  name="name" 
                  label="Name" 
                  placeholder="Name of this boat" 
                  component={InputField} 
                />
                <Field 
                  name="description" 
                  label="Description" 
                  rows={4}
                  placeholder="Leave a description.." 
                  component={TextField} 
                />
                <Field 
                  name="categories" 
                  label="Categories" 
                  options={categories.map(c => ({ value: c._id, label: c.name }))}
                  isMulti={true}
                  placeholder="Select at least one category" 
                  component={SelectField} 
                />
              </Content>
              <Content width={[1, 1/2]} px={2}>
                <Field 
                  name="pricing.retail" 
                  label="Retail price"
                  type="number"
                  min="0" 
                  component={InputField} 
                />
                <Field 
                  name="pricing.sale" 
                  label="Sale price" 
                  type="number" 
                  min="0" 
                  component={InputField} 
                />
              </Content>
              <Box width={1} p={2}>
                <Text mb={3}>Attach some images here!</Text>
                <AttachmentUpload id={boatId} />
              </Box>
              <Box p={2}>
                <Button 
                  primary 
                  disabled={props.isSubmitting && isEmpty(props.errors)}
                  type="submit">
                  {props.isSubmitting ? <span>Submitting...</span> : <span>Submit!</span>}
                </Button>
              </Box>
            </Flex>
          </Form>
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  const loadingState = loadingIndicator(['SELECT_BOAT', 'FETCH_CATEGORIES']);

  return { 
    loading: loadingState(state),
    boat: getSelectedBoat(state),
    categories: getAllCategories(state)
  }
}

const Content = styled(Box)``;

Flex.defaultProps = {
  flexDirection: ['column', 'row'],
}

export default connect(mapStateToProps)(BoatUpdate);