import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">         
            <div className="div-footer">
                <h2>Contact</h2>
                <h3>
                Renaissance Man Music<br/>
                P.O. Box 542<br/>
                Franklin, TN 37065<br/>
                615-763-3865<br/><br/>
                RMMusic@mail.com
                </h3>
            </div>

            <div className="div-footer">
                <h2>Past Projects</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="footer-image"  src="../img/hulusquare.png"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/iex-square.png"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" className="footer-image" src="../img/levosia-square.jpg"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/beachstreet.jpg"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/provident-square.jpg"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/thismusic-square.jpg"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/horst-square.jpg"></img>
                        </div>
                        <div className="col-md-2">
                            <img className="footer-image" src="../img/songmill-square.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>            
        </footer>
    );
}

export default Footer;