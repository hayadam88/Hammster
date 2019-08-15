import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'

class AddBar extends Component {

    state = {
        
            bar_name: '',
            street_address: '',
            phone: '',
            notes: '',
            approved: false,

    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            
                ...this.state,
                [propertyName]: event.target.value
            
        })
    }

    handleSubmit = (event) => {
        Swal.fire('Thank you for suggesting a bar to Hammster!')
        event.preventDefault();
        console.log(`Adding bar`, this.state);
        this.props.dispatch({
            type: `ADD_BAR`,
            payload: this.state
        })
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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p id="add-bar-text">The continued growth and viability of Hammster depends on users like you. Find a bar that
                serves Hamm's on tap, but it's not on the app? Submit its information below, and if it looks good, we'll
                add it to the app!</p>
            <div className="add-bar-form">
                <form onSubmit={this.handleSubmit}>

                <input required placeholder="Bar Name"
                    value={this.state.bar_name}
                    onChange={(event) => this.handleChangeFor('bar_name', event)} />
                <br/>
                <input required placeholder="Address, City"
                    value={this.state.street_address}
                    onChange={(event) => this.handleChangeFor('street_address', event)} />
                <br/>
                <input required placeholder="Phone"
                    value={this.state.phone}
                    onChange={(event) => this.handleChangeFor('phone', event)} />
                <br/>
                <textarea rows="4" cols="40" required placeholder="Hamm's Information"
                    value={this.state.notes}
                    onChange={(event) => this.handleChangeFor('notes', event)} maxLength="200" />
                <br />
                <button type="submit">
                    Submit Bar
                    </button>

            </form>
            </div>
            
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