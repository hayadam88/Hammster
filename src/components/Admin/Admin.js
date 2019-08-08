import React, { Component } from 'react';
import { connect } from 'react-redux';




class Admin extends Component {
 
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_UNAPPROVED_BARS'
        });
        this.props.dispatch({
            type: 'FETCH_ALL_MESSAGES'
        })
    }

    handleApprove = (bar) => {
        console.log(bar);
    }

    handleDeny = (bar) => {
        console.log(bar)
        this.props.dispatch({
            type: 'DENY_BAR',
            payload: bar.id
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
                    {bar.name} <button onClick={() => this.handleApprove(bar)}>Approve</button><button onClick={() => this.handleDeny(bar)}>Deny</button>
                    </li>   
                    })}
                </ul>
                <br/>
                <ul>
                    {this.props.reduxStore.setAllMessages.map(message => {
                    return <li key={message.message}>
                    <p>Name:{message.users_name} Message: {message.message}</p>
                    <button>Edit</button><button>Delete</button>
                    
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