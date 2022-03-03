import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light',
      progress: 0,
      pageSize: 6
    }
  }

  setProgress = (progress) =>{
    this.setState({progress : progress})
  }

  handleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
    } else {
      this.setState({ mode: 'light' })
    }
  }

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={2}
            loaderSpeed ={300}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar mode={this.state.mode} handleMode={this.handleMode} />
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} key="general" country="in" pageSize={this.state.pageSize} category="general" mode={this.state.mode} />} />
            <Route exact path="/business" element={<News setProgress = {this.setProgress} key="business" country="in" pageSize={this.state.pageSize} category="business" mode={this.state.mode} />} />
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} key="technology" country="in" pageSize={this.state.pageSize} category="technology" mode={this.state.mode} />} />
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} key="entertainment" country="in" pageSize={this.state.pageSize} category="entertainment" mode={this.state.mode} />} />
            <Route exact path="/science" element={<News setProgress = {this.setProgress} key="science" country="in" pageSize={this.state.pageSize} category="science" mode={this.state.mode} />} />
            <Route exact path="/health" element={<News setProgress = {this.setProgress} key="health" country="in" pageSize={this.state.pageSize} category="health" mode={this.state.mode} />} />
          </Routes>
        </Router>
      
      </>
    )
  }
}
