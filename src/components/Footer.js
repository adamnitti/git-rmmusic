import React from 'react';

function Footer() {
    return (
        <footer className="site-footer">         
            <div className="div-footer">
                <h2>Contact</h2>
                <h3>
                Renaissance Man Music<br/>
                P.O. Box 542<br/>
                Franklin, TN 37065<br/>
                615-289-6533<br/><br/>
                <a href="mailto:rmmusic@mail.com">RMMusic@mail.com</a>
                </h3>
            </div>

            <div className="div-footer">
                <h2>Past Projects</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="footer-image"  src="../img/hulusquare.png" alt="hulu logo"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/iex-square.png" alt="iex logo"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/levosia-square.jpg" alt="levosia logo"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/beachstreet.jpg" alt="beach street records logo"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/provident-square.jpg" alt="provident music logo"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/thismusic-square.jpg" alt="this music logo"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/horst-square.jpg" alt="eddie horst music logo"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/songmill-square.jpg" alt="song mill studios logo"></img>
                        </div>
                    </div>
                </div>
            </div>            
        </footer>
    );
}

export default Footer;