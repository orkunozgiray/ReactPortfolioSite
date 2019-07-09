import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>                        
                        <div className="banner-text">
                            <div className="text-div">
                                <h1 data-text="Effect">Web & Software Developer</h1>
                            </div>
                            <hr/>
                            <p style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>HTML/CSS/JavaScript | ReactJS | React Native | NodeJS | Java | C# | Swift | ASP.Net</p>

                            <div className="social-links">
                            
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/orkunozgiray" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                                {/* Github */}  
                                <a href="https://github.com/orkunozgiray" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/orkunozgiray/?hl=en" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram"  aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="https://www.freecodecamp.org/fcce6be7b14-9660-485c-8f59-02611ce7c964" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp"  aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                <footer className="footer-landingpage">
                    ©Copyright 2019.All Rights are Reserved
                </footer>
            </div>
        )
    }
}

export default Landing;