import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
                        'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}}></CardTitle>
                        <CardText  style={{textAlign: 'center'}}>
                            My personal web page which I created by using "ReactJS".
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/ReactPortfolioSite" style={{fontWeight: 'bold', color: 'black', textDecoration: 'none', padding: '0 55px'}} target="_blank">ReactPortfolioSite</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>         
                </div>    


            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="arduino-tab">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://claudiozito.com/wp-content/uploads/2014/08/arduino400.jpg) center / cover'}} ></CardTitle>
                        <CardText>
                            Arduino Obstacle Avoiding Car which I created for the 1st Semester Project.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/ObstacleAvoidingCar" style={{fontWeight: 'bold', color: 'black', textDecoration: 'none', padding: '0 47px'}} target="_blank">Obstacle Avoiding Car</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div className="c-tab">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/poster,840x830,f8f8f8-pad,750x1000,f8f8f8.jpg) center / cover'}} ></CardTitle>
                        <CardText>
                            C# Calculator.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/CSharp-Calculator" style={{fontWeight: 'bold', color: 'black', textDecoration: 'none', padding: '0 75px'}} target="_blank">C# Calculator</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div className="swift-tab">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://developer.apple.com/swift/images/swift-og.png) center / cover'}} ></CardTitle>
                        <CardText>
                            TicTacToe Game I created by using "XCode" based on Swift Programming.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/TicTacToe" style={{fontWeight: 'bold', color: 'black', textDecoration: 'none', padding: '0 80px'}} target="_blank">TicTacToe App</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 4) {
            return (
                <div className="asp-tab">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://cdn4.iconfinder.com/data/icons/logos-3/504/ASP.Net-512.png) center / cover'}} ></CardTitle>
                        <CardText>
                            ASP.Net 3rd Semester Project.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/SoccerBench" style={{fontWeight: 'bold', color: 'black', textDecoration: 'none', padding: '0 80px'}} target="_blank">SoccerBench</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 5) {
            return (
                <div className="android-tab">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'green', height: '150px', background:
                        'url(https://dunked.cdn.speedyrails.net/assets/prod/22884/p17s2tfgc31jte13d51pea1l2oblr3.png) center / cover'}} ></CardTitle>
                        <CardText>
                            Android "Calculator" was a school project based on Java.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/AndroidCalculator" style={{fontWeight: 'bold', color: 'black', textDecoration: 'none', padding: '0 55px'}} target="_blank">Android Calculator</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 6) {
            return (
                <div className="unity-tab">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://unity3d.com/files/images/ogimg.jpg?1) center / cover'}} >React Project #1</CardTitle>
                        <CardText>
                            3D Ball Game which I created with Unity3D based on C# Script.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/3DBallGame" style={{fontWeight: 'bold', color: 'black', textDecoration: 'none', padding: '0 75px'}} target="_blank">3D Ball Game</a>
                            </Button>

                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } 
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{textShadow: '2px 2px 2px #747880'}}>React</Tab>
                    <Tab style={{textShadow: '2px 2px 2px #747880'}}>Arduino</Tab>
                    <Tab style={{textShadow: '2px 2px 2px #747880'}}>C#</Tab>
                    <Tab style={{textShadow: '2px 2px 2px #747880'}}>Swift</Tab>
                    <Tab style={{textShadow: '2px 2px 2px #747880'}}>ASP.Net</Tab>
                    <Tab style={{textShadow: '2px 2px 2px #747880'}}>Android</Tab>
                    <Tab style={{textShadow: '2px 2px 2px #747880'}}>Unity3D</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toogleCategories()}</div>
                    </Cell>
                </Grid>
                <footer className="footer-projects">
                    ©Copyright 2019.All Rights are Reserved
                </footer>
            </div>
        )
    }
}

export default Projects;