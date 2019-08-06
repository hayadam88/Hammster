import React, { Component } from 'react';
import { connect } from 'react-redux';



class MessageFeed extends Component {


    render() {
        return (
             <>
                <div class="details">
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