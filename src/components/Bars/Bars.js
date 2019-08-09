import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Bars.css';



class Bars extends Component {
 
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_BARS'
        });
    }

    handleClick = (bar) => {
        this.props.history.push(`/specificbar/${bar.id}`);
    }

    render() {
        return (
            <>
                <div>
                    <h1 id="welcome" align="center">
                    Bars
                    </h1>
                    <p>
                    Click a bar's name below to learn more about it!
                    </p>
                </div>
                <ul>
                    {this.props.reduxStore.barListReducer.map(bar => {
                    return <li key={bar.id} onClick={() => this.handleClick(bar)}>
                    <h3>{bar.name}</h3>
                    </li>   
                    })}
                </ul>
            </>
         )}// End render
   


}





const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(Bars);