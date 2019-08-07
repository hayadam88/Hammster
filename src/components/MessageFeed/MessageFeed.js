import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MessageFeed.css';



class MessageFeed extends Component {

    // componentDidMount() {
    //     console.log('Message should be this------>', this.props.reduxStore.barDetails.id)
    //     this.props.dispatch({
    //         type: 'FETCH_SPECIFIC_MESSAGES',
    //         payload: this.props.reduxStore.barDetails.id
    //     });
    // }


    render() {
        return (
             <>
                <div className="details">
                
                    <h3>Talk about your experience at {this.props.reduxStore.barDetails.name}</h3>
                    <p>{JSON.stringify(this.props.reduxStore.barDetails.id)}</p>
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