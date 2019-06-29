import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Lobster, monospace', fontSize: '40px', fontWeight: 'bold'}} 
        to="/">Orkun Ozgiray</Link>} scroll>
            <Navigation style={{fontFamily: 'Lobster, monospace'}}>
                <Link style={{textDecoration: 'none', color: 'white', fontSize: '18px'}} to="/resume">Resume</Link>
                <Link style={{textDecoration: 'none', color: 'white', fontSize: '18px'}} to="/aboutme">About Me</Link>
                <Link style={{textDecoration: 'none', color: 'white', fontSize: '18px'}} to="/projects">Projects</Link>
                <Link style={{textDecoration: 'none', color: 'white', fontSize: '18px'}} to="/contactme">Contact Me</Link>
                <Link style={{textDecoration: 'none', color: 'white', fontSize: '18px'}} to="/aboutme2">About Me2</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer-style" title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Lobster, monospace', fontSize: '40px', fontWeight: 'bolder'}} to="/">Orkun Ozgiray</Link>}>
            <Navigation style={{fontFamily: 'Lobster, monospace'}}>
                <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px'}} to="/resume">$ Resume</Link>
                <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px'}} to="/aboutme">$ About Me</Link>
                <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px'}} to="/projects">$ Projects</Link>
                <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px'}} to="/contactme">$ Contact Me</Link>
                <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px'}} to="/aboutme2">$ About Me2</Link>
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
