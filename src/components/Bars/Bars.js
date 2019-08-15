import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Bars.css';



class Bars extends Component {
 
    // When the page loads, call a saga that GETS all approved bars
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_BARS'
        });
    }

    // When clicking a specific bar, navigate to the page of that bar's id.
    handleClick = (bar) => {
        this.props.history.push(`/specificbar/${bar.id}`);
    }

    render() {
        return (
            <>
                {/* These breaks are necessary for styling */}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="bars-body">
                    <h1 id="welcome">
                    Bars
                    </h1>
                    <p>
                    Click a bar's name below to learn more about it!
                    </p>
                {/* Map through a reducer that has all of the approved bars. Also, setup a click event so each 
                bar can be clicked on so you can navigate to their page */}
                <ul>
                    {this.props.reduxStore.barListReducer.map(bar => {
                    return <li key={bar.id} onClick={() => this.handleClick(bar)}>
                    <h3>{bar.name}</h3>
                    </li>   
                    })}
                </ul>
                <ul>
                    <li>More to come...</li>
                </ul>
                </div>
                {/* Breaks are necessary for styling */}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </>
         )}// End render
   


}





const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(Bars);