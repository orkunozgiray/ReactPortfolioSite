import React, { Component } from 'react';
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

class About extends Component {
    render() {
        return(
            <div className="aboutme-body">
                <Particles
                    params={particleOpt}
                />    
            </div>
        )
    }
}

export default About;