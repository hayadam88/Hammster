import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageFeed from '../MessageFeed/MessageFeed'
import './SpecificBar.css';



class SpecificBar extends Component {
    
    
    // When the page loads, call a saga that GETs a specific bar's info
    componentDidMount = () => {   
        this.props.dispatch({type: 'FETCH_BAR_DETAILS', payload: this.props.match.params.id})
    }

    render() {
        return (
             <>
                {/* These breaks are necessary for styling  */}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="specific-bar-body">
                    {/* Display the specific bar's information below. The info is gotten from a reducer */}
                    <div className="bar-info">
                        <h1>
                        Enjoy Hamm's at {this.props.reduxStore.barDetails.name}
                        </h1>
                        <img src = {this.props.reduxStore.barDetails.image_url} width='400px' height='400px' alt="Bar"></img> 
                        <p><b>Location:</b> {this.props.reduxStore.barDetails.address}</p>
                        <p><b>Phone:</b> {this.props.reduxStore.barDetails.phone}</p>
                        <p><b>Hamm's Information:</b> {this.props.reduxStore.barDetails.notes}</p>
                             
                    </div>
                
                    <div className="message-feed"> 
                            {/* Pass along a number of things through props that are needed in the MessageFeed component. */}
                            <MessageFeed bar_id={this.props.match.params.id} bar_name={this.props.reduxStore.barDetails.name} user_id={this.props.reduxStore.user.id}/>         
                    </div>
            
                        
                   {/* These breaks are necessary for styling */}
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    
            </>      
         )}
                    
    

}


const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(SpecificBar);