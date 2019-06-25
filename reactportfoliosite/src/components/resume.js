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
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>sajkdh aksdlakd asdlahsklav ashald asjdlhaj;sd asldjhald adsljansda
                        asdhbkajd jadnlands sdlandl asldnalsd asldjnasd asldjnasld asldnalsdada.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>242 Penetanguishene Road, Barrie ON L4M7C2</p>
                        <h5>Phone</h5>
                        <p>+1(705) 970 15-99</p>
                        <h5>Email</h5>
                        <p>orkunozgiraygmail.com</p>
                        <h5>Web</h5>
                        <p>www.orkunozgiray.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2004}
                            endYear={2008}
                            schoolName="Uskudar Anatolian High School"
                            country="Turkey"
                            schoolDescription="askda asdkla asjlada alsjdnals asldnalsd asjdnlasd nalsdnasd nalsdnasd jahsdlna
                            asdaksjhd asdjlhalsd askdjas daskjd askdjasld ajshdlasdn"
                        />
                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
                        

                        <Education
                            startYear={2008}
                            endYear={2013}
                            schoolName="Isik University"
                            country="Turkey"
                            schoolDescription="askda asdkla asjlada alsjdnals asldnalsd asjdnlasd nalsdnasd nalsdnasd jahsdlna
                            asdaksjhd asdjlhalsd askdjas daskjd askdjasld ajshdlasdn"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <Education
                            startYear={2018}
                            endYear={2019}
                            schoolName="Georgian College"
                            country="Canada-Ontario-Barrie"
                            schoolDescription="askda asdkla asjlada alsjdnals asldnalsd asjdnlasd nalsdnasd nalsdnasd jahsdlna
                            asdaksjhd asdjlhalsd askdjas daskjd askdjasld ajshdlasdn"
                        />

                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>

                        <h2>Experience</h2>

                        <Experience
                            startYear={2004}
                            endYear={2008}
                            jobName="Anil Cable Industry"
                            country="Turkey"
                            jobDescription="askda asdkla asjlada alsjdnals asldnalsd asjdnlasd nalsdnasd nalsdnasd jahsdlna
                            asdaksjhd asdjlhalsd askdjas daskjd askdjasld ajshdlasdn"
                        />
                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>

                        <Experience
                            startYear={2004}
                            endYear={2008}
                            jobName="Edit Electronic"
                            country="Turkey"
                            jobDescription="askda asdkla asjlada alsjdnals asldnalsd asjdnlasd nalsdnasd nalsdnasd jahsdlna
                            asdaksjhd asdjlhalsd askdjas daskjd askdjasld ajshdlasdn"
                        />
                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>

                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="Uniball"
                            country="Turkey"
                            jobDescription="askda asdkla asjlada alsjdnals asldnalsd asjdnlasd nalsdnasd nalsdnasd jahsdlna
                            asdaksjhd asdjlhalsd askdjas daskjd askdjasld ajshdlasdn"
                        />
                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>

                        <h2>Skills</h2>

                        <Skills
                            skill="javascript"
                            progress={100}
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
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="javascript"
                            progress={70}
                        />
                        <Skills
                            skill="javascript"
                            progress={100}
                        />


                        



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;