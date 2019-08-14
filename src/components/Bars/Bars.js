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