import React from 'react';
// import logo from 'https://thecheapfares.s3-us-west-2.amazonaws.com/logo/logo.png';
import SignUp from './component/SignUp.js';
import Header from './component/Header.js';
import './App.css';
import Footer from './component/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  render (){
    return (
    <div>
      <Header/>
      <h1>Sick of paying too much for Airfare?</h1>
      <img src={'https://thecheapfares.s3-us-west-2.amazonaws.com/paris/Paris-2-1024x239.jpg'} className="paris" alt="paris" />
      <p>Airfare doesn’t have to be
            expensive. Especially if you keep an eye open for dips in prices.<br />Sign up for our price alerts and let
            watch for you.</p>
        <h2>Step 1</h2>
        <p>Sign up with your email address.</p>
       <SignUp />
       <p />
       <h2>Step 2</h2>
        <p>We will send you a welcome email to have you update your preferences on what airports you want alerts for.
        </p>
        <h2>Step 3</h2>
        <p>When we find great deals we will send them to you</p>
        <h2>Step 4</h2>
        <p>You book the tickets and make all your friends and family jealous</p>
        <SignUp />
        <div class="longform">
            <p>Searching for cheap fares can be time-consuming. And if you don’t
                enjoy the treasure hunt, it can be a huge hassle. But finding cheap airfare can mean the difference
                between
                traveling once a year to Florida (fun) or being able to take your family to Paris (once in a lifetime).
                Many
                times the big price of the trip is the cost to get there.</p>
            <p>Luckily we at&nbsp;<strong>The Cheap Fares</strong><span>&nbsp;</span>like to
                look for cheap airline fares and send them to our friends so we are opening this up to everyone who
                would
                likes to find great deals.</p>
            <p><strong>What departure airports do you send alerts for?</strong><span>&nbsp;</span>Right now we are
                sending alerts
                for a handful of airports in Colorado, New York Texas, and are looking to expand to other airports as
                demand
                grows.</p>
            <p><strong>Worried that we will spam you every
                    day?&nbsp;</strong>&nbsp;The only thing we hate more than paying full price for plane tickets is
                going
                through our spam folder so we don’t want to do that to you.&nbsp; If you are getting emails from us
                every
                day this means there is a major sale going on but usually you will only receive&nbsp;emails when we see
                great fares.</p>
            <p>So sign up to start saving, start traveling the world, and be the
                envy of your nosy neighbor.</p>
            <p>Jeremiah<br />Chief Cheap Fare Finder</p>
        </div>
        <Footer />
    </div>

  ); 
  }
}

export default App;
