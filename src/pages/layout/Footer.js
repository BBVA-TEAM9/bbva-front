import react from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import image from "./Image/bbva-logo-captura.PNG";
import facebook from "./Image/facebook.png";
import twitter from "./Image/twitter.png";
import instagram from "./Image/instagram.png";
import linkedin from "./Image/linkedin.png";
import youtube from "./Image/youtube.png";
import './Footer.css';

const Footer = ()=>{

    return(
        <div className="footer">
            <div className="container">
                <a href="Index.html" className="footer_logo">
                    <img src={image}/>
                </a>
            </div>
            <div className="flex">
                <a href="https://www.facebook.com/bbvaenperu" target="_blank"  aria-label="Facebook" title="Facebook">
                    <img aria-hidden="true" title="Facebook" src={facebook} height="25" width="25"/>
                </a>
                <a href="https://twitter.com/bbva_peru" target="_blank"  aria-label="Twitter" title="Twitter">
                    <img aria-hidden="true" title="Twitter" src={twitter} height="25" width="25"/>
                </a>
                <a href="https://www.instagram.com/bbva_peru/" target="_blank"  aria-label="Instagram" title="Instagram">
                    <img aria-hidden="true" title="Instagram" src={instagram} height="25" width="25"/>
                </a>
                <a href="https://www.linkedin.com/company/bbva-peru" target="_blank"  aria-label="Linkedin" title="Linkedin">
                    <img aria-hidden="true" title="Linkedin" src={linkedin} height="25" width="25"/>
                </a>
                <a href="https://www.youtube.com/c/bbvaenPer%C3%BA" target="_blank"  aria-label="Youtube" title="Youtube">
                    <img aria-hidden="true" title="Youtube" src={youtube} height="25" width="25"/>
                </a>
            </div>
            <div className="footer__disclaimer">
                    
                <p className="footer__copyright">© 2022 Banco Bilbao Vizcaya Argentaria, S.A.</p>
            
                <div className="footer__claim">
                        <p className="claim__content">Creando Oportunidades</p>
                </div> 
            </div>
        </div>
    )

}

export default Footer