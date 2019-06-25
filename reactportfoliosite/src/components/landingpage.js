import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

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
                                <a href="https://www.linkedin.com/in/orkunozgiray" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                                {/* Github */}  
                                <a href="https://github.com/orkunozgiray" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>

                                {/* Youtube */}
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
            </div>
        )
    }
}

export default Landing;