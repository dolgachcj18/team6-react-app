import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
 
    <div>

    <div class="header">
     <div class="logo"></div>
      <Button onClick={signOut} className="sign-out-button">Sign Out</Button>
    </div>
    
    <div class="main-body">
      <div class="overlay"></div>
      <div class="dropdown">
      
        <button>Choose an MLB Baseball team:</button>
      
    <div class="dropdown-content">
  
      <div class="dropdown-divider">American League</div>
      
  
      <div class="dropdown-header">AL East</div>
      <a href="/public/teams/orioles.html">Baltimore Orioles</a>
      <a href="/public/teams/redsox.html">Boston Red Sox</a>
      <a href="/public/teams/yankees.html">New York Yankees</a>
      <a href="/public/teams/rays.html">Tampa Bay Rays</a>
      <a href="/teams/bluejays.html">Toronto Blue Jays</a>
      
 
      <div class="dropdown-header">AL Central</div>
      <a href="/public/teams/whitesox.html">Chicago White Sox</a>
      <a href="/public/teams/guardians.html">Cleveland Guardians</a>
      <a href="/public/teams/tigers.html">Detroit Tigers</a>
      <a href="/public/teams/royals.html">Kansas City Royals</a>
      <a href="/public/teams/twins.html">Minnesota Twins</a>
      
     
      <div class="dropdown-header">AL West</div>
      <a href="/public/teams/astros.html">Houston Astros</a>
      <a href="/public/teams/angels.html">Los Angeles Angels</a>
      <a href="/public/teams/athletics.html">Oakland Athletics</a>
      <a href="/public/teams/mariners.html">Seattle Mariners</a>
      <a href="/public/teams/rangers.html">Texas Rangers</a>
 
      <div class="dropdown-divider">National League</div>
      

      <div class="dropdown-header">NL East</div>
      <a href="/public/teams/braves.html">Atlanta Braves</a>
      <a href="/public/teams/marlins.html">Miami Marlins</a>
      <a href="/public/teams/mets.html">New York Mets</a>
      <a href="/public/teams/phillies.html">Philadelphia Phillies</a>
      <a href="/public/teams/nationals.html">Washington Nationals</a>
      
   
      <div class="dropdown-header">NL Central</div>
      <a href="/public/teams/cubs.html">Chicago Cubs</a>
      <a href="/public/teams/reds.html">Cincinnati Reds</a>
      <a href="/public/teams/brewers.html">Milwaukee Brewers</a>
      <a href="/public/teams/pirates.html">Pittsburgh Pirates</a>
      <a href="/public/teams/cardinals.html">St. Louis Cardinals</a>
      
  
      <div class="dropdown-header">NL West</div>
      <a href="/public/teams/diamondbacks.html">Arizona Diamondbacks</a>
      <a href="/public/teams/rockies.html">Colorado Rockies</a>
      <a href="/public/teams/dodgers.html">Los Angeles Dodgers</a>
      <a href="/public/teams/padres.html">San Diego Padres</a>
      <a href="/public/teams/giants.html">San Francisco Giants</a>
    </div>
       </div>
      </div>
    
 
      

  </div>
  );
}

export default withAuthenticator(App);