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
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (123) 456-7890
                                        Bryan Cranston
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (102) 738-6745
                                        Amanda Peiling
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (102) 738-6745
                                        Amanda Peiling
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