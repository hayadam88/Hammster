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
                Hammster is an app designed for a niche market of users who want to be able 
                to find one of their favorite beers--Hamm’s--on tap. Many beer drinkers would 
                agree that beer out of a tap is more enjoyable than beer out of a can or bottle. 
                Unfortunately for Hamm’s fans, finding Hamm’s on tap is rare. Because of this, 
                I wanted to make an app that tracks local--Twin Cities area--bars where you can get 
                this beer on tap. Using the app you can scroll through a list of known bars that serve 
                Hamm’s on tap. Each bar page will list the bar’s location, as well as specific notes 
                about the price of Hamm’s, serving size, and additional details. For example, at the Bierstube, 
                one can pay $5 for a custom Hamm’s pint glass, have it filled with Hamm’s, and then they can 
                keep the pint glass when they’re done. Additionally, there will be a “feed” at the bottom of 
                each bar’s page where Hammster users, affectionately referred to as Hammsters, can leave a 
                quick review or talk about their experience at the bar. Lastly, Hammsters will be able to submit 
                any bars to the app they find that serve Hamm’s on tap--appearance on the app pending approval from an 
                administrator.
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