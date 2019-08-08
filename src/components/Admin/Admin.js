import React, { Component } from 'react';
import { connect } from 'react-redux';




class Admin extends Component {
 
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_UNAPPROVED_BARS'
        });
        this.props.dispatch({
            type: 'FETCH_ALL_MESSAGES'
        })
    }


    render() {
        return (
            <>
                <div>
                    <h3>
                    This is the admin page
                    <br/>
                    BAR LIST REDUCER:
                    <br/>
                    {JSON.stringify(this.props.reduxStore.unapprovedBars)}
                    </h3>
                    <br/>
                    <br/>
                    <h3>MESSAGE LIST REDUCER:</h3>
                    <br/>
                    {JSON.stringify(this.props.reduxStore.setAllMessages)}


                </div>
                {/* <ul>
                    {this.props.reduxStore.barListReducer.map(bar => {
                    return <li key={bar.id} onClick={() => this.handleClick(bar)}>
                    {bar.name}
                    </li>   
                    })}
                </ul> */}
            </>
         )}// End render
   


}





const mapStateToProps = (reduxStore) => ({
  reduxStore
});


export default connect(mapStateToProps)(Admin);