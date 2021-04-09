import React from 'react';
import '../App.css';

function Main() {
  return (
    
    <React.Fragment>
      <div class="flex-container">
        <div class="flex-child ">
          <img className="flex-pic list-unstyled" src="../img/mic1.jpg" alt="microphone"></img>
        </div>
        <div class="flex-child">
          <h1>MUSIC DRIVEN BY STORIES.</h1>
          <h1>STORIES DRIVEN BY MUSIC.</h1>
          <h5>WE PROVIDE CUSTOM MUSIC, SOUND DESIGN, AND SOUNDSCAPE  SOLUTIONS FOR BUSINESS AND BROADCAST NEEDS, AS WELL AS FULL-PRODUCTION AUDIO SERVICES INCLUDING:</h5>
          <ul>
            <li><h5>AUDIO EDITING</h5></li>
            <li><h5>MIXING</h5></li>
            <li><h5>MASTERING</h5></li>
            <li><h5>REMOTE RECORDING</h5></li>
            <li><h5>AUDIO CONSULTING</h5></li>
          </ul>
        </div>
      </div> 
      <div class="flex-container">
        <div class="flex-child ">
          <h1>YOUR PRODUCTION AND RECORDING PARTNER</h1>
          <h5>WE OFFER ENHANCED PRODUCTION CAPABILITIES AND CAN ALSO WORK WITH YOU REMOTELY ON YOUR PROJECT TO HELP FACILITATE YOUR RECORDING, EDITING, AND BROADCAST NEEDS.</h5>
          <h5>We recognize the need for reliable virtual audio solutions and can provide you with additional recording, editing, and production services handled remotely from our studios in Nashville, TN. In short, we are a one-stop production resource for projects such as:</h5>
          <ul>
            <li><h5>PODCAST RECORDING</h5></li>
            <li><h5>LIVE REMOTE RECORDING SESSIONS</h5></li>
            <li><h5>AUDIO EDITING AND CLEANUP</h5></li>
            <li><h5>FILETYPE CONVERSION</h5></li>
            <li><h5>CONSULTING SERVICES</h5></li>
            <li><h5>AUDIO PROJECT ADMINISTRATION</h5></li>
          </ul>
        </div>
        <div class="flex-child">
        <img className="flex-pic" src="../img/ssl_console.jpg" alt="recording console"></img>
        </div>
      </div> 
      
    </React.Fragment>
    
  );
}

export default Main;