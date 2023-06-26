import React from "react";
import { Container} from "react-bootstrap";


function Footer() {
    let date = new Date();
    return (
        <Container className="footer">
            <div className="footer-copyright">
                <div className="footer-text" >Digital Twins DBS 同济大学智慧医院-四平分院 </div>
                <div className="footer-text">Database:local</div>
                <div className="footer-text">
                    {date.toUTCString()}
                </div>
            </div>
        </Container>
    );
}

export default Footer;
