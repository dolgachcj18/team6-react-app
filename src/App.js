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

      <img src={`/media/logo.png`} alt="Warhawk Analytics" style={{ height: '80px', marginRight: '100px' }} /> 
      
      <Button onClick={signOut} className="sign-out-button">Sign Out</Button>
    </div>
    
    <div class="main-body">
      <div class="overlay"></div>
      <div class="dropdown">
      
        <button>Choose an MLB Baseball team:</button>
      
    <div class="dropdown-content">
  
      <div class="dropdown-divider">American League</div>
      
  
      <div class="dropdown-header">AL East</div>
      <a href="/teams/orioles.html">Baltimore Orioles</a>
      <a href="/teams/redsox.html">Boston Red Sox</a>
      <a href="/teams/yankees.html">New York Yankees</a>
      <a href="/teams/rays.html">Tampa Bay Rays</a>
      <a href="/teams/bluejays.html">Toronto Blue Jays</a>
      
 
      <div class="dropdown-header">AL Central</div>
      <a href="/teams/whitesox.html">Chicago White Sox</a>
      <a href="/teams/guardians.html">Cleveland Guardians</a>
      <a href="/teams/tigers.html">Detroit Tigers</a>
      <a href="/teams/royals.html">Kansas City Royals</a>
      <a href="/teams/twins.html">Minnesota Twins</a>
      
     
      <div class="dropdown-header">AL West</div>
      <a href="/teams/astros.html">Houston Astros</a>
      <a href="/teams/angels.html">Los Angeles Angels</a>
      <a href="/teams/athletics.html">Oakland Athletics</a>
      <a href="/teams/mariners.html">Seattle Mariners</a>
      <a href="/teams/rangers.html">Texas Rangers</a>
 
      <div class="dropdown-divider">National League</div>
      

      <div class="dropdown-header">NL East</div>
      <a href="/teams/braves.html">Atlanta Braves</a>
      <a href="/teams/marlins.html">Miami Marlins</a>
      <a href="/teams/mets.html">New York Mets</a>
      <a href="/teams/phillies.html">Philadelphia Phillies</a>
      <a href="/teams/nationals.html">Washington Nationals</a>
      
   
      <div class="dropdown-header">NL Central</div>
      <a href="/teams/cubs.html">Chicago Cubs</a>
      <a href="/teams/reds.html">Cincinnati Reds</a>
      <a href="/teams/brewers.html">Milwaukee Brewers</a>
      <a href="/teams/pirates.html">Pittsburgh Pirates</a>
      <a href="/teams/cardinals.html">St. Louis Cardinals</a>
      
  
      <div class="dropdown-header">NL West</div>
      <a href="/teams/diamondbacks.html">Arizona Diamondbacks</a>
      <a href="/teams/rockies.html">Colorado Rockies</a>
      <a href="/teams/dodgers.html">Los Angeles Dodgers</a>
      <a href="/teams/padres.html">San Diego Padres</a>
      <a href="/teams/giants.html">San Francisco Giants</a>
    </div>
       </div>
      </div>
    
 
      

  </div>
  );
}

export default withAuthenticator(App);