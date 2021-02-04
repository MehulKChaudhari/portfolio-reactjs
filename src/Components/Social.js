import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Social extends Component {
    render () {
        return (
            <div class="footer">
                <div className="social-icons">
                    <a href="https://www.github.com/mehulkchaudhari/"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://twitter.com/MehulKChaudhari" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/mehull.xx"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/mehul-chaudhari-3367b6174/" className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
              </div> 
            </div>
        )
    }
}

export default Social