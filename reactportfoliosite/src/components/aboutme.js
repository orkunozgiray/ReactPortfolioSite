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
                <div className="container">
                    <p className="text1">Who Am I ?</p>
                    <p className="text2">Orkun Ozgiray</p>
                </div>     
            </div>
        )
    }
}

export default About;