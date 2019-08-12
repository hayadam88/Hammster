import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MessageFeed.css';



class MessageFeed extends Component {

    state = {
        bar_id: this.props.bar_id,
        user_id: this.props.user_id,
        date: '',
        message: '',

    }

    componentDidMount = () => {
            this.props.dispatch({
                type: 'FETCH_BAR_MESSAGES',
                payload: this.props.bar_id,
            })
        }
    
    handleChange = (event) => {
        this.setState({
            ...this.state,
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('clicked submit');
        this.props.dispatch({type: 'ADD_MESSAGE', payload: this.state})
        this.setState({
            ...this.state,
            message: '',
        })
    }
      
    render() {
        return (
            <>
                <div>
                    
                    <h3>Talk about your experience at {this.props.bar_name}</h3>
                    <textarea rows="4" cols="80" onChange={this.handleChange} value={this.state.message}></textarea>
                    <br/>
                    <button className="messageSubmit" onClick={this.handleSubmit}>Submit</button>
                    <br/>
                    <br/>

                    <h3>
                    What are Hammsters saying about this bar?
                    </h3>
                    
                     {this.props.reduxStore.setBarMessages.map(message => {
                    return <div key={message.message}>
                    <p>{message.users_name} was at {message.name} on {message.date} and said:</p>
                    <p>{message.message}</p>  
                    <p>---------------------</p>
                    </div> 
                     })}    
                </div>

                
            </>
         )}
   


}

const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(MessageFeed);