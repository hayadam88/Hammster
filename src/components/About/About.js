import React from 'react';
import { connect } from 'react-redux';
import './About.css';




const About = (props) => (
    <>
        {/* These breaks are necessary for styling reasons */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="about-body">

            <h3 id="welcome">
            Welcome to Hammster, { props.user.username }! So what exactly is Hammster?
            </h3>  
            <p id="about-text">
                Hammster is an app designed for a niche market of Twin Cities' beer drinkers who want to be able 
                to find one of their favorite beers--Hamm’s--on tap. Most Hamm's fans would 
                agree that Hamm's out of a tap is more enjoyable than out of a can. 
                Unfortunately for Hamm’s fans, finding Hamm’s on tap is rare. But fear not, Hamm's fans, because Hammster
                is here! Using Hammster, you can easily find local Twin Cities bars that serve Hamm's on tap. 
                Navigate to the bars page to find a bar near you!
            </p>
            <img src = "https://www.millercoors.com/sites/millercoors/files/inline-images/avCan.png" alt="Hamm's Pic" id="about-pic"></img>
            {/* Like above, these breaks are necessary for styling. */}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </>

);


const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(About);