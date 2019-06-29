import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell  className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="https://avatars0.githubusercontent.com/u/36546670?s=460&v=4"
                            alt="avatar"
                            style={{height: '400px', width: '400px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Orkun Ozgiray</h2>
                        <h4 style={{color: 'grey'}}>WEB & Software Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '75%'}}/>
                        <h5>Address</h5>
                        <p>242 Penetanguishene Road, Barrie ON L4M7C2</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '80%'}}/>
                        <h5>Phone</h5>
                        <p>+1(705) 970 15-99</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '35%'}}/>
                        <h5>Email</h5>
                        <p>orkunozgiray@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '45%'}}/>
                        <h5>Web</h5>
                        <p>www.orkunozgiray.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '40%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <div className="button-hovered">
                            <button class="btn btn1"><i class="fa fa-download"></i>
                                <a href="https://1drv.ms/b/s!AushuXjHwu-lw3xJlnN3GXQLQVFD" target="_blank">Download Resume</a>
                            </button>
                        </div>

                        <Education
                            startYear={2004}
                            endYear={2008}
                            schoolName="Uskudar Anatolian High School"
                            country="Turkey"
                            schoolDescription="4 Year High School Science Degree"
                        />
                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
                        

                        <Education
                            startYear={2008}
                            endYear={2013}
                            schoolName="Isik University"
                            country="Turkey"
                            schoolDescription="Key Courses: Object Oriented Programming Using Java, HTML, Circuit
                            Theory, MATLAB, Logic Design, Simulation Tools, Electronics,
                            Electromagnetic Field and Waves, Signals and Systems,
                            Communication Systems, Dynamics and Controls, Digital
                            Control Engineering, Electromechanical Energy Conversation"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <Education
                            startYear={2018}
                            endYear={2019}
                            schoolName="Georgian College"
                            country="Canada-Ontario-Barrie"
                            schoolDescription="Key Courses:
                            Advanced Object Oriented Programming Using Java, HTML,
                            CSS and JavaScript, Web Programming by using PHP,
                            Relational Database using MySQL, Networking Essential,
                            Client-Side Java Script, .NETProgramming using C#, Mobile
                            Development using Swift, Advanced Database"
                        />

                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>

                        <h2>Experience</h2>

                        <Experience
                            startYear={2011}
                            endYear={2012}
                            jobName="Anil Cable Industry"
                            country="Turkey"
                            jobDescription="Engineer Cadet Key Responsibilities: Observing production process of the
                            several cables for electronic devices and testing them."
                        />
                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>

                        <Experience
                            startYear={2015}
                            endYear={2017}
                            jobName="Edit Electronic"
                            country="Turkey"
                            jobDescription="Supervising the Research&Development section and testing
                            Voltage Stabilizer, Regulators, Transformators, Reactors and Accumulator Charging
                            Unit."
                        />
                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>

                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="Uniball"
                            country="Turkey"
                            jobDescription="Took part of creating a staff reporting application based on C#.
                            Created databases and learned how to access data, how to connect and use them in
                            applications. Took part of a creating an automated task sending program based on C#.
                            Created a website by using ASP.Net and HTML&Css&JavaScript skills."
                        />
                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>

                        <h2>Skills</h2>

                        <Skills
                            skill="JavaScript"
                            progress={80}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={40}
                        />
                        <Skills
                            skill="Java"
                            progress={70}
                        />
                        <Skills
                            skill="React"
                            progress={50}
                        />
                        <Skills
                            skill="PHP"
                            progress={50}
                        />
                        <Skills
                            skill="Swift"
                            progress={50}
                        />
                        <Skills
                            skill="C#"
                            progress={70}
                        />
                        <Skills
                            skill="Unity"
                            progress={70}
                        />
                        <Skills
                            skill="SQL"
                            progress={70}
                        />                  
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;