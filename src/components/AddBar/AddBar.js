import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddBar extends Component {

    state = {
        
            bar_name: '',
            street_address: '',
            city: '',
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
        event.preventDefault();
        console.log(`Adding bar`, this.state);
        this.props.dispatch({
            type: `ADD_BAR`,
            payload: this.state
        })
        this.setState({
            bar_name: '',
            street_address: '',
            city: '',
            phone: '',
            notes: '',
            approved: false,
        })
    } // handle submit


    render() {
        return (
            <>
            <p>The continued survival and growth of Hammster depends on users like you. Found a bar that
                serves Hamm's on tap, but it's not on the app? Submit its information below, and if it looks good, we'll
                add it to the app!</p>
            <form onSubmit={this.handleSubmit}>

                <input required placeholder="Bar Name"
                    value={this.state.bar_name}
                    onChange={(event) => this.handleChangeFor('bar_name', event)} />

                <input required placeholder="Address"
                    value={this.state.street_address}
                    onChange={(event) => this.handleChangeFor('street_address', event)} />

                <input required placeholder="City"
                    value={this.state.city}
                    onChange={(event) => this.handleChangeFor('city', event)} />

                <input required placeholder="Phone"
                    value={this.state.phone}
                    onChange={(event) => this.handleChangeFor('phone', event)} />

                <textarea required placeholder="Hamm's Information"
                    value={this.state.notes}
                    onChange={(event) => this.handleChangeFor('notes', event)} />
                <br />
                <button type="submit">
                    Submit Bar
                    </button>

            </form>
            </>
        );// end return
    }// end render
}// end class

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(AddBar);