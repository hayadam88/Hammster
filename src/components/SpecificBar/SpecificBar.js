import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SpecificBar.css'



class SpecificBar extends Component {


    render() {
        return (
             <>
                <div class="details">
                    <h1>
                    Enjoy Hamm's at {this.props.reduxStore.barDetails.name}
                    </h1>
                    <img src = {this.props.reduxStore.barDetails.image_url} width='400px' height='400px'></img>
                    <p>Location: {this.props.reduxStore.barDetails.address}</p>
                    <p>Phone: {this.props.reduxStore.barDetails.phone}</p>
                    <p>Hamm's Information: {this.props.reduxStore.barDetails.notes}</p>
                    
                </div>
            </>
         )}
   


}





const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(SpecificBar);