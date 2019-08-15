import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import './MessageFeed.css';
import { thisExpression } from '@babel/types';
import Swal from 'sweetalert2';



class MessageFeed extends Component {

    // Sets our local state. We get bar_id and user_id from props, passed along from the Specific Bar component
    state = {
        bar_id: this.props.bar_id,
        user_id: this.props.user_id,
        date: '',
        message: '',

    }

    // Calls a saga that GETs all messages for a specific bar--the specific bar is targeted by
    // this.props.bar_id
    componentDidMount = () => {
            this.props.dispatch({
                type: 'FETCH_BAR_MESSAGES',
                payload: this.props.bar_id,
            })
        }
    
    // Sets local state
    handleChange = (event) => {
        this.setState({
            ...this.state,
            message: event.target.value
        })
    }

    // When submit is clicked, the following happens:
    handleSubmit = (event) => {
        console.log('clicked submit');
        // Swal.fire is just a different type of stylized alert
        Swal.fire('Thanks for sharing your thoughts!');
        // Calls a saga that POSTs a message, the message coming from local state.
        this.props.dispatch({type: 'ADD_MESSAGE', payload: this.state})
        // Resets the local state to its default state
        this.setState({
            ...this.state,
            message: '',
        })
    }

    // When the 'report' button is clicked, the following happens:
    handleFlagButton = (message) => {
        console.log(message);
        // Swal.fire is just a different type of stylized alert
        Swal.fire('This comment has been flagged for moderation');
        // Calls a saga that runs a PUT route. This PUT route updates the 'flagged'
        // column from FALSE to TRUE
        this.props.dispatch({
            type: 'FLAG_COMMENT',
            payload: message.message_id
        })
    }

    // When the 'delete' button is clicked, the following happens:
    handleDeleteButton = (message) => {
        console.log(message)
        // Swal.fire is just a different type of stylized alert
        Swal.fire('This comment has been deleted')
        // This calls a saga that runs a DELETE route. This DELETE route deletes the message.
        // It also sends bar_id along as a second payload. This second payload is then sent along
        // to a different saga which gets messages for the Message Feed of a specific bar. That saga
        // needs the bar_id to work.
        this.props.dispatch({
            type: 'DELETE_COMMENT_ADMIN',
            payload1: message.message_id,
            payload2: this.state.bar_id
        })
    }
      

    render() {
        // The page conditionally renders based on whether or not the Admin is the one accessing the page.
        if (this.props.reduxStore.user.id === 8) {
            return (
                <>
                < div className="message-input" >
                    
                    <h3>Talk about your experience at {this.props.bar_name}</h3>
                    <textarea rows="4" cols="70" onChange={this.handleChange} value={this.state.message}></textarea>
                    <br/>
                    <button className="messageSubmit" onClick={this.handleSubmit}>Submit</button>
                    <br/>
                    <br/>

                    <h3>
                    What are Hammsters saying about this bar?
                    </h3>
                    {/* Map through a reducer that has all of this bar's messages, and display them to the DOM.
                    If the admin is the one accessing the page, a button to delete the comment also renders. This
                    is the only difference between what the page renders for Admin vs. regular user */}
                     {this.props.reduxStore.setBarMessages.map(message => {
                    return <div key={message.message} className="message-content">
                    <p><b>{message.users_name}</b> was at <b>{message.name}</b> on {moment(message.date).format('LLL')} and said:</p>
                    <p>{message.message}</p> <button onClick={() => this.handleFlagButton(message)}>Report this comment</button>
                    <button onClick={() => this.handleDeleteButton(message)}>Delete Comment</button>
                    </div> 
                     })}    
                </div>

                
            </>
         )} //end if Admin render
        else {
        return (
             <>
                < div className="message-input" >
                    
                    <h3>Talk about your experience at {this.props.bar_name}</h3>
                    <textarea rows="4" cols="70" onChange={this.handleChange} value={this.state.message}></textarea>
                    <br/>
                    <button className="messageSubmit" onClick={this.handleSubmit}>Submit</button>
                    <br/>
                    <br/>

                    <h3>
                    What are Hammsters saying about this bar?
                    </h3>
                    
                     {this.props.reduxStore.setBarMessages.map(message => {
                    return <div key={message.message} className="message-content">
                    <p><b>{message.users_name}</b> was at <b>{message.name}</b> on {moment(message.date).format('LLL')} and said:</p>
                    <p>{message.message}</p> <button onClick={() => this.handleFlagButton(message)}>Report this comment</button>
                    </div> 
                     })}    
                </div>

                
            </>
         )}
    }
   


}

const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(MessageFeed);