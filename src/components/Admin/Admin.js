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

    // Dispatch a saga that runs a PUT route to the "bars" table We send
    // the bar.id of the bar we're approving along with the saga dispatch. This
    // PUT route changes the "approved" boolean in our "bars" table to "true", and
    // this allows the bar to now be added to the Bars page automatically via other 
    // sagas set up in the app.
    handleBarApprove = (bar) => {
        this.props.dispatch({
            type: 'APPROVE_BAR',
            payload: bar.id
        })
    }

    // Dispatch a saga that runs a DELETE route to the "bars" table. We send
    // the bar.id of the bar we're denying along with the dispatch. This DELETE
    // route then deletes this bar from the database, and thus, the DOM.
    handleBarDeny = (bar) => {
        this.props.dispatch({
            type: 'DENY_BAR',
            payload: bar.id
        })
    }

    // Dispatch a saga that runs a DELETE route to the "messages" table. We send the
    // message we want to delete along with the dispatch. This DELETE route then
    // deletes this message from the database, and thus, the DOM.
    handleMessageDelete = (message) => {
        this.props.dispatch({
            type: 'DELETE_MESSAGE',
            payload: message.message
        })
    }

    render() {
        // This will only render if the user.id is 2. The user.id of 2 is the user.id of me, the Admin
        if (this.props.reduxStore.user.id === 2){
            return (
            <>
            <br/>
            <br/>
            <br/>
            <br/>
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
                        <th>Notes</th>
                        <th></th>
                        <th></th>
                    {/* Now we want to map through our unapprovedBars redux store. These are all the bars that users
                    have submitted through the add bar page. A bar added via that page needs to be either approved or
                    denied by an admin. */}
                    </tr>
                    {this.props.reduxStore.unapprovedBars.map(bar => {
                    return <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.address}</td>
                        <td>{bar.phone}</td>
                        <td>{bar.notes}</td>
                        {/* Pass the information of whatever bar we click on to our click handlers. This way we have something
                        to reference in our PUT and DELETE. */}
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </>
         )} // end if user.id = 2 render
         // If someone with a user.id other than 2 trys to visit /admin, they will see 404, rendered below
         else {
             return (
                <h1>404</h1>
             )
         } // end else render
        
        }// End render
   
} // end Class


const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(Admin);