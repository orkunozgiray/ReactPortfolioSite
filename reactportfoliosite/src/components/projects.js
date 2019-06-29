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
                        'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}} ></CardTitle>
                        <CardText>
                            Lorem IpmsSLHDFKAJKD HDJa shdsjbak hsvahs bjsdsdn aksaksj asgasavs kgfeunvldhs vhdvdsnsk
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/ReactPortfolioSite" target="_blank">ReactPortfolioSite</a>
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
                <div className="java-tab">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png) center / cover'}} ></CardTitle>
                        <CardText>
                            Lorem IpmsSLHDFKAJKD HDJa shdsjbak hsvahs bjsdsdn aksaksj asgasavs kgfeunvldhs vhdvdsnsk
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/ReactPortfolioSite" target="_blank">ReactPortfolioSite</a>
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
                            Lorem IpmsSLHDFKAJKD HDJa shdsjbak hsvahs bjsdsdn aksaksj asgasavs kgfeunvldhs vhdvdsnsk
                        </CardText>
                        <CardActions border>
                            <Button colored>Github1</Button>
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
                            Lorem IpmsSLHDFKAJKD HDJa shdsjbak hsvahs bjsdsdn aksaksj asgasavs kgfeunvldhs vhdvdsnsk
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/AndroidCalculator" target="_blank">TicTacToe App</a>
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
                            Lorem IpmsSLHDFKAJKD HDJa shdsjbak hsvahs bjsdsdn aksaksj asgasavs kgfeunvldhs vhdvdsnsk
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/AndroidCalculator" target="_blank">TicTacToe App</a>
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
                                <a href="https://github.com/orkunozgiray/AndroidCalculator" target="_blank">Android Calculator</a>
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
                            Lorem IpmsSLHDFKAJKD HDJa shdsjbak hsvahs bjsdsdn aksaksj asgasavs kgfeunvldhs vhdvdsnsk
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/3DBallGame" target="_blank">3D Ball Game</a>
                            </Button>

                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 7) {
            return (
                <div className="arduino-tab">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://claudiozito.com/wp-content/uploads/2014/08/arduino400.jpg) center / cover'}} ></CardTitle>
                        <CardText>
                            Lorem IpmsSLHDFKAJKD HDJa shdsjbak hsvahs bjsdsdn aksaksj asgasavs kgfeunvldhs vhdvdsnsk
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/orkunozgiray/ObstacleAvoidingCar" target="_blank">Obstacle Avoiding Car</a>
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
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>C#</Tab>
                    <Tab>Swift</Tab>
                    <Tab>ASP.Net</Tab>
                    <Tab>Android</Tab>
                    <Tab>Unity3D</Tab>
                    <Tab>Arduino</Tab>
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