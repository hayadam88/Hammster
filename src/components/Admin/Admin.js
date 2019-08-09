import React, { Component } from 'react';
import { connect } from 'react-redux';




class Admin extends Component {
 
    componentDidMount() {
        // Get all bars from the database that are unapproved
        this.props.dispatch({
            type: 'FETCH_UNAPPROVED_BARS'
        });
        // Get all messages in the database
        this.props.dispatch({
            type: 'FETCH_ALL_MESSAGES'
        })
    }


    handleBarApprove = (bar) => {
        console.log(bar);
        this.props.dispatch({
            type: 'APPROVE_BAR',
            payload: bar.id
        })
    }

    handleBarDeny = (bar) => {
        console.log(bar);
        this.props.dispatch({
            type: 'DENY_BAR',
            payload: bar.id
        })
    }

    handleMessageDelete = (message) => {
        console.log(message);
        this.props.dispatch({
            type: 'DELETE_MESSAGE',
            payload: message.message
        })
    }

    render() {
        return (
            <>
                <div>
                    <h1>
                    Administration Page
                    </h1>
                </div>
                 <h1>Suggested Bars</h1>
                <table align="center">
                    <tbody>
                    <tr>
                        <th>Bar Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Notes</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {this.props.reduxStore.unapprovedBars.map(bar => {
                    return <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.address}</td>
                        <td>{bar.phone}</td>
                        <td>{bar.city}</td>
                        <td>{bar.notes}</td>
                        <td><button onClick={() => this.handleBarApprove(bar)}>Approve</button></td>
                        <td><button onClick={() => this.handleBarDeny(bar)}>Deny</button></td>
                    </tr>
                    })
                    }
                    </tbody>           
                </table>
                <br/>
                <h1>Messages Feed</h1>
                <table align="center">
                    <tbody>
                    <tr>
                        <th>User Name</th>
                        <th>Bar Name</th>
                        <th>Message</th>
                        <th></th>
                    </tr>
                    {this.props.reduxStore.setAllMessages.map(message => {
                    return <tr key={message.message}>
                        <td>{message.users_name}</td>
                        <td>{message.name}</td>
                        <td>{message.message}</td>
                        <td><button onClick={() => this.handleMessageDelete(message)}>Delete</button></td>
                    </tr>
                    })
                    }
                    </tbody>                    
                </table>
            </>
         )}// End render
   
}


const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(Admin);