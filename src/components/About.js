import React from 'react';
import '../App.css';

function About() {
  return (
    <React.Fragment>
      <div>
        <img className="banner-img" src="../img/about.png" alt="about banner"></img>
      </div>
      <div className="flex-container">
        <div col-sm-2>
          <img className="flex-pic2" src="../img/adam-drums.png" alt="kid playing drums"></img>
        
        
          <h5>
            My name is Adam Nitti, and I am the creator of Renaissance Man Music. I have had a love affair with music as far back as I can remember. Inspired by my grandfather, who was a virtuosic concert pianist and violinist, I got the music bug at 5 years old after receiving a toy guitar for my birthday from my uncle. Seeing my extraordinary enthusiasm, my parents bought me a drum set and shortly thereafter got me started on classical piano lessons.
          </h5>
          <h5>
            I've been enjoying a career as a professional bassist, composer, recording artist, and music educator for over 25 years, and I have learned so much in the process. Throughout my career, I have gotten to work with so many incredible people on the stage and in the recording studio. My experience with this huge network of artists, musicians and audio professionals has given me a diverse and comprehensive musical perspective that helps me relate to my clients' composition and production needs.
          </h5>
          <h5>
            It would be my pleasure to work with you on your project and help you achieve your unique sonic vision! Please feel free to reach out with any questions you might have.
          </h5>
          <h5>
            Sincerely,<br></br>Adam Nitti
          </h5>
        </div> 
       
      </div>
    </React.Fragment>

  );
}

export default About;
