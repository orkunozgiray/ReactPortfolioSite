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
                </div> 
                <Grid>
                    <Cell  className="aboutme-left-col" col={6}>
                        <div style={{textAlign: 'center'}}>
                            <h2>Background</h2>
                            <p>After I graduate from Isik University(Istanbul) as an "Electronical Engineer", I've decided to be a programmer
                            as well. During my researches about universities and colleges, I thought that my best option would be moving to Canada
                            to enroll "Georgian College" as a "Computer Programming" student. I achieved the "Dean List" in the 1st semester.
                            I went to Turkey for my 1st Co-op and was hired to "Uniball Turkey" as an IT intern.
                            </p>
                        </div>
                    </Cell>
                    <Cell className="aboutme-right-col" col={6}>
                        <div style={{textAlign: 'center'}}>
                            <h2>What do I do in my "Free Times"?</h2>
                            <p>I love cars, watching movie, socializing, </p>
                        </div>    
                    </Cell>
                </Grid>        
            </div>
        )
    }
}

export default About;