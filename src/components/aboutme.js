import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Grid, Cell } from 'react-mdl';

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

class About extends Component {
    render() {
        return(
            <div className="aboutme-body">
                <Particles
                    params={particleOpt}
                />
                <div className="container">
                    <p className="text1">Who Am I ?</p>
                    <p className="text2">Orkun Ozgiray</p>
                    <Grid className="grid-aboutme">
                        <Cell  className="aboutme-left-col" col={6}>
                            <div style={{textAlign: 'center', color: 'white'}}>
                                <h2>Background</h2>
                                <p style={{textAlign: 'justify', color: 'white', textShadow: '1px 1px 1px red, 0 0 1em rgb(152, 152, 224), 0 0 0.2em rgb(227, 243, 170)'}}>Born and raised in Turkey, Istanbul. I studied at Isik University Electrical/Electronical Enginnering Faculty. 
                                After graduation from university, I have decided to change my profession. During my researches about universities
                                and colleges, I thought that the best option would be moving to Canada to enroll "Georgian College" as a
                                "Computer Programmer" student. After first 2 semesters,I went to Turkey for my first Co-op and was hired to 
                                "Uniball Turkey" as an IT intern.

                                </p>
                            </div>
                        </Cell>
                        <Cell className="aboutme-right-col" col={6}>
                            <div style={{textAlign: 'center', color: 'white'}}>
                                <h2>Qualifications</h2>
                                <ul style={{textAlign: 'left', color: 'white'}}>
                                    <li>Problem solver and trouble-shooter with a desire to learn</li>
                                    <li>Team player and capable of working well within different team dynamics.</li>
                                    <li>Emphatatic</li>
                                    <li>Good interpersonal skills with effective communication both oral and written.</li> 
                                    <li>Actively seeks out additional work after completing assigned tasks.</li> 
                                    <li>Knowledge of languages: Turkish, English, German</li> 
                                    <li>Quick learner</li> 
                                </ul>

                            </div>    
                        </Cell>
                    </Grid>
                </div>
                <footer className="footer-aboutme">
                    ©Copyright 2019.All Rights are Reserved
                </footer>                  
            </div>
        )
    }
}

export default About;