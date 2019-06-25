import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 250,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toogleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://cdn-images-1.medium.com/max/1200/1*jDIj2SKAE-Bp32owLoHDjw.png) center / cover'}} >React Project #1</CardTitle>
                        <CardText>
                            Lorem IpmsSLHDFKAJKD HDJa shdsjbak hsvahs bjsdsdn aksaksj asgasavs kgfeunvldhs vhdvdsnsk
                        </CardText>
                        <CardActions border>
                            <Button colored>Github1</Button>
                            <Button colored>Github2</Button>
                            <Button colored>Github3</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://cdn-images-1.medium.com/max/1200/1*jDIj2SKAE-Bp32owLoHDjw.png) center / cover'}} >React Project #1</CardTitle>
                        <CardText>
                            Lorem IpmsSLHDFKAJKD HDJa shdsjbak hsvahs bjsdsdn aksaksj asgasavs kgfeunvldhs vhdvdsnsk
                        </CardText>
                        <CardActions border>
                            <Button colored>Github1</Button>
                            <Button colored>Github2</Button>
                            <Button colored>Github3</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://cdn-images-1.medium.com/max/1200/1*jDIj2SKAE-Bp32owLoHDjw.png) center / cover'}} >React Project #1</CardTitle>
                        <CardText>
                            Lorem IpmsSLHDFKAJKD HDJa shdsjbak hsvahs bjsdsdn aksaksj asgasavs kgfeunvldhs vhdvdsnsk
                        </CardText>
                        <CardActions border>
                            <Button colored>Github1</Button>
                            <Button colored>Github2</Button>
                            <Button colored>Github3</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                </div>    


            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="java-tab">
                    <Particles
                        params={particleOpt}
                    /> 
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>This is C#</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><h1>This is Swift</h1></div>
            )
        } else if(this.state.activeTab === 4) {
            return (
                <div><h1>This is ASP.Net</h1></div>
            )
        } else if(this.state.activeTab === 5) {
            return (
                <div><h1>This is Android</h1></div>
            )
        } else if(this.state.activeTab === 6) {
            return (
                <div><h1>This is Unity</h1></div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>C#</Tab>
                    <Tab>Swift</Tab>
                    <Tab>ASP.Net</Tab>
                    <Tab>Android</Tab>
                    <Tab>Unity3D</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toogleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;