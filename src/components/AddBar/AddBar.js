import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'

class AddBar extends Component {

    // The state is the payload being sent along on the POST route. Approved is set to false by default
    // so it will send the bar to the admin page for approval instead of being added to the app.
    state = {
        
            bar_name: '',
            street_address: '',
            phone: '',
            notes: '',
            approved: false,

    }

    // This method sets our state through the form below
    handleChangeFor = (propertyName, event) => {
        this.setState({
            
                ...this.state,
                [propertyName]: event.target.value
            
        })
    }

    // When the submit button is clicked, the following actions happen
    handleSubmit = (event) => {
        // The swal.fire is a special type of alert that looks cool
        Swal.fire('Thank you for suggesting a bar to Hammster!')
        event.preventDefault();
        console.log(`Adding bar`, this.state);
        // Calls the saga with the action of ADD_BAR, and sends it our state
        this.props.dispatch({
            type: `ADD_BAR`,
            payload: this.state
        })
        // This sets our input fields to be empty again
        this.setState({
            bar_name: '',
            street_address: '',
            phone: '',
            notes: '',
            approved: false,
        })
    } // handle submit


    render() {
        return (
            <>
            {/* These breaks are necessary for styling */}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p id="add-bar-text">The continued growth and viability of Hammster depends on users like you. Find a bar that
                serves Hamm's on tap, but it's not on the app? Submit its information below, and if it looks good, we'll
                add it to the app!</p>
            {/* This is our form where the users enter a bar they want to be added to the app */}
            <div className="add-bar-form">
                <form onSubmit={this.handleSubmit}>

                <input required placeholder="Bar Name"
                    id="bar-name-input"
                    value={this.state.bar_name}
                    onChange={(event) => this.handleChangeFor('bar_name', event)} />
                <br/>
                <input required placeholder="Address, City"
                    id = "address-input"
                    value={this.state.street_address}
                    onChange={(event) => this.handleChangeFor('street_address', event)} />
                <br/>
                <input required placeholder="Phone"
                    id = "phone-input"
                    value={this.state.phone}
                    onChange={(event) => this.handleChangeFor('phone', event)} />
                <br/>
                <textarea rows="4" cols="40" id="add-bar-input" required placeholder="Hamm's Information"
                    value={this.state.notes}
                    onChange={(event) => this.handleChangeFor('notes', event)} maxLength="200" />
                <br />
                <button type="submit">
                    Submit Bar
                    </button>

            </form>
            </div>
            {/* These breaks are necessary for styling. */}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </>
        );// end return
    }// end render
}// end class

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(AddBar);