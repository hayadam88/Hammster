import React, { Component } from 'react';
import { connect } from 'react-redux';



class Bars extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_BARS'
        });
    }

    render() {
        return (
            <>
                <div>
                    <h3 id="welcome">
                    Bars
                    </h3>
                    <p>
                    Click a bar's name below to learn more about it!
                    </p>
                </div>
                <ul>
                    {this.props.reduxStore.barListReducer.map(bar => {
                    return <li key={bar.id}>
                    {bar.name}
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