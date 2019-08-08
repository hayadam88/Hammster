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
                    </h3>
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