import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook,faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
    render (){
    return (
    <footer>
<p>Copyright © {(new Date().getFullYear())} The Cheap Fares</p>
<div class="center">
<a 
  href="https://www.facebook.com/thecheapfares/"
  className="facebook social"
>
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/thecheapfares1" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://www.instagram.com/thecheapfares"
  className="instagram social"
>
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
</div>
</footer>
 
);
}
}
export default Footer;
