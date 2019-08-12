import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SpecificBar.css'
import MessageFeed from '../MessageFeed/MessageFeed'



class SpecificBar extends Component {
    
    
    
    componentDidMount = () => {   
        this.props.dispatch({type: 'FETCH_BAR_DETAILS', payload: this.props.match.params.id})
    }

    handleClick = (event) => {
        this.props.history.push('/bars');
    }

    render() {
        console.log(this.props.match.params.id)
        return (
             <>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <button onClick={this.handleClick}>Go back to Bars List</button>
                    <center><h1>
                    Enjoy Hamm's at {this.props.reduxStore.barDetails.name}
                    </h1></center>
                    <img src = {this.props.reduxStore.barDetails.image_url} width='400px' height='400px' alt="Bar"></img>
                    <p>Location: {this.props.reduxStore.barDetails.address}</p>
                    <p>Phone: {this.props.reduxStore.barDetails.phone}</p>
                    <p>Hamm's Information: {this.props.reduxStore.barDetails.notes}</p>    
                </div>
                   <MessageFeed bar_id={this.props.match.params.id} bar_name={this.props.reduxStore.barDetails.name} user_id={this.props.reduxStore.user.id}/>
                   {/* Added these line breaks below so the footer doesn't overlap content on the page */}
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