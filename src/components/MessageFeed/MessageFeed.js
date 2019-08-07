import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MessageFeed.css';



class MessageFeed extends Component {


    componentDidMount = () => {
            this.props.dispatch({
                type: 'FETCH_BAR_MESSAGES',
                payload: this.props.bar_id,
            })
        }
    
      
    render() {
        return (
             <>
                <div className="details">
                
                    <h3>Talk about your experience at {this.props.bar_name}</h3>
                    {JSON.stringify(this.props.bar_id)}
                    <textarea rows="4" cols="80"></textarea>
                    <br/>
                    <button className="messageSubmit">Submit</button>
                    <h3>
                    What are Hammsters saying about this bar?
                    </h3>                   
                </div>
            </>
         )}
   


}

const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(MessageFeed);