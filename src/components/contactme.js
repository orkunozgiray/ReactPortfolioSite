import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2 style={{fontSize: '45px', fontFamily: 'Anton', color: '#b0b9c2', textShadow: '2px 5px 3px #000000'}}>Orkun Ozgiray</h2>
                        <img 
                            className="contact-image" 
                            src="https://media.licdn.com/dms/image/C5603AQFs_jRdNgmSIQ/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=eN0rp4yTvFGJUBi5j788tFeluSn7yYVhOFa5YdneCVo" 
                            alt="avatar" 
                            style={{height: '250px', width: '50%', height: '50%', backgroundSize: 'cover'}} />
                        <p style={{fontSize: '28px', width: '75%', margin: 'auto', paddingTop: '1em', color: '#b0b9c2', fontWeight: 'bolder', textShadow: '2px 5px 3px #000000'}}>WEB & SOFTWARE DEVELOPER</p>
                    </Cell>

                    <Cell col={6}>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: '#b0b9c2', textShadow: '2px 2px 4px #000000'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +1(705) 970 15-99
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: '#b0b9c2', textShadow: '2px 2px 4px #000000'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        orkunozgiray@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', textDecoration: 'none', color: '#b0b9c2'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        <a href="https://join.skype.com/invite/zI9Gc1gceOUh" style={{color: '#b0b9c2', textDecoration: 'none', textShadow: '2px 2px 4px #000000'}} target="_blank"> jakdanyel100</a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: '#b0b9c2'}}>
                                        <i className="fa fa-instagram" aria-hidden="true"/>
                                        <a href="https://www.instagram.com/orkunozgiray/?hl=en" style={{color: '#b0b9c2', textDecoration: 'none', textShadow: '2px 2px 4px #000000'}} target="_blank">orkunozgiray</a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: '#b0b9c2'}}>
                                        <i className="fa fa-facebook" aria-hidden="true"/>
                                        <a href="https://www.facebook.com/orkun.ozgiray" style={{color: '#b0b9c2', textDecoration: 'none', textShadow: '2px 2px 4px #000000'}} target="_blank"> orkunozgiray</a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: '#b0b9c2'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a href="https://www.linkedin.com/in/orkunozgiray" style={{color: '#b0b9c2', textDecoration: 'none', textShadow: '2px 2px 4px #000000'}} target="_blank">orkunozgiray</a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: '#b0b9c2'}}>
                                        <i className="fa fa-github-square" aria-hidden="true"/>
                                        <a href="https://github.com/orkunozgiray" style={{color: '#b0b9c2', textDecoration: 'none', textShadow: '2px 2px 4px #000000'}} target="_blank">orkunozgiray</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
                <footer className="footer-contactme">
                    ©Copyright 2019.All Rights are Reserved
                </footer>
            </div>
        )
    }
}

export default Contact;