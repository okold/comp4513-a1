import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayBrowser from './components/PlayBrowser.js';
import Home from './components/Home.js';

import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {plays: [], loading: true, favs: []};

    this.isLoading=this.isLoading.bind(this);
    this.addToFavs=this.addToFavs.bind(this);
    this.getPlayList=this.getPlayList.bind(this);
    this.getFavList=this.getFavList.bind(this);
  }

  addToFavs(play) {
    let new_favs = [...this.state.favs];
    console.log(new_favs);
    //TODO: duplicate checking
    new_favs.push(play); 
    this.setState({favs: new_favs});
    return null
  }

  getFavList() {
    return this.state.favs;
  }

  getPlayList() {
    return this.state.plays;
  }

  isLoading() {
    if (this.state.loading) { // do this for safety?
      return true;
    }
    return false;
  }

  async componentDidMount() {
    try {
      let data = localStorage.getItem("shakespeare_data");
      if (data) {
        data = JSON.parse(data);
      }
      else {
        const response = await fetch("https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php");
        data = await response.json();
        data.sort((a, b) => b.title - a.title);
        localStorage.setItem("shakespeare_data", JSON.stringify(data));
      }
      this.setState({plays: data});
      this.setState({loading: false});
      console.log(data);
    }
    catch {
      console.error("Oh God");
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/comp4513-a1" element={<Home isLoading={this.isLoading}/>}/>
          <Route path="/comp4513-a1/browse" element={<PlayBrowser addToFavs={this.addToFavs} getPlayList={this.getPlayList}/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
