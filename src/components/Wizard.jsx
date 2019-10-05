import React, { Component } from 'react';
import FirstName from './FirstName';
import LastName from './LastName';
import EmailAddress from './EmailAddress';
import UserDetails from './UserDetails';
import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email } = this.state;
        const values = { firstName, lastName, email };
        switch (step) {
            case 1:
                return <FirstName
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 2:
                return <LastName
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 3:
                return <EmailAddress
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 4:
                return <UserDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            case 5:
                return <Success></Success>
        }
    }
}

export default MainForm;