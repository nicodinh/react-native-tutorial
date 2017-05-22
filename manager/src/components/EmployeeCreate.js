import React, { Component } from 'react';
import { connect }          from 'react-redux';

import {
  Card,
  CardSection,
  Button
} from './common';
import {
  employeeUpdate,
  employeeCreate
} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' }); // explained in the lesson 141
  }

  render() {
    console.log(this.props.employee);

    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Create
          </Button>  
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  return { name, phone, shift } = employeeForm;
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);