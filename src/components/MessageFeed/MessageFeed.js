import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MessageFeed';



class MessageFeed extends Component {


    render() {
        return (
             <>
                <div class="details">
                    <h3>Talk about your experience at {this.props.reduxStore.barDetails.name}</h3>
                    <textarea rows="4" cols="80"></textarea>
                    <br/>
                    <button>Submit</button>
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