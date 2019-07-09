import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
          super(props);
  
          this.state = {};
  
          this.handleScroll = this.handleScroll.bind(this);
    }
  
    handleScroll() {
        this.setState({scroll: window.scrollY});
    }
    
    componentDidMount() {
          const el = document.querySelector('nav');
          this.setState({top: el.offsetTop, height: el.offsetHeight});
          window.addEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
          this.state.scroll > this.state.top ? 
              document.body.style.paddingTop = `${this.state.height}px` :
              document.body.style.paddingTop = 0;
    }
    
    render() {
      return (
        <div className="demo-big-content">
            <Layout>
                <Header className={this.state.scroll > this.state.top ? "fixed-nav" : ""} title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Lobster, monospace', fontSize: '30px', fontWeight: 'bold', paddingRight: '132.1px'}} to="/">Orkun Ozgiray</Link>}>
                    <Navigation style={{fontFamily: 'Lobster, monospace'}} >
                        <Link style={{textDecoration: 'none', color: 'white', fontSize: '18px', textShadow: "2px 2px 4px #000000"}} to="/resume">Resume</Link>
                        <Link style={{textDecoration: 'none', color: 'white', fontSize: '18px', textShadow: "2px 2px 4px #000000"}} to="/aboutme">About Me</Link>
                        <Link style={{textDecoration: 'none', color: 'white', fontSize: '18px', textShadow: "2px 2px 4px #000000"}} to="/projects">Projects</Link>
                        <Link style={{textDecoration: 'none', color: 'white', fontSize: '18px', textShadow: "2px 2px 4px #000000"}} to="/contactme">Contact Me</Link>
                    </Navigation>
                </Header>
                <Drawer className="drawer-style" title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Lobster, monospace', fontSize: '40px', fontWeight: 'bolder'}} to="/">Orkun Ozgiray</Link>}>
                    <Navigation style={{fontFamily: 'Lobster, monospace'}}>
                        <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px'}} to="/resume">$ Resume</Link>
                        <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px'}} to="/aboutme">$ About Me</Link>
                        <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px'}} to="/projects">$ Projects</Link>
                        <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px'}} to="/contactme">$ Contact Me</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
      );
    }
  }
  
  export default App;