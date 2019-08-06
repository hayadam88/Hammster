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
                </div>
            </>
         )}
   


}





const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(AddBar);