import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Orkun Ozgiray</h2>
                        <img 
                            src="https://image.flaticon.com/icons/svg/877/877927.svg" 
                            alt="avatar" 
                            style={{height: '250px'}} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>asdahsd nkj sdsdks rrrklld jddkdl dkddkdkkd
                        aas dffggf assas fgg ddkld skdsl sdknsd uueueuekll</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div classNmae="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +1(705) 970 15-99
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        orkunozgiray@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        <a href="https://join.skype.com/invite/zI9Gc1gceOUh" target="_blank">jakdanyel100</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;