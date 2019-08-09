import React from 'react';
import { connect } from 'react-redux';
import './About.css';



// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const About = (props) => (
    <>
        <div>
            <h3 id="welcome">
            Welcome to Hammster, { props.user.username }! So what exactly is Hammster?
            </h3>  
        </div>
        <div className="hamms-photo">
            < img src = "https://www.millercoors.com/sites/millercoors/files/inline-images/avCan.png" alt="Hamm's Pic"></img>
            <p>
                Hammster is an app designed for a niche market of beer drinkers who want to be able 
                to find one of their favorite beers--Hamm’s--on tap. Most Hamm's fans would 
                agree that Hamm's out of a tap is more enjoyable than out of a can. 
                Unfortunately for Hamm’s fans, finding Hamm’s on tap is rare. But fear not, Hamm's fans, because Hammster
                is here! Using Hammster, you can easily find local Twin Cities bars that serve Hamm's on tap. 
                Navigate to the bars page to find a bar near you!
            </p>
        </div>
    </>

);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(About);