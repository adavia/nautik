import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { Formik, Form, Field } from 'formik';
import isEmpty from 'lodash/isEmpty';
import * as Yup from 'yup';
import { Box } from 'rebass/emotion';

import { createBoat } from '../../modules/boats/actions';
import { fetchCategories } from '../../modules/categories/actions';
import { getAllCategories } from '../../modules/categories/selectors';

import { InputField, TextField, SelectField } from '../shared/Fields';
import { Button } from '../shared/Common';

class BoatNew extends PureComponent {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    const { categories } = this.props;

    return (
      <Formik
        initialValues={{ 
          name: '',
          description: '', 
          categories: [],
          pricing: {
            retail: '',
            sale: ''
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
          const response = await this.props.dispatch(createBoat({ ...values, categories }));
          
          if (response.status === 201) {
            actions.resetForm(false);
          } else {
            actions.setSubmitting(false);
            console.log(response.data);
          }
        }}
        render={props => (
          <Container p={3}>
            <Form>
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
              <Button 
                primary 
                disabled={props.isSubmitting && isEmpty(props.errors)}
                type="submit">
                {props.isSubmitting ? <span>Submitting...</span> : <span>Submit!</span>}
              </Button>
            </Form>
          </Container>
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  return { 
    categories: getAllCategories(state)
  }
}

const Container = styled(Box)``;

Container.defaultProps = {
  p: 3
}

export default connect(mapStateToProps)(BoatNew);