import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class LastName extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
            <Form color='green' >
                <h1 className="ui centered">Enter User Details</h1>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default LastName;