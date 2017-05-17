import React, { Component } from 'react';
import { Picker }           from 'react-native';
import { connect }          from 'react-redux';

import {
  Card,
  CardSection,
  Input,
  Button
} from './common';
import {
  employeeUpdate
} from '../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='jane'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='555-555-5555'
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);