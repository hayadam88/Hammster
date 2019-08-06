import React, { Component } from 'react';
import { connect } from 'react-redux';



class AddBar extends Component {


    render() {
        return (
             <>
                <div>
                    <h3>
                    Add a bar!
                    </h3>
                    <p>
                    Enter a bar's information into the fields below to have it submitted
                    to the app, pending approval.
                    </p>
                </div>
            </>
         )}
   


}





const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(AddBar);