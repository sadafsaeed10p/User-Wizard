import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class UserDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email } } = this.props;

        return (
            <div>
                <h1 className="ui centered">Here are the submitted details</h1>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            Email: <a href='mailto:sadaf.saeed@tenpearls.com'>{email}</a>
                        </List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Submit</Button>
            </div>
        )
    }
}

export default UserDetails;