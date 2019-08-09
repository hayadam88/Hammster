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
                    <h3>
                    This is the admin page
                    </h3>
                </div>
                <ul>
                    {this.props.reduxStore.unapprovedBars.map(bar => {
                    return <li key={bar.id}>
                    {bar.name} <button onClick={() => this.handleBarApprove(bar)}>Approve</button><button onClick={() => this.handleBarDeny(bar)}>Deny</button>
                    </li>   
                    })}
                </ul>
                <br/>
                <ul>
                    {this.props.reduxStore.setAllMessages.map(message => {
                    return <li key={message.message}>
                    <p>Name:{message.users_name} Message: {message.message}</p>
                    <button>Edit</button><button onClick={() => this.handleMessageDelete(message)}>Delete</button>
                    
                    </li>   
                    })}
                </ul>
            </>
         )}// End render
   


}





const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(Admin);