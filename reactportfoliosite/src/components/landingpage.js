import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://image.flaticon.com/icons/svg/877/877927.svg" 
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p>HTML/CSS | Bootsrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                            <div className="social-links">
                            
                                {/* Linkedin */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>

                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square"  aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp"  aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;