import React from 'react';
import './footer.styles.scss';
import GitHubLogo from '../../assets/GitHub-Mark-64px.png';
import LinkedInLogo from '../../assets/LI-Logo.png';

const Footer = () => (
    <footer>
        <p>Realizado por Pablo Miranda Torres</p>
        <div className='links'>
            <a href='https://github.com/pablo-mirtor'>
                <img src={GitHubLogo} alt="GithubLogo" />
            </a>
            <a href='linkedin.com'>
                <img src={LinkedInLogo} alt="LinkedinLogo" />
            </a> 
        </div>
    </footer>
);

export default Footer;