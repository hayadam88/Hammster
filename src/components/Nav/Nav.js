import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav-master">
      <img src="images/HammsterFaceTiny.png" alt="face goes here"></img>
      <img src="images/HammserTextLogoResizeTwo.png" alt="Logo goes here"></img>
      <img src="images/HammsterFaceTiny.png" alt="face goes here"></img>
      
      <div className="nav-right-master">
      <Link className="nav-link-master" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'About' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link-master" to="/bars">
            Bars
          </Link>
           <Link className="nav-link-master" to="/addbar">
            Add Bar
          </Link>
        </>
      )}
      {props.user.id === 8 && (
        <Link className="nav-link-master" to="/admin">
          Admin
        </Link>
      )}
      <LogOutButton className="nav-link-master"/>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
