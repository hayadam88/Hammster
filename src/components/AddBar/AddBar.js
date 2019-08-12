import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <p>The continued growth and viability of Hammster depends on users like you. Found a bar that
                serves Hamm's on tap, but it's not on the app? Submit its information below, and if it looks good, we'll
                add it to the app!</p>
            <form onSubmit={this.handleSubmit}>

                <input required placeholder="Bar Name"
                    value={this.state.bar_name}
                    onChange={(event) => this.handleChangeFor('bar_name', event)} />

                <input required placeholder="Address, City"
                    value={this.state.street_address}
                    onChange={(event) => this.handleChangeFor('street_address', event)} />

                <input required placeholder="Phone"
                    value={this.state.phone}
                    onChange={(event) => this.handleChangeFor('phone', event)} />

                <textarea rows="4" cols="60" required placeholder="Hamm's Information"
                    value={this.state.notes}
                    onChange={(event) => this.handleChangeFor('notes', event)} />
                <br />
                <button type="submit">
                    Submit Bar
                    </button>

            </form>
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