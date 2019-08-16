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
            type: 'FETCH_FLAGGED_COMMENTS'
        })
    }

    // Calls a saga that runs a PUT route to the "bars" table sends
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

    // Calls a saga that runs a DELETE route to the "bars" table. Sends
    // the bar.id of the bar we're denying along with the dispatch. This DELETE
    // route then deletes this bar from the database, and thus, the DOM.
    handleBarDeny = (bar) => {
        this.props.dispatch({
            type: 'DENY_BAR',
            payload: bar.id
        })
    }

    // Calls a saga that runs a DELETE route to the "messages" table. Sends the
    // message we want to delete along with the dispatch. This DELETE route then
    // deletes this message from the database, and thus, the DOM.
    handleMessageDelete = (message) => {
        console.log(message)
        this.props.dispatch({
            type: 'DELETE_MESSAGE',
            payload: message.message_id
        })
    }

    // Calls a saga that runs a PUT route to the "messages" table. Sends the id
    // of the message along with it. This put route will update the flagged status in our
    // table from TRUE to FALSE
    handleCancelMessage = (message) => {
        console.log(message)
        this.props.dispatch({
            type: 'UNFLAG_COMMENT',
            payload: message.message_id
        })
    }

    render() {
        // This will only render if the user.id is 8. The user.id of 8 is the user.id of the Admin
        if (this.props.reduxStore.user.id === 8){
            return (
            <>
            {/* These breaks are necessary for styling reasons. */}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div id="admin-content">
                <div>
                    <h1 id="administration-h1">
                    Administration Page
                    </h1>
                </div>
                <div className="suggested-bars-div">
                    <h1>Suggested Bars</h1>
                <table align="center" id="suggested-bars-table">
                    <tbody>
                    <tr>
                        <th>Bar Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Notes</th>
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
                        <button onClick={() => this.handleBarApprove(bar)} className="approve-button">APPROVE</button>
                        <button onClick={() => this.handleBarDeny(bar)} className="deny-button">DENY</button>
                    </tr>
                    })
                    }
                    </tbody>           
                </table>
                <br/>
                </div>
                <div className="admin-message-div">
                    <h1>Flagged Messages</h1>
                    <table id="admin-messages-table" align="center">
                        <tbody>
                            <tr>
                                <th>User Name</th>
                                <th>Bar Name</th>
                                <th>Message</th>
                                <th></th>
                            </tr>
                            {/* Map through any messsages that users have reported or 'flagged,' and then render a Delete or
                            unflag button with them. */}
                            {this.props.reduxStore.setFlaggedComments.map(message => {
                            return <tr key={message.message_id}>
                                <td>{message.users_name}</td>
                                <td>{message.name}</td>
                                <td>{message.message}</td>
                                <button onClick={() => this.handleMessageDelete(message)} className="message-delete-button">DELETE</button>
                                <button onClick={() => this.handleCancelMessage(message)} className="message-unflag-button">UNFLAG</button>
                            </tr>
                            })
                            }
                    </tbody>                    
                </table>
                </div>
                {/* These breaks are necessary for styling reasons. */}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
            </div>
            </>
         )} // end if user.id = 8 render
         // If someone with a user.id other than 8 trys to visit /admin, they will see they're not allowed, rendered below
         else {
             return (
                <>
                {/* These breaks are necessary for styling reasons. */}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <center><h1>
                    ACCESS DENIED
                </h1></center>
                </>
             )
         } // end else render
        
        }// End render
   
} // end Class


const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(Admin);